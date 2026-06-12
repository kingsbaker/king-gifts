import { useMemo, useState } from "react";
import { useOrderBooking } from "../../context/OrderBookingContext";
import { notifyWhatsApp } from "../../utils/handlers";

const cityOptions = ["Muzaffarnagar", "Shamli", "Saharanpur", "Meerut", "Roorkee"];
const venueTypes = ["Home", "Hotel", "Banquet", "Office"];
const slots = ["Morning (8AM - 12PM)", "Afternoon (12PM - 4PM)", "Evening (4PM - 8PM)", "Night (8PM - 10PM)"];
const addOns = [
  { key: "ledLetters", label: "LED letters", price: 899 },
  { key: "extraBalloons", label: "Extra balloons", price: 499 },
  { key: "cake", label: "Cake", price: 799 },
  { key: "flowerBouquet", label: "Flower bouquet", price: 599 },
  { key: "photoProps", label: "Photo props", price: 399 },
];

const initialForm = {
  occasion: "Birthday",
  date: "",
  slot: "",
  venue: "Home",
  address: "",
  pincode: "",
  city: cityOptions[0],
  addons: {},
  customerName: "",
  phone: "",
  sameWhatsApp: false,
  instructions: "",
};

const today = new Date().toISOString().split("T")[0];

export default function DecorationBookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [booking, setBooking] = useState(null);
  const { saveBooking } = useOrderBooking();

  const availableAddons = addOns.map((item) => ({
    ...item,
    active: Boolean(form.addons[item.key]),
  }));

  const totalAddons = availableAddons.reduce(
    (sum, item) => sum + (item.active ? item.price : 0),
    0
  );

  const basePrice = 1999;
  const total = basePrice + totalAddons;

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAddon = (key) => {
    setForm((prev) => ({
      ...prev,
      addons: { ...prev.addons, [key]: !prev.addons[key] },
    }));
  };

  const canContinueStep1 = form.date && form.slot;
  const canContinueStep2 = form.venue && form.address && form.pincode && form.city;
  const canContinueStep4 = form.customerName && form.phone;

  const bookingId = useMemo(() => `BKG-${Date.now().toString().slice(-6)}`, []);

  const handleConfirm = () => {
    const newBooking = {
      id: bookingId,
      occasion: form.occasion,
      date: form.date,
      slot: form.slot,
      venue: form.venue,
      address: form.address,
      city: form.city,
      addons: addOns.filter((item) => form.addons[item.key]).map((item) => item.label),
      customer: {
        name: form.customerName,
        phone: form.phone,
        sameWhatsApp: form.sameWhatsApp,
      },
      instructions: form.instructions,
      total,
      advance: 500,
      status: "Confirmed",
    };
    saveBooking(newBooking);
    setBooking(newBooking);
    notifyWhatsApp(`New decoration booking: ${JSON.stringify(newBooking)}`);
    setStep(6);
  };

  const whatsappLink = `https://wa.me/917217250250?text=${encodeURIComponent(`Hi King Bakers, I want to book a decoration:
Occasion: ${form.occasion}
Date: ${form.date}
Slot: ${form.slot}
Venue: ${form.venue}
City: ${form.city}
Address: ${form.address}
Add-ons: ${availableAddons.filter((item) => item.active).map((item) => item.label).join(", ") || "None"}
Name: ${form.customerName}
Phone: ${form.phone}
Instructions: ${form.instructions}`)}`;

  if (booking && step === 6) {
    return (
      <div className="rounded-[36px] bg-white p-6 shadow-lg ring-1 ring-gray-200">
        <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Booking Confirmed</p>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">Thank you! Your booking is confirmed</h2>
        <p className="mt-3 text-gray-600">Booking ID: <span className="font-semibold text-[#8f270e]">{booking.id}</span></p>
        <div className="mt-6 space-y-3 rounded-3xl bg-[#fff0f2] p-5 text-gray-700">
          <p><strong>Occasion:</strong> {booking.occasion}</p>
          <p><strong>Date:</strong> {booking.date} • {booking.slot}</p>
          <p><strong>Venue:</strong> {booking.venue}, {booking.city}</p>
          <p><strong>Advance paid:</strong> ₹{booking.advance}</p>
          <p><strong>Total:</strong> ₹{booking.total}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center rounded-full bg-[#8f270e] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#7a2310]">
            Track on WhatsApp
          </a>
          <button onClick={() => setStep(1)} className="inline-flex flex-1 items-center justify-center rounded-full border border-[#8f270e] bg-white px-5 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-[#f7d7d8]">
            Book Another Decoration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[36px] bg-white p-6 shadow-lg ring-1 ring-gray-200">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Step {step} of 6</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">Decoration Booking Wizard</h2>
        </div>
        <div className="rounded-full bg-[#fff0f2] px-4 py-2 text-sm font-semibold text-[#8f270e]">₹{total} total</div>
      </div>

      <div className="mt-8 space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">Choose a date</label>
            <input
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
            />
            <label className="block text-sm font-semibold text-gray-700">Time slot</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {slots.map((slotOption) => (
                <button
                  key={slotOption}
                  type="button"
                  onClick={() => handleChange("slot", slotOption)}
                  className={`rounded-3xl border px-4 py-3 text-left transition ${form.slot === slotOption ? "border-[#8f270e] bg-[#fff0f2]" : "border-gray-200 bg-white hover:border-[#8f270e]/50"}`}>
                  <p className="font-semibold text-gray-900">{slotOption}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">Venue type</label>
            <div className="grid gap-3 sm:grid-cols-2">
              {venueTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleChange("venue", type)}
                  className={`rounded-3xl border px-4 py-3 text-left transition ${form.venue === type ? "border-[#8f270e] bg-[#fff0f2]" : "border-gray-200 bg-white hover:border-[#8f270e]/50"}`}>
                  <p className="font-semibold text-gray-900">{type}</p>
                </button>
              ))}
            </div>
            <label className="block text-sm font-semibold text-gray-700">Venue address</label>
            <textarea
              rows={3}
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                value={form.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
                placeholder="Pincode"
                className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
              />
              <select
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
              >
                {cityOptions.map((cityOption) => (
                  <option key={cityOption} value={cityOption}>{cityOption}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-gray-700">Choose add-ons</p>
            <div className="grid gap-3">
              {availableAddons.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggleAddon(item.key)}
                  className={`rounded-3xl border px-4 py-4 text-left transition ${item.active ? "border-[#8f270e] bg-[#fff0f2]" : "border-gray-200 bg-white hover:border-[#8f270e]/50"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500">₹{item.price}</p>
                    </div>
                    <span className="text-sm font-semibold text-[#8f270e]">{item.active ? "Added" : "Add"}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <label className="block text-sm font-semibold text-gray-700">Your name</label>
            <input
              type="text"
              value={form.customerName}
              onChange={(e) => handleChange("customerName", e.target.value)}
              placeholder="Name"
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
            />
            <label className="block text-sm font-semibold text-gray-700">Phone number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="Phone"
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
            />
            <label className="inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-4">
              <input
                type="checkbox"
                checked={form.sameWhatsApp}
                onChange={(e) => handleChange("sameWhatsApp", e.target.checked)}
                className="h-4 w-4 text-[#8f270e]"
              />
              <span className="text-sm text-gray-700">WhatsApp same as phone</span>
            </label>
            <label className="block text-sm font-semibold text-gray-700">Special instructions</label>
            <textarea
              rows={3}
              value={form.instructions}
              onChange={(e) => handleChange("instructions", e.target.value)}
              placeholder="Anything special?"
              className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
            />
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-gray-200 bg-[#fff0f2] p-5">
              <p className="text-sm text-gray-500">Review booking details</p>
              <div className="mt-4 space-y-3 text-gray-800">
                <p><strong>Occasion:</strong> {form.occasion}</p>
                <p><strong>Date:</strong> {form.date}</p>
                <p><strong>Slot:</strong> {form.slot}</p>
                <p><strong>Venue:</strong> {form.venue}</p>
                <p><strong>City:</strong> {form.city}</p>
                <p><strong>Add-ons:</strong> {availableAddons.filter((item) => item.active).map((item) => item.label).join(", ") || "None"}</p>
                <p><strong>Total:</strong> ₹{total}</p>
                <p><strong>Advance:</strong> ₹500</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((prev) => Math.max(1, prev - 1))}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Back
          </button>
        )}
        {step < 5 && (
          <button
            type="button"
            onClick={() => setStep((prev) => Math.min(5, prev + 1))}
            disabled={
              (step === 1 && !canContinueStep1) ||
              (step === 2 && !canContinueStep2) ||
              (step === 4 && !canContinueStep4)
            }
            className="inline-flex items-center justify-center rounded-full bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310] disabled:opacity-50"
          >
            Continue
          </button>
        )}
        {step === 5 && (
          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex items-center justify-center rounded-full bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]"
          >
            Book with ₹500 Advance
          </button>
        )}
      </div>
    </div>
  );
}
