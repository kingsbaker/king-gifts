import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { flowerProducts } from "../data/products";

const filterOptions = ["All", "Roses", "Carnations", "Orchids", "Lilies", "Mixed", "Bouquets"];
const sortOptions = ["Popular", "Price Low - High", "Price High - Low"];

export default function Flowers() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortKey, setSortKey] = useState("Popular");

  const filtered = useMemo(() => {
    const result = flowerProducts.filter((product) =>
      activeFilter === "All" || product.tags?.includes(activeFilter)
    );

    if (sortKey === "Price Low - High") {
      return [...result].sort((a, b) => a.price - b.price);
    }
    if (sortKey === "Price High - Low") {
      return [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeFilter, sortKey]);

  return (
    <div className="bg-[#fff7f6] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Fresh Flowers</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">Blooming bouquets for every moment</h1>
            <p className="mt-4 text-gray-600">Choose from handcrafted flower arrangements, same-day delivery across Muzaffarnagar and nearby cities.</p>
          </div>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
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
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Sort by:</span>
              <select
                value={sortKey}
                onChange={(event) => setSortKey(event.target.value)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-700 outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
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
