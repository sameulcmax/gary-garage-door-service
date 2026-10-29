import { useEffect, useRef } from "react";
import { business, services } from "@/data/site";
import { Link } from "@/lib/router";
import { Brand } from "@/components/Brand";
import { ArrowRight, ChevronDown, CloseIcon, PhoneIcon } from "@/components/Icons";

const menuLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Garage Doors", to: "/garage-doors" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), summary, input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const list = Array.from(focusable).filter((element) => element.offsetParent !== null);
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal={open}
      aria-hidden={!open}
      aria-label="Site menu"
      className={`fixed inset-0 z-[80] bg-navy/40 transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
        open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className={`flex h-full w-full flex-col bg-white transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
      <div className="flex h-[64px] flex-none items-center justify-between border-b border-line px-4">
        <Brand compact onNavigate={onClose} />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-[#c7d0dd] text-navy transition-colors hover:border-navy hover:bg-mist"
        >
          <CloseIcon size={21} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overscroll-contain">
        <div className="px-4 py-5">
          <a
            href={business.phoneHref}
            className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-[4px] bg-red px-4 text-[0.88rem] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-red-dark"
          >
            <PhoneIcon size={18} />
            Call Now · {business.phoneDisplay}
          </a>
          <p className="mt-2.5 text-center text-[0.72rem] leading-snug text-muted">
            Residential &amp; commercial · New Jersey coverage confirmed by phone
          </p>
        </div>

        <nav aria-label="Mobile navigation" className="border-t border-line px-4">
          <ul>
            {menuLinks.slice(0, 3).map((item) => (
              <li key={item.to} className="border-b border-line">
                <Link
                  to={item.to}
                  onNavigate={onClose}
                  className="flex min-h-[52px] items-center justify-between py-3 font-display text-[1.02rem] font-bold text-navy"
                >
                  {item.label}
                  <ArrowRight size={17} className="text-[#aab4c3]" />
                </Link>
              </li>
            ))}
            <li className="border-b border-line">
              <details className="group">
                <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between py-3 font-display text-[1.02rem] font-bold text-navy [&::-webkit-details-marker]:hidden">
                  Services
                  <ChevronDown size={18} className="text-[#aab4c3] transition-transform group-open:rotate-180" />
                </summary>
                <ul className="pb-3">
                  <li>
                    <Link
                      to="/services"
                      onNavigate={onClose}
                      className="flex min-h-[42px] items-center justify-between py-2.5 text-[0.9rem] font-semibold text-blue"
                    >
                      All services
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        onNavigate={onClose}
                        className="flex min-h-[42px] items-center justify-between gap-3 border-t border-line/70 py-2.5 text-[0.88rem] text-ink"
                      >
                        {service.navLabel}
                        <ArrowRight size={13} className="flex-none text-[#b3bcc9]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            {menuLinks.slice(3).map((item) => (
              <li key={item.to} className="border-b border-line">
                <Link
                  to={item.to}
                  onNavigate={onClose}
                  className="flex min-h-[52px] items-center justify-between py-3 font-display text-[1.02rem] font-bold text-navy"
                >
                  {item.label}
                  <ArrowRight size={17} className="text-[#aab4c3]" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="safe-bottom px-4 py-5">
          <Link
            to="/contact"
            onNavigate={onClose}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[4px] border-2 border-navy px-4 text-[0.8rem] font-bold uppercase tracking-[0.06em] text-navy"
          >
            Request Service
            <ArrowRight size={16} />
          </Link>
          <p className="mt-4 pb-4 text-center text-[0.72rem] leading-relaxed text-muted">
            {business.name} ·{" "}
            <a href={business.phoneHref} className="font-semibold text-navy underline underline-offset-2">
              {business.phoneDisplay}
            </a>
            <br />
            Coverage depends on location — call to confirm availability.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
