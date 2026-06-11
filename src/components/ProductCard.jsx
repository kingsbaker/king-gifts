import { useNavigate } from "react-router-dom";
import { Star, Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  if (!product) return null;

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const goToProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={goToProduct}
      role="button"
      className="group cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#8f270e] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goToProduct();
          }}
          className="absolute right-3 top-3 rounded-full bg-white p-2 text-[#8f270e] shadow-sm transition hover:bg-gray-100"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 overflow-hidden text-ellipsis max-h-[3rem]">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 ${index < Math.floor(product.rating || 4) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span>({product.reviews || 0})</span>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-2xl font-bold text-[#8f270e]">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
              {discount}% OFF
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goToProduct();
          }}
          className="w-full rounded-full bg-[#8f270e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
