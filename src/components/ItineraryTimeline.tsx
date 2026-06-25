"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ItineraryData } from "@/types";

interface ItineraryTimelineProps {
  itineraries: ItineraryData[];
}

export default function ItineraryTimeline({
  itineraries,
}: ItineraryTimelineProps) {
  const { locale, t } = useLanguage();

  const sorted = [...itineraries].sort((a, b) => a.dayNumber - b.dayNumber);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-cream-400" />

      <div className="space-y-12">
        {sorted.map((day, index) => {
          const translation =
            day.translations.find((tr) => tr.locale === locale) ||
            day.translations[0];

          return (
            <div key={day.id} className="relative pl-16 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-5.5 top-2 w-5 h-5 bg-terracotta-400 rounded-full border-4 border-cream-100 z-10" />

              {/* Day number - large magazine style */}
              <div className="mb-4">
                <span className="font-serif text-7xl md:text-8xl text-cream-300/50 font-bold leading-none select-none">
                  {String(day.dayNumber).padStart(2, "0")}
                </span>
              </div>

              {/* Content card */}
              <div className="bg-cream-200 border border-cream-400 overflow-hidden">
                {/* Day image */}
                {day.imageUrl && (
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={day.imageUrl}
                      alt={translation.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-400/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-terracotta-400 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {t.detail.day} {day.dayNumber}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-serif text-2xl md:text-3xl text-navy-400 font-bold mb-3">
                    {translation.title}
                  </h3>
                  <p className="text-navy-300/80 leading-relaxed mb-4">
                    {translation.description}
                  </p>

                  {/* Info pills */}
                  <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-cream-400">
                    {translation.meals && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-terracotta-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h18v18H3zM12 8v4M8 12h8"
                          />
                        </svg>
                        <div>
                          <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                            {t.detail.meals}
                          </span>
                          <p className="text-sm text-navy-400 font-medium">
                            {translation.meals}
                          </p>
                        </div>
                      </div>
                    )}
                    {translation.activities && (
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-terracotta-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <div>
                          <span className="text-xs text-navy-300/50 uppercase tracking-wider">
                            {t.detail.activities}
                          </span>
                          <p className="text-sm text-navy-400 font-medium">
                            {translation.activities}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Destinations grid */}
              {day.destinations && day.destinations.length > 0 && (
                <div className="mt-4 ml-0">
                  <span className="text-xs text-navy-300/50 uppercase tracking-[0.3em] font-sans mb-3 block">
                    {t.detail.destinations}
                  </span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {day.destinations
                      .sort((a, b) => a.order - b.order)
                      .map((dest) => (
                        <div
                          key={dest.id}
                          className="relative group/dest overflow-hidden rounded-sm"
                        >
                          <div className="aspect-[4/3]">
                            <img
                              src={dest.imageUrl}
                              alt={dest.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/dest:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-400/70 to-transparent" />
                          <span className="absolute bottom-2 left-2 text-white text-xs font-medium bg-navy-400/60 px-2 py-1 backdrop-blur-sm">
                            {dest.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
