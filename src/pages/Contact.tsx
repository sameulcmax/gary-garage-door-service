import { useRef, useState } from "react";
import { business, pageMeta, services } from "@/data/site";
import { useFaqSchema, usePageMeta } from "@/lib/seo";
import {
  CheckIcon,
  CopyIcon,
  InfoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";
import { CallButton, Eyebrow, FaqAccordion, PageHeader } from "@/components/ui";

const contactFaqs = [
  {
    q: "What is the fastest way to reach the business?",
    a: "Calling 862-290-4278 is the most direct route. Describe the door or shutter, the property, and what you need, and the next step can be discussed.",
  },
  {
    q: "Which areas are covered?",
    a: "Gary Coakley Garage Door Repair is based in New Jersey. Coverage depends on your location, so call to confirm availability in your area before planning any work.",
  },
  {
    q: "When is the team available?",
    a: "Call 862-290-4278 to reach the team. Current availability and scheduling are confirmed when you speak with us.",
  },
  {
    q: "Why does this form not submit automatically?",
    a: "This is a frontend-only website with no form-processing service behind it. Rather than show a false confirmation, the helper prepares a summary in your browser so you can copy it or read it over the phone. Nothing is sent or stored by this site.",
  },
];

export default function Contact() {
  usePageMeta(pageMeta["/contact"]);
  useFaqSchema(contactFaqs, "contact");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "Residential",
    service: services[0].name,
    location: "",
    message: "",
  });
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<"idle" | "copied" | "manual">("idle");
  const summaryRef = useRef<HTMLTextAreaElement>(null);

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  };

  const buildSummary = () => {
    const lines = [
      `Service request — ${business.name}`,
      `Name: ${form.name.trim() || "Not provided"}`,
      `Phone: ${form.phone.trim() || "Not provided"}`,
      `Property: ${form.property}`,
      `Service: ${form.service}`,
      `Location: ${form.location.trim() || "Not provided"}`,
      `Details: ${form.message.trim() || "Not provided"}`,
    ];
    setSummary(lines.join("\n"));
    setStatus("idle");
  };

  const copySummary = async () => {
    if (!summary) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(summary);
        setStatus("copied");
      } else {
        throw new Error("Clipboard unavailable");
      }
    } catch {
      summaryRef.current?.focus();
      summaryRef.current?.select();
      setStatus("manual");
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about the door."
        intro="Calling is the most direct way to reach Gary Coakley Garage Door Repair. Describe the property, the door or opening, and what you have noticed — the relevant next step can be discussed from there."
        trail={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        actions={false}
      />

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="shell grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <div className="space-y-4">
            <div className="rounded-[4px] bg-navy p-6 text-white sm:p-7">
              <Eyebrow light>Call directly</Eyebrow>
              <a
                href={business.phoneHref}
                className="mt-3 flex items-center gap-3 font-display text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold tracking-[-0.02em] text-white transition-colors hover:text-[#ffd7de]"
                aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/25">
                  <PhoneIcon size={20} />
                </span>
                {business.phoneDisplay}
              </a>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-[#c9d6ea]">
                Describe the door or shutter, what it is doing, and where the property is located.
                You do not need to know the part name to start.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <CallButton className="btn btn-primary w-full sm:w-auto" />
                <span className="flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-[3px] border border-white/20 px-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.06em] text-[#c9d6ea]">
                  <MapPinIcon size={14} />
                  {business.areaServed} coverage
                </span>
              </div>
            </div>

            <div className="rounded-[4px] border border-line bg-white p-5 sm:p-6">
              <h2 className="text-[1.02rem] font-bold text-navy">What to have ready</h2>
              <ul className="mt-3 space-y-2.5">
                {[
                  "The door or shutter type, and the property",
                  "What it is doing — noise, movement, damage, or sticking",
                  "The installation or replacement you are planning",
                  "Your location, so coverage can be confirmed",
                  "Photos of the door or hardware, if you have them",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-ink">
                    <CheckIcon size={15} className="mt-[3px] flex-none text-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[4px] border border-line bg-mist p-5 sm:p-6">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                <MapPinIcon size={15} />
                Service area
              </div>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-ink">
                {business.areaServed}. {business.areaNote}
              </p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-muted">
                Current availability and scheduling are confirmed when you call.
              </p>
            </div>

            <div className="rounded-[4px] border border-line bg-white p-5 text-[0.8rem] leading-relaxed text-muted sm:p-6">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                <InfoIcon size={15} />
                Contact details
              </div>
              <p className="mt-2">
                Address: {business.address}. Call to confirm service availability and scheduling.
              </p>
            </div>
          </div>

          <div id="request-form" className="scroll-mt-24 rounded-[4px] border border-line bg-white p-5 sm:p-7">
            <Eyebrow>Request service</Eyebrow>
            <h2 className="mt-3 text-[1.5rem] font-extrabold leading-tight tracking-[-0.025em] text-navy sm:text-[1.75rem]">
              Prepare your details, then call.
            </h2>
            <div className="mt-4 flex items-start gap-2.5 rounded-[3px] border border-[#c9d9ee] bg-[#f2f7fd] p-3.5">
              <InfoIcon size={16} className="mt-[2px] flex-none text-blue" />
              <p className="text-[0.8rem] leading-relaxed text-[#2b4362]">
                This page does not send, store, or submit anything. It builds a summary in your
                browser that you can copy and use when you call. Nothing is transmitted from this
                website.
              </p>
            </div>

            <form
              className="mt-5 grid gap-4 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                buildSummary();
              }}
            >
              <div>
                <label className="field-label" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="field"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(event) => update("name")(event.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="contact-phone">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="field"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(event) => update("phone")(event.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="contact-property">
                  Property type
                </label>
                <select
                  id="contact-property"
                  name="property"
                  className="field"
                  value={form.property}
                  onChange={(event) => update("property")(event.target.value)}
                >
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Other / not sure</option>
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="contact-service">
                  Service
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="field"
                  value={form.service}
                  onChange={(event) => update("service")(event.target.value)}
                >
                  {services.map((service) => (
                    <option key={service.slug} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-location">
                  Location <span className="font-normal text-muted">(city, state, or ZIP — optional)</span>
                </label>
                <input
                  id="contact-location"
                  name="location"
                  type="text"
                  autoComplete="address-level2"
                  className="field"
                  placeholder="Needed to confirm coverage"
                  value={form.location}
                  onChange={(event) => update("location")(event.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="contact-message">
                  What is happening with the door?
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="field resize-y"
                  placeholder="For example: the door is noisy and stops halfway up; or: I would like to discuss a replacement door."
                  value={form.message}
                  onChange={(event) => update("message")(event.target.value)}
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2.5 sm:flex-row">
                <button type="submit" className="btn btn-navy sm:flex-1">
                  Build my request summary
                </button>
                <a
                  href={business.phoneHref}
                  className="btn btn-primary sm:flex-1"
                  aria-label={`Call ${business.name} on ${business.phoneDisplay}`}
                >
                  <PhoneIcon size={17} />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </form>

            {summary ? (
              <div className="mt-5 border-t border-line pt-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="contact-summary" className="text-[0.8rem] font-bold uppercase tracking-[0.08em] text-navy">
                    Your request summary
                  </label>
                  <span className="text-[0.7rem] font-medium text-muted">Nothing has been sent</span>
                </div>
                <textarea
                  id="contact-summary"
                  ref={summaryRef}
                  readOnly
                  rows={8}
                  className="field bg-mist font-sans text-[0.86rem] leading-relaxed"
                  value={summary}
                />
                <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
                  <button type="button" onClick={copySummary} className="btn btn-outline">
                    <CopyIcon size={16} />
                    Copy summary
                  </button>
                  <a href={business.phoneHref} className="btn btn-primary">
                    <PhoneIcon size={16} />
                    Call and read it out
                  </a>
                </div>
                <p className="mt-2.5 text-[0.75rem] leading-relaxed text-muted" role="status">
                  {status === "copied"
                    ? "Copied to your clipboard. Nothing has been sent from this website."
                    : status === "manual"
                      ? "Automatic copying was unavailable. Your summary is selected — use your device's copy command."
                      : "The summary exists only in this browser tab. Use the copy button or read it over the phone."}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mist py-14 sm:py-16">
        <div className="shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Contact questions</Eyebrow>
            <h2 className="h-section mt-3">Before you get in touch.</h2>
            <p className="lede mt-4">
              Quick answers about reaching the business, coverage, and how the request helper on this
              page works.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <CallButton />
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                Back to the request helper
              </button>
            </div>
          </div>
          <FaqAccordion items={contactFaqs} idPrefix="contact" />
        </div>
      </section>
    </>
  );
}
