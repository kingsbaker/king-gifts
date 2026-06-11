function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">About King Gift Collection</h1>
        <p className="text-xl opacity-90">Muzaffarnagar ka #1 Trusted Gift Store — Since 2015</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎁 Hamari Kahani</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            King Gift Collection aapke pyaar ko ek surprise ke roop mein express karne ka ek behatareen tarika hai. Apne priyajano ko khush karein hamare amazing gifts, cakes aur flowers ke saath.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hum Muzaffarnagar mein ek one-stop shop hain jahaan aap cakes, flowers, teddies, chocolates aur personalised gifts har occasion ke liye order kar sakte hain. 2015 se hum Muzaffarnagar aur aaspaas ke customers ki seva karte aa rahe hain.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hamara delivery network 5000+ cities across India tak jaata hai, taaki aapke pyaar bhare pal har kone tak surakshit aur tezi se pahunch sake.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number:"2015", label:"Since" },
            { number:"10,000+", label:"Happy Customers" },
            { number:"2500+", label:"Products" },
            { number:"200+", label:"Delivery Partners" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6 text-center">
              <p className="text-3xl font-bold text-pink-600 mb-1">{s.number}</p>
              <p className="text-gray-600 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🚚 Hamari Delivery Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon:"⚡", title:"Same Day Delivery", desc:"Aaj order karein, aaj deliver. Muzaffarnagar ke har kone mein." },
              { icon:"🌙", title:"Midnight Delivery", desc:"Raat 11 baje surprise delivery bhi available hai." },
              { icon:"⏰", title:"Fixed Time Slots", desc:"Morning, Afternoon, Evening aur Night slots mein delivery." },
              { icon:"🎂", title:"Express 2-3 Hours", desc:"Urgent order? Sirf 2-3 ghante mein deliver karenge." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 bg-pink-50 rounded-xl">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="font-bold text-gray-800">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎂 Delivery Time Slots</h2>
          <div className="space-y-3">
            {[
              { slot:"Slot 1", time:"8:00 AM – 12:00 Noon", icon:"🌅" },
              { slot:"Slot 2", time:"12:00 PM – 3:00 PM", icon:"☀️" },
              { slot:"Slot 3", time:"3:00 PM – 6:00 PM", icon:"🌆" },
              { slot:"Slot 4", time:"6:00 PM – 9:00 PM", icon:"🌙" },
              { slot:"Midnight", time:"11:00 PM – 12:00 AM", icon:"🌃" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-semibold text-gray-700 w-24">{s.slot}:</span>
                <span className="text-gray-600">{s.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">⚠️ Special delivery slots (Midnight/Express) pe ₹150 extra charge lagta hai.</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🏢 Our Group of Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name:"Hotel King City", desc:"Roorkee Road, Novelty Chowk", icon:"🏨" },
              { name:"King Bakers", desc:"kingbakers.in", icon:"🎂" },
              { name:"King Events", desc:"kingdecor.in", icon:"🎊" },
              { name:"Custom Cake Studio", desc:"Personalised celebration cakes", icon:"🌸" },
              { name:"King Gift Collection", desc:"Premium Gifts & Flowers", icon:"🎁" },
              { name:"JojoCart.com", desc:"E-Commerce Platform", icon:"🛒" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl">
                <div className="text-3xl">{b.icon}</div>
                <div>
                  <p className="font-bold text-gray-800">{b.name}</p>
                  <p className="text-gray-500 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">📞 Humse Sampark Karein</h2>
          <p className="text-lg mb-2">📍 Muzaffarnagar, Uttar Pradesh</p>
          <p className="text-lg mb-2">📞 7310558000</p>
          <p className="text-lg">✉️ KingBakersmzn@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
export default About;