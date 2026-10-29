/**
 * Single source of truth for the business.
 * All details below are taken from the existing business websites:
 * g-garage-door.vercel.app and garry-garage-1.vercel.app.
 * Do not add claims, ratings, certifications, or hours here.
 */
export const business = {
  name: "Gary Coakley Garage Door Repair",
  shortName: "Gary Coakley",
  displayMark: "GARY COAKLEY",
  descriptor: "Garage Door Repair",
  phoneDisplay: "862-290-4278",
  phoneHref: "tel:+18622904278",
  address: "615 E 26th St, Paterson, NJ 07504",
  areaServed: "New Jersey",
  areaNote:
    "Coverage depends on location. Call to confirm availability in your area before planning any work.",
  serviceScope: "Residential & commercial garage door and shutter services",
  description:
    "Garage door installation, repair, replacement, automatic garage doors, roller shutters, shutter installation, maintenance and commercial shutter services for residential and commercial properties.",
} as const;

export type Service = {
  slug: string;
  name: string;
  navLabel: string;
  summary: string;
  intro: string;
  image: string;
  alt: string;
  startWith: string;
  helpPoints: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "garage-door-repair",
    name: "Garage Door Repair",
    navLabel: "Garage Door Repair",
    summary:
      "Doors that sound different, move unevenly, or will not open or close the way they should.",
    intro:
      "When a garage door starts moving strangely, sounding different, or showing damage, the right move is to stop, describe the problem, and get professional guidance. This service covers the operating problems, visible damage, and general repairs that customers call about.",
    image: "/images/service-repair.jpg",
    alt: "Technician in a navy work shirt examining the track and rollers of an open white sectional garage door.",
    startWith:
      "Describe what the door is doing in plain terms — the sound, the movement, or exactly where it stops. Photos can help.",
    helpPoints: [
      "Unusual noises such as grinding, scraping, banging, or new rattling during operation",
      "Doors that shudder, stick, or travel unevenly when opening and closing",
      "Doors that stop short, reverse unexpectedly, or refuse to move",
      "Dented, cracked, bowing, or impact-damaged door panels",
      "Frayed cables, rusted components, and loose or worn fittings",
      "Doors that feel heavy, drop quickly, or will not stay in place",
    ],
    faqs: [
      {
        q: "My garage door is stuck — what should I do first?",
        a: "Stop trying to operate it, particularly if it looks crooked, is off its tracks, or is damaged. Call 862-290-4278 and describe what the door is doing. Avoid pulling or forcing the door.",
      },
      {
        q: "Is it safe to keep using a noisy door?",
        a: "New or worsening noises usually mean something is wearing or out of adjustment. Continued use can make the underlying problem worse, so it is sensible to have the system looked at rather than waiting for it to fail.",
      },
      {
        q: "Can I adjust springs or cables myself?",
        a: "No. Garage door springs and cables are under high tension and can cause serious injury if handled incorrectly. This is work for a technician with the right tools and training.",
      },
      {
        q: "Should I repair or replace the door?",
        a: "There is no single rule — it depends on the door's condition, the nature of the problem, and what you want from the property. Describe the situation and you can talk through which direction makes sense.",
      },
    ],
    related: ["garage-door-replacement", "maintenance-servicing", "automatic-garage-doors"],
  },
  {
    slug: "garage-door-installation",
    name: "Garage Door Installation",
    navLabel: "Garage Door Installation",
    summary:
      "New garage doors planned around your opening, clearances, home, and daily routine.",
    intro:
      "A garage door installation touches appearance, access, and everyday use. This service helps you explore door options that suit the property's look, available space, and requirements before anything is decided.",
    image: "/images/service-installation.jpg",
    alt: "Newly installed charcoal gray sectional garage door with frosted top windows on a brick home.",
    startWith:
      "Have the opening dimensions, your ceiling and driveway space, and the kind of door you have in mind ready when you call.",
    helpPoints: [
      "Door styles and panel layouts suited to the front of your home",
      "Width, height, headroom, and side-room considerations for the opening",
      "How the door travels — overhead or rolling — and how you use the garage",
      "Glazing, finishes, and hardware options confirmed for your opening",
      "Planning an automatic opener alongside the new door",
      "Replacing an existing door as part of a renovation or exterior update",
    ],
    faqs: [
      {
        q: "How do I start an installation enquiry?",
        a: "Call 862-290-4278 or use the request details page describing your property, the opening, and the kind of door you have in mind. Suitable options and the next step can be discussed from there.",
      },
      {
        q: "What affects which door is right for my garage?",
        a: "The opening dimensions and clearances, your ceiling and driveway space, the architecture of the property, how the door will be used, and the finish you are looking for.",
      },
      {
        q: "Can my new door be automatic?",
        a: "Automatic operation can be discussed as part of the installation, so the door and its operation are planned together. Mention it when you call.",
      },
      {
        q: "Can a new door work with my existing setup?",
        a: "That depends on the condition and design of your current tracks, hardware, and opener. Describe your existing system when you call and the options for reusing or updating it can be discussed.",
      },
    ],
    related: ["garage-door-replacement", "automatic-garage-doors", "maintenance-servicing"],
  },
  {
    slug: "garage-door-replacement",
    name: "Garage Door Replacement",
    navLabel: "Garage Door Replacement",
    summary:
      "A fresh door for one that has worn out, been damaged, or no longer suits the property.",
    intro:
      "Whether your current door has worn out, been damaged, or simply stopped suiting your home, a replacement is a chance to improve both how the property looks and how you use the garage.",
    image: "/images/service-replacement.jpg",
    alt: "Modern dark-framed glass garage door on a classic American home at dusk.",
    startWith:
      "Describe your existing door — its rough age, condition, and what you would like to change about it.",
    helpPoints: [
      "Doors with visible age, weathering, fading, or worn edges",
      "Operating problems that keep returning after previous attention",
      "Impact or structural damage that changes how the door travels or closes",
      "A style that no longer fits the front of the property",
      "Replacement planned alongside renovation or exterior upgrades",
      "A change of door type or a move to automatic operation",
    ],
    faqs: [
      {
        q: "When does replacement make more sense than repair?",
        a: "It depends on the door's condition, the nature of the problem, and what you want from the property. Describe the situation and you will get a straight discussion about which direction suits you.",
      },
      {
        q: "What should I tell the team about my existing door?",
        a: "The door type, rough age, and condition are a useful start. Any symptoms you have noticed, such as noise, uneven movement, or sticking, help build the picture.",
      },
      {
        q: "Can the new door be automatic?",
        a: "Automatic operation can be discussed alongside a replacement, so the new door and its operation are planned together. Mention it when you get in touch.",
      },
    ],
    related: ["garage-door-installation", "automatic-garage-doors", "garage-door-repair"],
  },
  {
    slug: "automatic-garage-doors",
    name: "Automatic Garage Doors",
    navLabel: "Automatic Garage Doors",
    summary:
      "Powered door operation planned around the existing door, access routine, and layout.",
    intro:
      "Powered opening and closing changes how a garage feels to use every day. This service covers automatic door solutions, openers, and remote controls for suitable residential and commercial door systems.",
    image: "/images/service-automatic.jpg",
    alt: "Ceiling-mounted automatic garage door opener and rail inside a clean residential garage.",
    startWith:
      "Tell us about your current door, how often it is used, and where power and ceiling space are available in the garage.",
    helpPoints: [
      "Automatic operation for a new door or an existing door that suits it",
      "New or replacement openers for residential garage doors",
      "Remote controls and compatible operating accessories",
      "Access routine: who uses the door, and how often it cycles",
      "Available power, ceiling space, and garage layout",
      "Maintenance questions for a powered door and its hardware",
      "Commercial door and operator requirements discussed on enquiry",
    ],
    faqs: [
      {
        q: "Can my existing garage door be automated?",
        a: "Often it can be considered, depending on the door's type, condition, and balance. Describe your current door when you call and what an automatic solution could involve can be discussed.",
      },
      {
        q: "Can a new door be installed as an automatic door?",
        a: "Yes — planning automatic operation alongside a new installation or replacement is the tidiest approach, because the door and its operation are decided together.",
      },
      {
        q: "Can you help with remotes and controls?",
        a: "Openers and remotes are part of the services offered. Describe the existing opener and what is not working, and the sensible next step can be discussed by phone.",
      },
    ],
    related: ["garage-door-installation", "garage-door-repair", "maintenance-servicing"],
  },
  {
    slug: "maintenance-servicing",
    name: "Maintenance & Servicing",
    navLabel: "Maintenance & Servicing",
    summary:
      "Attention for doors, openers, and hardware showing the first signs of wear.",
    intro:
      "Like any moving system, a garage door benefits from attention over time. Paid attention to how the door operates and addressing wear early can reduce the chance of unexpected problems.",
    image: "/images/service-maintenance.jpg",
    alt: "Close-up of a sealed roller, hinge, and steel track on a white sectional garage door.",
    startWith:
      "Make a note of any symptoms you have noticed day to day, and the rough age of the door or shutter system.",
    helpPoints: [
      "Noises or changes in how the door moves",
      "Rollers, hinges, tracks, and hardware showing wear",
      "Weather seals and general condition of the door",
      "Openers, controls, and powered door operation",
      "Shutter systems that need attention or inspection",
      "Safe operation and what is worth checking yourself",
    ],
    faqs: [
      {
        q: "Is there anything I can safely check myself?",
        a: "You can look at the door from a safe distance and compare it to how it normally behaves. Visually inspect the door panels and listen for changes. Do not attempt to adjust springs, cables, or track components yourself.",
      },
      {
        q: "Can you look at shutters as well as doors?",
        a: "Yes — both garage doors and shutter systems can be discussed. Describe what you have, its rough age, and any symptoms you have noticed when you call.",
      },
      {
        q: "How do I start a maintenance enquiry?",
        a: "Call 862-290-4278 and describe the door or shutter system and any symptoms you have noticed. The sensible next step can be discussed from there.",
      },
    ],
    related: ["garage-door-repair", "automatic-garage-doors", "commercial-shutters"],
  },
  {
    slug: "roller-shutters",
    name: "Roller Shutters",
    navLabel: "Roller Shutters",
    summary:
      "Roller shutter solutions for suitable residential and commercial openings.",
    intro:
      "A roller shutter can be a practical option where a neat, coiling curtain suits the opening and how it is used. Discuss the dimensions and intended use of the opening, and the options that fit.",
    image: "/images/service-roller-shutters.jpg",
    alt: "Sand-beige aluminum roller shutter fitted over a residential garage opening.",
    startWith:
      "Measure or note the opening dimensions and tell us how often the shutter would be used.",
    helpPoints: [
      "Residential garage openings where a roller shutter is a practical fit",
      "Commercial and service openings suited to a shutter",
      "Available space for the shutter box and guide rails",
      "Operation suited to how frequently the opening is used",
      "Finishes and practical details confirmed for the opening",
      "Fixing and installation considerations for the property",
    ],
    faqs: [
      {
        q: "Does every opening suit a roller shutter?",
        a: "No — not every opening suits a shutter, and not every shutter suits every opening. The dimensions, available space, and intended use all come into the conversation.",
      },
      {
        q: "Do you provide shutters for homes and businesses?",
        a: "Roller shutter solutions for suitable residential and commercial applications are offered. Describe the property and the opening when you call.",
      },
      {
        q: "What should I have ready when I call?",
        a: "The approximate width and height of the opening, what the opening is used for, and the rough age or condition of any existing shutter system are all useful.",
      },
    ],
    related: ["shutter-installation", "commercial-shutters", "maintenance-servicing"],
  },
  {
    slug: "shutter-installation",
    name: "Shutter Installation",
    navLabel: "Shutter Installation",
    summary:
      "A shutter solution fitted to the opening, intended use, and practical requirements.",
    intro:
      "The right shutter depends on the dimensions and use of the opening. Shutter installation is planned around fixing options, operation, and finishes, so the practical details are settled before installation.",
    image: "/images/service-commercial-shutters.jpg",
    alt: "Detail of an aluminum roller shutter slat curtain and guide rails fitted to a building opening.",
    startWith:
      "Share the opening dimensions, what sits around the opening, and whether an existing shutter is being replaced.",
    helpPoints: [
      "New shutter installation for a suitable opening",
      "Replacement of an existing or damaged shutter",
      "Fixing options for the surrounding wall and structure",
      "Manual or other operation suited to the daily routine",
      "Finishes that work with the property's exterior",
      "Installation access and any lease or building requirements",
    ],
    faqs: [
      {
        q: "What affects the shutter for my opening?",
        a: "The dimensions and use of the opening, the surrounding structure and fixing points, how the shutter will be operated, and the finish you want.",
      },
      {
        q: "I rent a commercial unit — what should I check?",
        a: "Physical changes to leased premises usually involve the property owner or manager. It is worth confirming what is permitted under your lease before discussing the practical options.",
      },
      {
        q: "Can you install where an old shutter was?",
        a: "Replacing an existing shutter can be discussed. Describe the current system and its condition when you call so the next step can be explained.",
      },
    ],
    related: ["roller-shutters", "commercial-shutters", "maintenance-servicing"],
  },
  {
    slug: "commercial-shutters",
    name: "Commercial Shutters",
    navLabel: "Commercial Shutters",
    summary:
      "Shutter solutions for storefronts, service entrances, and business premises.",
    intro:
      "Commercial entrances can use roller shutters to close off glazed frontages outside trading hours, where appropriate for the premises. Workshops, storage areas, and secondary access points can all be discussed where a shutter is a practical fit.",
    image: "/images/service-commercial-shutters.jpg",
    alt: "Silver aluminum roller shutter partially raised over the glazed entrance of a brick commercial storefront.",
    startWith:
      "Tell us about the building and the openings you are thinking about, and what happens at the premises day to day.",
    helpPoints: [
      "Storefronts and glazed shopfronts closed outside trading hours",
      "Workshops, storage areas, and secondary business access points",
      "Openings used many times a day compared with occasional use",
      "Building and fixing considerations for commercial premises",
      "Replacement or maintenance of an existing commercial shutter",
      "Practical next steps for business owners, landlords, and managers",
    ],
    faqs: [
      {
        q: "What commercial openings can be discussed?",
        a: "Storefronts and display glazing, workshop and storage openings, service entrances, and secondary access points, where a shutter is a practical fit for the premises.",
      },
      {
        q: "How do I discuss a commercial shutter?",
        a: "Call 862-290-4278 with the property details, the opening dimensions if you have them, and how often the opening is used. Next steps can be discussed from there.",
      },
      {
        q: "Do you work with business owners, landlords, and managers?",
        a: "Commercial shutter enquiries are welcome from business owners, landlords, and property managers. Describe the building and the opening when you get in touch.",
      },
    ],
    related: ["roller-shutters", "shutter-installation", "maintenance-servicing"],
  },
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);

export type PageMeta = { title: string; description: string };

export const pageMeta: Record<string, PageMeta> = {
  "/": {
    title: "Garage Door Repair & Installation | Gary Coakley Garage Door Repair",
    description:
      "Garage door repair, installation, replacement, openers, roller shutters and commercial shutter services for residential and commercial properties. Call 862-290-4278.",
  },
  "/about": {
    title: "About Gary Coakley Garage Door Repair",
    description:
      "A New Jersey-based garage door and shutter service business serving residential and commercial customers with installation, repair, replacement and maintenance. Call 862-290-4278.",
  },
  "/services": {
    title: "Garage Door & Shutter Services | Gary Coakley Garage Door Repair",
    description:
      "Explore garage door installation, repair, replacement, automatic doors, maintenance, roller shutters, shutter installation and commercial shutters. Call 862-290-4278.",
  },
  "/garage-doors": {
    title: "Garage Door Styles & Installation | Gary Coakley Garage Door Repair",
    description:
      "Sectional, raised-panel, roller and carriage-style garage door directions for your home — plus what shapes the right door choice. Call 862-290-4278.",
  },
  "/faq": {
    title: "Garage Door FAQs | Gary Coakley Garage Door Repair",
    description:
      "Practical answers about garage door repair, replacement, automatic doors, shutters, service coverage and safety. Call 862-290-4278.",
  },
  "/contact": {
    title: "Contact Gary Coakley Garage Door Repair | 862-290-4278",
    description:
      "Call 862-290-4278 to discuss garage door repair, installation, replacement, openers, shutters and maintenance for residential or commercial properties.",
  },
  "/privacy": {
    title: "Privacy | Gary Coakley Garage Door Repair",
    description:
      "A plain-language summary of how information shared when you call Gary Coakley Garage Door Repair is handled.",
  },
};

export const servicePageMeta = (service: Service): PageMeta => ({
  title: `${service.name} | Gary Coakley Garage Door Repair`,
  description: `${service.summary} Discuss ${service.name.toLowerCase()} for a residential or commercial property. Call 862-290-4278.`,
});
