import BookingForm from "@/components/BookingForm";
import { Suspense } from "react";

export const metadata = {
  title: "Book Your Trip",
  description: "Complete your booking for an unforgettable Sumba journey.",
};

export default function BookingPage() {
  return (
    <div className="bg-cream-100 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Form Container */}
        <div className="bg-cream-50 border border-cream-400 shadow-2xl overflow-hidden">
          {/* Suspense diperlukan karena useSearchParams di dalam BookingForm */}
          <Suspense
            fallback={<div className="p-12 text-center">Loading form...</div>}
          >
            <BookingForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
