"use client";

import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.contact.name} *
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.contact.email} *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          />
        </div>
      </div>

      {/* Phone & Subject */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.contact.phone}
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.contact.subject} *
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
        >
          {t.contact.message} *
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-terracotta-400 hover:bg-terracotta-500 disabled:bg-terracotta-300 text-white font-medium py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
      >
        {status === "loading" ? "..." : t.contact.send}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm">
          {t.contact.success}
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
          {t.contact.error}
        </div>
      )}
    </form>
  );
}
