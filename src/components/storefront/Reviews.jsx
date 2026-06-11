export default function Reviews() {
  const reviewItems = [
    { id: 1, score: 5, name: 'Priya, Muzaffarnagar', text: 'Fantastic service and on-time delivery!' },
    { id: 2, score: 4.8, name: 'Aman, Meerut', text: 'Beautiful arrangement, great packaging.' },
    { id: 3, score: 4.9, name: 'Neha, Delhi', text: 'Loved the flowers and the gift hamper.' },
    { id: 4, score: 4.7, name: 'Rohan, Noida', text: 'The cake was delicious and fresh.' },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-[#fff0f2] p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f270e]">Customer Rating</h3>
            <p className="mt-4 text-5xl font-bold text-gray-900">4.6</p>
            <div className="mt-8 space-y-4">
              {['5 star', '4 star', '3 star', '2 star'].map((label, idx) => (
                <div key={label} className="space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{label}</span>
                    <span>{70 - idx * 15}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full rounded-full bg-[#8f270e]" style={{ width: `${70 - idx * 15}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4 overflow-x-auto scrollbar-hide px-1 py-2">
            <div className="flex gap-4">
              {reviewItems.map((review) => (
                <div key={review.id} className="min-w-[280px] rounded-3xl bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[#fff0f2] px-3 py-1 text-sm font-semibold text-[#8f270e]">⭐ {review.score}</span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Verified</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">{review.text}</p>
                  <p className="mt-5 text-sm font-semibold text-gray-900">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
