import { business } from "@/data/site";
import { Link } from "@/lib/router";
import { ArrowRight, PhoneIcon } from "@/components/Icons";

export function MobileActionBar() {
  return (
    <div
      className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-2.5 pt-2 shadow-[0_-8px_24px_-14px_rgba(0,40,104,0.35)] lg:hidden"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={business.phoneHref}
          className="flex min-h-[46px] items-center justify-center gap-1.5 rounded-[4px] bg-red px-2 text-[0.68rem] font-bold uppercase tracking-[0.03em] text-white active:bg-red-dark min-[360px]:gap-2 min-[360px]:px-3 min-[360px]:text-[0.76rem] min-[360px]:tracking-[0.05em]"
          aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
        >
          <PhoneIcon size={17} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex min-h-[46px] items-center justify-center gap-1 rounded-[4px] border-2 border-navy bg-white px-2 text-[0.68rem] font-bold uppercase tracking-[0.03em] text-navy min-[360px]:gap-1.5 min-[360px]:px-3 min-[360px]:text-[0.76rem] min-[360px]:tracking-[0.05em]"
        >
          Request Service
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
