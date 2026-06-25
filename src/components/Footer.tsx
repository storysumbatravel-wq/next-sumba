"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-400 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand - Logo + Teks StorySumba */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-dark.jpg"
                alt="StorySumba Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                StorySumba
              </span>
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold-300 mb-4">
              {t.footer.quickLinks}
            </h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-cream-400 text-sm hover:text-terracotta-300 transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/trip"
                className="block text-cream-400 text-sm hover:text-terracotta-300 transition-colors"
              >
                {t.nav.trips}
              </Link>
              <Link
                href="/contact"
                className="block text-cream-400 text-sm hover:text-terracotta-300 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-gold-300 mb-4">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-300 rounded-full flex items-center justify-center hover:bg-terracotta-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 text-cream-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-300 rounded-full flex items-center justify-center hover:bg-terracotta-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 text-cream-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.125-5.864 10.125-11.854z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-300 rounded-full flex items-center justify-center hover:bg-terracotta-400 transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5 text-cream-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297a11.815 11.815 0 00-8.413-3.488c-6.527 0-11.827 5.299-11.829 11.828 0 2.084.544 4.122 1.577 5.924L0 23.736l6.132-1.609a11.824 11.824 0 005.656 1.44h.005c6.525 0 11.825-5.3 11.827-11.83a11.78 11.78 0 00-3.466-8.372" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ====== LEGAL & PARENT COMPANY SECTION ====== */}
        <div className="mt-12 pt-8 border-t border-navy-300 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Ijin Pariwisata / Tourism Permit */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 h-24 bg-white rounded-sm p-1.5 flex items-center justify-center shadow-md">
              <img
                src="/images/ijin.jpg"
                alt="Surat Keterangan Terdaftar CV Aurora Sumba"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-serif text-sm text-gold-300 mb-1 uppercase tracking-wider">
                {t.footer.tourismpermit}
              </h4>
              <p className="text-cream-400 text-xs leading-relaxed">
                Kementerian Hukum Republik Indonesia
                <br />
                Surat Keterangan Terdaftar CV AURORA SUMBA
                <br />
                <span className="text-cream-200 font-medium">
                  AHU-0104996-AH.01.14 Tahun 2025
                </span>
              </p>
            </div>
          </div>

          {/* Unit Bisnis dari / Subsidiary Of - DAPAT DIKLIK */}
          <a
            href="https://mahakaattraction.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 md:justify-end group"
          >
            <div className="text-right">
              <h4 className="font-serif text-sm text-gold-300 mb-1 uppercase tracking-wider">
                {t.footer.subsidiary}
              </h4>
              <p className="text-cream-400 text-xs transition-colors group-hover:text-terracotta-300">
                PT Mahaka Attractions
              </p>
            </div>
            <div className="flex-shrink-0 w-28 h-12 bg-white rounded-sm p-2 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <img
                src="/images/logo-mahaka.jpg"
                alt="Mahaka Attraction Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-navy-300 text-center">
          <p className="text-cream-500 text-xs">
            &copy; {new Date().getFullYear()} StorySumba. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
