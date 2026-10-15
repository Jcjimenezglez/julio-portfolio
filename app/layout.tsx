import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { getPortfolioUrl, getResumeUrl, profile, seo } from "@/lib/site-content";

import "./globals.css";

const portfolioUrl = getPortfolioUrl();

export const metadata: Metadata = {
  metadataBase: new URL(portfolioUrl),
  title: seo.title,
  description: seo.description,
  keywords: [
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "UX/UI Design",
    "TypeScript",
    "React",
    "Next.js",
    "Design Systems",
    "Generative AI",
    "AI-Native Design",
    "Cursor",
    "Figma",
    "Front10",
    "WOXO",
    "Billshark",
    "Miami",
  ],
  authors: [{ name: profile.fullName }],
  creator: profile.fullName,
  alternates: {
    canonical: portfolioUrl,
  },
  openGraph: {
    title: seo.ogTitle,
    description: seo.ogDescription,
    type: "website",
    url: portfolioUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "resume:url": getResumeUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background font-sans text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
