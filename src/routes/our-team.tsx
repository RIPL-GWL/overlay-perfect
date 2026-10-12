import { createFileRoute } from "@tanstack/react-router";
import { lockHiddenPage } from "@/frontend/lib/hidden-pages";
import { GraduationCap, Users, UserRound } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { TEAM } from "@/frontend/features/team/team";

export const Route = createFileRoute("/our-team")({
  beforeLoad: lockHiddenPage,
  head: () => ({
    meta: [
      { title: "Our People — Rishishwar Industry" },
      { name: "description", content: "Meet the people behind Rishishwar Industry who help FMCG manufacturers reach retail stores and new markets." },
      { property: "og:title", content: "Our People | Rishishwar Industry" },
      { property: "og:description", content: "The Rishishwar Industry team: designations and education of the people who grow your brand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="royal-label">Our People</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Meet <span className="text-primary">Our People</span></h1>
        <p className="mt-4 max-w-xl text-muted-foreground">The people who connect manufacturers with markets every day.</p>

        <div className="mt-8 inline-flex items-center gap-3 rounded-sm border border-border bg-card px-5 py-3">
          <Users className="h-5 w-5 text-primary" />
          <span className="text-sm text-muted-foreground">Core Team</span>
          <span className="text-lg font-semibold text-foreground">{TEAM.length}</span>
        </div>

        {TEAM.length === 0 ? (
          <p className="mt-12 rounded-sm border border-border bg-card p-8 text-center text-muted-foreground">Team profiles will be published here soon.</p>
        ) : (
          <section className="mt-14">
            <h2 className="text-2xl sm:text-3xl">Our <span className="text-primary">Founder &amp; MD</span></h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {TEAM.map((m) => (
                <li key={m.name} className="overflow-hidden rounded-sm border border-border bg-card">
                  <div className="aspect-[4/5] bg-muted">
                    {m.photo ? <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover" /> : <div className="grid h-full place-items-center text-muted-foreground"><UserRound className="h-16 w-16" /></div>}
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{m.designation}</p>
                    {m.focus ? <p className="mt-3 text-sm text-muted-foreground">{m.focus}</p> : null}
                    <ul className="mt-4 space-y-2">
                      {m.universities.map((u) => (
                        <li key={u} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
