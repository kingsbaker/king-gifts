import { useEffect, useState } from 'react';

const slides = [
  {
    title: "Gifts Matlab King Baker's",
    subtitle: 'Same Day Delivery Muzaffarnagar',
    button: 'Shop Now',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900',
  },
  {
    title: 'Fresh Flowers Since 1972',
    subtitle: 'Order Now for Same Day',
    button: 'Order Now',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900',
  },
  {
    title: 'Birthday Decoration at Home',
    subtitle: 'Balloons Themes Surprises',
    button: 'Book Now',
    image: 'https://images.unsplash.com/photo-1520962913708-9001579bc0ff?w=900',
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 rounded-[40px] bg-gradient-to-r from-[#fff0f2] via-white to-[#fff] p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div className="flex flex-col justify-center gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Celebration destination</p>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">{slides[activeIndex].title}</h1>
            <p className="max-w-xl text-sm leading-7 text-gray-600">{slides[activeIndex].subtitle}</p>
            <button className="w-fit rounded-full bg-[#8f270e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
              {slides[activeIndex].button}
            </button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full ${activeIndex === index ? 'bg-[#8f270e]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
          <div className="order-first md:order-last">
            <img src={slides[activeIndex].image} alt={slides[activeIndex].title} className="h-[360px] w-full rounded-[32px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
