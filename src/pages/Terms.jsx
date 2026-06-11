function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-12 text-center">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
        <p className="opacity-80 mt-2">King Gift Collection — Please read carefully</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📦 Products</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Sabhi products website par availability ke hisaab se hain.</li>
            <li>• Supply mein dikkat aane par hum equivalent value ka substitute bhej sakte hain.</li>
            <li>• Kuch flowers "bud" mein deliver kiye jaate hain taaki unki life zyada ho.</li>
            <li>• Agar order poora nahi ho pata toh hum 30 din mein full refund karenge.</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🚚 Delivery</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Order place karne par aapko email confirmation milega.</li>
            <li>• Deliveries 9AM – 7PM ke beech ki jaati hain.</li>
            <li>• Public holidays par orders agli working day pe deliver honge.</li>
            <li>• Complete address aur phone number zaroor dein.</li>
            <li>• Order cancel/change karne ke liye 48 ghante pehle inform karein.</li>
            <li>• 48 ghante ke andar order cancel ya modify nahi hoga.</li>
            <li>• Midnight delivery confirmation agli subah 10AM tak milega.</li>
            <li>• Agar recipient ghar par nahi mila toh neighbour ya security ko deliver kiya jayega.</li>
            <li>• Agar recipient ne delivery refuse ki toh refund/change acceptable nahi hoga.</li>
          </ul>
          <div className="mt-4 bg-pink-50 rounded-xl p-4">
            <p className="font-semibold text-gray-700 mb-2">Standard Delivery Slots:</p>
            <p className="text-sm text-gray-600">8:00 AM – 9:00 PM</p>
            <p className="font-semibold text-gray-700 mt-2 mb-1">Midnight Delivery:</p>
            <p className="text-sm text-gray-600">11:00 PM – 12:00 AM (₹150 extra)</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">💰 Refund Policy</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Refund sirf service failure ke case mein milega.</li>
            <li>• Refund amount paid amount se zyada nahi hoga.</li>
            <li>• Quality complaint ke liye 24 ghante ke andar email karein.</li>
            <li>• Complaint valid paye jaane par 24 ghante mein re-delivery + complimentary flowers bheje jaayenge.</li>
            <li>• Cake/card pe message miss hone ka guarantee nahi — hum poori koshish karte hain.</li>
            <li>• Perishable products ke complaints 24 ghante ke andar karni hogi.</li>
          </ul>
          <div className="mt-4 bg-yellow-50 rounded-xl p-4">
            <p className="text-sm font-semibold text-gray-700">Complaint ke liye contact karein:</p>
            <p className="text-sm text-gray-600 mt-1">📧 KingBakersmzn@gmail.com</p>
            <p className="text-sm text-gray-600">📞 7310558000 (8AM – 11PM)</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">✅ Safety Measures</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Hamare office aur outlet mein best hygiene practices follow ki jaati hain.</li>
            <li>• Delivery executives mask aur gloves pehente hain.</li>
            <li>• Cake boxes delivery se pehle sanitize ki jaati hain.</li>
            <li>• Bakers aur delivery executives ki proper screening hoti hai.</li>
            <li>• Social distancing follow ki jaati hai delivery ke waqt.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
export default Terms;