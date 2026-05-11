import {
  intro,
  now,
  work,
  about,
  contact,
  siteConfig,
} from "~/lib/portfolio-content";

function SectionHeading({
  id,
  children,
  right,
}: {
  id: string;
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-baseline justify-between gap-4 mb-8 pb-3 border-b border-rule">
        <h2 className="font-serif-display text-lg font-medium tracking-tight text-ink">
          {children}
        </h2>
        {right && (
          <span className="text-sm text-ink-muted flex-shrink-0">{right}</span>
        )}
      </div>
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="space-y-5">
      <h2
        id="intro"
        className="scroll-mt-24 font-serif-display text-4xl font-medium tracking-tight text-ink"
      >
        {intro.greeting}
      </h2>
      <p className="text-[15px] leading-relaxed text-ink/90">
        I'm Bart. I lead delivery at{" "}
        <a
          href="https://planes.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline underline-offset-3 decoration-ink/30 hover:decoration-ink transition-colors"
        >
          Planes
        </a>
        , a London product studio, working across client projects in fintech,
        healthtech, and hospitality. On the side I build things — apps,
        websites, and AI tools — for myself and a small number of clients.
      </p>
      <p className="text-[15px] leading-relaxed text-ink/90">
        I'm interested in software for small communities, tools that help teams
        ship faster, and how AI is changing what one person can build. New
        Zealand citizen, London-based, runs with a club somewhere in zone 2.
      </p>
      <p className="text-[15px] leading-relaxed text-ink/90">
        Currently taking on 1–2 small projects per quarter — websites and
        lightweight apps for independent businesses, and AI workflow consulting.
      </p>
    </section>
  );
}

export function NowSection() {
  return (
    <section className="space-y-4">
      <SectionHeading id="now" right={now.subheading}>
        {now.heading}
      </SectionHeading>
      <ul className="space-y-2.5">
        {now.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/90"
          >
            <span className="mt-2 size-1.5 rounded-full bg-accent flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function WorkSection() {
  return (
    <section className="space-y-0">
      <SectionHeading id="work">{work.heading}</SectionHeading>
      <div className="divide-y divide-rule -mt-2">
        {work.items.map((item, i) => (
          <div key={i} className="py-5 first:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif-display text-[15px] font-medium tracking-tight">
                {item.title}
              </h3>
              <span className="text-xs text-ink-muted tabular-nums flex-shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-sm text-ink-muted mt-1 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="space-y-4">
      <SectionHeading id="about">{about.heading}</SectionHeading>
      {about.paragraphs.map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-ink/90">
          {p}
        </p>
      ))}
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="space-y-4">
      <SectionHeading id="contact">{contact.heading}</SectionHeading>
      <p className="text-[15px] leading-relaxed text-ink/90">{contact.body}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-accent underline underline-offset-3 decoration-accent/40 hover:decoration-accent transition-colors"
        >
          {siteConfig.email}
        </a>
        <a
          href={siteConfig.calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-3 decoration-accent/40 hover:decoration-accent transition-colors"
        >
          Book a 15-minute call
        </a>
      </div>
    </section>
  );
}
