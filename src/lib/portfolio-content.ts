export const siteConfig = {
  name: "Bart Etcheverry",
  title: "Bart Etcheverry — Delivery Lead & Independent Builder",
  description:
    "Delivery lead at Planes, a London product studio. Independent builder of apps, websites, and AI tools.",
  url: "https://bartetcheverry.com",
  email: "bart@bartetcheverry.com",
  linkedin: "https://linkedin.com/in/bartetcheverry",
  calLink: "https://cal.com/bartetcheverry/15min",
} as const;

export const bio = {
  tagline:
    "Delivery lead at Planes.\nIndependent builder.\nLondon · New Zealand.",
} as const;

export const intro = {
  greeting: "Hello.",
  heading: "Intro",
} as const;

export const now = {
  heading: "Now",
  subheading: "May 2026",
  items: [
    "Building a coach app for community run clubs",
    "Working on a Spanish learning app focused on conversation rather than drills",
    "Leading delivery on a healthtech subscription product at Planes",
    "Reading more, posting less",
  ],
} as const;

export interface WorkItem {
  title: string;
  year: string;
  description: string;
}

export const work: { heading: string; items: WorkItem[] } = {
  heading: "Selected work",
  items: [
    {
      title: "Run Club Coach App",
      year: "2025",
      description:
        "A coaching app for community run clubs. Built solo. Helps run leaders plan sessions, track member attendance, and share routes. Used by a London running community.",
    },
    {
      title: "Spanish Learning App",
      year: "2025",
      description:
        "Spaced repetition for vocabulary built around real conversations.",
    },
    {
      title: "Delivery lead, Planes",
      year: "2022–present",
      description:
        "Leading delivery on subscription healthtech, members-club mobile apps, analytics instrumentation.",
    },
  ],
} as const;

export const about = {
  heading: "About",
  paragraphs: [
    "I've spent the past four years leading delivery at Planes across fintech, healthtech, and hospitality products. Before that I worked in operations and project management in Auckland and Melbourne. I'm a New Zealand citizen, based in London since 2019, and I run with a club in Hackney most weekends.",
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
  jobTitle: "Delivery Lead",
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
