import { useState } from "react";
import siteConfig from "../siteConfig";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", city: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleWhatsApp = () => {
    const text = `Hi King Gifts!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ACity: ${form.city}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/91${siteConfig.whatsapp}?text=${text}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", email: "", city: "", message: "" });
  };

  return (
    <>
      {/* Header */}
      <div className="bg-[#8f270e] py-10 text-center text-white">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-1 text-sm opacity-80">We're happy to help — reach out anytime</p>
      </div>

      {/* Contact Cards */}
      <div className="bg-[#fdf6f4] py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">

          <a href={`https://wa.me/91${siteConfig.whatsapp}`} target="_blank" rel="noreferrer"
            className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition text-center">
            <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-xl">💬</div>
            <p className="font-bold text-gray-800 text-sm">WhatsApp</p>
            <p className="text-xs text-gray-500">{siteConfig.phoneDisplay}</p>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Instant Reply</span>
          </a>

          <a href={`tel:+91${siteConfig.phone}`}
            className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition text-center">
            <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-xl">📞</div>
            <p className="font-bold text-gray-800 text-sm">Call Us</p>
            <p className="text-xs text-gray-500">{siteConfig.phoneDisplay}</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">9 AM – 9 PM</span>
          </a>

          <a href={`mailto:${siteConfig.email}`}
            className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition text-center">
            <div className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center text-xl">✉️</div>
            <p className="font-bold text-gray-800 text-sm">Email</p>
            <p className="text-xs text-gray-500 break-all">{siteConfig.email}</p>
            <span className="text-xs bg-red-100 text-[#8f270e] px-2 py-0.5 rounded-full">24hr Reply</span>
          </a>

          <a href={siteConfig.instagram} target="_blank" rel="noreferrer"
            className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition text-center">
            <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center text-xl">📸</div>
            <p className="font-bold text-gray-800 text-sm">Instagram</p>
            <p className="text-xs text-gray-500">@kingbakers.in</p>
            <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Follow Us</span>
          </a>

        </div>
      </div>

      {/* Form + Info */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-5">Fill the form and we'll get back to you shortly.</p>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-4 text-sm">
                ✅ Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f270e]/30 focus:border-[#8f270e]" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">WhatsApp No *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required
                    placeholder="10-digit number" maxLength={10}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f270e]/30 focus:border-[#8f270e]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Email (Optional)</label>
                  <input name="email" value={form.email} onChange={handleChange} type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f270e]/30 focus:border-[#8f270e]" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Your City *</label>
                  <select name="city" value={form.city} onChange={handleChange} required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f270e]/30 focus:border-[#8f270e] bg-white">
                    <option value="">Select city</option>
                    {["Muzaffarnagar","Meerut","Shamli","Deoband","Khatauli",
                      "Thana Bhawan","Roorkee","Haridwar","Saharanpur","Other"].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1 block">Your Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="How can we help? e.g. I'd like to order a birthday cake..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8f270e]/30 focus:border-[#8f270e] resize-none" />
              </div>

              <div className="flex gap-3">
                <button type="submit"
                  className="flex-1 bg-[#8f270e] text-white font-semibold py-3 rounded-lg hover:bg-[#7a2009] transition text-sm">
                  Send Message
                </button>
                <button type="button" onClick={handleWhatsApp}
                  className="flex-1 bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition text-sm flex items-center justify-center gap-2">
                  💬 WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col gap-5">

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-52 shadow-sm">
              <iframe title="King Gifts Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55693.17767324226!2d77.64499!3d29.47353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c3d0e8b0f5f0f%3A0x5b3ef22d8f64e12a!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
            </div>

            {/* Store Details */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-3">Store Information</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="text-[#8f270e]">📍</span>
                  <span>{siteConfig.address}, {siteConfig.city} — {siteConfig.pincode}<br/>
                    <span className="text-xs text-[#8f270e] font-medium">({siteConfig.addressNote})</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8f270e]">📞</span>
                  <span>
                    <span className="font-medium">Customer Care:</span> {siteConfig.phoneDisplay}<br/>
                    <span className="font-medium">Head Office:</span> {siteConfig.headOfficeDisplay}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8f270e]">🕘</span>
                  <span>Delivery: {siteConfig.deliveryHours} ({siteConfig.deliveryDays})</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8f270e]">⚡</span>
                  <span>Same-day delivery available (order before {siteConfig.sameDayCutoff})</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8f270e]">🌐</span>
<span>Pan-India delivery across India</span>
              </li>
            </ul>
          </div>

          {/* Delivery Zones */}
          <div className="rounded-2xl border border-[#8f270e]/20 bg-[#fdf6f4] p-6 text-sm text-gray-700">
            <p className="font-semibold text-[#8f270e] mb-3 uppercase tracking-wider">Delivery Zones</p>
            <p>Delivery available in 5000+ cities across India.</p>
            <p className="mt-2">Starts in 20 minutes.</p>
            <p className="mt-2">Same day delivery available.</p>
            </div>

          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a href={`https://wa.me/91${siteConfig.whatsapp}?text=Hi%20King%20Gifts!%20I%20would%20like%20to%20place%20an%20order%20🎁`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl hover:bg-green-600 transition">
        <span className="text-lg">💬</span>
        <span className="font-semibold text-sm hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}