import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteConfig from "../siteConfig";
import ProductCard from "../components/ProductCard";

const slides = [
  {
    title: "Same Day Delivery",
    subtitle: "Fresh Flowers & Cakes in Muzaffarnagar",
    button: "Order Now",
    link: "/cakes",
    bg: "from-[#8f270e] to-[#c0392b]",
  },
  {
    title: "10,000+ Gift Options",
    subtitle: "For Every Occasion & Every Budget",
    button: "Browse Gifts",
    link: "/gifts",
    bg: "from-[#6d1f0a] to-[#8f270e]",
  },
  {
    title: "All India Delivery",
    subtitle: "5000+ Cities Across India",
    button: "Check Your City",
    link: "/contact",
    bg: "from-[#8f270e] to-[#e74c3c]",
  },
];

const occasions = [
  { name: "Birthday", icon: "🎂", link: "/cakes" },
  { name: "Anniversary", icon: "💍", link: "/flowers" },
  { name: "Valentine's", icon: "❤️", link: "/flowers" },
  { name: "Wedding", icon: "💒", link: "/gifts" },
  { name: "Baby Shower", icon: "🍼", link: "/gifts" },
  { name: "Diwali", icon: "🪔", link: "/gifts" },
  { name: "Mother's Day", icon: "🌸", link: "/flowers" },
  { name: "Father's Day", icon: "👔", link: "/gifts" },
  { name: "Holi", icon: "🎨", link: "/gifts" },
  { name: "Christmas", icon: "🎄", link: "/gifts" },
  { name: "New Year", icon: "🎆", link: "/gifts" },
  { name: "Congratulations", icon: "🎉", link: "/gifts" },
];

const categories = [
  {
    name: "Fresh Flowers",
    emoji: "🌸",
    link: "/flowers",
    bg: "from-pink-300 via-pink-400 to-rose-400",
  },
  {
    name: "Cakes",
    emoji: "🎂",
    link: "/cakes",
    bg: "from-orange-400 via-orange-500 to-red-500",
  },
  {
    name: "Gifts",
    emoji: "🎁",
    link: "/gifts",
    bg: "from-purple-500 via-fuchsia-500 to-[#8f270e]",
  },
  {
    name: "Decorations",
    emoji: "🎈",
    link: "/gifts",
    bg: "from-teal-400 via-cyan-400 to-blue-500",
  },
];

const bestsellerProducts = [
  {
    id: 1,
    name: "Red Rose Bouquet",
    price: 599,
    originalPrice: 799,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Red+Roses",
    badge: "Bestseller",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Chocolate Birthday Cake",
    price: 849,
    originalPrice: 999,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Cake",
    badge: "Same Day",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mixed Flower Bouquet",
    price: 449,
    originalPrice: 599,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Bouquet",
    badge: "Popular",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Photo Mug",
    price: 299,
    originalPrice: 399,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Photo+Mug",
    badge: "New",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Eggless Vanilla Cake",
    price: 749,
    originalPrice: 899,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Eggless+Cake",
    badge: "Eggless",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Orchid Plant",
    price: 549,
    originalPrice: 699,
    image: "https://placehold.co/400x300/fce4ec/8f270e?text=Plant",
    badge: "Gift",
    rating: 4.7,
  },
];

const features = [
  {
    icon: "🚚",
    title: "Same Day Delivery",
    description: "Order before 4 PM for today delivery.",
  },
  {
    icon: "✅",
    title: "100% Fresh Products",
    description: "Fresh flowers and premium gifts always.",
  },
  {
    icon: "💬",
    title: "WhatsApp Tracking",
    description: "Live updates and instant support.",
  },
  {
    icon: "🌐",
    title: "Pan-India Delivery",
    description: "Delivery in 5000+ cities across India.",
  },
];

const reviews = [
  {
    name: "Rohit Sharma",
    city: "Muzaffarnagar",
    text: "Beautiful roses! Delivered on time for my wife's birthday. Will order again!",
  },
  {
    name: "Priya Gupta",
    city: "Meerut",
    text: "The chocolate cake was amazing! Fresh and perfect. Best cake shop in city!",
  },
  {
    name: "Amit Singh",
    city: "Shamli",
    text: "Ordered photo mug for anniversary. Quality was excellent. Fast delivery!",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (pincode.length === 6) {
      if (pincode.startsWith("251")) {
        setDeliveryStatus("✅ Same Day Delivery Available!");
      } else {
        setDeliveryStatus("📦 Pan-India delivery available");
      }
    } else {
      setDeliveryStatus("");
    }
  }, [pincode]);

  const handleSlide = (index) => {
    setActiveSlide(index);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="bg-white text-gray-900">
      <section className="relative overflow-hidden">
        <div className={`min-h-[540px] bg-gradient-to-r ${slides[activeSlide].bg} px-4 py-20 text-white transition-all duration-700 md:px-8`}>
          <div className="mx-auto max-w-6xl">
            <div className="w-full md:w-3/4 lg:w-2/4">
              <p className="text-sm uppercase tracking-[0.3em] opacity-80 mb-4">King Gifts • Muzaffarnagar</p>
              <h1 className="text-4xl font-bold md:text-6xl leading-tight">
                {slides[activeSlide].title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/90">
                {slides[activeSlide].subtitle}
              </p>
              <Link to={slides[activeSlide].link} className="inline-flex mt-8 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#8f270e] shadow-lg transition hover:bg-gray-100">
                {slides[activeSlide].button}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlide(index)}
              className={`h-2 rounded-full transition-all ${index === activeSlide ? "w-10 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-white transition hover:bg-white/40 md:left-8"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-white transition hover:bg-white/40 md:right-8"
        >
          ›
        </button>
      </section>

      <section className="relative -mt-12 px-4 md:px-8">
        <div className="mx-auto max-w-4xl rounded-[36px] bg-white p-6 shadow-xl ring-1 ring-gray-200 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900">Check Delivery in Your Area</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your pincode to know if same day delivery is available.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              inputMode="numeric"
              value={pincode}
              onChange={(event) => setPincode(event.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
              placeholder="Enter 6 digit pincode"
              className="w-full rounded-full border border-gray-300 px-5 py-3 text-gray-700 outline-none focus:border-[#8f270e] focus:ring-2 focus:ring-[#8f270e]/20"
            />
            <button className="rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
              Check
            </button>
          </div>

          <div className="mt-6 rounded-3xl border border-[#8f270e]/20 bg-[#fff5f2] p-5 text-sm text-gray-700">
            <p className="font-semibold text-[#8f270e]">🌐 We deliver to 5000+ cities across India</p>
            <p className="mt-2">⚡ Delivery starts in 20 minutes</p>
            <p className="mt-2">📦 Same day delivery available</p>
          </div>

          {deliveryStatus && (
            <div className={`mt-4 rounded-2xl px-5 py-4 text-sm font-semibold ${deliveryStatus.startsWith("✅") ? "bg-emerald-50 text-emerald-700" : "bg-sky-50 text-sky-700"}`}>
              {deliveryStatus}
            </div>
          )}
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f270e]">Shop by Occasion</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Perfect gift for every celebration</h2>
          </div>
          <div className="-mx-2 flex snap-x snap-mandatory overflow-x-auto px-2 pb-3 md:flex-wrap md:overflow-visible">
            {occasions.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="mx-2 mb-3 inline-flex min-w-[140px] flex-col items-center gap-3 rounded-3xl border border-gray-200 bg-[#8f270e]/10 px-4 py-5 text-center transition hover:-translate-y-1 hover:bg-[#8f270e] hover:text-white hover:shadow-lg md:min-w-[160px]"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-medium text-gray-700 transition hover:text-white md:text-sm">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f270e]">Shop by Category</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Explore curated collections</h2>
            </div>
            <Link to="/gifts" className="inline-flex items-center justify-center rounded-full border border-[#8f270e] px-6 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-[#8f270e] hover:text-white">
              View All
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className={`group relative overflow-hidden rounded-3xl p-6 text-white shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br ${category.bg}`}
              >
                <div className="mb-6 text-5xl">{category.emoji}</div>
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="mt-4 text-sm opacity-90">Shop Now →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f270e]">Bestseller Products</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Most loved by our customers</h2>
            </div>
            <Link to="/gifts" className="inline-flex items-center justify-center rounded-full border border-[#8f270e] px-6 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-[#8f270e] hover:text-white">
              View All
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fdf6f4] px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f270e]">Why Choose King Gifts?</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Trusted service for every celebration</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8f270e] text-2xl text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8f270e]">What Our Customers Say</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Real reviews from happy shoppers</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 text-4xl text-[#8f270e]">“</div>
                <p className="text-gray-700 mb-5">{review.text}</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#8f270e] px-4 py-16 text-white md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#7a2310] p-10 text-center shadow-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f8d7da]">Need a gift fast?</p>
          <h2 className="mt-4 text-3xl font-bold">Send joy today with King Gifts</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#f7d6d8] md:text-base">
            Browse our bestsellers, choose your favorite, and let us deliver fresh happiness across the city.
          </p>
          <Link to="/gifts" className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-gray-100">
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
}
