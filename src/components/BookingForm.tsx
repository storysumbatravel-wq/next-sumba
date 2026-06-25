"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const { t } = useLanguage();

  // Gunakan langsung nilai dari URL tanpa menyimpannya ke state terpisah
  const tripName = searchParams.get("tripName") || t.booking.customTrip;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    pax: "2",
    preferredDate: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ============================================================
    // NOMOR WHATSAPP ADMIN (Ganti dengan nomor asli, format 62 tanpa +)
    // ============================================================
    const adminPhone = "6281246994982";

    // Susun format pesan WhatsApp bot style (struktur rapi & mudah dibaca admin)
    const message =
      `🤖 *${t.booking.waTitle}*\n\n` +
      `━━━━━━━━━━━━━━━\n` +
      `📌 *${t.booking.waTrip}:* _${tripName}_\n` +
      `━━━━━━━━━━━━━━━\n\n` +
      `👤 *${t.booking.waFullName}:* ${formData.fullName}\n` +
      `📧 *${t.booking.waEmail}:* ${formData.email}\n` +
      `📱 *${t.booking.waPhone}:* ${formData.phone}\n` +
      `🇮🇩 *${t.booking.waNationality}:* ${formData.nationality || "-"}\n` +
      `👥 *${t.booking.waPax}:* ${formData.pax} Pax\n` +
      `📅 *${t.booking.waDate}:* ${formData.preferredDate}\n\n` +
      `📝 *${t.booking.waNotes}:*\n${formData.notes || "-"}\n\n` +
      `━━━━━━━━━━━━━━━\n` +
      `${t.booking.waEnd}`;

    // Encode pesan ke format URL
    const encodedMessage = encodeURIComponent(message);

    // Redirect ke WhatsApp
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 md:p-12">
      {/* Header dimasukkan ke dalam form agar bisa pakai useLanguage tanpa buat komponen client terpisah */}
      <div className="text-center mb-12">
        <span className="inline-block bg-terracotta-400 text-white px-5 py-1.5 text-xs font-bold uppercase tracking-[0.3em] mb-6">
          StorySumba
        </span>
        <h1 className="font-serif text-5xl md:text-6xl text-navy-400 font-bold mb-4">
          {t.booking.title}
        </h1>
        <p className="text-navy-300/80 max-w-xl mx-auto text-lg">
          {t.booking.subtitle}
        </p>
      </div>

      <div className="mb-8 p-6 bg-terracotta-50 border border-terracotta-200 rounded-sm">
        <h3 className="font-serif text-xl text-terracotta-600 font-bold mb-1">
          {t.booking.youAreBooking}
        </h3>
        <p className="font-serif text-2xl text-navy-400 font-bold">
          {tripName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.fullName} *
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.email} *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.phone} *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
            placeholder="+62 812 3456 7890"
          />
        </div>

        {/* Nationality */}
        <div>
          <label
            htmlFor="nationality"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.nationality}
          </label>
          <input
            id="nationality"
            type="text"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
            placeholder="Indonesian"
          />
        </div>

        {/* Number of Pax */}
        <div>
          <label
            htmlFor="pax"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.pax} *
          </label>
          <select
            id="pax"
            required
            value={formData.pax}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          >
            <option value="2">2 Pax</option>
            <option value="3">3 Pax</option>
            <option value="4">4 Pax</option>
            <option value="5">5 Pax</option>
            <option value="6">6 Pax</option>
            <option value="7-12">7–12 Pax</option>
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
          >
            {t.booking.preferredDate} *
          </label>
          <input
            id="preferredDate"
            type="date"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors"
          />
        </div>
      </div>

      {/* Notes */}
      <div className="mb-8">
        <label
          htmlFor="notes"
          className="block text-xs text-navy-300/60 uppercase tracking-wider mb-2 font-sans"
        >
          {t.booking.notes}
        </label>
        <textarea
          id="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="w-full bg-cream-100 border border-cream-400 px-4 py-3 text-navy-400 font-sans text-sm focus:outline-none focus:border-terracotta-400 transition-colors resize-none"
          placeholder={t.booking.notesPlaceholder}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Link
          href="/trip"
          className="text-sm text-navy-300 hover:text-terracotta-400 transition-colors order-2 md:order-1"
        >
          ← {t.booking.backToTrips}
        </Link>
        <button
          type="submit"
          className="w-full md:w-auto bg-navy-400 hover:bg-navy-500 text-white font-medium px-10 py-4 text-sm uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-3 order-1 md:order-2"
        >
          {/* WhatsApp Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {t.booking.sendWhatsApp}
        </button>
      </div>
    </form>
  );
}
