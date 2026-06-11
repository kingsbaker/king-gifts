import siteConfig from "../siteConfig";

export default function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "Name, phone number, email address, and delivery address when you place an order.",
        "Payment details processed securely through PayU payment gateway (we never store card details).",
        "Photos uploaded for personalised gifts (mugs, cushions, cakes with photos).",
        "Device information and browsing data for improving your experience.",
        "WhatsApp communication history when you contact us via WhatsApp Business.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To process and deliver your orders on time.",
        "To send order confirmation and delivery updates via WhatsApp and SMS.",
        "To forward your order details to the nearest local delivery partner.",
        "To respond to your queries and provide customer support.",
        "To improve our website, products, and services.",
        "To send you offers and promotions (only if you have opted in).",
      ],
    },
    {
      title: "3. WhatsApp Communication",
      content: [
        "We use WhatsApp Business API to send order confirmations, delivery updates, and support messages.",
        "By placing an order, you consent to receiving WhatsApp messages related to your order.",
        "You can opt out of promotional WhatsApp messages at any time by messaging 'STOP' to our WhatsApp number.",
        "We do not share your WhatsApp number with third parties for marketing purposes.",
      ],
    },
    {
      title: "4. Order Sharing with Delivery Partners",
      content: [
        "King Gifts operates through a network of local delivery partners with 5000+ cities coverage across India.",
        "To fulfill your order, we share your name, delivery address, phone number, and order details with the relevant local delivery partner.",
        "Delivery partners are bound by confidentiality and may only use your information to deliver your order.",
        "We do not sell or rent your personal information to any third party.",
      ],
    },
    {
      title: "5. Payment Security",
      content: [
        "All payments are processed through PayU, a RBI-compliant and PCI-DSS certified payment gateway.",
        "King Gifts does not store, view, or have access to your complete card or bank details.",
        "All payment transactions are encrypted using SSL technology.",
        "For any payment-related disputes, please contact us within 7 days of the transaction.",
      ],
    },
    {
      title: "6. Cookies & Analytics",
      content: [
        "We use cookies to remember your preferences and improve your browsing experience.",
        "Google Analytics 4 is used to understand how visitors use our website. This data is anonymous.",
        "You can disable cookies in your browser settings, but some features may not work properly.",
      ],
    },
    {
      title: "7. Data Retention",
      content: [
        "Order-related data is retained for 3 years as required by Indian tax and business regulations.",
        "Account data is retained as long as your account is active.",
        "You may request deletion of your data by contacting us at " + siteConfig.email,
        "Uploaded photos for personalised gifts are deleted within 30 days of order delivery.",
      ],
    },
    {
      title: "8. Your Rights",
      content: [
        "You have the right to access the personal information we hold about you.",
        "You can request correction of inaccurate personal data at any time.",
        "You may request deletion of your account and associated data.",
        "You can opt out of marketing communications at any time.",
        "To exercise any of these rights, contact us at " + siteConfig.email,
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        "King Gifts does not knowingly collect personal information from children under 13 years of age.",
        "If you believe a child has provided us with personal information, please contact us immediately.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
        "The updated policy will be posted on this page with a revised effective date.",
        "We encourage you to review this page periodically.",
        "Continued use of our services after changes constitutes your acceptance of the updated policy.",
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="bg-[#8f270e] py-10 text-center text-white">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-1 text-sm opacity-80">
          Effective Date: 1 June 2026 &nbsp;|&nbsp; King Gifts, Muzaffarnagar
        </p>
      </div>

      {/* Intro */}
      <div className="bg-[#fdf6f4] py-6 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <p className="text-sm text-gray-600 leading-relaxed">
            Welcome to <strong>King Gifts</strong> — operated by King Bakers, Muzaffarnagar.
            We are committed to protecting your personal information and your right to privacy.
            This policy explains what information we collect, how we use it, and your rights
            regarding your data when you use our website or place an order with us.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-xs text-green-700 font-medium">
              🔒 SSL Encrypted
            </div>
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 text-xs text-blue-700 font-medium">
              💳 PCI-DSS Payments
            </div>
            <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-xl px-3 py-2 text-xs text-purple-700 font-medium">
              🚫 No Data Selling
            </div>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {sections.map((section, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-[#8f270e]/5 border-b border-gray-200 px-5 py-3">
                <h2 className="font-bold text-[#8f270e] text-base">{section.title}</h2>
              </div>
              <ul className="px-5 py-4 flex flex-col gap-2">
                {section.content.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#8f270e] mt-0.5 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact for Privacy */}
          <div className="bg-[#8f270e] text-white rounded-2xl p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Privacy Concerns?</h3>
            <p className="text-sm opacity-90 mb-4">
              If you have any questions about this Privacy Policy or your data, contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-white text-[#8f270e] font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                ✉️ {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/91${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-green-600 transition"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <p className="text-xs opacity-70 mt-4">
              King Bakers &nbsp;|&nbsp; {siteConfig.address}, {siteConfig.city} — {siteConfig.pincode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}