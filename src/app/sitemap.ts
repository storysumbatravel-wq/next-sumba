export const dynamic = "force-dynamic";

import { MetadataRoute } from "next";
import { prisma } from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const trips = await prisma.trip.findMany({
    select: { slug: true, updatedAt: true },
  });

  const tripEntries = trips.map((trip) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL || "https://storysumba.com"}/trip/${trip.slug}`,
    lastModified: trip.updatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_APP_URL || "https://storysumba.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://storysumba.com"}/trip`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL || "https://storysumba.com"}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...tripEntries,
  ];
}
