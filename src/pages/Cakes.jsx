import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { cakeProducts } from "../data/products";

const filterOptions = ["All", "Birthday", "Designer", "Theme", "Eggless", "Photo Cake"];
const sortOptions = ["Popular", "Price Low - High", "Price High - Low"];

export default function Cakes() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortKey, setSortKey] = useState("Popular");
  const [egglessOnly, setEgglessOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = cakeProducts.filter((product) =>
      activeFilter === "All" || product.tags?.includes(activeFilter)
    );

    if (egglessOnly) {
      result = result.filter((product) => product.tags?.includes("Eggless"));
    }

    if (sortKey === "Price Low - High") {
      return [...result].sort((a, b) => a.price - b.price);
    }
    if (sortKey === "Price High - Low") {
      return [...result].sort((a, b) => b.price - a.price);
    }
    return result;
  }, [activeFilter, egglessOnly, sortKey]);

  return (
    <div className="bg-[#fff9f4] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <div className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Fresh Cakes</p>
            <h1 className="mt-3 text-4xl font-bold text-gray-900">Celebrate with delicious cake moments</h1>
            <p className="mt-4 text-gray-600">From birthday cakes to personalized photo cakes, we bake every order with fresh ingredients and fast delivery.</p>
          </div>

          <div className="mb-6 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
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
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <label className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
                <input
                  type="checkbox"
                  checked={egglessOnly}
                  onChange={(event) => setEgglessOnly(event.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-pink-600"
                />
                Eggless only
              </label>
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
