"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { TripListItem } from "@/types";

interface TripCardProps {
  trip: TripListItem;
  variant?: "normal" | "featured";
}

export default function TripCard({ trip, variant = "normal" }: TripCardProps) {
  const { locale, t } = useLanguage();
  const translation =
    trip.translations.find((tr) => tr.locale === locale) ||
    trip.translations[0];
  const isFeatured = variant === "featured";

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link href={`/trip/${trip.slug}`} className="group block">
      <div
        className={`relative overflow-hidden bg-cream-200 ${isFeatured ? "md:grid md:grid-cols-2" : ""}`}
      >
        {/* Image */}
        <div
          className={`relative overflow-hidden ${isFeatured ? "h-80 md:h-full" : "h-72"}`}
        >
          <img
            src={trip.imageUrl}
            alt={translation.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-400/60 via-transparent to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-4 left-4 bg-terracotta-400 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            {trip.durationDays}
            {t.trips.days} {trip.durationNights}
            {t.trips.nights}
          </div>
        </div>

        {/* Content */}
        <div
          className={`p-6 ${isFeatured ? "flex flex-col justify-center" : ""}`}
        >
          {isFeatured && (
            <span className="text-gold-400 text-xs uppercase tracking-[0.3em] font-sans mb-2 block">
              Featured
            </span>
          )}
          <h3 className="font-serif text-2xl md:text-3xl text-navy-400 font-bold mb-2 group-hover:text-terracotta-400 transition-colors">
            {translation.name}
          </h3>
          <p className="text-navy-300 text-sm italic mb-3">
            {translation.subtitle}
          </p>
          <p className="text-navy-300/70 text-sm leading-relaxed mb-4 line-clamp-3">
            {translation.description}
          </p>

          <div className="flex items-end justify-between mt-auto">
            <div>
              <span className="text-xs text-navy-300/60 uppercase tracking-wider">
                {t.trips.from}
              </span>
              <div className="text-terracotta-400 font-bold text-xl">
                {formatPrice(trip.price)}
              </div>
              <span className="text-xs text-navy-300/50">
                {t.trips.perPerson}
              </span>
            </div>
            <span className="text-terracotta-400 text-sm font-medium uppercase tracking-wider group-hover:tracking-widest transition-all">
              {t.trips.viewDetail} →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
