export default function FloatingBtns() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3">
      <a href="tel:7217250250" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3b82f6] text-white shadow-lg transition hover:bg-[#2563eb]">
        ☎
      </a>
      <a href="https://wa.me/917217250250" target="_blank" rel="noreferrer" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:bg-[#1ebe5d]">
        💬
      </a>
    </div>
  );
}
