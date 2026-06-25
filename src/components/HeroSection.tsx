"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-sumba.jpg"
          alt="Sumba landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-400/60 via-navy-400/40 to-navy-400/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Magazine-style label */}
        <div className="inline-block mb-6">
          <span className="text-gold-300 text-xs uppercase tracking-[0.5em] font-sans border border-gold-300/30 px-4 py-2">
            StorySumba
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[0.9] mb-6">
          {t.hero.title.split(" ").slice(0, -2).join(" ")}
          <br />
          <span className="text-terracotta-300 italic">
            {t.hero.title.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {t.hero.subtitle}
        </p>

        <Link
          href="/trip"
          className="inline-block bg-terracotta-400 hover:bg-terracotta-500 text-white font-medium px-8 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-400/20"
        >
          {t.hero.cta}
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-300/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-cream-300/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
