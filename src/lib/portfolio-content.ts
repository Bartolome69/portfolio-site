export const siteConfig = {
  name: "Bart Etcheverry",
  title: "Bart Etcheverry — Product Delivery Lead & Independent Builder",
  description:
    "Product delivery lead at Planes, a London product studio. Fifteen years building digital products. Specialist in AI workflows, agentic coding, and rapid prototyping.",
  url: "https://bartetcheverry.com",
  email: "bart@bartetcheverry.com",
  linkedin: "https://linkedin.com/in/bartetcheverry",
  calLink: "https://cal.com/bartetcheverry/15min",
} as const;

export const bio = {
  tagline:
    "Product delivery lead at Planes.\nIndependent builder.\nLondon · New Zealand.",
} as const;

export const intro = {
  greeting: "Hello.",
  heading: "Intro",
} as const;

export const now = {
  heading: "Now",
  subheading: "May 2026",
  items: [
    "Building Daash — an AI running coach that adapts your training week-to-week",
    "Building Hablaba — Spanish conversation practice for parents and learners past Duolingo",
    "Leading delivery on a healthtech subscription product at Planes",
    "Reading more, posting less",
  ],
} as const;

export interface WorkItem {
  title: string;
  year: string;
  description: string;
  url?: string;
}

export const work: { heading: string; items: WorkItem[] } = {
  heading: "Selected work",
  items: [
    {
      title: "Daash",
      year: "2025",
      url: "https://daash.run",
      description:
        "An AI running coach that lives in your chat. Tell Baz how you're feeling and the week refreshes around you — structured intervals sync straight to your Garmin. Built solo.",
    },
    {
      title: "Hablaba",
      year: "2025",
      url: "https://spanishroutine.com",
      description:
        "Spanish conversation practice for parents raising bilingual children and learners past Duolingo. Five-minute daily sessions, real parenting phrases, gentle corrections without flashcards.",
    },
    {
      title: "Product delivery lead, Planes",
      year: "2022–present",
      description:
        "Leading delivery on subscription healthtech, members-club mobile apps, and analytics instrumentation across client projects.",
    },
  ],
} as const;

export const about = {
  heading: "About",
  paragraphs: [
    "Fifteen years in digital — the past four leading delivery at Planes across fintech, healthtech, and hospitality products. Before that, operations and project management roles in Auckland and Melbourne. New Zealand citizen, based in London since 2019, running with a club in Hackney most weekends.",
  ],
} as const;

export const contact = {
  heading: "Contact",
  body: "If you want to chat about a project, say hello, or book a short call — I'm easy to reach.",
} as const;

export const navSections = [
  { id: "intro", label: "Intro" },
  { id: "now", label: "Now" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Product Delivery Lead",
  worksFor: {
    "@type": "Organization",
    name: "Planes",
    url: "https://planes.agency",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  nationality: {
    "@type": "Country",
    name: "New Zealand",
  },
  sameAs: [siteConfig.linkedin],
};
