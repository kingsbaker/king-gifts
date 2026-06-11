import { occasions } from '../../data/sampleData';

export default function OccasionStrip() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
          {occasions.map((occasion) => (
            <div key={occasion.id} className="min-w-[96px] shrink-0 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#8f270e]/20 bg-[#fff0f2] text-3xl">
                {occasion.emoji}
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-700">{occasion.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
