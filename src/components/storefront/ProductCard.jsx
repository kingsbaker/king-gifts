import { formatSameDayText } from '../../utils/handlers';

export default function ProductCard({ item }) {
  return (
    <article className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
      <div className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-xl shadow-sm">
        ❤️
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8f270e] shadow-sm">
        🚚 Same-Day in Muzaffarnagar
      </div>
      <img src={item.image} alt={item.name} className="h-48 w-full rounded-3xl object-cover" />
      <div className="mt-4 space-y-3">
        <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{formatSameDayText()}</p>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-lg font-bold text-[#8f270e]">₹{item.sp}</span>
          <span className="text-gray-400 line-through">₹{item.mrp}</span>
          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
            {item.discount}% off
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center gap-1">⭐ {item.rating}</span>
          <span>{item.count} reviews</span>
        </div>
        <button className="w-full rounded-full bg-[#8f270e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
          Add to Cart
        </button>
      </div>
    </article>
  );
}
