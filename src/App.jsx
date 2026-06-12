import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Cakes from "./pages/Cakes";
import Gifts from "./pages/Gifts";
import Cart from "./pages/Cart";
import NewCheckout from "./pages/NewCheckout";
import Decorations from "./pages/Decorations";
import Login from "./pages/Login";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Return from "./pages/Return";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import siteConfig from "./siteConfig";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/flowers" element={<Flowers />} />
                <Route path="/cakes" element={<Cakes />} />
                <Route path="/gifts" element={<Gifts />} />
                <Route path="/decorations" element={<Decorations />} />
                <Route path="/search" element={<Search />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<NewCheckout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/return" element={<Return />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <a
                href={`https://wa.me/91${siteConfig.whatsapp}?text=Hi%20King%20Gifts!%20I%20need%20help%20with%20an%20order.`}
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-24 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-white shadow-xl transition hover:bg-[#1ebe5d] md:right-8"
              >
                <span className="text-lg">💬</span>
                <span className="text-sm font-semibold">WhatsApp</span>
              </a>

              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
