"use client";

import { useEffect, useState } from "react";
import { clinicExtras } from "@/lib/clinic-extras";
import type { Locale } from "@/lib/i18n";

/**
 * Voice Concierge.
 *
 * Desktop: discreet floating pill bottom-right that opens an inline panel.
 * Mobile: floating pill HIDDEN (MobileBookBar handles trigger via custom event);
 *         opens as a full-width bottom-sheet.
 *
 * Listens for `concierge:open` custom event so MobileBookBar can trigger it.
 */
export default function VoiceConcierge({ locale = "en" }: { locale?: Locale }) {
  const cfg = clinicExtras.voiceConcierge;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ from: "user" | "bot"; text: string }>>([]);
  const [thinking, setThinking] = useState(false);

  // Listen for trigger from MobileBookBar
  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    window.addEventListener("concierge:open", onOpen);
    return () => window.removeEventListener("concierge:open", onOpen);
  }, []);

  // Lock body scroll when bottom-sheet open on mobile
  useEffect(() => {
    if (open && typeof document !== "undefined") {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (isMobile) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }
  }, [open]);

  if (!cfg.enabled) return null;

  async function ask(text: string) {
    if (!text.trim()) return;
    setHistory((h) => [...h, { from: "user", text }]);
    setInput("");
    setThinking(true);
    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, locale }),
      });
      if (res.ok) {
        const data: { reply?: string } = await res.json();
        setHistory((h) => [...h, { from: "bot", text: data.reply || cfg.disclosure[locale] }]);
      } else {
        setHistory((h) => [...h, { from: "bot", text: cfg.disclosure[locale] }]);
      }
    } catch {
      setHistory((h) => [...h, { from: "bot", text: cfg.disclosure[locale] }]);
    } finally {
      setThinking(false);
    }
  }

  return (
    <>
      {/* Floating trigger pill — hidden on mobile via .concierge-pill rule */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={cfg.triggerLabel[locale]}
        aria-expanded={open}
        className="concierge-pill"
        style={{
          position: "fixed",
          bottom: 24,
          right: locale === "ar" ? "auto" : 24,
          left: locale === "ar" ? 24 : "auto",
          zIndex: 60,
          background: "linear-gradient(180deg, #14283a 0%, #0a1f2e 100%)",
          color: "#ffffff",
          border: "1px solid rgba(178,147,98,0.4)",
          borderRadius: 999,
          padding: "12px 22px",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: "0.04em",
          boxShadow: "0 12px 32px rgba(10,31,46,0.25)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          transition: "transform 220ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <span aria-hidden style={{ color: "#b29362", fontSize: 14 }}>
          ✦
        </span>
        {cfg.triggerLabel[locale]}
      </button>

      {/* Backdrop on mobile only */}
      {open && (
        <div
          className="concierge-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(10, 31, 46, 0.45)",
            zIndex: 59,
            display: "none", // mobile-only via globals.css
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Panel — desktop: floating right; mobile: bottom-sheet */}
      {open && (
        <div
          role="dialog"
          aria-label={cfg.triggerLabel[locale]}
          className="concierge-panel"
          dir={locale === "ar" ? "rtl" : "ltr"}
          style={{
            position: "fixed",
            zIndex: 60,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            // Desktop default position
            bottom: 90,
            right: locale === "ar" ? "auto" : 24,
            left: locale === "ar" ? 24 : "auto",
            width: 380,
            maxWidth: "calc(100vw - 48px)",
            maxHeight: "70vh",
            border: "1px solid #ece5d4",
            borderRadius: 12,
            boxShadow: "0 24px 64px rgba(10,31,46,0.18)",
          }}
        >
          {/* Drag handle (mobile bottom-sheet affordance) */}
          <div
            className="concierge-handle"
            aria-hidden
            style={{
              display: "none", // mobile-only via globals.css
              padding: "10px 0 4px",
              flex: "0 0 auto",
            }}
          >
            <div
              style={{
                width: 40,
                height: 4,
                background: "rgba(178,147,98,0.5)",
                borderRadius: 999,
                margin: "0 auto",
              }}
            />
          </div>

          <header
            style={{
              padding: "16px 20px",
              borderBottom: "1px dotted rgba(178,147,98,0.35)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="overline" style={{ color: "#8f7548", fontSize: 10 }}>
              ✦ {cfg.triggerLabel[locale]}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              type="button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#7f8487",
                fontSize: 22,
                lineHeight: 1,
                width: 32,
                height: 32,
              }}
            >
              ×
            </button>
          </header>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {history.length === 0 && (
              <>
                <p
                  className="font-prose italic"
                  style={{ fontSize: 16, color: "#2a3f4f", lineHeight: 1.5 }}
                >
                  {cfg.greeting[locale]}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {cfg.suggestedPrompts.map((p, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => ask(p[locale])}
                      style={{
                        background: "rgba(178,147,98,0.08)",
                        border: "1px solid rgba(178,147,98,0.25)",
                        borderRadius: 8,
                        padding: "12px 14px",
                        fontSize: 14,
                        color: "#0a1f2e",
                        textAlign: locale === "ar" ? "right" : "left",
                        cursor: "pointer",
                        transition: "background 150ms",
                      }}
                    >
                      {p[locale]}
                    </button>
                  ))}
                </div>
              </>
            )}
            {history.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf:
                    m.from === "user"
                      ? locale === "ar"
                        ? "flex-start"
                        : "flex-end"
                      : locale === "ar"
                      ? "flex-end"
                      : "flex-start",
                  background: m.from === "user" ? "#0a1f2e" : "rgba(236,229,212,0.4)",
                  color: m.from === "user" ? "#ffffff" : "#0a1f2e",
                  padding: "10px 14px",
                  borderRadius: 12,
                  fontSize: 14,
                  maxWidth: "85%",
                  lineHeight: 1.5,
                }}
              >
                {m.text}
              </div>
            ))}
            {thinking && (
              <div
                style={{
                  alignSelf: "flex-start",
                  color: "#7f8487",
                  fontSize: 13,
                  fontStyle: "italic",
                }}
              >
                {locale === "ar" ? "تكتب…" : "Thinking…"}
              </div>
            )}
          </div>

          <footer style={{ padding: 14, borderTop: "1px dotted rgba(178,147,98,0.35)" }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              style={{ display: "flex", gap: 8 }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={locale === "ar" ? "اكتبي سؤالاً…" : "Type a question…"}
                className="input"
                style={{ flex: 1, padding: "12px 14px", fontSize: 14 }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ padding: "12px 18px", fontSize: 11 }}
              >
                {locale === "ar" ? "إرسال" : "Send"}
              </button>
            </form>
            <p
              style={{
                fontSize: 11,
                color: "#7f8487",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              {cfg.disclosure[locale]}
            </p>
          </footer>
        </div>
      )}
    </>
  );
}
