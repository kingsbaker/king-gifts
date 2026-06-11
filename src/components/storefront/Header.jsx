import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { title: 'CAKES', columns: ['Occasion', 'Flavour', 'Type', 'By City'] },
  { title: 'FLOWERS', columns: ['By Type', 'Occasion', 'Colour'] },
  { title: 'GIFTS', columns: ['Relation', 'Occasion', 'Special'] },
  { title: 'DECORATION', columns: ['Occasion', 'Type', 'City'] },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <button className="rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 md:hidden">
            ☰
          </button>
          <Link to="/" className="text-2xl font-bold text-[#8f270e]">👑 King Baker's</Link>
          <div className="hidden md:block">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <Link to="/cakes" className="hover:text-[#8f270e]">CAKES</Link>
              <Link to="/flowers" className="hover:text-[#8f270e]">FLOWERS</Link>
              <Link to="/gifts" className="hover:text-[#8f270e]">GIFTS</Link>
              <Link to="/contact" className="hover:text-[#8f270e]">DECORATION</Link>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:mt-0 md:grid-cols-[1fr_auto_auto] md:items-center">
          <div className="hidden rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-600 md:flex items-center gap-2">
            <span>📍</span>
            <span>Deliver to Muzaffarnagar ▼</span>
          </div>
          <div className="hidden md:block">
            <input
              type="search"
              placeholder="Search gifts, cakes, flowers..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#8f270e] focus:ring-2 focus:ring-[#8f270e]/20"
            />
          </div>
          <Link to="/cart" className="inline-flex items-center rounded-full bg-[#8f270e] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7a2310]">
            Cart
          </Link>
        </div>
      </div>

      <div className="hidden border-t border-gray-200 bg-white py-3 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm font-semibold text-gray-700">
          {menuItems.map((menu) => (
            <button
              key={menu.title}
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
              className="relative transition hover:text-[#8f270e]"
            >
              {menu.title}
              {openMenu === menu.title && (
                <div className="absolute left-0 top-full z-50 mt-3 w-screen max-w-5xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl">
                  <div className="grid gap-6 md:grid-cols-4">
                    {menu.columns.map((column) => (
                      <div key={column}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500">{column}</p>
                        <ul className="space-y-3 text-sm text-gray-700">
                          {[1, 2, 3, 4].map((item) => (
                            <li key={item}>
                              <a href="#" className="hover:text-[#8f270e]">{column} Option {item}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
