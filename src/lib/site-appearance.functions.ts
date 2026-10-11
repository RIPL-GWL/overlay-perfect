import { createServerFn } from "@tanstack/react-start";
import shareImage from "@/assets/rishishwar-share.jpg.asset.json";

export const getSiteShareImage = createServerFn({ method: "GET" }).handler(() => ({ image: shareImage.url }));
