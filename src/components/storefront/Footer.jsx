import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold">King Baker's</h3>
            <p className="mt-4 text-sm text-gray-300">Fresh cakes, flowers, gifts and decor for every celebration in Muzaffarnagar.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/terms">Terms</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Categories</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/cakes">Cakes</Link></li>
              <li><Link to="/flowers">Flowers</Link></li>
              <li><Link to="/gifts">Gifts</Link></li>
              <li><Link to="/contact">Decor</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">Social</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#111] px-4 py-4 text-center text-sm text-gray-400">
        © 2026 King Baker's. All rights reserved.
      </div>
    </footer>
  );
}
