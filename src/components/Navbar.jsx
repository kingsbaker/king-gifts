import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const categories = [
    { name: "Home", path: "/" },
    { name: "Flowers", path: "/flowers" },
    { name: "Cakes", path: "/cakes" },
    { name: "Gifts", path: "/gifts" },
    { name: "Contact", path: "/contact" },
    { name: "Cart", path: "/cart" },
  ];

  const isActive = (path) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-[#8f270e] text-white">
          <div className="max-w-7xl mx-auto flex flex-col gap-3 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span>Deliver to:</span>
              <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition">
                Muzaffarnagar ▼
              </button>
            </div>
            <div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <Link to="/" className="text-2xl font-bold text-[#8f270e]">
              🎁 King Gifts
            </Link>

            <form onSubmit={handleSearch} className="mx-auto w-full max-w-xl">
              <div className="flex items-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#8f270e]">
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  type="text"
                  placeholder="Search gifts, flowers, cakes..."
                  className="w-full border-none bg-transparent px-4 py-3 text-sm text-gray-700 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#8f270e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="hidden items-center gap-4 text-sm font-semibold text-gray-700 md:flex">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  className={`transition ${isActive(cat.path) ? "text-[#8f270e] border-b-2 border-[#8f270e] pb-1" : "text-gray-700 hover:text-[#8f270e]"}`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          {isOpen && (
            <div className="mt-4 space-y-2 rounded-2xl border border-gray-200 bg-gray-50 p-4 md:hidden">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-[#8f270e]/10"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="md:hidden h-20" />

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white text-gray-700 shadow-[0_-2px_15px_rgba(0,0,0,0.08)] md:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
          <Link to="/" className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${isActive("/") ? "text-[#8f270e]" : "text-gray-600 hover:text-[#8f270e]"}`}>
            <span className="text-lg">🏠</span>
            Home
          </Link>
          <Link to="/flowers" className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${isActive("/flowers") ? "text-[#8f270e]" : "text-gray-600 hover:text-[#8f270e]"}`}>
            <span className="text-lg">🗂</span>
            Flowers
          </Link>
          <Link to="/search" className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${isActive("/search") ? "text-[#8f270e]" : "text-gray-600 hover:text-[#8f270e]"}`}>
            <span className="text-lg">🔍</span>
            Search
          </Link>
          <Link to="/cart" className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${isActive("/cart") ? "text-[#8f270e]" : "text-gray-600 hover:text-[#8f270e]"}`}>
            <span className="text-lg">🛒</span>
            Cart
          </Link>
          <Link to="/contact" className={`flex flex-col items-center gap-1 text-sm font-semibold transition ${isActive("/contact") ? "text-[#8f270e]" : "text-gray-600 hover:text-[#8f270e]"}`}>
            <span className="text-lg">📞</span>
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
