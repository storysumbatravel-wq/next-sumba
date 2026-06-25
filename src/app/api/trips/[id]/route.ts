import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/trips/[id] — Mendapatkan satu trip berdasarkan slug
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    // Await params karena di Next.js versi baru ini berbentuk Promise
    const { id } = await params;

    const trip = await prisma.trip.findFirst({
      where: {
        OR: [{ slug: id }, { id: parseInt(id) || 0 }],
      },
      include: {
        translations: true,
        itineraries: {
          orderBy: { dayNumber: "asc" },
          include: {
            translations: true,
            destinations: { orderBy: { order: "asc" } },
          },
        },
        flights: { orderBy: { order: "asc" } },
        hotels: { orderBy: { checkInDay: "asc" } },
        includes: true,
        excludes: true,
        tips: true,
      },
    });

    if (!trip) {
      return NextResponse.json({ error: "Trip not found" }, { status: 404 });
    }

    return NextResponse.json(trip);
  } catch (error) {
    console.error("Error fetching trip:", error);
    return NextResponse.json(
      { error: "Failed to fetch trip" },
      { status: 500 },
    );
  }
}
