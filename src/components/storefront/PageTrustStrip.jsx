export default function PageTrustStrip() {
  return (
    <section className="rounded-[36px] bg-white p-6 shadow-lg ring-1 ring-gray-200">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-[#fff0f2] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Since 1972</p>
          <p className="mt-3 text-xl font-semibold text-gray-900">Trusted for decades</p>
        </div>
        <div className="rounded-3xl bg-[#fff7f5] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">4.6★ Google</p>
          <p className="mt-3 text-xl font-semibold text-gray-900">448 Reviews</p>
        </div>
        <div className="rounded-3xl bg-[#fdf2f2] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Same Day Setup</p>
          <p className="mt-3 text-xl font-semibold text-gray-900">Trained Team</p>
        </div>
        <div className="rounded-3xl bg-[#fff4f2] p-5 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Fully Supported</p>
          <p className="mt-3 text-xl font-semibold text-gray-900">WhatsApp Tracking</p>
        </div>
      </div>
    </section>
  );
}
