import { business, pageMeta } from "@/data/site";
import { useFaqSchema, usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { PhoneIcon } from "@/components/Icons";
import { CallButton, CtaBand, Eyebrow, FaqAccordion, PageHeader } from "@/components/ui";

const groups = [
  {
    id: "contact-coverage",
    title: "Getting in touch & coverage",
    items: [
      {
        q: "What is the fastest way to reach the business?",
        a: "Calling 862-290-4278 is the most direct route. Describe the door or shutter, the property, and what you need, and the next step can be discussed.",
      },
      {
        q: "Which areas do you serve?",
        a: "Gary Coakley Garage Door Repair is based in New Jersey. Coverage depends on your location, so call to confirm availability in your area before planning any work.",
      },
      {
        q: "What are your opening hours?",
        a: "Call 862-290-4278 to reach the team. Current availability and scheduling are confirmed when you speak with us.",
      },
      {
        q: "Do you work with residential and commercial customers?",
        a: "Yes. Garage doors and shutters are offered for homes and business premises, including installation, repair, replacement, automatic doors, maintenance, and commercial shutters.",
      },
    ],
  },
  {
    id: "repairs-safety",
    title: "Repairs & safety",
    items: [
      {
        q: "My garage door is stuck — what should I do first?",
        a: "Stop trying to operate it, particularly if it looks crooked, is off its tracks, or is damaged. Call 862-290-4278 and describe what the door is doing. Avoid pulling or forcing the door.",
      },
      {
        q: "Is it safe to keep using a noisy door?",
        a: "New or worsening noises usually mean something is wearing or out of adjustment. Continued use can make the underlying problem worse, so it is sensible to have the system inspected rather than waiting for it to fail.",
      },
      {
        q: "Can I adjust springs or cables myself?",
        a: "No. Garage door springs and cables are under high tension and can cause serious injury if handled incorrectly. This work should always be left to a technician with the right tools and training.",
      },
      {
        q: "What kinds of doors can be repaired?",
        a: "Sectional, roller, and other common residential and commercial door systems can often be assessed for repair. Describe your door and its symptoms when you call and what is possible can be discussed.",
      },
      {
        q: "Can maintenance prevent future problems?",
        a: "Paying attention to how the system operates and addressing wear early can reduce the chance of unexpected problems. The maintenance and servicing service covers doors, openers, hardware, and shutter systems.",
      },
    ],
  },
  {
    id: "installation-replacement",
    title: "Installation & replacement",
    items: [
      {
        q: "How do I know whether I need a repair or a replacement?",
        a: "There is no single rule — it depends on the door's condition, the nature of the problem, and what you want from the property. Describe the situation and you will get a straight discussion about which direction suits you.",
      },
      {
        q: "What affects which door is right for my garage?",
        a: "The opening dimensions and clearances, your ceiling and driveway space, the architecture of the property, how the door will be used, and the finish you are looking for.",
      },
      {
        q: "Can a new door work with my existing setup?",
        a: "That depends on the condition and design of your current tracks, hardware, and opener. Describe your existing system when you call and whether it can be reused or should be updated can be discussed.",
      },
      {
        q: "What should I have ready when I call about a new door?",
        a: "The opening size if you have it, the current door type, the property, and the kind of look or operation you have in mind are all useful. Nothing needs to be measured precisely before the first call.",
      },
    ],
  },
  {
    id: "openers-automation",
    title: "Openers & automatic doors",
    items: [
      {
        q: "Can my existing garage door be automated?",
        a: "Often it can be considered, depending on the door's type, condition, and balance. Describe your current door when you call and what an automatic solution could involve can be discussed.",
      },
      {
        q: "Can a new door be installed as an automatic door?",
        a: "Yes — planning automatic operation alongside a new installation or replacement is the tidiest approach, because the door and its operation are decided together.",
      },
      {
        q: "Can you help with openers and remotes?",
        a: "Openers and remotes are part of the services offered. Describe the existing opener and what is not working, and the sensible next step can be discussed by phone.",
      },
      {
        q: "What information helps with an automatic door enquiry?",
        a: "The existing door and its condition, how often the door is used, who needs access, the available power, and the ceiling space in the garage all help shape the conversation.",
      },
    ],
  },
  {
    id: "shutters",
    title: "Shutters & servicing",
    items: [
      {
        q: "Do you install roller shutters for homes?",
        a: "Roller shutter solutions for suitable residential and commercial applications are offered. Describe the opening, its dimensions, and how it will be used when you call.",
      },
      {
        q: "What commercial openings can be discussed?",
        a: "Storefronts and display glazing, workshop and storage openings, service entrances, and secondary access points can all be discussed where a shutter is a practical fit for the premises.",
      },
      {
        q: "I rent a commercial unit — what should I check?",
        a: "Physical changes to leased premises usually involve the property owner or manager. It is worth confirming what is permitted under your lease, then discussing the practical options.",
      },
      {
        q: "Does maintenance cover shutters as well as doors?",
        a: "Yes — garage doors and shutter systems can both be discussed. Describe what you have, its rough age, and any symptoms you have noticed when you get in touch.",
      },
    ],
  },
];

const allFaqs = groups.flatMap((group) => group.items);

export default function FAQ() {
  usePageMeta(pageMeta["/faq"]);
  useFaqSchema(allFaqs, "faq-page");

  return (
    <>
      <PageHeader
        eyebrow="Frequently asked questions"
        title="Practical answers before you call."
        intro="Coverage, repairs, replacement, openers, and shutters — the questions that come up most often, answered plainly. Anything else can be discussed by phone."
        trail={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] border border-line bg-mist p-5">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                Fastest route
              </p>
              <a
                href={business.phoneHref}
                className="mt-2 inline-flex items-center gap-2 font-display text-[1.15rem] font-bold text-navy hover:text-red"
              >
                <PhoneIcon size={17} />
                {business.phoneDisplay}
              </a>
              <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                Calling is the most direct way to reach the business. Current availability and
                scheduling are confirmed when you speak with the team.
              </p>
              <div className="mt-4">
                <CallButton className="btn btn-navy w-full" />
              </div>
            </div>
            <div className="mt-4 hidden rounded-[4px] border border-line p-5 lg:block">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                Looking for a service?
              </p>
              <Link to="/services" className="link-arrow mt-2.5">
                Browse all services
              </Link>
              <p className="mt-3 text-[0.8rem] leading-relaxed text-muted">
                Repair, installation, replacement, openers, shutters, and maintenance.
              </p>
            </div>
          </aside>

          <div className="min-w-0 space-y-10">
            {groups.map((group) => (
              <div key={group.id}>
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="h-[2px] w-6 flex-none bg-red" aria-hidden="true" />
                  <h2 className="text-[1.2rem] font-extrabold tracking-[-0.02em] text-navy sm:text-[1.35rem]">
                    {group.title}
                  </h2>
                </div>
                <FaqAccordion items={group.items} idPrefix={group.id} />
              </div>
            ))}

            <div className="rounded-[4px] border border-line bg-mist p-5 sm:p-6">
              <Eyebrow>Still unsure?</Eyebrow>
              <p className="mt-2.5 max-w-xl text-[0.92rem] leading-relaxed text-muted">
                You do not need to know the part name or the cause. Describe the sound, the movement,
                the damage, or what you are planning — that is enough to start.
              </p>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <CallButton />
                <Link to="/contact" className="btn btn-outline">
                  Request service details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Have a question that is not answered here?"
        body="Call and describe the door, the opening, or the property. The relevant next step can be discussed directly."
      />
    </>
  );
}
