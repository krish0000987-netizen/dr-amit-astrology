import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dramitdeshmukh.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/vedic-astrology",
    "/prashna-kundali",
    "/numerology",
    "/vastu-consultation",
    "/palm-reading",
    "/pricing",
    "/reviews-contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.85,
  }));
}
