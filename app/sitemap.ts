import type { MetadataRoute } from "next";

import { allCaseStudies, getPortfolioUrl, getResumeUrl, getSiteUrl } from "@/lib/site-content";

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
    ...allCaseStudies.map((project) => ({
      url: `${getSiteUrl()}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
