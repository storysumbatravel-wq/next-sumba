import type { Metadata } from "next";
import { prisma } from "@/lib/db";
import TripDetailClient from "./TripDetailClient";

// Fungsi untuk generate SEO dinamis berdasarkan slug trip
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const trip = await prisma.trip.findFirst({
    where: { OR: [{ slug: id }, { id: parseInt(id) || 0 }] },
    include: { translations: true },
  });

  if (!trip) {
    return { title: "Trip Not Found" };
  }

  const translation =
    trip.translations.find((tr) => tr.locale === "en") || trip.translations[0];

  return {
    title: `${translation.name} — ${translation.subtitle}`,
    description: translation.description,
    keywords: [
      "Sumba Trip",
      translation.name,
      "Sumba Travel Package",
      "Sumba Holiday",
    ],
    openGraph: {
      title: `${translation.name} | StorySumba`,
      description: translation.description,
      images: [
        {
          url: trip.imageUrl,
          width: 1200,
          height: 630,
          alt: translation.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${translation.name} | StorySumba`,
      description: translation.description,
      images: [trip.imageUrl],
    },
  };
}

// Server Component yang merender Client Component
export default function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      {/* Kita inject JSON-LD di sini, tapi harus fetch data dulu */}
      <JsonLd params={params} />
      <TripDetailClient params={params} />
    </>
  );
}

// Komponen kecil untuk menginject Structured Data
async function JsonLd({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = await prisma.trip.findFirst({
    where: { OR: [{ slug: id }, { id: parseInt(id) || 0 }] },
    include: { translations: true },
  });

  if (!trip) return null;

  const translation =
    trip.translations.find((tr) => tr.locale === "en") || trip.translations[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: translation.name,
    description: translation.description,
    image: trip.imageUrl,
    offers: {
      "@type": "Offer",
      price: trip.price,
      priceCurrency: "IDR",
    },
    itinerary: {
      "@type": "ItemList",
      numberOfItems: trip.durationDays,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
