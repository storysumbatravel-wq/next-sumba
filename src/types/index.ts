export type Locale = "en" | "id";

export interface TripData {
  id: number;
  slug: string;
  durationDays: number;
  durationNights: number;
  price: number;
  imageUrl: string;
  maxPax: number;
  minPax: number;
  featured: boolean;
  translations: TripTranslationData[];
  itineraries: ItineraryData[];
  flights: FlightInfoData[];
  hotels: HotelInfoData[];
  includes: IncludeData[];
  excludes: ExcludeData[];
  tips: TipData[];
}

export interface TripTranslationData {
  locale: string;
  name: string;
  subtitle: string;
  description: string;
}

export interface ItineraryData {
  id: number;
  dayNumber: number;
  imageUrl: string | null;
  translations: ItineraryTranslationData[];
  destinations: DestinationData[];
}

export interface ItineraryTranslationData {
  locale: string;
  title: string;
  description: string;
  meals: string;
  activities: string;
}

export interface DestinationData {
  id: number;
  name: string;
  imageUrl: string;
  order: number;
}

export interface FlightInfoData {
  airline: string;
  flightNumber: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  order: number;
}

export interface HotelInfoData {
  name: string;
  location: string;
  checkInDay: number;
  checkOutDay: number;
  imageUrl: string | null;
}

export interface IncludeData {
  locale: string;
  item: string;
}

export interface ExcludeData {
  locale: string;
  item: string;
}

export interface TipData {
  locale: string;
  tip: string;
}

export interface TripListItem {
  id: number;
  slug: string;
  durationDays: number;
  durationNights: number;
  price: number;
  imageUrl: string;
  featured: boolean;
  minPax: number;
  maxPax: number;
  translations: TripTranslationData[];
}
