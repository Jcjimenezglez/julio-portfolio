import {
  atsKeywords,
  getPortfolioUrl,
  getResumeUrl,
  profile,
  projects,
  seo,
  skillGroups,
  socialLinks,
  summary,
} from "@/lib/site-content";

export function JsonLd() {
  const portfolioUrl = getPortfolioUrl();
  const resumeUrl = getResumeUrl();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.title,
    email: profile.email,
    url: portfolioUrl,
    description: summary.short,
    knowsAbout: atsKeywords,
    sameAs: socialLinks.map((link) => link.href),
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      dateCreated: project.year,
      keywords: project.keywords.join(", "),
      url: project.url ?? `${portfolioUrl}#${project.slug}`,
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.title,
    url: portfolioUrl,
    description: seo.description,
    author: {
      "@type": "Person",
      name: profile.fullName,
    },
    potentialAction: {
      "@type": "DownloadAction",
      target: resumeUrl,
      name: "Download Resume PDF",
    },
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: profile.fullName,
      jobTitle: profile.title,
      description: profile.headline,
      skills: [
        ...skillGroups.design,
        ...skillGroups.ai,
        ...skillGroups.tools,
        ...skillGroups.methods,
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
