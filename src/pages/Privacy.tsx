import { business, pageMeta } from "@/data/site";
import { usePageMeta } from "@/lib/seo";
import { Link } from "@/lib/router";
import { ArrowRight, InfoIcon, PhoneIcon } from "@/components/Icons";
import { Eyebrow, PageHeader } from "@/components/ui";

const sections = [
  {
    title: "Information you provide when you call",
    body: [
      "If you call the business, you may share your name, phone number, the property type, the service you are interested in, and a description of the door, shutter, or requirement.",
      "That information is used to respond to your enquiry and to discuss the service you have asked about. It is not collected by this website.",
    ],
  },
  {
    title: "The request helper on the contact page",
    body: [
      "The contact page includes a helper that builds a summary from fields you complete. It runs entirely in your browser and does not transmit, submit, or store your details anywhere.",
      "Nothing is sent by the website, and no confirmation of submission is shown. When you use the copy button, your device's clipboard handles the text. The summary disappears when you close or reload the tab.",
    ],
  },
  {
    title: "Cookies, analytics and fonts",
    body: [
      "This website does not include its own analytics, advertising, or tracking scripts, and does not set its own cookies.",
      "The pages load web fonts from Google Fonts. As part of delivering those font files, Google may receive technical request information such as your IP address and browser details. Your browser may also cache the font files locally.",
    ],
  },
  {
    title: "Telephone calls",
    body: [
      "Calling the business connects you through your telephone provider. Your carrier's own terms and privacy practices apply to the call.",
      "Information discussed on a call is used to handle your enquiry and any resulting communication or work. It is not sold.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You choose what to share when you call. If you would like to correct details you have already provided, call the business and ask.",
      "Because this website does not collect form data, there is no website account or stored profile to delete.",
    ],
  },
  {
    title: "Changes and questions",
    body: [
      "This page may be updated if the way the website works changes. The published phone number is the direct route for a privacy question.",
    ],
  },
];

export default function Privacy() {
  usePageMeta(pageMeta["/privacy"]);

  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        title="Privacy, in plain language."
        intro="What happens to information shared when you call, and what this website does — and does not do — with the details you enter."
        trail={[{ label: "Home", to: "/" }, { label: "Privacy" }]}
        actions={false}
      />

      <section className="bg-white py-14 sm:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[4px] border border-line bg-mist p-5">
              <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue">
                <InfoIcon size={15} />
                The short version
              </div>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-ink">
                This website does not submit or store your contact details. Calls are the contact
                route, and the number is published openly on every page.
              </p>
              <a
                href={business.phoneHref}
                className="mt-3 inline-flex items-center gap-2 text-[0.88rem] font-bold text-navy hover:text-red"
              >
                <PhoneIcon size={16} />
                {business.phoneDisplay}
              </a>
              <Link to="/contact" className="link-arrow mt-4 flex w-fit">
                Contact page
                <ArrowRight size={14} />
              </Link>
            </div>
          </aside>

          <div className="min-w-0">
            <p className="rounded-[4px] border border-[#c9d9ee] bg-[#f2f7fd] p-4 text-[0.84rem] leading-relaxed text-[#2b4362]">
              This is a plain-language summary for a small service business website. It is not legal
              advice, and it does not create terms beyond what is described.
            </p>
            <div className="mt-8 space-y-8">
              {sections.map((section, index) => (
                <section key={section.title} aria-labelledby={`privacy-${index}`}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[0.72rem] font-extrabold tracking-[0.08em] text-red">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2
                      id={`privacy-${index}`}
                      className="text-[1.1rem] font-extrabold tracking-[-0.015em] text-navy sm:text-[1.2rem]"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-3 space-y-2.5 border-l border-line pl-5 sm:pl-6">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-[0.91rem] leading-relaxed text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-9 rounded-[4px] border border-line bg-white p-5">
              <Eyebrow>Contact</Eyebrow>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                {business.name} · {business.phoneDisplay} · {business.areaServed}. Coverage depends on
                location and is confirmed by phone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
