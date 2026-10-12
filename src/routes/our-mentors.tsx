import { createFileRoute } from "@tanstack/react-router";
import { lockHiddenPage } from "@/frontend/lib/hidden-pages";
import { CommunityPage } from "@/frontend/features/community/community-page";
const description = "Experience, guidance and industry connections for the businesses growing with Rishishwar Industry.";
export const Route = createFileRoute("/our-mentors")({
  beforeLoad: lockHiddenPage,
  head: () => ({ meta: [{ title: "Mentor Network — Rishishwar Industry" }, { name: "description", content: description }, { property: "og:title", content: "Mentor Network — Rishishwar Industry" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CommunityPage title="Mentor Network" description={description} kind="mentors" />,
});