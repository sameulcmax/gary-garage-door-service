import { usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowRight } from "@/components/Icons";
import { CallButton } from "@/components/ui";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found | Gary Coakley Garage Door Repair",
    description:
      "The page you were looking for is not here. Call 862-290-4278 to discuss garage door repair, installation, openers, or shutters.",
  });

  return (
    <section className="bg-white">
      <div className="shell flex min-h-[58vh] flex-col justify-center py-16">
        <p className="eyebrow">Page not found</p>
        <h1 className="h-display mt-3 max-w-2xl text-[clamp(2.1rem,4.6vw,3.4rem)]">
          This page is not here — the garage door help still is.
        </h1>
        <p className="lede mt-4 max-w-xl">
          Check the address, or use the links below. Calling is the most direct way to reach the
          business.
        </p>
        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
          <CallButton />
          <Link to="/" className="btn btn-outline">
            Back to home
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5">
          {[
            { label: "All services", to: "/services" },
            { label: "About", to: "/about" },
            { label: "Garage doors", to: "/garage-doors" },
            { label: "FAQ", to: "/faq" },
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Link key={item.to} to={item.to} className="link-arrow">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
