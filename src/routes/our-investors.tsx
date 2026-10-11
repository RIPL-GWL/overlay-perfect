import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/frontend/features/community/community-page";
const description = "Connect with Rishishwar Industry for investment and strategic partnerships supporting FMCG business growth.";
export const Route = createFileRoute("/our-investors")({
  head: () => ({ meta: [{ title: "Investor Network — Rishishwar Industry" }, { name: "description", content: description }, { property: "og:title", content: "Investor Network — Rishishwar Industry" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CommunityPage title="Investor Network" description={description} kind="investors" />,
});