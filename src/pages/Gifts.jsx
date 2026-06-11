import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { giftProducts } from "../data/products";

const filterOptions = ["All", "Soft Toys", "Hampers", "Corporate", "Personalised"];

export default function Gifts() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() =>
    giftProducts.filter((product) =>
      activeFilter === "All" || product.tags?.includes(activeFilter)
    ),
  [activeFilter]
  );

  return (
    <div className="bg-[#f7f3ff] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Gift Collections</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">Handpicked gifts for every celebration</h1>
            <p className="mt-4 text-gray-600">Gifts that make moments memorable — from cute keepsakes to premium hampers and personalized goodies.</p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2 overflow-x-auto pb-1">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === option
                    ? "border-[#8f270e] bg-[#8f270e] text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#8f270e] hover:text-[#8f270e]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
