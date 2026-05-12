"use client";

import { useState } from "react";
import { clinicExtras } from "@/lib/clinic-extras";

/**
 * Client-only daily check-in widget.
 * In production: POST to /api/aftercare/checkin with { token, value, note }.
 * Here: local state only (template ships runnable without a backend).
 */
export default function AftercareCheckIn({ token }: { token: string }) {
  const cfg = clinicExtras.aftercare.checkIn;
  const [selected, setSelected] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  async function submit() {
    if (selected == null) return;
    try {
      await fetch("/api/aftercare/checkin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, value: selected, note }),
      });
    } catch {
      // ignore — template tolerates missing endpoint
    }
    setSent(true);
  }

  if (sent) {
    return (
      <article className="card" style={{ padding: 28, textAlign: "center" }}>
        <p className="font-prose italic" style={{ fontSize: 20, color: "#2a3f4f", lineHeight: 1.4 }}>
          Got it. Your clinician will see this on the morning round.
        </p>
      </article>
    );
  }

  return (
    <article className="card" style={{ padding: 28 }}>
      <div className="overline" style={{ color: "#b29362", marginBottom: 12 }}>
        ✦ Daily check-in
      </div>
      <h3 className="font-serif" style={{ fontSize: 22, color: "#0a1f2e", marginBottom: 18 }}>
        {cfg.prompt.en}
      </h3>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {cfg.options.map((o) => (
          <button
            key={o.value}
            onClick={() => setSelected(o.value)}
            style={{
              padding: "12px 18px",
              borderRadius: 999,
              border: selected === o.value ? "1px solid #b29362" : "1px solid #ece5d4",
              background: selected === o.value ? "rgba(178,147,98,0.15)" : "#ffffff",
              cursor: "pointer",
              fontSize: 14,
              color: "#0a1f2e",
              fontFamily: "var(--font-source-serif), serif",
              transition: "all 150ms",
            }}
          >
            {o.label.en}
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Anything to add? (optional)"
        rows={3}
        className="input"
        style={{ resize: "vertical" }}
      />
      <button
        onClick={submit}
        disabled={selected == null}
        className="btn-primary"
        style={{ marginTop: 18, opacity: selected == null ? 0.4 : 1 }}
      >
        Send today&apos;s check-in
      </button>
    </article>
  );
}
