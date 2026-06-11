export default function CorporateBanner() {
  return (
    <section className="bg-[#1a237e] py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-[#192060] p-8 shadow-lg md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fff]">CORPORATE GIFTING</p>
            <h2 className="mt-4 text-3xl font-bold">Elevate brand moments with bespoke gifting.</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4 md:mt-0">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold">Bulk orders made easy</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold">White glove delivery</span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold">Custom branding options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
