import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    address: "", city: "", pincode: "",
    date: "", slot: "", message: "",
    specialInstructions: "",
    nameOnCake: "",
    addressType: "Home"
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.address || !form.pincode || !form.date || !form.slot) {
      alert("Kripya sari zaroori details bharo!");
      return;
    }
    const msg = `🎁 NEW ORDER — King Gifts
━━━━━━━━━━━━━━━━━━
👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email || "N/A"}
━━━━━━━━━━━━━━━━━━
📍 Address: ${form.address}
🏠 Type: ${form.addressType}
🌆 City: ${form.city}
📮 Pincode: ${form.pincode}
━━━━━━━━━━━━━━━━━━
📅 Delivery Date: ${form.date}
⏰ Time Slot: ${form.slot}
━━━━━━━━━━━━━━━━━━
🎂 Naam on Cake: ${form.nameOnCake || "N/A"}
📸 Photo Cake: ${photo ? "Haan — Photo attach hai" : "Nahi"}
💬 Gift Message: ${form.message || "N/A"}
📝 Special Instructions: ${form.specialInstructions || "N/A"}
━━━━━━━━━━━━━━━━━━`;

    const whatsapp = `https://wa.me/917217250250?text=${encodeURIComponent(msg)}`;
    window.open(whatsapp, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-pink-600">
        📋 Delivery Details
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">

        {/* Personal Details */}
        <h2 className="font-bold text-gray-700 text-lg border-b pb-2">
          👤 Aapki Details
        </h2>

        <input name="name" placeholder="Aapka Naam *"
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        <input name="phone" placeholder="Phone Number *" type="tel"
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        <input name="email" placeholder="Email (optional)"
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        {/* Delivery Address */}
        <h2 className="font-bold text-gray-700 text-lg border-b pb-2 pt-2">
          📍 Delivery Address
        </h2>

        <textarea name="address" placeholder="Ghar / Flat No., Gali, Area *" rows={3}
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input name="city" placeholder="Shehar *"
            className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
            onChange={handleChange} />
          <input name="pincode" placeholder="Pincode *"
            className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
            onChange={handleChange} />
        </div>

        {/* Address Type */}
        <div>
          <p className="font-semibold text-gray-600 mb-2">Address Type *</p>
          <div className="flex gap-3">
            {["Home", "Office", "Others"].map(type => (
              <button key={type}
                onClick={() => setForm({ ...form, addressType: type })}
                className={`px-4 py-2 rounded-xl border font-semibold ${
                  form.addressType === type
                    ? "bg-pink-600 text-white border-pink-600"
                    : "bg-white text-gray-600 border-gray-300"
                }`}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Delivery Date & Slot */}
        <h2 className="font-bold text-gray-700 text-lg border-b pb-2 pt-2">
          📅 Delivery Time
        </h2>

        <input name="date" type="date"
          min={new Date().toISOString().split("T")[0]}
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        <select name="slot"
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange}>
          <option value="">⏰ Delivery Time Slot Chunein *</option>
          <option>🌅 Morning (8AM - 12PM)</option>
          <option>☀️ Afternoon (12PM - 4PM)</option>
          <option>🌆 Evening (4PM - 8PM)</option>
          <option>🌙 Night (8PM - 10PM)</option>
        </select>

        {/* Personalisation */}
        <h2 className="font-bold text-gray-700 text-lg border-b pb-2 pt-2">
          🎂 Personalisation
        </h2>

        <input name="nameOnCake"
          placeholder="Cake pe kya likhna hai? (e.g. Happy Birthday Rahul)"
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        {/* Photo Upload */}
        <div className="border-2 border-dashed border-pink-300 rounded-xl p-4 text-center">
          <p className="font-semibold text-gray-600 mb-2">📸 Photo Cake ke liye Image Upload karo</p>
          <p className="text-sm text-gray-400 mb-3">Only for Photo Cakes — JPG/PNG, max 10MB</p>

          <input type="file" accept="image/*" onChange={handlePhoto}
            className="hidden" id="photoUpload" />
          <label htmlFor="photoUpload"
            className="bg-pink-100 text-pink-600 px-6 py-2 rounded-xl cursor-pointer font-semibold hover:bg-pink-200">
            📁 Photo Choose Karo
          </label>

          {photoPreview && (
            <div className="mt-3">
              <img src={photoPreview} alt="preview"
                className="w-32 h-32 object-cover rounded-xl mx-auto border-2 border-pink-400" />
              <p className="text-green-600 text-sm mt-1 font-semibold">✅ Photo selected!</p>
            </div>
          )}
        </div>

        {/* Gift Message */}
        <h2 className="font-bold text-gray-700 text-lg border-b pb-2 pt-2">
          💌 Gift Message
        </h2>

        <textarea name="message"
          placeholder="Gift ke saath koi message likhna hai? (optional)" rows={2}
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        {/* Special Instructions */}
        <textarea name="specialInstructions"
          placeholder="📝 Koi special instruction? (e.g. Please call before delivery, ring bell 3 times)" rows={2}
          className="w-full border rounded-xl p-3 focus:outline-none focus:border-pink-400"
          onChange={handleChange} />

        {/* Submit */}
        <button onClick={handleSubmit}
          className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-700 mt-2">
          ✅ Order Place Karo via WhatsApp 🚀
        </button>

        <p className="text-center text-xs text-gray-400">
          🔒 100% Secure | Order WhatsApp pe jayega
        </p>
      </div>
    </div>
  );
}
export default Checkout;