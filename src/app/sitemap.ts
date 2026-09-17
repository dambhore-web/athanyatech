import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.athanyatechnologies.com";
  return [
    {
      url: base,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/about`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date("2026-09-17"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
