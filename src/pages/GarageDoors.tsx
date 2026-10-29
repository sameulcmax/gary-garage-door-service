import { pageMeta } from "@/data/site";
import { useFaqSchema, usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowRight, CheckIcon, InfoIcon } from "@/components/Icons";
import {
  CallButton,
  CtaBand,
  Eyebrow,
  FaqAccordion,
  PageHeader,
  SectionHead,
} from "@/components/ui";

const styles = [
  {
    image: "/images/service-installation.jpg",
    alt: "Charcoal gray sectional garage door with frosted glass top windows on a brick American home.",
    name: "Sectional doors",
    text: "Horizontal sections that open vertically and travel overhead — practical, weather-conscious, and suited to most residential driveways.",
  },
  {
    image: "/images/hero-garage-door.jpg",
    alt: "Cream raised-panel garage door with a row of upper windows and black decorative hardware.",
    name: "Raised-panel doors",
    text: "A traditional panel profile that suits colonial, cape, and classic suburban homes, with hardware and glazing options to finish the look.",
  },
  {
    image: "/images/service-roller-shutters.jpg",
    alt: "Sand-beige aluminum roller shutter fitted over a residential garage opening.",
    name: "Roller doors & shutters",
    text: "A compact coiling option where a neat curtain and space-conscious operation suit the opening and how you use the garage.",
  },
  {
    image: "/images/service-replacement.jpg",
    alt: "Modern dark-framed full-view glass garage door on a classic home at dusk.",
    name: "Flush & glazed doors",
    text: "Flat, minimal door faces with crisp lines and glazing — often paired with automatic operation on contemporary builds.",
  },
];

const factors = [
  {
    title: "The opening",
    text: "Width, height, headroom, and side room all influence which door designs and track arrangements are practical for your garage.",
  },
  {
    title: "The architecture",
    text: "The door should sit naturally within the facade. Panel geometry, colour, glazing, and hardware all play a part.",
  },
  {
    title: "How it travels",
    text: "Overhead or rolling operation affects what you can keep on the garage ceiling and how easily vehicles use the driveway.",
  },
  {
    title: "Daily use",
    text: "A busy family garage, a workshop, or occasional vehicle storage point to different priorities for access and operation.",
  },
];

const faqs = [
  {
    q: "What affects which door is right for my garage?",
    a: "The opening dimensions and clearances, your ceiling and driveway space, the architecture of the property, how the door will be used, and the finish you are looking for. These are exactly the things to mention when you call.",
  },
  {
    q: "Can my new door be automatic?",
    a: "Automatic operation can be discussed as part of the installation, so the door and its operation are planned together.",
  },
  {
    q: "How do I start an installation enquiry?",
    a: "Call 862-290-4278 describing your property, the opening, and the kind of door you have in mind. Suitable options and the next step can be discussed from there.",
  },
  {
    q: "Are the door styles shown the full catalogue?",
    a: "The styles shown are illustrative examples of popular directions, not a complete range or a project gallery. Exact options, finishes, and glazing for your opening are confirmed on enquiry.",
  },
];

export default function GarageDoors() {
  usePageMeta(pageMeta["/garage-doors"]);
  useFaqSchema(faqs, "garage-doors");

  return (
    <>
      <PageHeader
        eyebrow="Garage doors"
        title="A garage door that complements the home."
        intro="Appearance, access, and everyday use all shape the right door. Explore the common directions, then discuss what suits your opening and property."
        trail={[{ label: "Home", to: "/" }, { label: "Garage Doors" }]}
        image="/images/service-installation.jpg"
        imageAlt="Newly installed charcoal sectional garage door with frosted top windows on a brick home."
        imageCaption="Illustrative door direction — exact options for your opening are confirmed on enquiry."
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="shell">
          <SectionHead
            eyebrow="Door styles"
            title="Start with the property, not the catalogue."
            intro="Four popular directions for a residential door. Each changes the look of the frontage and how the garage works day to day."
            action={
              <CallButton className="btn btn-navy" />
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {styles.map((style) => (
              <figure key={style.name} className="group overflow-hidden rounded-[4px] border border-line bg-white">
                <div className="overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.alt}
                    width={1100}
                    height={733}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-[1.08rem] font-bold text-navy">{style.name}</h2>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">{style.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-5 flex items-start gap-2 text-[0.78rem] leading-relaxed text-muted">
            <InfoIcon size={15} className="mt-[1px] flex-none text-blue" />
            Door inspiration examples, not project photos. The available range and suitability for
            your opening are confirmed when you call.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-14 sm:py-16">
        <div className="shell grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>What shapes the choice</Eyebrow>
            <h2 className="h-section mt-3">A short list worth thinking through.</h2>
            <p className="lede mt-4">
              The door has to fit the opening, the house, and the way you use the garage. These four
              factors come up in almost every installation conversation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <CallButton />
              <Link to="/services/garage-door-installation" className="link-arrow">
                Installation details
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {factors.map((factor) => (
              <div key={factor.title} className="rounded-[4px] border border-line bg-white p-5">
                <CheckIcon size={17} className="text-red" />
                <h3 className="mt-2.5 text-[0.98rem] font-bold text-navy">{factor.title}</h3>
                <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted">{factor.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="shell grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>Planning a new door</Eyebrow>
            <h2 className="h-section mt-3">From an idea to an installed door.</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {[
                {
                  t: "Call and describe the property",
                  d: "The opening size if you have it, the current door, and the kind of look you have in mind.",
                },
                {
                  t: "Discuss suitable options",
                  d: "Style, finish, glazing, operation, and what is practical for the opening and clearances.",
                },
                {
                  t: "Confirm the next step",
                  d: "Coverage, availability, and the installation details are confirmed directly by phone.",
                },
              ].map((step, index) => (
                <li key={step.t} className="flex gap-4 py-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[3px] bg-navy font-display text-[0.72rem] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[0.95rem] font-bold text-navy">{step.t}</h3>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-muted">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Eyebrow>Garage door FAQs</Eyebrow>
            <h2 className="h-section mt-3">Before you decide.</h2>
            <div className="mt-5">
              <FaqAccordion items={faqs} idPrefix="garage-doors" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Planning a new garage door?"
        body="Describe your property, the opening, and the look you have in mind. Call to discuss the practical options for your home."
      />
    </>
  );
}
