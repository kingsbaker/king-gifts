export default function TrustStrip() {
  return (
    <section className="border-t border-b border-gray-200 py-6 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 text-center text-sm text-gray-700 md:grid-cols-3">
        <div>
          <p className="font-semibold text-gray-900">Secure Payments</p>
          <p className="mt-2 text-sm text-gray-600">UPI, cards, net banking, COD available.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">City Delivery</p>
          <p className="mt-2 text-sm text-gray-600">Fast delivery across Muzaffarnagar and nearby areas.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Support</p>
          <p className="mt-2 text-sm text-gray-600">24/7 support for orders and custom requests.</p>
        </div>
      </div>
    </section>
  );
}
