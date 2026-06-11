import siteConfig from "../siteConfig";

export default function Return() {
  const policies = [
    {
      title: "1. Return Eligibility",
      items: [
        "Returns are accepted only if the product delivered is damaged, defective, or significantly different from what was ordered.",
        "Return request must be raised within 24 hours of delivery.",
        "Perishable items (fresh flowers, cakes, food items) are non-returnable once delivered.",
        "Personalised items (custom mugs, cushions, photo frames, name-engraved products) are non-returnable unless defective.",
        "Items must be unused, in original condition, and with original packaging to be eligible for return.",
      ],
    },
    {
      title: "2. Non-Returnable Items",
      items: [
        "Fresh flowers and flower bouquets (perishable nature).",
        "All cakes and food/edible items.",
        "Personalised and customised products.",
        "Digital products or gift vouchers.",
        "Items on sale or purchased with a discount coupon (unless defective).",
        "Any product that has been used, opened, or tampered with.",
      ],
    },
    {
      title: "3. How to Raise a Return Request",
      items: [
        "Step 1: WhatsApp us at +91 " + siteConfig.phoneDisplay + " within 24 hours of delivery.",
        "Step 2: Share your Order ID, photos/video of the damaged or wrong product.",
        "Step 3: Our team will review your request within 24 business hours.",
        "Step 4: If approved, we will arrange pickup or request you to dispose the item (for perishables).",
        "Step 5: Refund or replacement will be processed within 5-7 business days.",
      ],
    },
    {
      title: "4. Refund Policy",
      items: [
        "Approved refunds will be credited to the original payment method within 5-7 business days.",
        "UPI and net banking refunds are typically processed within 3-5 business days.",
        "Credit/debit card refunds may take 7-10 business days depending on your bank.",
        "Cash on Delivery orders will receive refunds via bank transfer or UPI — please share your details.",
        "Shipping charges are non-refundable unless the return is due to our error.",
      ],
    },
    {
      title: "5. Replacement Policy",
      items: [
        "If your order arrives damaged or incorrect, we offer a free replacement as first priority.",
        "Replacement will be delivered within the same delivery timeframe as the original order.",
        "Replacement is subject to product availability. If unavailable, a full refund will be issued.",
        "For flower bouquets — if quality is unsatisfactory, we offer a complimentary fresh bouquet.",
      ],
    },
    {
      title: "6. Order Cancellation",
      items: [
        "Orders can be cancelled within 1 hour of placing the order for a full refund.",
        "Orders already dispatched or out for delivery cannot be cancelled.",
        "Same-day delivery orders cannot be cancelled after order confirmation.",
        "Midnight delivery orders cannot be cancelled after 8 PM on the day of delivery.",
        "To cancel, WhatsApp us immediately at " + siteConfig.phoneDisplay,
      ],
    },
    {
      title: "7. Damaged / Wrong Product",
      items: [
        "If you receive a wrong product, we take full responsibility and will send the correct item at no charge.",
        "If the product is damaged in transit, share photos within 24 hours and we will replace or refund.",
        "In case of quality issues with cakes, please share a photo/video at the time of delivery.",
        "Our team investigates all complaints within 24 business hours and responds with a resolution.",
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-[#8f270e] py-10 text-center text-white">
        <h1 className="text-3xl font-bold">Return & Refund Policy</h1>
        <p className="mt-1 text-sm opacity-80">
          Effective Date: 1 June 2026 &nbsp;|&nbsp; King Gifts, Muzaffarnagar
        </p>
      </div>

      {/* Info Badges */}
      <div className="bg-[#fdf6f4] py-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              At <strong>King Gifts</strong>, customer satisfaction is our top priority.
              We carefully pack and deliver every order. However, if you face any issue,
              we are here to help. Please read our return and refund policy carefully.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-xs text-green-700 font-medium">
                ✅ 24hr Return Window
              </div>
              <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 text-xs text-blue-700 font-medium">
                💳 5-7 Day Refund
              </div>
              <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-3 py-2 text-xs text-orange-700 font-medium">
                🔄 Free Replacement
              </div>
              <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-xl px-3 py-2 text-xs text-purple-700 font-medium">
                ❌ 1hr Cancellation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          {policies.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#8f270e]/5 border-b border-gray-200 px-5 py-3">
                <h2 className="font-bold text-[#8f270e] text-base">{section.title}</h2>
              </div>
              <ul className="px-5 py-4 flex flex-col gap-2">
                {section.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#8f270e] mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-[#8f270e] text-white rounded-2xl p-6 text-center">
            <h3 className="font-bold text-lg mb-1">Need Help with Your Order?</h3>
            <p className="text-sm opacity-90 mb-4">
              Contact us immediately — we respond within 1 hour during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition"
              >
                💬 WhatsApp — {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-white text-[#8f270e] font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                ✉️ {siteConfig.email}
              </a>
            </div>
            <p className="text-xs opacity-70 mt-4">
              King Bakers | {siteConfig.address}, {siteConfig.city}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}