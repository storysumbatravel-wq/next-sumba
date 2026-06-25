import { NextResponse } from "next/server";
import prisma from "@/lib/db";

// GET /api/trips — Mendapatkan semua trip
export async function GET() {
  try {
    const trips = await prisma.trip.findMany({
      orderBy: { durationDays: "asc" },
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

    return NextResponse.json(trips);
  } catch (error) {
    console.error("Error fetching trips:", error);
    return NextResponse.json(
      { error: "Failed to fetch trips" },
      { status: 500 },
    );
  }
}
