import DecorationBookingWizard from "../components/storefront/DecorationBookingWizard";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import PageTrustStrip from "../components/storefront/PageTrustStrip";

const occasionCards = [
  { id: 1, name: "Birthday", image: "https://images.unsplash.com/photo-1533294455009-a77b7557d2d1?w=600", price: 1499, rating: 4.8, count: 125 },
  { id: 2, name: "Anniversary", image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=600", price: 1799, rating: 4.7, count: 89 },
  { id: 3, name: "Baby Shower", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600", price: 1699, rating: 4.9, count: 98 },
  { id: 4, name: "Welcome Baby", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600", price: 1299, rating: 4.6, count: 72 },
  { id: 5, name: "Haldi", image: "https://images.unsplash.com/photo-1519183071298-a2962cc4d6fe?w=600", price: 2199, rating: 4.8, count: 65 },
  { id: 6, name: "Proposal", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600", price: 2499, rating: 4.9, count: 44 },
  { id: 7, name: "Engagement", image: "https://images.unsplash.com/photo-1487530811015-780f8f5c07fe?w=600", price: 2299, rating: 4.8, count: 78 },
  { id: 8, name: "House Warming", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", price: 1399, rating: 4.7, count: 54 },
  { id: 9, name: "First Night", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600", price: 1999, rating: 4.6, count: 39 },
  { id: 10, name: "Kids Theme", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600", price: 1599, rating: 4.9, count: 118 },
  { id: 11, name: "Balloon Decor", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600", price: 1099, rating: 4.7, count: 150 },
  { id: 12, name: "Festival", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600", price: 1299, rating: 4.8, count: 95 },
];

export default function Decorations() {
  const topOccasions = useMemo(() => occasionCards.slice(0, 6), []);

  return (
    <div className="min-h-screen bg-[#fffaf8] text-gray-900">
      <div className="bg-white border-b border-gray-200 py-6 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Decoration Booking</p>
              <h1 className="mt-3 text-4xl font-bold text-gray-900">Decorations for every occasion</h1>
            </div>
            <Link to="/" className="rounded-full bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-[#7a2310]">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {occasionCards.map((occasion) => (
              <div key={occasion.id} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative">
                  <img src={occasion.image} alt={occasion.name} className="h-56 w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-[#8f270e] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Same Day
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-900">{occasion.name}</h2>
                  <p className="mt-3 text-sm text-gray-600">Starting at</p>
                  <p className="mt-1 text-2xl font-bold text-[#8f270e]">₹{occasion.price}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <span>⭐ {occasion.rating}</span>
                    <span>•</span>
                    <span>{occasion.count} reviews</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <section className="space-y-6">
            <div className="rounded-[36px] bg-white p-6 shadow-lg ring-1 ring-gray-200">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Quick Booking</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Book a custom decoration service</h2>
              <p className="mt-4 text-gray-600">Choose date, time, venue, add-ons and confirm on WhatsApp with ease.</p>
            </div>
            <DecorationBookingWizard />
          </section>

          <aside className="space-y-6">
            <div className="rounded-[36px] bg-[#fff0f2] p-6 shadow-lg ring-1 ring-[#8f270e]/10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Need something else?</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">Custom decoration available</h3>
              <p className="mt-4 text-gray-600">Tell us your theme, venue, and guest count. We will plan a custom set-up for you.</p>
              <a
                href="https://wa.me/917217250250?text=Hi%20King%20Baker's%20team!%20I%20need%20a%20custom%20decoration%20booking."
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
              >
                Chat on WhatsApp
              </a>
            </div>

            <PageTrustStrip />
          </aside>
        </div>
      </main>
    </div>
  );
}
