import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import ProductCard from "../components/storefront/ProductCard";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const { searchWithQuery } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();
  const initialSearch = query.get("q")?.trim() || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [debouncedTerm, setDebouncedTerm] = useState(initialSearch);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 150);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (initialSearch !== searchTerm) {
      setSearchTerm(initialSearch);
    }
  }, [initialSearch]);

  const results = useMemo(() => searchWithQuery(debouncedTerm), [debouncedTerm, searchWithQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="min-h-screen bg-[#fffaf8] text-gray-900 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Search Products</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900">Find the perfect gift fast</h1>
          <p className="mt-3 text-gray-600">
            {searchTerm
              ? `Showing results for “${searchTerm}”`
              : "Search cakes, flowers, gifts, and decorations."
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex items-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#8f270e]">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search gifts, flowers, cakes..."
              className="w-full border-none bg-transparent px-4 py-3 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#8f270e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
            >
              Search
            </button>
          </div>
        </form>

        {!searchTerm ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-[#fff4ef] p-10 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-3">No search query yet.</p>
            <p className="text-sm text-gray-600">Type a term above to explore products instantly.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {["flowers", "cakes", "gifts", "birthday", "anniversary"].map((term) => (
                <Link
                  key={term}
                  to={`/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-[#8f270e] px-4 py-2 text-[#8f270e] transition hover:bg-[#8f270e] hover:text-white"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center">
            <p className="text-lg font-semibold text-red-700">No products found.</p>
            <p className="mt-2 text-sm text-red-600">Try a different keyword like “cake”, “roses”, or “gift”.</p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {results.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
