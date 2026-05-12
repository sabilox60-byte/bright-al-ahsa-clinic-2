"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ChapterMark from "@/components/ChapterMark";
import { clinicConfig } from "@/lib/clinic-config";

export default function BookingPage() {
  const { bookingPage: bp, contact } = clinicConfig;
  const labels = bp.labels;
  const step0 = bp.steps[0];

  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const canNext =
    (step === 0 && service) || (step === 1 && slot) || (step === 2 && name && phone);

  const stepLabel =
    step === 0 ? step0.choose.en :
    step === 1 ? step0.when.en :
    step === 2 ? step0.details.en :
    step0.confirmed.en;

  return (
    <>
      <Nav />
      <main className="page-in">
        <PageHero
          roman={bp.hero.roman}
          eyebrow={bp.hero.eyebrow.en}
          title={bp.hero.title.en}
          titleEm={bp.hero.titleEm.en}
          sub={bp.hero.sub.en}
          variant="terracotta"
        />

        <section className="section" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="container-page grid gap-10 items-start booking-form"
            style={{ gridTemplateColumns: "1.3fr 0.7fr" }}
          >
            {/* Multi-step form */}
            <div className="card" style={{ padding: 40 }}>
              {/* Progress bar */}
              <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
                {[0, 1, 2, 3].map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: 4,
                      borderRadius: 2,
                      background: s <= step ? "#b29362" : "#f0ece1",
                      transition: "background 250ms cubic-bezier(0.4,0,0.2,1)",
                    }}
                  />
                ))}
              </div>

              <div className="overline" style={{ marginBottom: 8 }}>
                {stepLabel}
              </div>

              {/* Step 0 — choose service */}
              {step === 0 && (
                <>
                  <h2 className="h-lg">What brings you in?</h2>
                  <div
                    className="mobile-2col"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 10,
                      marginTop: 24,
                    }}
                  >
                    {bp.services.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setService(s.id)}
                        style={{
                          textAlign: "start",
                          padding: 18,
                          borderRadius: 12,
                          background: service === s.id ? "#0a1f2e" : "#fff",
                          color: service === s.id ? "#ffffff" : "#0a1f2e",
                          border: "none",
                          boxShadow: service === s.id ? "none" : "0 0 0 1px #f0ece1",
                          cursor: "pointer",
                          transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
                          fontFamily: "inherit",
                        }}
                      >
                        <div className="font-prose" style={{ fontSize: 18 }}>
                          {s.name.en}
                        </div>
                        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
                          {s.duration.en}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Step 1 — choose time */}
              {step === 1 && (
                <>
                  <h2 className="h-lg">When would you like to visit?</h2>
                  <div
                    className="mobile-2col"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 10,
                      marginTop: 24,
                    }}
                  >
                    {bp.slots.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSlot(s)}
                        className="font-mono"
                        style={{
                          textAlign: "start",
                          padding: 14,
                          borderRadius: 12,
                          background: slot === s ? "#b29362" : "#fff",
                          color: slot === s ? "#ffffff" : "#0a1f2e",
                          border: "none",
                          boxShadow: slot === s ? "none" : "0 0 0 1px #f0ece1",
                          cursor: "pointer",
                          fontSize: 14,
                          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                          transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Step 2 — details */}
              {step === 2 && (
                <>
                  <h2 className="h-lg">A few details.</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
                    <Field label={labels.name.en} value={name} onChange={setName} placeholder={labels.namePrompt.en} />
                    <Field label={labels.phone.en} value={phone} onChange={setPhone} placeholder="+966 5x xxx xxxx" />
                    <Field label={labels.email.en} value={email} onChange={setEmail} placeholder={labels.emailPrompt.en} type="email" />
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 500, color: "#7f8487", marginBottom: 6, display: "block" }}>
                        {labels.note.en}
                      </label>
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        className="input"
                        placeholder={labels.notePrompt.en}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 3 — confirmed */}
              {step === 3 && (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div className="font-prose" style={{ fontSize: 72, color: "#b29362", lineHeight: 1 }}>
                    ✓
                  </div>
                  <h2 className="h-lg" style={{ marginTop: 16 }}>
                    {bp.confirmed.title.en}
                  </h2>
                  <p
                    className="font-prose"
                    style={{ fontSize: 17, color: "#7f8487", marginTop: 14, maxWidth: 380, marginInline: "auto" }}
                  >
                    We'll see you {slot}. {bp.confirmed.body.en}
                  </p>
                  <button
                    onClick={() => {
                      setStep(0);
                      setService("");
                      setSlot("");
                      setName("");
                      setPhone("");
                      setEmail("");
                      setNote("");
                    }}
                    className="btn-ghost"
                    style={{ marginTop: 24 }}
                  >
                    {labels.bookAnother.en}
                  </button>
                </div>
              )}

              {/* Navigation buttons */}
              {step < 3 && (
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32 }}>
                  <button
                    onClick={() => step > 0 && setStep(step - 1)}
                    className="btn-ghost"
                    disabled={step === 0}
                    style={{ opacity: step === 0 ? 0.3 : 1, cursor: step === 0 ? "not-allowed" : "pointer" }}
                  >
                    {labels.back.en}
                  </button>
                  <button
                    onClick={() => canNext && setStep(step + 1)}
                    disabled={!canNext}
                    className="btn-primary"
                    style={{ opacity: canNext ? 1 : 0.4, cursor: canNext ? "pointer" : "not-allowed" }}
                  >
                    {step === 2 ? labels.confirm.en : labels.continue.en}
                  </button>
                </div>
              )}
            </div>

            {/* Contact sidebar */}
            <aside className="booking-sidebar">
              <ChapterMark roman={bp.contact.chapter} title="Contact" />
              <h3 className="h-md" style={{ marginTop: 18, fontSize: 26 }}>
                {bp.contact.title.en}
              </h3>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 18 }}>
                <ContactItem label="WhatsApp" value={contact.whatsapp} highlight />
                <ContactItem label="Phone" value={contact.phone} />
                <ContactItem label="Email" value={contact.email} />
                <ContactItem label="Address" value={contact.address.en} />
                <ContactItem label="Hours" value={contact.hours.en} />
              </div>
              <div
                style={{
                  marginTop: 32,
                  padding: 20,
                  background: "#f0ece1",
                  borderRadius: 14,
                }}
              >
                <p
                  className="font-prose italic"
                  style={{ fontSize: 15, color: "#0a1f2e", margin: 0, lineHeight: 1.55 }}
                >
                  {bp.contact.quote.en}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "#7f8487",
          marginBottom: 6,
          display: "block",
        }}
      >
        {label}
      </label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}

function ContactItem({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: 14,
        padding: "12px 0",
        borderBottom: "1px dotted #8f7548",
      }}
    >
      <span className="overline">{label}</span>
      <span
        className="font-prose"
        style={{
          fontSize: highlight ? 18 : 15,
          color: highlight ? "#b29362" : "#0a1f2e",
        }}
      >
        {value}
      </span>
    </div>
  );
}
