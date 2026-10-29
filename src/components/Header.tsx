import { useEffect, useRef, useState } from "react";
import { business, services } from "@/data/site";
import { Link, useRoute } from "@/lib/router";
import { Brand } from "@/components/Brand";
import {
  ArrowRight,
  ChevronDown,
  InstagramIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  TikTokIcon,
} from "@/components/Icons";
import { MobileMenu } from "@/components/MobileMenu";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Garage Doors", to: "/garage-doors" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const path = useRoute();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const servicesActive = path === "/services" || path.startsWith("/services/");

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [path]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white">
        <div className="bg-navy">
          <div className="shell flex h-9 items-center justify-between gap-2">
            <a
              href="https://www.google.com/maps/search/?api=1&query=615+E+26th+St+Paterson+NJ+07504"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-white transition-colors hover:text-[#c9d6ea]"
            >
              <MapPinIcon size={14} />
              New Jersey
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-[linear-gradient(135deg,#833ab4_0%,#fd1d1d_55%,#fcb045_100%)] text-white transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-7 w-7 items-center justify-center rounded-[4px] bg-black text-white shadow-[2px_0_0_#25f4ee,-2px_0_0_#fe2c55] transition-transform hover:-translate-y-0.5"
              >
                <TikTokIcon size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="shell flex h-[64px] items-center justify-between gap-3 lg:h-[80px]">
          <Brand compact />

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-5 xl:gap-7">
              <li>
                <Link
                  to="/"
                  className={`relative block py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-red after:transition-transform after:duration-200 hover:text-navy ${
                    path === "/" ? "text-navy after:scale-x-100" : "text-ink after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  Home
                </Link>
              </li>
              {navItems.slice(1, 2).map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`relative block py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-red after:transition-transform after:duration-200 hover:text-navy ${
                      path === item.to
                        ? "text-navy after:scale-x-100"
                        : "text-ink after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li ref={servicesRef} className="relative">
                <button
                  ref={servicesButtonRef}
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-controls="desktop-services-panel"
                  className={`relative flex items-center gap-1.5 py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-red after:transition-transform after:duration-200 hover:text-navy ${
                    servicesActive
                      ? "text-navy after:scale-x-100"
                      : "text-ink after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen ? (
                  <div
                    id="desktop-services-panel"
                    className="absolute left-1/2 top-full z-50 w-[min(600px,calc(100vw-2rem))] -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-[4px] border border-line bg-white p-5 shadow-[0_24px_50px_-30px_rgba(0,40,104,0.45)]">
                      <div className="mb-3 flex items-center justify-between gap-4 border-b border-line pb-3">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-blue">
                          Garage door &amp; shutter services
                        </p>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-navy hover:text-red"
                        >
                          All services
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                      <ul className="grid grid-cols-2 gap-x-4">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to={`/services/${service.slug}`}
                              className="group flex items-center justify-between gap-2 border-b border-line/80 py-2.5 text-[0.82rem] font-medium leading-snug text-ink transition-colors hover:text-navy"
                            >
                              <span>{service.navLabel}</span>
                              <ArrowRight
                                size={13}
                                className="flex-none text-[#aab4c3] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-red"
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </li>
              {navItems.slice(2).map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`relative block py-2 text-[13px] font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:origin-left after:bg-red after:transition-transform after:duration-200 hover:text-navy ${
                      path === item.to
                        ? "text-navy after:scale-x-100"
                        : "text-ink after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden min-h-[44px] items-center gap-2 rounded-[4px] bg-navy px-4 text-[0.72rem] font-bold uppercase tracking-[0.07em] text-white transition-colors hover:bg-blue lg:inline-flex"
              aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
            >
              <PhoneIcon size={15} />
              {business.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-[3px] border border-[#c7d0dd] text-navy transition-colors hover:border-navy hover:bg-mist lg:hidden"
            >
              <MenuIcon size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
