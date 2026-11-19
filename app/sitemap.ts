// sitemap.xml. Author: Dilshad Ali.
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const BASE = "https://dilali-pk.github.io";
const PATHS = ["/", "/services/", "/capabilities/", "/work/", "/agencies/", "/working-with-me/", "/insights/", "/skills/", "/about/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-19");
  return [...PATHS, ...site.cases.map((c) => "/work/" + c.slug + "/")].map((p) => ({ url: BASE + p, lastModified }));
}
