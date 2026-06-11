import { Link } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-[0_-2px_15px_rgba(0,0,0,0.08)] md:hidden">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 text-xs font-semibold text-gray-700">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#8f270e]">
          <span>🏠</span>
          <span>Home</span>
        </Link>
        <Link to="/gifts" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#8f270e]">
          <span>📦</span>
          <span>Catalogue</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#8f270e]">
          <span>📞</span>
          <span>Contact</span>
        </Link>
        <Link to="/login" className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#8f270e]">
          <span>👤</span>
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
}
