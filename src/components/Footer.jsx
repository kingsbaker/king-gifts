import { Link } from "react-router-dom";
import siteConfig from "../siteConfig";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-[#8f270e]">👑 {siteConfig.brandName}</div>
            <p className="text-sm text-gray-600">{siteConfig.tagline}</p>
            <p className="text-sm text-gray-600">
              Flowers • Cakes • Gifts • Decorations • Events
            </p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#8f270e]"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#8f270e]"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="transition hover:text-[#8f270e]"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 border-l-4 border-[#8f270e] pl-3">
              Quick Links
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/" className="block transition hover:text-[#8f270e]">Home</Link>
              <Link to="/flowers" className="block transition hover:text-[#8f270e]">Flowers</Link>
              <Link to="/cakes" className="block transition hover:text-[#8f270e]">Cakes</Link>
              <Link to="/gifts" className="block transition hover:text-[#8f270e]">Gifts</Link>
              <Link to="/about" className="block transition hover:text-[#8f270e]">About Us</Link>
              <Link to="/contact" className="block transition hover:text-[#8f270e]">Contact Us</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 border-l-4 border-[#8f270e] pl-3">
              Policies
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/terms" className="block transition hover:text-[#8f270e]">Terms & Conditions</Link>
              <Link to="/privacy" className="block transition hover:text-[#8f270e]">Privacy Policy</Link>
              <Link to="/return" className="block transition hover:text-[#8f270e]">Return & Refund</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-gray-800 border-l-4 border-[#8f270e] pl-3">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 Customer: {siteConfig.phoneDisplay}</p>
              <p>📞 Head Office: {siteConfig.headOfficeDisplay}</p>
              <p>✉️ {siteConfig.email}</p>
              <p>📍 {siteConfig.address}</p>
              <p>📍 {siteConfig.city} — {siteConfig.pincode}</p>
              <p>⏰ 9 AM – 9 PM | 7 Days a Week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#8f270e]/5 border-t border-[#8f270e]/10 py-4">
        <div className="mx-auto flex flex-col gap-3 px-4 text-sm text-gray-700 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
          <span className="font-semibold text-[#8f270e]">🚚 {siteConfig.deliveryCities}</span>
          <span className="text-gray-700">⚡ {siteConfig.deliveryTime} — Pan-India service</span>
        </div>
      </div>

      <div className="bg-[#8f270e] text-white">
        <div className="flex flex-col gap-3 px-4 py-4 text-sm md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-center">Made with ❤️ in Muzaffarnagar 🇮🇳 | Pan-India gift delivery</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['UPI', 'Visa', 'Mastercard', 'PayU', 'COD'].map((payment) => (
              <span key={payment} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white">
                {payment}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
