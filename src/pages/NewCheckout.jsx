import { useMemo, useState } from "react";
import { useOrderBooking } from "../context/OrderBookingContext";
import { handlePaymentIntent, notifyWhatsApp, saveOrderToBackend, formatSameDayText } from "../utils/handlers";
import PageTrustStrip from "../components/storefront/PageTrustStrip";

const deliveryOptions = [
  { key: "standard", label: "Standard Same-Day", price: 0, description: "Free delivery with same-day service." },
  { key: "fixed", label: "Fixed Time Slot", price: 150, description: "Choose a time slot for delivery." },
  { key: "early", label: "Early Morning 6-8AM", price: 150, description: "Wake up to your gift." },
  { key: "midnight", label: "Midnight 11PM-12AM", price: 250, description: "Special late-night delivery." },
];

const addonItems = [
  { key: "candles", label: "Candles", price: 99 },
  { key: "balloonBunch", label: "Balloon Bunch", price: 299 },
  { key: "greetingCard", label: "Greeting Card", price: 149 },
  { key: "teddy", label: "Teddy", price: 399 },
  { key: "chocolateBox", label: "Chocolate Box", price: 249 },
  { key: "bouquet", label: "Bouquet", price: 499 },
];

const cityOptions = ["Muzaffarnagar", "Shamli", "Saharanpur", "Meerut", "Roorkee"];

const sampleItems = [
  { id: 1, name: "Red Roses Bouquet", price: 599, qty: 1 },
  { id: 2, name: "Chocolate Truffle Cake", price: 799, qty: 1 },
];

const today = new Date().toISOString().split("T")[0];

export default function NewCheckout() {
  const { saveOrder } = useOrderBooking();
  const [step, setStep] = useState(1);
  const [city, setCity] = useState(cityOptions[0]);
  const [pincode, setPincode] = useState("");
  const [deliveryType, setDeliveryType] = useState("standard");
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState(today);
  const [message, setMessage] = useState("");
  const [addons, setAddons] = useState({});
  const [giftWrap, setGiftWrap] = useState(false);
  const [recipient, setRecipient] = useState({ name: "", phone: "", address: "", landmark: "" });
  const [sender, setSender] = useState({ name: "", phone: "", sameWhatsApp: false });
  const [hidePrices, setHidePrices] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [orderId, setOrderId] = useState("");

  const deliveryCharge = useMemo(() => {
    const option = deliveryOptions.find((item) => item.key === deliveryType);
    return option?.price || 0;
  }, [deliveryType]);

  const addonsTotal = useMemo(
    () => addonItems.reduce((sum, item) => sum + (addons[item.key] ? item.price : 0), 0),
    [addons]
  );

  const subtotal = useMemo(
    () => sampleItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    []
  );
  const giftWrapCharge = giftWrap ? 99 : 0;
  const discount = coupon === "KING10" ? Math.round((subtotal + deliveryCharge + addonsTotal + giftWrapCharge) * 0.1) : 0;
  const total = subtotal + deliveryCharge + addonsTotal + giftWrapCharge - discount;

  const available = pincode.startsWith("251");
  const cityText = available ? "✓ Delivery available in Muzaffarnagar" : "Not serviceable";

  const handleToggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    const newOrder = {
      orderId: `ORD-${Date.now().toString().slice(-6)}`,
      items: sampleItems,
      city,
      pincode,
      deliveryType,
      deliveryCharge,
      date,
      slot,
      cakeMessage: message,
      addons: addonItems.filter((item) => addons[item.key]).map((item) => item.label),
      giftWrap,
      hidePrices,
      recipient,
      sender,
      coupon,
      subtotal,
      total,
      paymentMethod: "advance",
      advance: 500,
      status: "Confirmed",
    };
    setOrderId(newOrder.orderId);
    saveOrder(newOrder);
    saveOrderToBackend(newOrder);
    handlePaymentIntent(newOrder);
    notifyWhatsApp(`New order created: ${JSON.stringify(newOrder)}`);
    setStep(7);
  };

  const whatsappLink = `https://wa.me/917217250250?text=${encodeURIComponent(`Hi King Bakers, I want to place an order.
Order ID: ${orderId || "Pending"}
City: ${city}
Pincode: ${pincode}
Delivery: ${deliveryType}
Date: ${date}
Slot: ${slot}
Items: ${sampleItems.map((item) => `${item.name} x${item.qty}`).join(", ")}
Total: ₹${total}`)}`;

  if (step === 7) {
    return (
      <div className="min-h-screen bg-[#fffaf8] px-4 py-12 text-gray-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[36px] bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Order Confirmed</p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Thank you for your order</h1>
          <p className="mt-3 text-gray-600">Your order is confirmed and being prepared for delivery.</p>
          <div className="mt-8 grid gap-4 rounded-[32px] bg-[#fff0f2] p-6 text-gray-900 sm:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Order ID</p>
              <p className="mt-2 text-xl font-semibold text-[#8f270e]">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Delivery</p>
              <p className="mt-2 text-lg font-semibold">{date} {slot}</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-gray-700">
            {sampleItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm">
                <p>{item.name} x{item.qty}</p>
                <p className="font-semibold">₹{item.price * item.qty}</p>
              </div>
            ))}
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Delivery charge</p>
              <p className="mt-1 font-semibold">₹{deliveryCharge}</p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">Total paid</p>
              <p className="mt-1 text-2xl font-bold text-[#8f270e]">₹{total}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center rounded-full bg-[#8f270e] px-6 py-4 text-white transition hover:bg-[#7a2310]">
              Track on WhatsApp
            </a>
            <button onClick={() => setStep(1)} className="inline-flex flex-1 items-center justify-center rounded-full border border-[#8f270e] bg-white px-6 py-4 text-[#8f270e] transition hover:bg-[#f7d7d8]">
              Place New Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf8] px-4 py-10 text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[36px] bg-white p-6 shadow-xl ring-1 ring-gray-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Checkout Journey</p>
              <h1 className="mt-3 text-3xl font-bold text-gray-900">Complete your order in easy steps</h1>
            </div>
            <div className="rounded-full bg-[#fff0f2] px-4 py-2 text-sm font-semibold text-[#8f270e]">{formatSameDayText()}</div>
          </div>

          <div className="mt-8 space-y-8">
            {step === 1 && (
              <section className="rounded-[32px] border border-gray-200 bg-[#fff0f2] p-6">
                <h2 className="text-xl font-bold text-gray-900">Pincode check</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <input
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  />
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  >
                    {cityOptions.map((cityOption) => (
                      <option key={cityOption} value={cityOption}>{cityOption}</option>
                    ))}
                  </select>
                </div>
                <p className={`mt-4 text-sm font-semibold ${available ? "text-emerald-700" : "text-red-600"}`}>{cityText}</p>
              </section>
            )}

            {step === 2 && (
              <section className="rounded-[32px] border border-gray-200 bg-[#fff0f2] p-6">
                <h2 className="text-xl font-bold text-gray-900">Delivery type</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {deliveryOptions.map((option) => (
                    <button
                      key={option.key}
                      type="button"
                      onClick={() => setDeliveryType(option.key)}
                      className={`rounded-3xl border p-5 text-left transition ${deliveryType === option.key ? "border-[#8f270e] bg-white shadow-sm" : "border-gray-200 bg-[#fff4f2] hover:border-[#8f270e]/50"}`}>
                      <p className="font-semibold text-gray-900">{option.label}</p>
                      <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                      <p className="mt-3 font-semibold text-[#8f270e]">+₹{option.price}</p>
                    </button>
                  ))}
                </div>
                {(deliveryType === "fixed" || deliveryType === "early" || deliveryType === "midnight") && (
                  <div className="mt-6">
                    <label className="block text-sm font-semibold text-gray-700">Choose slot</label>
                    <input
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                      placeholder="Enter preferred slot details"
                      className="mt-2 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                    />
                  </div>
                )}
              </section>
            )}

            {step === 3 && (
              <section className="rounded-[32px] border border-gray-200 bg-[#fff0f2] p-6">
                <h2 className="text-xl font-bold text-gray-900">Delivery date</h2>
                <input
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                />
                <p className="mt-4 text-sm text-gray-600">Today is same day delivery if ordered before cutoff.</p>
              </section>
            )}

            {step === 4 && (
              <section className="rounded-[32px] border border-gray-200 bg-[#fff0f2] p-6">
                <h2 className="text-xl font-bold text-gray-900">Add-ons & message</h2>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, 50))}
                  placeholder="Message on cake/card (max 50 chars)"
                  rows={3}
                  className="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                />
                <p className="mt-2 text-sm text-gray-500">{message.length}/50 characters</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {addonItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => handleToggleAddon(item.key)}
                      className={`rounded-3xl border p-4 text-left transition ${addons[item.key] ? "border-[#8f270e] bg-white shadow-sm" : "border-gray-200 bg-[#fff4f2] hover:border-[#8f270e]/50"}`}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-gray-900">{item.label}</p>
                        <p className="font-semibold text-[#8f270e]">₹{item.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <label className="mt-6 flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-4">
                  <input type="checkbox" checked={giftWrap} onChange={(e) => setGiftWrap(e.target.checked)} className="h-4 w-4 text-[#8f270e]" />
                  <span className="text-sm font-semibold text-gray-700">Gift wrap</span>
                </label>
              </section>
            )}

            {step === 5 && (
              <section className="rounded-[32px] border border-gray-200 bg-[#fff0f2] p-6">
                <h2 className="text-xl font-bold text-gray-900">Recipient & sender</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    value={recipient.name}
                    onChange={(e) => setRecipient((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Recipient name"
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  />
                  <input
                    value={recipient.phone}
                    onChange={(e) => setRecipient((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Recipient phone"
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  />
                </div>
                <textarea
                  value={recipient.address}
                  onChange={(e) => setRecipient((prev) => ({ ...prev, address: e.target.value }))}
                  placeholder="Address"
                  rows={3}
                  className="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                />
                <input
                  value={recipient.landmark}
                  onChange={(e) => setRecipient((prev) => ({ ...prev, landmark: e.target.value }))}
                  placeholder="Landmark"
                  className="mt-4 w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <input
                    value={sender.name}
                    onChange={(e) => setSender((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Sender name"
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  />
                  <input
                    value={sender.phone}
                    onChange={(e) => setSender((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="Sender phone"
                    className="rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
                  />
                </div>
                <label className="mt-4 inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-4">
                  <input type="checkbox" checked={sender.sameWhatsApp} onChange={(e) => setSender((prev) => ({ ...prev, sameWhatsApp: e.target.checked }))} className="h-4 w-4 text-[#8f270e]" />
                  <span className="text-sm font-semibold text-gray-700">WhatsApp same as sender phone</span>
                </label>
                <label className="mt-4 inline-flex items-center gap-3 rounded-3xl border border-gray-300 bg-white px-4 py-4">
                  <input type="checkbox" checked={hidePrices} onChange={(e) => setHidePrices(e.target.checked)} className="h-4 w-4 text-[#8f270e]" />
                  <span className="text-sm font-semibold text-gray-700">This is a gift — hide prices</span>
                </label>
              </section>
            )}
          </div>

          <div className="mt-8 rounded-[32px] border border-gray-200 bg-[#fff4f2] p-6">
            <h2 className="text-xl font-bold text-gray-900">Order summary</h2>
            <div className="mt-4 space-y-4">
              {sampleItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-3xl bg-white p-4 shadow-sm">
                  <span>{item.name} x{item.qty}</span>
                  <span className="font-semibold">₹{item.price * item.qty}</span>
                </div>
              ))}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Delivery</p>
                  <p className="mt-2 font-semibold">₹{deliveryCharge}</p>
                </div>
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Add-ons</p>
                  <p className="mt-2 font-semibold">₹{addonsTotal}</p>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">Gift wrap</p>
                <p className="mt-2 font-semibold">₹{giftWrapCharge}</p>
              </div>
              {coupon && (
                <div className="rounded-3xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Coupon saved</p>
                  <p className="mt-2 font-semibold text-[#8f270e]">-{discount} off</p>
                </div>
              )}
              <div className="rounded-3xl bg-[#fff0f2] p-4 text-lg font-bold text-[#8f270e]">
                Total: ₹{total}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                placeholder="Coupon code"
                className="flex-1 rounded-3xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8f270e]"
              />
              <button className="rounded-3xl bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
                Apply
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Since 1972",
                "FSSAI",
                "4.6★",
                "On-Time",
                "Baked Fresh",
              ].map((badge) => (
                <div key={badge} className="rounded-3xl bg-white p-4 text-center text-sm font-semibold text-gray-700 shadow-sm">
                  {badge}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <button className="rounded-3xl bg-gray-200 px-5 py-3 text-sm font-semibold text-gray-700">Pay Online (Razorpay)</button>
              <button onClick={() => setStep(7)} className="rounded-3xl bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#7a2310]">Pay ₹500 Advance</button>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-3xl bg-white px-5 py-3 text-sm font-semibold text-[#8f270e] border border-[#8f270e] hover:bg-[#fff0f2]">Order on WhatsApp</a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {step > 1 && (
              <button onClick={() => setStep((prev) => Math.max(1, prev - 1))} className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                Back
              </button>
            )}
            <button onClick={() => setStep((prev) => Math.min(5, prev + 1))} className="inline-flex items-center justify-center rounded-full bg-[#8f270e] px-5 py-3 text-sm font-semibold text-white hover:bg-[#7a2310]">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <PageTrustStrip />
      </div>
    </div>
  );
}
