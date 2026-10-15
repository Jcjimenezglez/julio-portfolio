import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeContent } from "@/app/page";
import { allCaseStudies, getSiteUrl, profile } from "@/lib/site-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = allCaseStudies.find((item) => item.slug === slug);
  if (!project) return {};
  const title = `${project.title} case study — ${profile.fullName}, ${profile.title}`;
  return {
    title,
    description: project.summary.slice(0, 200),
    alternates: { canonical: `${getSiteUrl()}/work/${slug}` },
    openGraph: { title, description: project.summary.slice(0, 200), url: `${getSiteUrl()}/work/${slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!allCaseStudies.some((item) => item.slug === slug)) notFound();
  return <HomeContent initialSlug={slug} />;
}
