import { business } from "@/data/site";
import { Link } from "@/lib/router";

export function BrandMark({ inverted = false, size = 38 }: { inverted?: boolean; size?: number }) {
  return (
    <span
      className={`flex flex-none items-center justify-center rounded-[4px] ${
        inverted ? "bg-white" : "bg-navy"
      }`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" width={size} height={size} fill="none" role="presentation">
        <path
          d="M9 31V16.5L20 9l11 7.5V31"
          stroke={inverted ? "#002868" : "#ffffff"}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13 31V19h14v12" stroke={inverted ? "#002868" : "#ffffff"} strokeWidth="2" />
        <path d="M13 23h14M13 27h14" stroke={inverted ? "#174A8B" : "#ffffff"} strokeWidth="1.5" />
        <path d="M18.5 31v-2.5h3V31" fill="#BF0A30" />
      </svg>
    </span>
  );
}

export function Brand({
  inverted = false,
  onNavigate,
  compact = false,
}: {
  inverted?: boolean;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      onNavigate={onNavigate}
      className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
      ariaLabel={`${business.name} — home`}
    >
      {compact ? (
        <img
          src="/logo.png"
          alt={business.name}
          className="block h-auto max-h-[56px] w-[min(52vw,230px)] object-contain sm:w-[230px] lg:max-h-[68px] lg:w-[280px]"
        />
      ) : (
        <>
          <BrandMark inverted={inverted} size={38} />
          <span className="min-w-0">
            <span
              className={`block whitespace-nowrap font-display text-[12px] font-extrabold leading-none tracking-[0.09em] sm:text-[13.5px] ${
                inverted ? "text-white" : "text-navy"
              }`}
            >
              {business.displayMark}
            </span>
            <span
              className={`mt-1 block whitespace-nowrap font-sans text-[8.5px] font-semibold uppercase leading-none tracking-[0.16em] sm:text-[9.5px] ${
                inverted ? "text-[#b9c8de]" : "text-muted"
              }`}
            >
              {business.descriptor}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
