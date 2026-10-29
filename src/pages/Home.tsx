import { business } from "@/data/site";
import { pageMeta, services } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckIcon,
  GarageIcon,
  InfoIcon,
  MapPinIcon,
  PhoneIcon,
  RemoteIcon,
  ShutterIcon,
} from "@/components/Icons";
import {
  CallButton,
  CtaBand,
  Eyebrow,
  FaqAccordion,
  SectionHead,
  ServiceGrid,
  TrustRail,
} from "@/components/ui";

const homeFaqs = [
  {
    q: "Which areas do you serve?",
    a: "Gary Coakley Garage Door Repair is based in New Jersey. Coverage depends on the location, so call 862-290-4278 to confirm availability in your area before planning any work.",
  },
  {
    q: "Do you work on both homes and business premises?",
    a: "Yes — residential and commercial garage door and shutter services are offered, including installation, repair, replacement, automatic doors, roller shutters, maintenance and commercial shutters.",
  },
  {
    q: "How do I know whether I need a repair or a replacement?",
    a: "There is no single rule. It depends on the door's condition, the nature of the problem, and what you want from the property. Describe the symptoms and age of the door when you call, and the options can be talked through.",
  },
  {
    q: "Can you help with garage door openers and remotes?",
    a: "Openers, remotes and automatic door operation are part of the services offered. Describe the existing opener and what is not working, and the next step can be discussed by phone.",
  },
  {
    q: "My garage door is stuck — what should I do first?",
    a: "Stop trying to operate it, particularly if it looks crooked, is off its tracks, or is damaged. Call 862-290-4278 and describe what the door is doing. Avoid pulling or forcing the door.",
  },
  {
    q: "What should I have ready when I call?",
    a: "The door or shutter type, what it is doing or what you are planning, and your location are a useful start. Photos of the door and hardware can help too.",
  },
];

const doorStyles = [
  {
    image: "/images/hero-garage-door.jpg",
    alt: "Cream raised-panel two-car garage door with a row of upper windows and black hardware.",
    title: "Raised-panel look",
    text: "A traditional look with defined panels, suited to colonial, cape, and classic suburban homes.",
  },
  {
    image: "/images/service-installation.jpg",
    alt: "Charcoal sectional garage door with frosted glass top windows on a brick home.",
    title: "Sectional, charcoal",
    text: "Horizontal sections that travel overhead, with glazing and a darker finish for a more current frontage.",
  },
  {
    image: "/images/service-roller-shutters.jpg",
    alt: "Sand-beige roller shutter fitted over a residential garage opening.",
    title: "Roller shutter",
    text: "A neat coiling curtain for suitable openings where space, security, or a different look matters.",
  },
];

const whyPoints = [
  {
    icon: CheckIcon,
    title: "Repair or replacement",
    text: "The immediate problem and the longer-term option can be discussed in the same conversation.",
  },
  {
    icon: GarageIcon,
    title: "Homes and businesses",
    text: "Residential and commercial garage door and shutter work, including installation and servicing.",
  },
  {
    icon: RemoteIcon,
    title: "Openers and remotes",
    text: "Automatic door operation, openers, and everyday access questions are all part of the service.",
  },
  {
    icon: MapPinIcon,
    title: "Coverage confirmed first",
    text: "Call with your location so service availability can be confirmed before work is planned.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Call or prepare your details",
    text: "Share the door type, what has changed, and your location so the next step is grounded in the property.",
  },
  {
    number: "02",
    title: "Describe the door or opening",
    text: "The sound, the movement, visible damage, or the installation you are planning. Photos can help.",
  },
  {
    number: "03",
    title: "Discuss the options",
    text: "Repair, replacement, shutters, or maintenance — talk through the practical route forward.",
  },
  {
    number: "04",
    title: "Confirm availability by phone",
    text: "Coverage, scheduling, and the details of the work are confirmed when you speak with the team.",
  },
];

export default function Home() {
  usePageMeta(pageMeta["/"]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#edf3fa]" aria-label="Garage door repair and installation">
        <div className="shell lg:hidden">
          <div className="py-5 sm:py-7 lg:py-9">
            <p className="eyebrow">
              Garage door repair &amp; installation
            </p>
            <h1
              id="home-hero-title"
              className="mt-3.5 max-w-4xl font-display text-[clamp(1.9rem,4.2vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.038em] text-navy"
            >
              Garage door repair, <span className="text-red">without the guesswork</span>
              <span className="text-red" aria-hidden="true">.</span>
            </h1>
          </div>

          <figure className="relative overflow-hidden rounded-[4px]">
            <img
              src="/images/hero-garage-door.jpg"
              alt="Cream raised-panel garage door with upper windows on a white American suburban home."
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="h-[240px] w-full object-cover object-[center_58%] sm:h-[330px] lg:h-[480px]"
            />
            <figcaption className="absolute bottom-3 left-3 border-l-[3px] border-red bg-white/95 px-3 py-2 sm:bottom-4 sm:left-4 sm:px-4 sm:py-3">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-blue sm:text-[0.63rem]">
                Residential &amp; commercial
              </p>
              <p className="mt-0.5 text-[0.76rem] font-semibold leading-snug text-navy sm:text-[0.86rem]">
                Garage doors, openers &amp; shutters
              </p>
            </figcaption>
          </figure>

          <div className="pb-5 pt-4 sm:pb-7 sm:pt-5">
            <p className="max-w-3xl text-[0.94rem] leading-relaxed text-muted sm:text-[1rem]">
              Repair, installation, and maintenance for homes and businesses — plus automatic doors
              and shutter services.
            </p>

            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {["Repair & replacement", "Openers & remotes", "Residential & commercial"].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-[0.8rem] font-medium text-ink">
                  <CheckIcon size={14} className="flex-none text-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="shell hidden lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-10 lg:py-10 xl:gap-14">
          <div className="py-4">
            <p className="eyebrow">Garage door repair &amp; installation</p>
            <h1 id="home-hero-title-desktop" className="mt-3.5 max-w-xl font-display text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold leading-[1.02] tracking-[-0.038em] text-navy">
              Garage door repair, <span className="text-red">without the guesswork</span>
              <span className="text-red" aria-hidden="true">.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-muted">
              Repair, installation, and maintenance for homes and businesses — plus automatic doors
              and shutter services.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {["Repair & replacement", "Openers & remotes", "Residential & commercial"].map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-[0.82rem] font-medium text-ink">
                  <CheckIcon size={14} className="flex-none text-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative overflow-hidden rounded-[4px]">
            <img
              src="/images/hero-garage-door.jpg"
              alt="Cream raised-panel garage door with upper windows on a white American suburban home."
              width={1600}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full object-contain"
            />
            <figcaption className="absolute bottom-4 left-4 border-l-[3px] border-red bg-white/95 px-4 py-3">
              <p className="text-[0.63rem] font-bold uppercase tracking-[0.14em] text-blue">
                Residential &amp; commercial
              </p>
              <p className="mt-0.5 text-[0.86rem] font-semibold leading-snug text-navy">
                Garage doors, openers &amp; shutters
              </p>
            </figcaption>
          </figure>
        </div>

        <TrustRail />
      </section>

      {/* SERVICES */}
      <section className="border-b border-line bg-[#eaf0f8] py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="What we do"
            title="Start with what the door needs."
            intro={
              <>
                If you know the symptom but not the part name, choose the closest service and
                describe what changed. Not sure? Call{" "}
                <a href={business.phoneHref} className="font-semibold text-navy underline decoration-[#c3cdda] underline-offset-4 hover:decoration-red">
                  {business.phoneDisplay}
                </a>{" "}
                and describe it.
              </>
            }
            action={
              <Link to="/services" className="link-arrow">
                View all eight services
                <ArrowUpRight size={15} />
              </Link>
            }
          />
          <ServiceGrid limit={5} />
          <div className="mt-6 flex flex-col gap-3 rounded-[4px] border border-red bg-red px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2.5 text-[0.82rem] font-semibold text-white">
              <ShutterIcon size={18} className="flex-none" />
              Also available for shutters and business premises
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {services
                .filter((service) => ["roller-shutters", "shutter-installation", "commercial-shutters"].includes(service.slug))
                .map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-[0.78rem] font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                  >
                    {service.navLabel}
                    <ArrowRight size={13} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="why-title">
        <div className="shell grid items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-14 xl:gap-20">
          <div>
            <Eyebrow>Why Gary Coakley</Eyebrow>
            <h2 id="why-title" className="h-section mt-3 max-w-xl">
              A clear route from a problem door to the right next step.
            </h2>
            <p className="lede mt-4 max-w-xl">
              Garage doors and shutters are the focus. Talk through the property, the opening, and
              what you are noticing — then decide what makes sense before anything is agreed.
            </p>

            <div className="mt-7 grid gap-x-7 gap-y-0 sm:grid-cols-2">
              {whyPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="border-t border-line py-4">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-[3px] bg-mist text-navy">
                        <Icon size={16} />
                      </span>
                      <h3 className="text-[0.95rem] font-bold text-navy">{point.title}</h3>
                    </div>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{point.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link to="/about" className="link-arrow">
                About the business
                <ArrowUpRight size={15} />
              </Link>
              <a href={business.phoneHref} className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-navy hover:text-red">
                <PhoneIcon size={15} />
                {business.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative">
            <figure className="overflow-hidden rounded-[4px] border border-line bg-mist">
              <img
                src="/images/about-technician.jpg"
                alt="Garage door technician with a tool bag approaching the white garage door of a suburban home."
                width={1100}
                height={733}
                loading="lazy"
                decoding="async"
                className="aspect-[5/4] w-full object-cover object-center"
              />
            </figure>
            <div className="relative z-10 mx-4 -mt-10 rounded-[3px] bg-navy p-5 text-white shadow-[0_20px_40px_-28px_rgba(0,40,104,0.65)] sm:mx-6 sm:p-6">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#9fb4d2]">
                Not sure what's wrong?
              </p>
              <p className="mt-2 font-display text-[1.12rem] font-bold leading-snug text-white">
                Describe the symptom — that is enough to start.
              </p>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-[#b9c8de]">
                You do not need to know the part name. Mention the noise, the movement, or where the
                door stops.
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 inline-flex min-h-[42px] items-center gap-2 rounded-[3px] border border-white/35 px-3.5 text-[0.75rem] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon size={15} />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-line bg-mist py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="How it works"
            title="What happens next."
            intro="No online scheduling and no account to create. A short call is the most direct way to describe the door, confirm coverage, and understand the next step."
            action={
              <CallButton className="btn btn-navy" />
            }
          />
          <ol className="grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="border-t-2 border-navy pt-4">
                <span className="font-display text-[0.78rem] font-extrabold tracking-[0.08em] text-red">
                  {step.number}
                </span>
                <h3 className="mt-2 text-[1rem] font-bold leading-snug text-navy">{step.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-7 flex items-start gap-2 text-[0.76rem] leading-relaxed text-muted">
            <InfoIcon size={15} className="mt-[1px] flex-none text-blue" />
            Service availability and coverage depend on your location and the nature of the work —
            both are confirmed when you call.
          </p>
        </div>
      </section>

      {/* DOOR STYLES */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="Garage doors"
            title="A door that suits the front of the home."
            intro="Popular directions for a residential door. These are illustrative examples — the exact range and options for your opening are confirmed on enquiry."
            action={
              <Link to="/garage-doors" className="link-arrow">
                Explore garage door options
                <ArrowUpRight size={15} />
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
            {doorStyles.map((style) => (
              <figure key={style.title} className="group overflow-hidden rounded-[4px] border border-line bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.alt}
                    width={1100}
                    height={733}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-0 left-0 border-r border-t border-line bg-white px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-navy">
                    Inspiration
                  </span>
                </div>
                <figcaption className="p-4 sm:p-5">
                  <h3 className="text-[1rem] font-bold text-navy">{style.title}</h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">{style.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 flex items-start gap-2 text-[0.76rem] leading-relaxed text-muted">
            <InfoIcon size={15} className="mt-[1px] flex-none text-blue" />
            Door inspiration photos, not project photos. Availability, finish, and suitability are
            confirmed for your opening when you call.
          </p>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-mist py-14 sm:py-16 lg:py-20" aria-labelledby="coverage-title">
        <div className="shell grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>Service area</Eyebrow>
            <h2 id="coverage-title" className="h-section mt-3 max-w-xl">
              New Jersey service, confirmed by phone.
            </h2>
            <p className="lede mt-4 max-w-xl">
              Based in Paterson, New Jersey, Gary Coakley Garage Door Repair serves residential and
              commercial customers. Coverage depends on location, so call to confirm availability in
              your area before planning any work.
            </p>
            <ul className="mt-6 grid gap-2.5">
              {[
                "Garage doors, openers, and related services",
                "Roller shutters and commercial shutter solutions",
                "Residential and commercial properties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.9rem] leading-relaxed text-ink">
                  <CheckIcon size={16} className="mt-[3px] flex-none text-red" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <CallButton className="btn btn-navy" />
            </div>
            <p className="mt-3 text-[0.76rem] leading-relaxed text-muted">
              {business.address} · Call to confirm coverage and availability.
            </p>
          </div>

          <div className="rounded-[4px] border border-line bg-white p-6 sm:p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-[3px] bg-navy text-white">
              <MapPinIcon size={19} />
            </span>
            <h3 className="mt-4 text-[1.15rem] font-bold text-navy">Before you plan the work</h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">
              A few details make the first conversation more useful:
            </p>
            <dl className="mt-4 divide-y divide-line border-t border-line">
              {[
                { term: "Your location", detail: "Needed to confirm whether the area is covered." },
                { term: "The property", detail: "Residential or commercial, and the type of opening." },
                { term: "The door or shutter", detail: "What it is doing, or what you are planning." },
              ].map((row) => (
                <div key={row.term} className="py-3">
                  <dt className="text-[0.84rem] font-semibold text-navy">{row.term}</dt>
                  <dd className="mt-0.5 text-[0.82rem] leading-relaxed text-muted">{row.detail}</dd>
                </div>
              ))}
            </dl>
            <a
              href={business.phoneHref}
              className="mt-4 inline-flex min-h-[42px] items-center gap-2 text-[0.8rem] font-bold uppercase tracking-[0.05em] text-red hover:text-red-dark"
            >
              <PhoneIcon size={15} />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-16 lg:py-20" aria-labelledby="faq-title">
        <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-title" className="h-section mt-3">
              Worth asking before you plan.
            </h2>
            <p className="lede mt-4">
              Straight answers about coverage, repairs, replacement, and what happens when you get in
              touch.
            </p>
            <div className="mt-6 rounded-[4px] border border-line bg-mist p-4">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-blue">Fastest route</p>
              <a
                href={business.phoneHref}
                className="mt-1.5 inline-flex items-center gap-2 font-display text-[1.1rem] font-bold text-navy hover:text-red"
              >
                <PhoneIcon size={17} />
                {business.phoneDisplay}
              </a>
              <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted">
                Calling is the most direct way to reach the business.
              </p>
            </div>
            <Link to="/faq" className="link-arrow mt-5">
              All frequently asked questions
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <FaqAccordion items={homeFaqs} idPrefix="home" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
