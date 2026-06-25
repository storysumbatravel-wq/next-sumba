"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import TripCard from "@/components/TripCard";
import { TripListItem } from "@/types";

export default function TripsPage() {
  const { t } = useLanguage();
  const [trips, setTrips] = useState<TripListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trips")
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/trips-banner.jpg"
            alt="Sumba trips"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-400/70 to-navy-400/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-gold-300 text-xs uppercase tracking-[0.5em] font-sans">
            StorySumba
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mt-4">
            {t.trips.title}
          </h1>
          <p className="text-cream-300 mt-4 font-light">{t.trips.subtitle}</p>
        </div>
      </section>

      {/* Trips Content — Magazine Grid */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-2 border-terracotta-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-16">
              {trips.map((trip, index) => {
                // Magazine layout: alternate between featured and normal
                const isWide = index === 0 || index === 2;

                return (
                  <div key={trip.id}>
                    {isWide ? (
                      <TripCard trip={trip} variant="featured" />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <TripCard trip={trip} />
                        {/* Stats sidebar for magazine feel */}
                        <div className="bg-cream-200 border border-cream-400 p-8 flex flex-col justify-center">
                          <div className="space-y-6">
                            <div>
                              <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                                {t.trips.from}
                              </span>
                              <div className="font-serif text-3xl text-terracotta-400 font-bold mt-1">
                                {formatPrice(trip.price)}
                              </div>
                              <span className="text-xs text-navy-300/50">
                                {t.trips.perPerson}
                              </span>
                            </div>
                            <div className="h-px bg-cream-400" />
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                                  Duration
                                </span>
                                <div className="text-navy-400 font-bold mt-1">
                                  {trip.durationDays}
                                  {t.trips.days} {trip.durationNights}
                                  {t.trips.nights}
                                </div>
                              </div>
                              <div>
                                <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                                  {t.trips.min} {t.trips.pax}
                                </span>
                                <div className="text-navy-400 font-bold mt-1">
                                  {trip.minPax} {t.trips.pax}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Magazine divider between trips */}
                    {index < trips.length - 1 && (
                      <div className="flex items-center gap-4 mt-16">
                        <div className="flex-1 h-px bg-cream-400" />
                        <div className="w-2 h-2 bg-terracotta-400 rotate-45" />
                        <div className="flex-1 h-px bg-cream-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
