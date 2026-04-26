import type { MetadataRoute } from "next";
import { SITE_URL } from "@/shared/config/seo";

const routes = [
  "",
  "/battle",
  "/battle/regulamin",
  "/master-klass",
  "/speaker",
  "/polityka",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
