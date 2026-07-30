import type { MetadataRoute } from "next";

import { getPortfolioUrl, getResumeUrl } from "@/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: getPortfolioUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getResumeUrl(),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
