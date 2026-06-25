import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Sumba Trip Packages",
  description:
    "Explore our curated Sumba travel packages ranging from 3 to 7 days. Discover pristine beaches, ancient villages, and wild savannas.",
};

export default function TripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
