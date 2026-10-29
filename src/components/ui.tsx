import { Fragment, type ReactNode } from "react";
import { business, services, type Service } from "@/data/site";
import { Link } from "@/lib/router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  ChevronDown,
  GarageIcon,
  HomeIcon,
  LayersIcon,
  MapPinIcon,
  PhoneIcon,
  RemoteIcon,
  ShieldIcon,
  WrenchIcon,
} from "@/components/Icons";

export function PhoneLink({ className, label }: { className?: string; label?: string }) {
  return (
    <a href={business.phoneHref} className={className} aria-label={`Call ${business.name} on ${business.phoneDisplay}`}>
      <PhoneIcon size={17} />
      <span>{label ?? business.phoneDisplay}</span>
    </a>
  );
}

export function CallButton({
  className = "btn btn-primary",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={business.phoneHref}
      className={className}
      aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
    >
      <PhoneIcon size={17} />
      <span className="whitespace-nowrap">{label ?? `Call Now · ${business.phoneDisplay}`}</span>
    </a>
  );
}

export function RequestButton({
  className = "btn btn-outline",
  label = "Request Service",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link to="/contact" className={className}>
      {label}
      <ArrowRight size={17} />
    </Link>
  );
}

export function PhoneText({ text, className = "" }: { text: string; className?: string }) {
  const parts = text.split(business.phoneDisplay);
  return (
    <span className={className}>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 ? (
            <a
              href={business.phoneHref}
              className="font-semibold text-navy underline decoration-[#bcc8d8] underline-offset-2 transition-colors hover:decoration-red"
            >
              {business.phoneDisplay}
            </a>
          ) : null}
        </Fragment>
      ))}
    </span>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  action,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  action?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className="mb-9 grid gap-5 border-b border-line pb-7 sm:mb-11 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-14">
      <div>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
        <h2 className={`h-section mt-3 ${light ? "!text-white" : ""}`}>{title}</h2>
      </div>
      <div className="lg:pb-1">
        {intro ? (
          <div className={`max-w-xl text-[0.95rem] leading-relaxed ${light ? "text-[#c9d6ea]" : "text-muted"}`}>
            {intro}
          </div>
        ) : null}
        {action ? <div className="mt-4">{action}</div> : null}
      </div>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group card-lift flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-white"
      ariaLabel={`${service.name} — learn more`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-mist">
        <img
          src={service.image}
          alt={service.alt}
          width={1100}
          height={733}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-0 top-4 h-8 w-[3px] bg-red" aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-[1.1rem] leading-snug font-bold tracking-[-0.015em] text-navy">{service.name}</h3>
        <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-navy">
          Explore service
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

const trustItems = [
  {
    icon: HomeIcon,
    label: "Residential & commercial",
    detail: "Homes and business premises",
  },
  {
    icon: WrenchIcon,
    label: "Repair & replacement",
    detail: "Installation and servicing too",
  },
  {
    icon: RemoteIcon,
    label: "Openers & remotes",
    detail: "Automatic door operation",
  },
  {
    icon: MapPinIcon,
    label: "New Jersey",
    detail: "Coverage confirmed by phone",
  },
] as const;

export function TrustRail() {
  return (
    <div className="border-y border-[#24477d] bg-navy">
      <ul className="shell grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          const mobileBorder = index < 2 ? "border-b lg:border-b-0" : "";
          const mobileRight = index % 2 === 0 ? "border-r lg:border-r" : "lg:border-r";
          return (
            <li
              key={item.label}
              className={`flex min-h-[76px] items-center gap-1.5 px-2 py-3 sm:min-h-0 sm:gap-3 sm:px-4 sm:py-5 lg:px-5 lg:first:pl-0 lg:last:border-r-0 ${mobileBorder} ${mobileRight} border-white/20 last:border-r-0`}
            >
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[3px] bg-red text-white sm:h-9 sm:w-9">
                <Icon size={16} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.74rem] font-bold leading-[1.2] text-white sm:text-[0.83rem]">{item.label}</span>
                <span className="mt-0.5 block text-[0.69rem] leading-[1.3] text-[#c9d6ea] sm:text-[0.78rem]">{item.detail}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] font-medium uppercase tracking-[0.1em] text-muted">
        {trail.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true" className="text-[#b6bfcd]">/</span> : null}
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-navy">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  trail,
  image,
  imageAlt,
  imageCaption,
  actions = true,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  trail: { label: string; to?: string }[];
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  actions?: boolean;
}) {
  const titleWords = typeof title === "string" ? title.trim().split(/\s+/) : null;

  return (
    <section className="border-b border-line bg-[#edf3fa]">
      <div className="shell py-7 sm:py-10 lg:py-12">
        <Breadcrumbs trail={trail} />
        <div
          className={`mt-6 grid gap-8 lg:items-center lg:gap-14 ${
            image ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : ""
          }`}
        >
          <div className={image ? "" : "max-w-3xl"}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="h-display mt-3 text-[clamp(2.15rem,5vw,3.5rem)]">
              {titleWords
                ? titleWords.map((word, index) => (
                    <span
                      key={`${word}-${index}`}
                      className={index === titleWords.length - 1 ? "text-red" : "text-navy"}
                    >
                      {index > 0 ? " " : ""}
                      {word}
                    </span>
                  ))
                : title}
            </h1>
            <p className="lede mt-4 max-w-2xl">{intro}</p>
            {actions ? (
              <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <CallButton />
                <RequestButton />
              </div>
            ) : null}
          </div>
          {image ? (
            <figure className="relative overflow-hidden rounded-[4px] border border-line bg-mist">
              <img
                src={image}
                alt={imageAlt ?? ""}
                width={1100}
                height={733}
                loading="eager"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
              {imageCaption ? (
                <figcaption className="flex items-start gap-2 border-t border-line bg-white px-4 py-3 text-[0.78rem] leading-snug text-muted">
                  <span className="mt-[2px] h-2 w-2 flex-none bg-red" aria-hidden="true" />
                  {imageCaption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export type FaqItem = { q: string; a: string };

export function FaqAccordion({ items, idPrefix }: { items: FaqItem[]; idPrefix: string }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line" name={`${idPrefix}-faq`}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4.5 sm:py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[0.95rem] font-semibold leading-snug text-navy sm:text-base">
              {item.q}
            </span>
            <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line bg-white text-blue transition-colors group-open:border-navy group-open:bg-navy group-open:text-white">
              <ChevronDown size={15} className="transition-transform duration-200 group-open:rotate-180" />
            </span>
          </summary>
          <div className="pb-5 pr-7 sm:pr-10">
            <p className="text-[0.9rem] leading-relaxed text-muted sm:text-[0.93rem]">
              <PhoneText text={item.a} />
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  heading = "Tell us what the door is doing.",
  body = "Describe the symptom, the property, and what you need. If you are unsure which service fits, call and describe it — that is enough to start.",
  note = "Current availability and scheduling are confirmed when you call.",
}: {
  heading?: string;
  body?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy" aria-label="Contact Gary Coakley Garage Door Repair">
      <div className="flag-rule" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-16 h-80 w-80 rounded-full border border-white/[0.07]"
        />
        <div className="shell relative grid gap-8 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end lg:gap-16 lg:py-16">
          <div>
            <Eyebrow light>Next step</Eyebrow>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.03em] !text-white">
              {heading}
            </h2>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[#c9d6ea]">{body}</p>
          </div>
          <div className="lg:justify-self-end">
            <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col lg:items-stretch">
              <CallButton />
              <RequestButton className="btn btn-outline-light" />
            </div>
            <p className="mt-4 flex items-start gap-2 text-[0.75rem] leading-snug text-[#a9bad5]">
              <ShieldIcon size={14} className="mt-[1px] flex-none" />
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
      {shown.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
      {limit ? (
        <Link
          to="/services"
          className="card-lift flex h-full flex-col justify-between gap-8 rounded-[4px] border border-navy/15 bg-mist p-6 hover:border-navy/30"
        >
          <div>
            <span className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-navy text-white">
              <LayersIcon size={19} />
            </span>
            <h3 className="mt-4 text-[1.1rem] leading-snug font-bold text-navy">
              Not sure which service fits?
            </h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
              Describe the symptom, the opening, or the plan. The right next step can be worked out from there.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-red">
            View all services
            <ArrowUpRight size={15} />
          </span>
        </Link>
      ) : null}
    </div>
  );
}

export function HelpPoints({ points }: { points: string[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-ink">
          <CheckIcon size={16} className="mt-[3px] flex-none text-red" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export function InlineCard({
  icon,
  title,
  children,
}: {
  icon: "garage" | "wrench" | "home" | "map";
  title: string;
  children: ReactNode;
}) {
  const icons = { garage: GarageIcon, wrench: WrenchIcon, home: HomeIcon, map: MapPinIcon };
  const Icon = icons[icon];
  return (
    <div className="rounded-[4px] border border-line bg-white p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-mist text-navy">
        <Icon size={19} />
      </span>
      <h3 className="mt-3.5 text-base font-bold text-navy">{title}</h3>
      <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
