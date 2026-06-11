import AnnouncementBar from '../components/storefront/AnnouncementBar';
import Header from '../components/storefront/Header';
import HeroSlider from '../components/storefront/HeroSlider';
import OccasionStrip from '../components/storefront/OccasionStrip';
import CategoryGrid from '../components/storefront/CategoryGrid';
import HorizontalSection from '../components/storefront/HorizontalSection';
import ProductCard from '../components/storefront/ProductCard';
import TwoColGrid from '../components/storefront/TwoColGrid';
import BestSellers from '../components/storefront/BestSellers';
import CorporateBanner from '../components/storefront/CorporateBanner';
import Reviews from '../components/storefront/Reviews';
import FAQ from '../components/storefront/FAQ';
import TrustStrip from '../components/storefront/TrustStrip';
import PopularSearches from '../components/storefront/PopularSearches';
import Footer from '../components/storefront/Footer';
import BottomNav from '../components/storefront/BottomNav';
import FloatingBtns from '../components/storefront/FloatingBtns';
import '../components/storefront/scrollbar.css';
import {
  trendingProducts,
  flowers,
  cakes,
  decorations,
  personalizedGifts,
} from '../data/sampleData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnnouncementBar />
      <Header />
      <main className="pb-16">
        <HeroSlider />
        <OccasionStrip />
        <CategoryGrid />
        <HorizontalSection title="Trending Gifts on King Baker's" subtitle="Wide Range of Options" items={trendingProducts} CardComponent={ProductCard} />
        <TwoColGrid title="Fresh Flower Delivery" subtitle="Make their day bloom" items={flowers} CardComponent={ProductCard} />
        <HorizontalSection title="Same Day Cake Delivery" subtitle="Fresh Cake Doorstep Delivery" items={cakes} CardComponent={ProductCard} />
        <BestSellers />
        <HorizontalSection title="Try Our Best Decoration" subtitle="Decoration you will love" items={decorations} CardComponent={ProductCard} />
        <TwoColGrid title="Top-Selling Cakes" subtitle="Cakes you will love" items={cakes} CardComponent={ProductCard} />
        <HorizontalSection title="Personalized Gifts That Feel Special" subtitle="Custom mugs T-shirts frames LED lamps" items={personalizedGifts} CardComponent={ProductCard} />
        <CorporateBanner />
        <Reviews />
        <FAQ />
        <TrustStrip />
        <PopularSearches />
        <Footer />
      </main>
      <BottomNav />
      <FloatingBtns />
    </div>
  );
}
