"use client";

import { useLanguage } from "@/context/LanguageContext";
import HeroSection from "@/components/HeroSection";
import TripCard from "@/components/TripCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TripListItem } from "@/types";

export default function HomePage() {
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

  const featuredTrips = trips.filter((trip) => trip.featured);

  return (
    <>
      <HeroSection />

      {/* ====== FEATURED TRIPS — Magazine Layout ====== */}
      <section className="py-24 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          {/* Section header — magazine style */}
          <div className="text-center mb-16">
            <span className="text-terracotta-400 text-xs uppercase tracking-[0.5em] font-sans">
              StorySumba
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-400 font-bold mt-4 mb-4">
              {t.home.featuredTitle}
            </h2>
            <div className="w-16 h-px bg-terracotta-400 mx-auto mb-4" />
            <p className="text-navy-300/60 max-w-xl mx-auto font-light">
              {t.home.featuredSubtitle}
            </p>
          </div>

          {/* Trips grid — magazine editorial layout */}
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block w-8 h-8 border-2 border-terracotta-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-8">
              {/* First featured — large */}
              {featuredTrips[0] && (
                <TripCard trip={featuredTrips[0]} variant="featured" />
              )}

              {/* Rest — grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredTrips.slice(1).map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </div>
            </div>
          )}

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              href="/trip"
              className="inline-block border-2 border-navy-400 text-navy-400 hover:bg-navy-400 hover:text-cream-100 px-8 py-3 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              {t.trips.title} →
            </Link>
          </div>
        </div>
      </section>

      {/* ====== WHY STORYSUMBA — Magazine Feature ====== */}
      <section className="py-24 px-6 bg-navy-400 text-cream-200 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-gold-300 text-xs uppercase tracking-[0.5em] font-sans">
              Why Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mt-4 mb-4">
              {t.home.aboutTitle}
            </h2>
            <div className="w-16 h-px bg-gold-300 mx-auto mb-4" />
            <p className="text-cream-400 max-w-xl mx-auto font-light">
              {t.home.aboutSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-terracotta-400/10 rounded-full flex items-center justify-center group-hover:bg-terracotta-400/20 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-terracotta-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-white font-bold mb-3">
                {t.home.about1Title}
              </h3>
              <p className="text-cream-400 text-sm leading-relaxed font-light">
                {t.home.about1Desc}
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-terracotta-400/10 rounded-full flex items-center justify-center group-hover:bg-terracotta-400/20 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-terracotta-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-white font-bold mb-3">
                {t.home.about2Title}
              </h3>
              <p className="text-cream-400 text-sm leading-relaxed font-light">
                {t.home.about2Desc}
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-terracotta-400/10 rounded-full flex items-center justify-center group-hover:bg-terracotta-400/20 transition-colors duration-500">
                <svg
                  className="w-8 h-8 text-terracotta-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-white font-bold mb-3">
                {t.home.about3Title}
              </h3>
              <p className="text-cream-400 text-sm leading-relaxed font-light">
                {t.home.about3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA Section ====== */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cta-beach.jpg"
            alt="Sumba beach"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-400/70" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            {t.home.ctaSection}
          </h2>
          <p className="text-cream-300 text-lg mb-8 font-light leading-relaxed">
            {t.home.ctaDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-terracotta-400 hover:bg-terracotta-500 text-white font-medium px-10 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300"
          >
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
