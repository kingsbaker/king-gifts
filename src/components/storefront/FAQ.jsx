import { useState } from 'react';

const faqs = [
  { id: 1, question: 'Do you deliver same day?', answer: 'Yes, same-day delivery is available for Muzaffarnagar orders placed before the cutoff time.' },
  { id: 2, question: 'Can I customize a cake?', answer: 'Absolutely, we offer custom cake designs and photo cakes for celebrations.' },
  { id: 3, question: 'Is packaging included in gift orders?', answer: 'Yes, every gift is beautifully wrapped with premium packaging included.' },
  { id: 4, question: 'Do you offer corporate gifts?', answer: 'Yes, we have tailor-made corporate gifting solutions and bulk order support.' },
  { id: 5, question: 'What payment options are accepted?', answer: 'We accept UPI, cards, net banking, and cash on delivery in eligible areas.' },
  { id: 6, question: 'Are flowers fresh?', answer: 'We source fresh flowers daily to ensure every bouquet arrives vibrant and fragrant.' },
  { id: 7, question: 'Can I track my order?', answer: 'Yes, order tracking is available through WhatsApp and the website after purchase.' },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-10 bg-[#fffaf8]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq) => (
              <button
                key={faq.id}
                type="button"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full rounded-3xl border border-gray-200 bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8f270e] text-white">{`0${faq.id}`}</div>
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <span className="text-2xl text-gray-400">{openId === faq.id ? '−' : '+'}</span>
                </div>
                {openId === faq.id && <p className="mt-4 text-sm leading-6 text-gray-600">{faq.answer}</p>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
