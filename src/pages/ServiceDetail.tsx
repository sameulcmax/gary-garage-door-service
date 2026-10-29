import { business, serviceBySlug, servicePageMeta, services, type Service } from "@/data/site";
import { useFaqSchema, usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowRight, ArrowUpRight, CheckIcon, InfoIcon, PhoneIcon, ShieldIcon } from "@/components/Icons";
import { CtaBand, Eyebrow, FaqAccordion, HelpPoints, PageHeader } from "@/components/ui";
import NotFound from "@/pages/NotFound";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = serviceBySlug(slug);
  if (!service) return <NotFound />;
  return <ServiceDetailContent service={service} />;
}

function ServiceDetailContent({ service }: { service: Service }) {
  usePageMeta(servicePageMeta(service));
  useFaqSchema(service.faqs, service.slug);

  const related = service.related
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is Service => Boolean(item));

  const isRepair = service.slug === "garage-door-repair" || service.slug === "garage-door-replacement";

  return (
    <>
      <PageHeader
        eyebrow="Garage door & shutter services"
        title={service.name}
        intro={service.intro}
        trail={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.navLabel },
        ]}
        image={service.image}
        imageAlt={service.alt}
        imageCaption="Service illustration. Details for your door, opening, or premises are confirmed by phone."
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div>
            <Eyebrow>What this covers</Eyebrow>
            <h2 className="h-section mt-3">The kinds of situations worth a conversation.</h2>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted">
              Every door, opening, and property is different. These are the starting points customers
              most often call about — describe what you are seeing and the right next step can be
              worked out from there.
            </p>
            <div className="mt-6">
              <HelpPoints points={service.helpPoints} />
            </div>

            {isRepair ? (
              <div className="mt-8 rounded-[4px] border border-[#e7d3d8] bg-[#fdf6f7] p-5">
                <div className="flex items-center gap-2.5">
                  <ShieldIcon size={18} className="text-red" />
                  <h3 className="text-[0.98rem] font-bold text-navy">A note on safety first</h3>
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-1">
                  {[
                    "Keep people and vehicles clear of a damaged or unstable door.",
                    "Do not disengage or adjust anything you are unsure about.",
                    "A technician should assess the system before it is used again.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.85rem] leading-relaxed text-ink">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-red" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-9 border-t border-line pt-7">
              <h2 className="text-[1.25rem] font-bold text-navy">How the conversation works</h2>
              <ol className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  { n: "01", t: "Call with the details", d: "The door or opening type, the symptom or plan, and your location." },
                  { n: "02", t: "Discuss the options", d: "The practical route for the property and what it involves." },
                  { n: "03", t: "Confirm the next step", d: "Coverage, availability, and scheduling are confirmed by phone." },
                ].map((step) => (
                  <li key={step.n} className="border-t border-line pt-3">
                    <span className="text-[0.72rem] font-extrabold tracking-[0.08em] text-red">{step.n}</span>
                    <h3 className="mt-1 text-[0.9rem] font-bold text-navy">{step.t}</h3>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">{step.d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] bg-navy p-6 text-white">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#9fb4d2]">
                Start with this
              </p>
              <h2 className="mt-2.5 font-display text-[1.2rem] font-bold leading-snug text-white">
                {service.startWith}
              </h2>
              <div className="mt-5 space-y-2.5">
                <a
                  href={business.phoneHref}
                  className="flex min-h-[46px] items-center justify-center gap-2 rounded-[3px] bg-red px-4 text-[0.78rem] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-red-dark"
                >
                  <PhoneIcon size={16} />
                  Call {business.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="flex min-h-[46px] items-center justify-center gap-2 rounded-[3px] border border-white/40 px-4 text-[0.78rem] font-bold uppercase tracking-[0.05em] text-white transition-colors hover:bg-white/10"
                >
                  Request service details
                  <ArrowRight size={15} />
                </Link>
              </div>
              <p className="mt-4 border-t border-white/15 pt-3 text-[0.74rem] leading-relaxed text-[#b9c8de]">
                {business.areaServed} · Coverage depends on location and is confirmed when you call.
              </p>
            </div>

            <div className="mt-4 rounded-[4px] border border-line bg-mist p-5">
              <p className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-blue">
                <InfoIcon size={15} />
                Good to know
              </p>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-muted">
                This site does not schedule work online. Availability, coverage, and pricing are
                confirmed directly when you call.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-14 sm:py-16">
        <div className="shell grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="h-section mt-3">{service.navLabel} FAQs</h2>
            <p className="lede mt-4">
              Practical answers to the questions that come up most often. Anything else can be
              discussed by phone.
            </p>
            <a
              href={business.phoneHref}
              className="mt-5 inline-flex items-center gap-2 text-[0.86rem] font-bold text-navy hover:text-red"
            >
              <PhoneIcon size={16} />
              {business.phoneDisplay}
            </a>
          </div>
          <div>
            <FaqAccordion items={service.faqs} idPrefix={service.slug} />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="shell">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
            <div>
              <Eyebrow>Related services</Eyebrow>
              <h2 className="mt-3 text-[1.5rem] font-extrabold tracking-[-0.025em] text-navy sm:text-[1.8rem]">
                Often discussed alongside this one.
              </h2>
            </div>
            <Link to="/services" className="link-arrow">
              All services
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group card-lift overflow-hidden rounded-[4px] border border-line bg-white"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1100}
                  height={733}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[0.95rem] font-bold text-navy">{item.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[0.82rem] leading-relaxed text-muted">{item.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy">
                    Learn more
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2.5 rounded-[4px] border border-line bg-mist p-4 text-[0.82rem] leading-relaxed text-muted">
            <CheckIcon size={16} className="mt-[3px] flex-none text-red" />
            <p>
              Not sure which service applies? Call{" "}
              <a href={business.phoneHref} className="font-semibold text-navy underline underline-offset-2 hover:decoration-red">
                {business.phoneDisplay}
              </a>{" "}
              and describe the door, opening, or plan — that is enough to start.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Ready to discuss ${service.navLabel.toLowerCase()}?`}
        body="Call with the property, the door or opening, and what you have noticed. The relevant next step can be discussed from there."
      />
    </>
  );
}
