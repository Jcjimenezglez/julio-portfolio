import type { MetadataRoute } from "next";

import { getPortfolioUrl } from "@/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getPortfolioUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
