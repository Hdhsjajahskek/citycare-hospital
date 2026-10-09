"use client";

import { useState } from "react";

const DEPARTMENTS = [
  "General Consultation",
  "Cardiology",
  "Orthopaedics",
  "Obstetrics & Gynaecology",
  "Pediatrics",
  "Dermatology",
  "Dental Care",
  "Pathology & Diagnostics",
  "Emergency",
  "Other",
];

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: DEPARTMENTS[0],
    preferred_date: "",
    preferred_time: "Morning (9 AM - 12 PM)",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (form.phone.length !== 10) {
      setLoading(false);
      setError("Please enter a 10-digit phone number");
      return;
    }

    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    const message = `Hi CityCare Hospital, I just booked an appointment.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Department: ${form.service}
Date: ${form.preferred_date || "Not specified"}
Time: ${form.preferred_time}
${form.notes ? `Notes: ${form.notes}` : ""}

Please confirm my appointment.`;

    const whatsappUrl = `https://wa.me/919837012345?text=${encodeURIComponent(
      message
    )}`;

    return (
      <div className="space-y-6">
        <div className="rounded-2xl border border-[#5B6EF5]/30 bg-[#5B6EF5]/5 p-8 text-center md:p-12">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#5B6EF5] to-[#A78BFA] text-3xl text-white">
            ✓
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">
            Appointment booked!
          </h3>
          <p className="mx-auto max-w-md text-[#8892B0]">
            We&apos;ll WhatsApp you within 5 minutes to confirm your slot.
            Please arrive 10 minutes early.
          </p>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] py-4 font-semibold text-white transition hover:bg-[#1DA851]"
        >
          SEND CONFIRMATION ON WHATSAPP →
        </a>

        <p className="text-center text-xs text-[#8892B0]">
          This is a demo. The real version stores bookings and sends automated
          alerts.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
            NAME
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="input-field"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
            PHONE
          </label>
          <input
            type="tel"
            required
            pattern="[0-9]{10}"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="10-digit mobile number"
            className="input-field"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
          EMAIL
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="input-field"
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
          DEPARTMENT
        </label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="input-field"
        >
          {DEPARTMENTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
            PREFERRED DATE
          </label>
          <input
            type="date"
            value={form.preferred_date}
            onChange={(e) =>
              setForm({ ...form, preferred_date: e.target.value })
            }
            className="input-field"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
            PREFERRED TIME
          </label>
          <select
            value={form.preferred_time}
            onChange={(e) =>
              setForm({ ...form, preferred_time: e.target.value })
            }
            className="input-field"
          >
            <option>Morning (9 AM - 12 PM)</option>
            <option>Afternoon (12 PM - 3 PM)</option>
            <option>Evening (4 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs tracking-widest text-[#8892B0]">
          NOTES (OPTIONAL)
        </label>
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Describe your symptoms or concerns"
          className="input-field resize-none"
        />
      </div>

      {error && (
        <p className="font-mono text-sm text-[#ef4444]">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#5B6EF5] to-[#6B7FFF] py-4 font-semibold text-white transition hover:from-[#6B7FFF] hover:to-[#8B9FFF] hover:shadow-[0_0_30px_-5px_#5B6EF5] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        )}
        {loading ? "Booking..." : "BOOK APPOINTMENT →"}
      </button>

      <p className="text-center text-xs text-[#8892B0]">
        We&apos;ll confirm on WhatsApp within 5 minutes.
      </p>
    </form>
  );
}