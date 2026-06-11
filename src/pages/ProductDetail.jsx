import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { allProducts } from "../data/products";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = allProducts.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fff7f3] px-4 py-24 text-gray-900 md:px-8">
        <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-2xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">Product missing</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-3 text-gray-600">The product you are looking for does not exist or may have been removed.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/" className="rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">Back to Home</Link>
            <Link to="/gifts" className="rounded-full border border-[#8f270e] px-6 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-[#8f270e] hover:text-white">Browse Gifts</Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => navigate("/cart"), 1000);
  };

  return (
    <div className="min-h-screen bg-[#fff7f3] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
            <div className="rounded-3xl bg-[#f8e8e3] p-8 text-center">
              <div className="text-[5rem]">{product.emoji}</div>
              <p className="mt-4 text-sm text-gray-600">{product.category}</p>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-3 text-gray-600">A premium gift choice for special occasions, carefully prepared and delivered fresh.</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-[#f6f0ef] px-4 py-2 text-sm text-[#8f270e] font-semibold">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-700">{product.rating} ★</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-gray-200 bg-[#faf7f5] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8f270e]">Delivery</p>
                  <p className="mt-2 text-sm text-gray-600">Same-day available in Muzaffarnagar if ordered before 4 PM.</p>
                </div>
                <div className="rounded-3xl border border-gray-200 bg-[#faf7f5] p-5">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#8f270e]">Support</p>
                  <p className="mt-2 text-sm text-gray-600">Chat on WhatsApp for a custom message card or urgent delivery.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-3">
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((qty) => Math.max(1, qty - 1))}
                    className="text-gray-500 disabled:cursor-not-allowed"
                  >-</button>
                  <span className="font-semibold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((qty) => qty + 1)}
                    className="text-gray-500"
                  >+</button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`rounded-full px-6 py-3 text-sm font-semibold text-white transition ${added ? "bg-emerald-500" : "bg-[#8f270e] hover:bg-[#7a2310]"}`}>
                  {added ? "Added to cart!" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">You may also like</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {allProducts
              .filter((item) => item.category === product.category && item.id !== product.id)
              .slice(0, 3)
              .map((item) => (
                <Link key={item.id} to={`/product/${item.id}`} className="rounded-3xl border border-gray-200 p-4 transition hover:shadow-md">
                  <div className="text-4xl">{item.emoji || "🎁"}</div>
                  <p className="mt-3 text-sm text-gray-500">{item.category}</p>
                  <h3 className="mt-2 font-semibold text-gray-900">{item.name}</h3>
                  <p className="mt-3 text-lg font-bold text-[#8f270e]">₹{item.price}</p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
