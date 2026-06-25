"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/lib/i18n";

export default function Navbar() {
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/trip", label: t.nav.trips },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-100/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Teks StorySumba */}
        <Link href="/" className="flex items-center gap-3 group">
          {scrolled ? (
            <img
              src="/images/logo-dark.jpg"
              alt="StorySumba Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <img
              src="/images/logo-white.png"
              alt="StorySumba Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <span
            className={`font-serif text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-navy-400" : "text-white"}`}
          >
            StorySumba
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terracotta-400 ${
                scrolled ? "text-navy-400" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-4 border-l border-current/20 pl-4">
            {(["en", "id"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  locale === l
                    ? "text-terracotta-400 border-b-2 border-terracotta-400"
                    : scrolled
                      ? "text-navy-300 hover:text-terracotta-400"
                      : "text-white/60 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${scrolled ? "text-navy-400" : "text-white"}`}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-100/98 backdrop-blur-md border-t border-cream-300">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-navy-400 font-medium py-2 hover:text-terracotta-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-cream-300">
              {(["en", "id"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setLocale(l);
                    setMobileOpen(false);
                  }}
                  className={`px-3 py-1 text-sm font-bold uppercase ${
                    locale === l
                      ? "text-terracotta-400 bg-terracotta-50"
                      : "text-navy-300"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
