import { Link } from 'react-router-dom';

const occasionItems = [
  { id: 1, name: 'Birthday', emoji: '🎂', link: '/cakes' },
  { id: 2, name: 'Anniversary', emoji: '💍', link: '/flowers' },
  { id: 3, name: 'Baby Shower', emoji: '🍼', link: '/gifts' },
  { id: 4, name: 'Wedding', emoji: '💒', link: '/gifts' },
  { id: 5, name: 'Festival', emoji: '🪔', link: '/gifts' },
  { id: 6, name: 'Corporate', emoji: '🏢', link: '/gifts' },
];

export default function OccasionStrip() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
          {occasionItems.map((occasion) => (
            <Link key={occasion.id} to={occasion.link} className="min-w-[96px] shrink-0 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#8f270e]/20 bg-[#fff0f2] text-3xl">
                {occasion.emoji}
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-700">{occasion.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
