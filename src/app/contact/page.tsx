"use client";

import { useLanguage } from "@/context/LanguageContext";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ====== HERO: Magazine Cover Header ====== */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-400/70 to-navy-400/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-gold-300 text-xs uppercase tracking-[0.5em] font-sans">
            StorySumba
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mt-4">
            {t.contact.title}
          </h1>
          <p className="text-cream-300 mt-4 font-light text-lg max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* ====== Contact Content — Magazine Split Layout ====== */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-cream-50 border border-cream-400 p-8 md:p-12">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar — Office Info */}
            <div className="lg:col-span-2">
              <div className="bg-navy-400 text-cream-200 p-8 md:p-12 lg:sticky lg:top-28">
                <h3 className="font-serif text-2xl text-white font-bold mb-8">
                  {t.contact.office}
                </h3>

                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-terracotta-400/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-terracotta-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gold-300 text-xs uppercase tracking-wider mb-1">
                        Address
                      </h4>
                      <p className="text-cream-400 text-sm leading-relaxed">
                        {t.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-terracotta-400/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-terracotta-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gold-300 text-xs uppercase tracking-wider mb-1">
                        Phone / WhatsApp
                      </h4>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream-400 text-sm hover:text-terracotta-300 transition-colors"
                      >
                        {t.contact.phoneNum}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-terracotta-400/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-terracotta-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gold-300 text-xs uppercase tracking-wider mb-1">
                        Email
                      </h4>
                      <a
                        href={`mailto:${t.contact.emailAddr}`}
                        className="text-cream-400 text-sm hover:text-terracotta-300 transition-colors"
                      >
                        {t.contact.emailAddr}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mt-8 pt-8 border-t border-navy-300">
                  <h4 className="text-gold-300 text-xs uppercase tracking-wider mb-3">
                    Operating Hours
                  </h4>
                  <p className="text-cream-400 text-sm">Monday - Saturday</p>
                  <p className="text-white font-medium text-sm">
                    08:00 - 17:00 WITA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== INTERACTIVE MAP SECTION ====== */}
      <section className="pb-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-terracotta-400 text-xs uppercase tracking-[0.5em] font-sans">
              Location
            </span>
            <h2 className="font-serif text-4xl text-navy-400 font-bold mt-2">
              Find Us
            </h2>
            <div className="w-16 h-px bg-terracotta-400 mx-auto mt-4" />
          </div>

          {/* Map Card yang bisa diklik */}
          <a
            href="https://www.google.com/maps/search/Storysumba/"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group bg-cream-50 border border-cream-400 shadow-2xl overflow-hidden"
          >
            {/* Iframe Peta (pointer-events-none agar klik tembus ke link <a>) */}
            <div className="h-[500px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7866.444826685595!2d120.26803550418423!3d-9.662028137958316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c9b294756f9cd%3A0x7fea0ee0bb898e2a!2sStorysumba!5e0!3m2!1sid!2sid!4v1777646565402!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full pointer-events-none group-hover:scale-105 transition-transform duration-700"
              ></iframe>

              {/* Overlay gelap saat hover + Tombol */}
              <div className="absolute inset-0 bg-navy-400/0 group-hover:bg-navy-400/40 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-terracotta-400 text-white px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium shadow-lg group-hover:bg-terracotta-500 transition-all duration-300 flex items-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Open in Google Maps
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
