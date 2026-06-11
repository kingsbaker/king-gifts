import { Link, useLocation } from "react-router-dom";
import { useMemo } from "react";
import { allProducts } from "../data/products";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Search() {
  const query = useQuery();
  const searchTerm = query.get("q")?.trim() || "";
  const lowerSearchTerm = searchTerm.toLowerCase();

  const results = useMemo(() => {
    if (!lowerSearchTerm) return [];
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerSearchTerm) ||
      product.category.toLowerCase().includes(lowerSearchTerm)
    );
  }, [lowerSearchTerm]);

  return (
    <div className="min-h-screen bg-[#fffaf8] text-gray-900 px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Search Products</p>
          <h1 className="mt-3 text-4xl font-bold text-gray-900">Find the perfect gift fast</h1>
          <p className="mt-3 text-gray-600">
            {searchTerm
              ? `Showing results for “${searchTerm}”`
              : "Search cakes, flowers, gifts, cakes and more."
            }
          </p>
        </div>

        {!searchTerm ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-[#fff4ef] p-10 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-3">No search query yet.</p>
            <p className="text-sm text-gray-600">Type something in the navbar search to explore our products.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              {['flowers', 'cakes', 'gifts', 'birthday', 'anniversary'].map((term) => (
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
              <Link key={product.id} to={`/product/${product.id}`} className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="mb-4 h-44 w-full rounded-3xl object-cover" />
                <p className="text-sm text-gray-500">{product.category}</p>
                <h2 className="mt-2 text-lg font-semibold text-gray-900">{product.name}</h2>
                <p className="mt-4 text-xl font-bold text-[#8f270e]">₹{product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
