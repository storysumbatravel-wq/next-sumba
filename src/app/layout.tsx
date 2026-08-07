import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://storysumbatravel.com",
  ),
  title: {
    template: "%s | StorySumba",
    default: "StorySumba — Authentic Sumba Travel Agent",
  },
  description:
    "Discover the soul of Sumba with StorySumba. Authentic journeys through ancient villages, pristine beaches, and wild landscapes in Sumba, Indonesia.",
  keywords: [
    "Sumba",
    "Travel Agent Sumba",
    "Sumba Trip",
    "Sumba Tour",
    "Indonesia Travel",
    "StorySumba",
    "Sumba Beach",
  ],
  authors: [{ name: "StorySumba" }],

  // ====== TAMBAHKAN INI UNTUK FAVICON DI TAB BROWSER ======
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // ========================================================

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: "StorySumba",
    title: "StorySumba — Authentic Sumba Travel Agent",
    description:
      "Discover the soul of Sumba. Authentic journeys through ancient villages, pristine beaches, and wild landscapes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "StorySumba Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StorySumba — Authentic Sumba Travel Agent",
    description:
      "Discover the soul of Sumba. Authentic journeys through ancient villages, pristine beaches, and wild landscapes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
