"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { clinicConfig } from "@/lib/clinic-config";

export default function Nav({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const bg = dark
    ? scrolled ? "rgba(10,31,46,0.95)" : "rgba(10,31,46,0.6)"
    : scrolled ? "rgba(246,245,244,0.95)" : "rgba(246,245,244,0.6)";
  const borderColor = dark ? "#14283a" : "#ece5d4";
  const linkColor = dark ? "#ece5d4" : "#2a3f4f";

  return (
    <>
      <nav
        id="top"
        className="sticky top-0 z-50"
        style={{
          background: bg,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: `1px solid ${scrolled ? borderColor : "transparent"}`,
          transition: "background 250ms cubic-bezier(0.4,0,0.2,1), border-color 250ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div
          className="nav-inner container-wide flex items-center justify-between"
          style={{ padding: "18px 32px" }}
        >
          <Logo dark={dark} size={22} />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5 whitespace-nowrap">
            {clinicConfig.navigation.items.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  style={{
                    fontSize: 14,
                    color: active ? (dark ? "#ffffff" : "#0a1f2e") : linkColor,
                    fontWeight: active ? 500 : 400,
                    padding: "4px 0",
                    position: "relative",
                    textDecoration: "none",
                    transition: "color 150ms cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {item.label.en}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -4,
                        height: 2,
                        background: "#b29362",
                        borderRadius: 2,
                      }}
                    />
                  )}
                </Link>
              );
            })}
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginLeft: 8 }}
            >
              {clinicConfig.navigation.bookCta.en}
            </a>
          </div>

          {/* Mobile: WhatsApp + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "10px 14px", fontSize: 11 }}
            >
              Book
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px 6px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "flex-end",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: menuOpen ? 22 : 22,
                  height: 1.5,
                  background: dark ? "#ffffff" : "#0a1f2e",
                  borderRadius: 2,
                  transition: "transform 200ms, opacity 200ms",
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 16,
                  height: 1.5,
                  background: dark ? "#ffffff" : "#0a1f2e",
                  borderRadius: 2,
                  transition: "opacity 200ms",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: menuOpen ? 22 : 22,
                  height: 1.5,
                  background: dark ? "#ffffff" : "#0a1f2e",
                  borderRadius: 2,
                  transition: "transform 200ms, opacity 200ms",
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay — Divinia-style: centered serif, generous spacing */}
      {menuOpen && (
        <div
          className="mobile-menu mobile-menu-divinia lg:hidden"
          style={{ background: "#fbf9f4" }}
        >
          <nav className="mobile-menu-nav">
            {clinicConfig.navigation.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className="mobile-menu-divinia-link"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: active ? "#b29362" : "#0a1f2e",
                  }}
                >
                  {item.label.en}
                </Link>
              );
            })}
          </nav>
          <div className="mobile-menu-footer">
            <button
              type="button"
              className="mobile-menu-language"
              aria-label="Switch language"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>English</span>
              <span style={{ opacity: 0.5 }}>›</span>
            </button>
            <a
              href={clinicConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu-book"
            >
              {clinicConfig.navigation.bookCta.en}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
