"use client";

import { useState } from "react";
import { clinicConfig } from "@/lib/clinic-config";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const f = clinicConfig.faq;
  return (
    <section className="section">
      <div
        className="container-page grid gap-10 items-start mobile-stack"
        style={{ gridTemplateColumns: "0.9fr 1.3fr" }}
      >
        <div>
          <div className="overline" style={{ color: "#b29362" }}>
            {f.eyebrow.en}
          </div>
          <h2 className="h-xl" style={{ marginTop: 16 }}>
            {f.headlinePartA.en}
            <br />
            <em style={{ fontStyle: "italic", color: "#b29362" }}>
              {f.headlineEm.en}
            </em>
          </h2>
          <p
            className="font-prose"
            style={{ fontSize: 18, color: "#7f8487", marginTop: 16 }}
          >
            {f.description.en}
          </p>
          <a
            href={clinicConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ marginTop: 20, display: "inline-flex" }}
          >
            {f.cta.en}
          </a>
        </div>
        <div className="flex flex-col">
          {f.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  background: isOpen ? "#0a1f2e" : "#ffffff",
                  color: isOpen ? "#ffffff" : "#0a1f2e",
                  borderRadius: 12,
                  marginBottom: 8,
                  boxShadow: isOpen ? "none" : "0 0 0 1px #ece5d4",
                  transition: "background 250ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between font-serif text-left"
                  style={{
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    color: "inherit",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  <span>{item.q.en}</span>
                  <span
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 999,
                      background: isOpen ? "#b29362" : "transparent",
                      color: isOpen ? "#ffffff" : "#0a1f2e",
                      fontSize: 18,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="font-prose"
                    style={{
                      padding: "0 24px 22px",
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "rgba(253,251,246,0.9)",
                    }}
                  >
                    {item.a.en}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
