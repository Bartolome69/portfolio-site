import { createFileRoute } from "@tanstack/react-router";
import { DesktopSidebar, MobileHeader } from "~/components/sidebar";
import {
  IntroSection,
  NowSection,
  WorkSection,
  AboutSection,
  ContactSection,
} from "~/components/sections";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <MobileHeader />
      <div className="max-w-5xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex gap-16">
          <DesktopSidebar />
          <main className="min-w-0 max-w-2xl flex-1 space-y-16">
            <IntroSection />
            <NowSection />
            <WorkSection />
            <AboutSection />
            <ContactSection />
            <footer className="pt-8 border-t border-rule">
              <p className="text-xs text-ink-muted">
                &copy; {new Date().getFullYear()} Bart Etcheverry
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
