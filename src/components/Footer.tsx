import { business, services } from "@/data/site";
import { Link } from "@/lib/router";
import { Brand } from "@/components/Brand";
import { ArrowRight, MapPinIcon, PhoneIcon } from "@/components/Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="flag-rule" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.15fr_0.8fr_1fr] lg:gap-8 lg:py-14">
        <div>
          <Brand inverted />
          <p className="mt-5 max-w-xs text-[0.88rem] leading-relaxed text-[#b9c8de]">
            Garage door and shutter solutions for residential and commercial properties —
            installation, repair, replacement, automatic doors, and maintenance.
          </p>
          <a
            href={business.phoneHref}
            className="mt-5 inline-flex items-center gap-2.5 rounded-[4px] border border-white/25 px-4 py-3 transition-colors hover:border-white/60 hover:bg-white/5"
            aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
          >
            <PhoneIcon size={18} className="text-[#ff8a9d]" />
            <span className="text-[1.02rem] font-bold tracking-wide text-white">{business.phoneDisplay}</span>
          </a>
        </div>

        <nav aria-label="Footer services">
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#8fa6c8]">Services</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 sm:grid-cols-1 lg:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="block py-[5px] text-[0.82rem] leading-snug text-[#d6e0ee] transition-colors hover:text-white hover:underline hover:decoration-red hover:decoration-2 hover:underline-offset-4"
                >
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer navigation">
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#8fa6c8]">Company</h2>
          <ul className="mt-4">
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "All Services", to: "/services" },
              { label: "Garage Doors", to: "/garage-doors" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
              { label: "Privacy", to: "/privacy" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block py-[5px] text-[0.82rem] leading-snug text-[#d6e0ee] transition-colors hover:text-white hover:underline hover:decoration-red hover:decoration-2 hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#8fa6c8]">Contact</h2>
          <p className="mt-4 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-[#d6e0ee]">
            <PhoneIcon size={16} className="mt-0.5 flex-none text-[#ff8a9d]" />
            <span>
              <span className="block font-semibold text-white">Call to discuss your door</span>
              <a href={business.phoneHref} className="mt-1 block hover:underline">
                {business.phoneDisplay}
              </a>
            </span>
          </p>
          <p className="mt-4 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-[#d6e0ee]">
            <MapPinIcon size={16} className="mt-0.5 flex-none text-[#ff8a9d]" />
            <span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=615+E+26th+St+Paterson+NJ+07504"
                target="_blank"
                rel="noreferrer"
                className="block font-semibold text-white hover:underline"
              >
                {business.address}
              </a>
              <span className="mt-1 block text-[0.8rem] text-[#b9c8de]">{business.areaServed} · {business.areaNote}</span>
            </span>
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:text-[#ffb3bf]"
          >
            Contact &amp; request details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/12">
        <div className="shell flex flex-col gap-3 py-5 text-[0.73rem] leading-relaxed text-[#a9bad5] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            Website information is general and is not a quote. Service availability and coverage are
            confirmed when you call.
          </p>
        </div>
      </div>
      <div className="h-[84px] lg:hidden" aria-hidden="true" />
    </footer>
  );
}
