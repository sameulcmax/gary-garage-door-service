export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/18622904278"
      target="_blank"
      rel="noreferrer"
      aria-label="Message Gary Coakley Garage Door Repair on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#1fb957] focus-visible:outline-offset-4 lg:bottom-6 lg:right-6"
    >
      <img src="/wasup.webp" alt="" className="h-8 w-8 rounded-full object-cover" />
    </a>
  );
}
