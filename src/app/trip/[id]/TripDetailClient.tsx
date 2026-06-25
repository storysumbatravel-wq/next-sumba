"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TripData } from "@/types";

interface TripDetailClientProps {
  params: Promise<{ id: string }>;
}

// Data Price List berdasarkan Slug Trip
const tripPriceList: Record<string, { pax: string; price: string }[]> = {
  "sumba-essence": [
    { pax: "2 Pax", price: "IDR 4,200,000 / pax" },
    { pax: "3 Pax", price: "IDR 3,650,000 / pax" },
    { pax: "4 Pax", price: "IDR 2,880,000 / pax" },
    { pax: "5 Pax", price: "IDR 2,820,000 / pax" },
    { pax: "6 Pax", price: "IDR 3,370,000 / pax" },
    { pax: "7–12 Pax", price: "IDR 2,200,000 / pax" },
  ],
  "sumba-Horizon-explorer": [
    { pax: "2 Pax", price: "IDR 5,800,000 / pax" },
    { pax: "3 Pax", price: "IDR 5,130,000 / pax" },
    { pax: "4 Pax", price: "IDR 4,040,000 / pax" },
    { pax: "5 Pax", price: "IDR 3,990,000 / pax" },
    { pax: "6 Pax", price: "IDR 3,680,000 / pax" },
    { pax: "7–12 Pax", price: "IDR 3,550,000 / pax" },
  ],
  "sumba-soul-experience": [
    { pax: "2 Pax", price: "IDR 6,000,000 / pax" },
    { pax: "3 Pax", price: "IDR 4,700,000 / pax" },
    { pax: "4 Pax", price: "IDR 4,500,000 / pax" },
    { pax: "5 Pax", price: "IDR 3,950,000 / pax" },
    { pax: "6 Pax", price: "IDR 3,750,000 / pax" },
    { pax: "7–12 Pax", price: "IDR 4,500,000 / pax" },
  ],
  "sumba-adventure": [
    { pax: "2 Pax", price: "IDR 8,500,000 / pax" },
    { pax: "3 Pax", price: "IDR 7,500,000 / pax" },
    { pax: "4 Pax", price: "IDR 5,800,000 / pax" },
    { pax: "5 Pax", price: "IDR 5,400,000 / pax" },
    { pax: "6 Pax", price: "IDR 5,800,000 / pax" },
    { pax: "7–12 Pax", price: "IDR 5,000,000 / pax" },
  ],
  "sumba-ultimate-journey": [
    { pax: "2 Pax", price: "IDR 10,780,000 / pax" },
    { pax: "3 Pax", price: "IDR 9,970,000 / pax" },
    { pax: "4 Pax", price: "IDR 7,650,000 / pax" },
    { pax: "5 Pax", price: "IDR 7,600,000 / pax" },
    { pax: "6 Pax", price: "IDR 8,750,000 / pax" },
    { pax: "7–12 Pax", price: "IDR 7,300,000 / pax" },
  ],
};

export default function TripDetailClient({ params }: TripDetailClientProps) {
  const [slug, setSlug] = useState<string>("");
  const { locale, t } = useLanguage();
  const [trip, setTrip] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then((p) => setSlug(p.id));
  }, [params]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/trips/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        setTrip(data);
        setLoading(false);
      })
      .catch(() => {
        setTrip(null);
        setLoading(false);
      });
  }, [slug]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100">
        <div className="inline-block w-8 h-8 border-2 border-terracotta-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 flex-col gap-4">
        <h1 className="font-serif text-8xl text-cream-400 font-bold">404</h1>
        <p className="text-navy-300 text-lg">Trip not found</p>
        <Link
          href="/trip"
          className="mt-4 text-terracotta-400 border-b border-terracotta-400 hover:text-terracotta-500"
        >
          ← {t.detail.backToTrips}
        </Link>
      </div>
    );
  }

  const translation =
    trip.translations.find((tr) => tr.locale === locale) ||
    trip.translations[0];
  const includesList = trip.includes.filter((i) => i.locale === locale);
  const excludesList = trip.excludes.filter((e) => e.locale === locale);
  const tipsList = trip.tips.filter((tip) => tip.locale === locale);
  const prices = tripPriceList[trip.slug] || [];

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      {/* ====== HERO: Magazine Cover Header ====== */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-20">
        <div className="absolute inset-0">
          <img
            src={trip.imageUrl}
            alt={translation.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-navy-400/40 to-navy-400/10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-3xl">
            <span className="inline-block bg-terracotta-400 text-white px-5 py-1.5 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              {trip.durationDays} {locale === "id" ? "Hari" : "Days"} /{" "}
              {trip.durationNights} {locale === "id" ? "Malam" : "Nights"}
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-navy-400 font-bold leading-[0.9] mb-4 drop-shadow-sm">
              {translation.name}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-terracotta-400 italic mb-6">
              {translation.subtitle}
            </p>
            <p className="text-navy-300/90 max-w-2xl text-lg leading-relaxed">
              {translation.description}
            </p>
          </div>
        </div>
      </section>

      {/* ====== CONTENT WRAPPER: GRID WITH STICKY SIDEBAR ====== */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        {/* Hapus items-start agar kolom kanan bisa meregang penuh mengikuti ketinggian kolom kiri */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- LEFT COLUMN: ITINERARY CARD --- */}
          <div className="lg:col-span-2">
            <div className="bg-cream-50 border border-cream-400 shadow-2xl overflow-hidden">
              {/* FLIGHT & ACCOMMODATION INFO */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-cream-400">
                <div className="p-8 border-b md:border-b-0 md:border-r border-cream-400">
                  <h3 className="font-serif text-xl text-navy-400 font-bold mb-6 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-terracotta-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    {t.detail.flights}
                  </h3>
                  <div className="space-y-4">
                    {trip.flights.map((flight, i) => (
                      <div key={i} className="flex items-center gap-4 text-sm">
                        <div className="text-left w-24">
                          <div className="font-bold text-navy-400">
                            {flight.departureTime}
                          </div>
                          <div className="text-navy-300/60 text-xs">
                            {flight.departureCity}
                          </div>
                        </div>
                        <div className="flex-1 flex items-center">
                          <div className="w-2 h-2 bg-terracotta-400 rounded-full" />
                          <div className="flex-1 h-px bg-cream-400 mx-1 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy-300/40 text-[10px] font-bold">
                              {flight.airline}
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-terracotta-400 rounded-full" />
                        </div>
                        <div className="text-right w-24">
                          <div className="font-bold text-navy-400">
                            {flight.arrivalTime}
                          </div>
                          <div className="text-navy-300/60 text-xs">
                            {flight.arrivalCity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-xl text-navy-400 font-bold mb-6 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-terracotta-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    {t.detail.hotels}
                  </h3>
                  <div className="space-y-4">
                    {trip.hotels.map((hotel, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0 bg-cream-200">
                          {hotel.imageUrl && (
                            <img
                              src={hotel.imageUrl}
                              alt={hotel.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-navy-400">
                            {hotel.name}
                          </div>
                          <div className="text-xs text-navy-300/60">
                            {hotel.location}
                          </div>
                          <div className="text-xs text-terracotta-400 mt-1">
                            {t.detail.day} {hotel.checkInDay} → {t.detail.day}{" "}
                            {hotel.checkOutDay}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* DAILY ITINERARY VISUAL TIMELINE */}
              <div className="p-8 md:p-12">
                <div className="text-center mb-12">
                  <span className="text-terracotta-400 text-xs uppercase tracking-[0.5em]">
                    Journey Map
                  </span>
                  <h2 className="font-serif text-4xl text-navy-400 font-bold mt-2">
                    {t.detail.itinerary}
                  </h2>
                  <div className="w-16 h-px bg-terracotta-400 mx-auto mt-4" />
                </div>
                <div className="relative">
                  <div className="absolute left-[23px] md:left-[31px] top-0 bottom-0 w-px bg-cream-400" />
                  <div className="space-y-16">
                    {trip.itineraries.map((day) => {
                      const dayTrans =
                        day.translations.find((tr) => tr.locale === locale) ||
                        day.translations[0];
                      return (
                        <div key={day.id} className="relative pl-16 md:pl-24">
                          <div className="absolute left-2 md:left-4 top-2 w-4 h-4 bg-terracotta-400 rounded-full border-4 border-cream-50 z-10" />
                          <div className="absolute left-12 md:left-20 top-0 font-serif text-9xl text-cream-300/40 font-bold select-none -mt-6 md:-mt-8">
                            {String(day.dayNumber).padStart(2, "0")}
                          </div>
                          <div className="relative z-10 pt-4">
                            <span className="inline-block bg-navy-400 text-cream-100 px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3">
                              Day {day.dayNumber}
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-navy-400 font-bold mb-4 leading-tight">
                              {dayTrans.title}
                            </h3>
                            <p className="text-navy-300/80 leading-relaxed mb-6 max-w-xl drop-cap">
                              {dayTrans.description}
                            </p>

                            {day.destinations.length > 0 && (
                              <div className="grid grid-cols-3 gap-2 mb-6">
                                {day.destinations.slice(0, 3).map((dest, i) => (
                                  <div
                                    key={dest.id}
                                    className={`relative overflow-hidden rounded-sm group ${i === 0 ? "col-span-2 row-span-2 h-64" : "h-[124px]"}`}
                                  >
                                    <img
                                      src={dest.imageUrl}
                                      alt={dest.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-400/60 to-transparent" />
                                    <span className="absolute bottom-2 left-2 text-white text-xs font-medium bg-navy-400/50 px-2 py-1 backdrop-blur-sm">
                                      {dest.name}
                                    </span>
                                  </div>
                                ))}
                                {day.destinations.length === 1 && (
                                  <div className="relative overflow-hidden rounded-sm group col-span-3 h-48">
                                    <img
                                      src={day.destinations[0].imageUrl}
                                      alt={day.destinations[0].name}
                                      className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-400/60 to-transparent" />
                                    <span className="absolute bottom-2 left-2 text-white text-sm font-medium bg-navy-400/50 px-2 py-1 backdrop-blur-sm">
                                      {day.destinations[0].name}
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="flex flex-wrap gap-3 text-sm">
                              {dayTrans.meals && (
                                <div className="bg-cream-200 border border-cream-400 px-4 py-2 text-navy-400 flex items-center gap-2">
                                  <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                                    {t.detail.meals}
                                  </span>
                                  <span className="font-medium">
                                    {dayTrans.meals}
                                  </span>
                                </div>
                              )}
                              {dayTrans.activities && (
                                <div className="bg-terracotta-50 border border-terracotta-200 px-4 py-2 text-terracotta-600 flex items-center gap-2">
                                  <span className="text-xs text-terracotta-400 uppercase tracking-wider">
                                    {t.detail.activities}
                                  </span>
                                  <span className="font-medium">
                                    {dayTrans.activities}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION: INCLUDES, EXCLUDES, TIPS */}
              <div className="border-t border-cream-400 grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 border-b md:border-b-0 md:border-r border-cream-400">
                  <h3 className="font-serif text-xl text-navy-400 font-bold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {t.detail.includes}
                  </h3>
                  <ul className="space-y-2">
                    {includesList.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-navy-400"
                      >
                        <span className="text-emerald-400 mt-0.5">✓</span>{" "}
                        {item.item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 border-b md:border-b-0 md:border-r border-cream-400">
                  <h3 className="font-serif text-xl text-navy-400 font-bold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    {t.detail.excludes}
                  </h3>
                  <ul className="space-y-2">
                    {excludesList.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-navy-400"
                      >
                        <span className="text-red-400 mt-0.5">✗</span>{" "}
                        {item.item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl text-navy-400 font-bold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-gold-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    {t.detail.tips}
                  </h3>
                  <ul className="space-y-3">
                    {tipsList.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-navy-400"
                      >
                        <span className="text-gold-400">💡</span> {tip.tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: STICKY PRICE LIST CARD --- */}
          <div className="lg:col-span-1">
            {/* Tambahkan lg:sticky dan lg:top-28 agar hanya mengambang di Desktop */}
            <div className="lg:sticky lg:top-28 bg-cream-50 border border-cream-400 shadow-2xl overflow-hidden">
              <div className="bg-navy-400 px-6 py-3 flex items-center justify-between">
                <h3 className="font-serif text-lg text-white font-bold">
                  Price List
                </h3>
                <span className="text-gold-300 text-xs uppercase tracking-wider">
                  Per Person
                </span>
              </div>

              <div className="p-6">
                <div className="space-y-3">
                  {prices.map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between items-baseline pb-3 ${i < prices.length - 1 ? "border-b border-cream-400" : ""}`}
                    >
                      <span className="text-navy-400 font-medium text-sm">
                        {item.pax}
                      </span>
                      <span className="font-serif text-lg text-terracotta-400 font-bold">
                        {item.price.replace("IDR ", "")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t-2 border-cream-400 text-center">
                  <p className="text-xs text-navy-300/60 mb-3">
                    Prices are in Indonesian Rupiah (IDR)
                  </p>
                  <Link
                    href={`/booking?tripName=${encodeURIComponent(translation.name)}`}
                    className="block w-full bg-terracotta-400 hover:bg-terracotta-500 text-white font-medium py-3 text-sm uppercase tracking-[0.2em] transition-colors"
                  >
                    {t.detail.bookNow}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
