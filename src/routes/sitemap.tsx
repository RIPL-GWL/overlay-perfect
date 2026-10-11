import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/frontend/features/legal/legal-page";
import { publicPages } from "@/frontend/content/site-pages";
import { countries } from "@/frontend/features/global-presence/content";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Sitemap — Rishishwar Industry Pvt. Ltd." },
      { name: "description", content: "Every page on the Rishishwar Industry website: services, partner journeys, calculators, global markets and support." },
      { property: "og:title", content: "Sitemap — Rishishwar Industry" },
      { property: "og:description", content: "Browse all pages on the Rishishwar Industry website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <LegalPage title="Sitemap">
      <h2>Pages</h2>
      <ul>{publicPages.map((p) => <li key={p.path}><a href={p.path}>{p.label}</a></li>)}</ul>
      <h2>Global markets</h2>
      <ul>{countries.map((c) => <li key={c.slug}><Link to="/global-presence/$market" params={{ market: c.slug }}>{c.name}</Link></li>)}</ul>
    </LegalPage>
  );
}
