import { categories } from '../../data/sampleData';

export default function CategoryGrid() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8f270e]">Explore categories</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Muzaffarnagar's Complete Celebration Platform</h2>
          <p className="mt-3 text-sm text-gray-600">Everything you need for every celebration.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="rounded-3xl bg-white p-4 shadow-sm">
              <img src={category.image} alt={category.name} className="h-44 w-full rounded-3xl object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
