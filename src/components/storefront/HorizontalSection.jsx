export default function HorizontalSection({ title, subtitle, items, CardComponent }) {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          </div>
          <a href="#" className="text-sm font-semibold text-[#8f270e] hover:text-[#7a2310]">
            View all →
          </a>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide px-1 pb-2">
          {items.map((item) => (
            <div key={item.id} className="min-w-[260px] shrink-0">
              <CardComponent item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
