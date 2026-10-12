import { createServerFn } from "@tanstack/react-start";
import shareImageSrc from "@/assets/rishishwar-share.webp";
const shareImage = { url: shareImageSrc };

export const getSiteShareImage = createServerFn({ method: "GET" }).handler(() => ({ image: shareImage.url }));
