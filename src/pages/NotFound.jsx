import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fff7f3] px-4 py-24 text-gray-900 md:px-8">
      <div className="mx-auto max-w-3xl rounded-[40px] bg-white p-10 shadow-2xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8f270e]">404 Error</p>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900">Page Not Found</h1>
          <p className="mt-4 text-gray-600">Looks like you took a wrong turn. Let us take you back to the store.</p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#7a2310]">
            Back to Home
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-[#8f270e] px-6 py-3 text-sm font-semibold text-[#8f270e] transition hover:bg-[#8f270e] hover:text-white">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
