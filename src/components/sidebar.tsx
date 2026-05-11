import { useState } from "react";
import { Menu, X, Mail, Linkedin, Calendar } from "lucide-react";
import { siteConfig, bio, navSections } from "~/lib/portfolio-content";

function Avatar() {
  return (
    <div className="size-20 rounded-full bg-secondary border border-rule overflow-hidden flex-shrink-0">
      <img
        src="/avatar.jpg"
        alt={`Photo of ${siteConfig.name}`}
        className="size-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <nav aria-label="Section navigation">
      <ul className="space-y-0.5">
        {navSections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={onClick}
              className="block py-2 lg:py-1 font-serif-display text-[15px] text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactLinks() {
  return (
    <div className="space-y-0.5 text-sm">
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center gap-2 py-1.5 text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
      >
        <Mail className="size-3.5" />
        Email
      </a>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
      >
        <Linkedin className="size-3.5" />
        LinkedIn
      </a>
      <a
        href={siteConfig.calLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 py-1.5 text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
      >
        <Calendar className="size-3.5" />
        Book a call
      </a>
    </div>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="hidden lg:block w-60 flex-shrink-0">
      <div className="sticky top-12 space-y-8">
        <div className="space-y-4">
          <Avatar />
          <h1 className="font-serif-display text-xl font-medium tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed whitespace-pre-line">
            {bio.tagline}
          </p>
        </div>
        <NavLinks />
        <div className="border-t border-rule pt-6">
          <ContactLinks />
        </div>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-rule">
      <div className="flex items-center justify-between px-5 py-3 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-secondary border border-rule overflow-hidden">
            <img
              src="/avatar.jpg"
              alt={`Photo of ${siteConfig.name}`}
              className="size-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <span className="font-serif-display text-sm font-medium tracking-tight">
            {siteConfig.name}
          </span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex items-center justify-center size-11 -mr-2 text-ink-muted hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-sm"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-rule px-5 py-5 max-w-2xl mx-auto space-y-5 bg-paper">
          <NavLinks onClick={() => setOpen(false)} />
          <div className="border-t border-rule pt-4">
            <ContactLinks />
          </div>
        </div>
      )}
    </header>
  );
}
