import { business, pageMeta, services } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowRight, ArrowUpRight, CheckIcon, GarageIcon, HomeIcon, BuildingIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import { CallButton, CtaBand, Eyebrow, PageHeader, SectionHead } from "@/components/ui";

const approachPoints = [
  "The type and condition of the door or shutter",
  "The dimensions and clearances of the opening",
  "How the garage or premises is used day to day",
  "What you want from the property, and the finish you have in mind",
];

export default function About() {
  usePageMeta(pageMeta["/about"]);

  return (
    <>
      <PageHeader
        eyebrow="About the business"
        title="Garage door and shutter help, kept practical."
        intro="Gary Coakley Garage Door Repair is a New Jersey-based garage door and shutter service business serving residential and commercial customers — focused on practical solutions, clear guidance, and work that respects the property."
        trail={[{ label: "Home", to: "/" }, { label: "About" }]}
        image="/images/about-technician.jpg"
        imageAlt="Garage door technician with a tool bag walking toward a white suburban garage door."
        imageCaption="Residential garage door service — repair, replacement, and installation enquiries are welcome by phone."
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell grid gap-9 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>What this business is about</Eyebrow>
            <h2 className="h-section mt-3">Different properties, different demands — one point of contact.</h2>
          </div>
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted">
            <p>
              Garage doors and shutters are the focus. That means installation, repair, replacement,
              automatic doors, roller shutters, shutter installation, maintenance, and commercial
              shutters for homes and business premises.
            </p>
            <p>
              The approach is straightforward: describe the property and the door or opening, talk
              through what is happening, and understand the next step before anything is agreed. No
              sales script, no assumptions about the part name.
            </p>
            <p className="rounded-[4px] border border-line bg-mist p-4 text-[0.88rem] leading-relaxed text-ink">
              <span className="font-semibold text-navy">A note on accuracy:</span> details such as
              coverage, availability, and the right service for your property are confirmed directly
              by phone. This website does not promise special offers, response times, or guarantees.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
              <CallButton />
              <Link to="/services" className="link-arrow">
                Explore the services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="What we work on"
            title="Doors, openers, and shutters."
            intro="The services below reflect what the business offers. If you are not sure which one fits, describe the situation by phone and it can be pointed in the right direction."
            action={
              <Link to="/services" className="link-arrow">
                All service details
                <ArrowUpRight size={15} />
              </Link>
            }
          />
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex items-start justify-between gap-4 rounded-[4px] border border-line bg-white p-4 transition-colors hover:border-[#b9c7da] sm:p-5"
              >
                <span>
                  <span className="block text-[0.95rem] font-bold text-navy">{service.name}</span>
                  <span className="mt-1 block text-[0.83rem] leading-relaxed text-muted">{service.summary}</span>
                </span>
                <ArrowRight
                  size={17}
                  className="mt-0.5 flex-none text-[#aab4c3] transition-all group-hover:translate-x-0.5 group-hover:text-red"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell grid gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>How the conversation works</Eyebrow>
            <h2 className="h-section mt-3">The right next step depends on the door.</h2>
            <p className="lede mt-4">
              It is not simply a choice between repair and replacement. The property, the hardware,
              and how the garage is used all shape what makes sense.
            </p>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {approachPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 py-3.5 text-[0.9rem] leading-relaxed text-ink">
                  <CheckIcon size={16} className="mt-[3px] flex-none text-red" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.84rem] leading-relaxed text-muted">
              Photos of the door, hardware, or opening can help the first conversation. Nothing needs
              to be measured precisely before you call.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[4px] border border-line bg-white p-5 sm:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-mist text-navy">
                <HomeIcon size={19} />
              </span>
              <h3 className="mt-3.5 text-[1.05rem] font-bold text-navy">For residential customers</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">
                A door that is noisy, sticking, damaged, or no longer right for the house. New door
                and opener questions are welcome as part of the same conversation.
              </p>
            </div>
            <div className="rounded-[4px] border border-line bg-white p-5 sm:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-mist text-navy">
                <BuildingIcon size={19} />
              </span>
              <h3 className="mt-3.5 text-[1.05rem] font-bold text-navy">For business premises</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">
                Storefronts, service entrances, workshops, and storage openings can be discussed where
                a roller shutter is practical for the premises and how often it is used.
              </p>
            </div>
            <div className="rounded-[4px] border border-navy/15 bg-mist p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                <MapPinIcon size={15} />
                Service coverage
              </div>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-ink">
                {business.areaServed} — {business.areaNote}
              </p>
              <a
                href={business.phoneHref}
                className="mt-3 inline-flex items-center gap-2 text-[0.83rem] font-bold text-navy hover:text-red"
              >
                <PhoneIcon size={15} />
                {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-12 sm:py-14">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: GarageIcon,
                title: "Doors & openers",
                text: "Repair, replacement, installation, automatic operation, remotes, and maintenance.",
              },
              {
                icon: CheckIcon,
                title: "Residential & commercial",
                text: "Both property types are served, with the requirements of each discussed directly.",
              },
              {
                icon: MapPinIcon,
                title: "Coverage by phone",
                text: "Availability depends on location and is confirmed before any work is planned.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border-t-2 border-navy pt-4">
                  <Icon size={19} className="text-blue" />
                  <h3 className="mt-3 text-[1rem] font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
