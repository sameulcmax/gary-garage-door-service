import { business, pageMeta } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowUpRight, CheckIcon, GarageIcon, ShutterIcon } from "@/components/Icons";
import { CallButton, CtaBand, Eyebrow, PageHeader, SectionHead, ServiceGrid } from "@/components/ui";

const serviceSteps = [
  {
    number: "01",
    title: "Describe the door or opening",
    text: "The symptom, visible damage, or the installation you are planning — and the property type.",
  },
  {
    number: "02",
    title: "Discuss the relevant service",
    text: "Repair, replacement, installation, automatic operation, shutters, or maintenance.",
  },
  {
    number: "03",
    title: "Confirm the next step",
    text: "Coverage, availability, and the practical details are confirmed directly by phone.",
  },
];

export default function Services() {
  usePageMeta(pageMeta["/services"]);

  return (
    <>
      <PageHeader
        eyebrow="Services overview"
        title="Garage door and shutter services for homes and businesses."
        intro="Eight focused services for residential and commercial properties — from a new installation to keeping an existing door or shutter system working the way it should."
        trail={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="The full service list"
            title="A clear route to the right service."
            intro={
              <>
                Choose the closest fit, or call{" "}
                <a
                  href={business.phoneHref}
                  className="font-semibold text-navy underline decoration-[#c3cdda] underline-offset-4 hover:decoration-red"
                >
                  {business.phoneDisplay}
                </a>{" "}
                and describe the situation. You do not need to diagnose the problem yourself.
              </>
            }
            action={
              <Link to="/contact" className="link-arrow">
                Request service details
                <ArrowUpRight size={15} />
              </Link>
            }
          />
          <ServiceGrid />
        </div>
      </section>

      <section className="border-y border-line bg-mist py-14 sm:py-16">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <Eyebrow>Repair or replace?</Eyebrow>
              <h2 className="h-section mt-3">Two directions, one conversation.</h2>
              <p className="lede mt-4">
                A repair keeps the existing door working. A replacement changes its condition,
                appearance, or operation. If you are weighing one against the other, describe the door
                and what you want to change.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CallButton />
                <Link to="/services/garage-door-replacement" className="btn btn-outline">
                  Garage door replacement
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[4px] border border-line bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-mist text-navy">
                  <GarageIcon size={19} />
                </span>
                <h3 className="mt-3 text-[1rem] font-bold text-navy">Consider repair when…</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "The door structure and panels remain sound",
                    "The issue is limited to operation or hardware",
                    "The existing look still suits the property",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.84rem] leading-relaxed text-muted">
                      <CheckIcon size={14} className="mt-[3px] flex-none text-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[4px] border border-line bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-[3px] border border-line bg-mist text-navy">
                  <ShutterIcon size={19} />
                </span>
                <h3 className="mt-3 text-[1rem] font-bold text-navy">Consider replacement when…</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "The door is worn, damaged, or recurring trouble",
                    "The style no longer fits the frontage",
                    "You want a different type or operation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[0.84rem] leading-relaxed text-muted">
                      <CheckIcon size={14} className="mt-[3px] flex-none text-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="shell">
          <SectionHead
            eyebrow="Enquiry process"
            title="How a service conversation starts."
            intro="A short call is usually enough to establish what is happening and which service applies. No online scheduling, no account, and no form to submit."
          />
          <ol className="grid gap-x-6 gap-y-7 sm:grid-cols-3">
            {serviceSteps.map((step) => (
              <li key={step.number} className="border-t-2 border-navy pt-4">
                <span className="font-display text-[0.78rem] font-extrabold tracking-[0.08em] text-red">
                  {step.number}
                </span>
                <h3 className="mt-2 text-[1rem] font-bold leading-snug text-navy">{step.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
