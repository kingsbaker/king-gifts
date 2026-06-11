export default function BestSellers() {
  const smallCards = [
    { id: 1, title: 'Custom Cakes', description: 'Personalized designs for every celebration.' },
    { id: 2, title: 'Premium Bouquets', description: 'Fresh flowers arranged with love.' },
    { id: 3, title: 'Decor Styling', description: 'Beautiful looks for birthday parties.' },
    { id: 4, title: 'Gift Hampers', description: 'Curated surprises for loved ones.' },
  ];

  return (
    <section className="bg-[#fff0f2] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl bg-[#fce8e9] p-8 shadow-sm lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f270e]">Try Our Best Sellers</p>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Celebrate with crowd favorites from King Baker's.</h2>
              <p className="mt-4 text-sm text-gray-600">Trusted by locals for fresh delivery and joyful gifting.</p>
              <button className="mt-6 rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
                ORDER NOW
              </button>
            </div>
            <div className="mt-8 lg:mt-0">
              <img src="https://images.unsplash.com/photo-1542827635-17bf8755c684?w=600" alt="Best seller" className="h-64 w-full rounded-3xl object-cover" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {smallCards.map((card) => (
              <div key={card.id} className="rounded-3xl bg-[#ffe8ec] p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
