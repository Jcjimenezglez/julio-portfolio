import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import {
  education,
  experience,
  getPortfolioUrl,
  profile,
  projects,
  skillGroups,
  socialLinks,
  summary,
} from "@/lib/site-content";

Font.registerHyphenationCallback((word) => [word]);

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10.5,
    lineHeight: 1.45,
    color: "#111111",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    lineHeight: 1.2,
  },
  title: {
    fontSize: 12,
    marginBottom: 12,
    color: "#333333",
    lineHeight: 1.4,
  },
  contactBlock: {
    marginBottom: 18,
    gap: 5,
  },
  contactLine: {
    fontSize: 9.5,
    color: "#444444",
    lineHeight: 1.4,
  },
  contactLinkRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "baseline",
    gap: 4,
  },
  contactLabel: {
    fontSize: 9.5,
    color: "#444444",
  },
  link: {
    color: "#111111",
    textDecoration: "none",
    fontSize: 9.5,
  },
  linkLine: {
    color: "#111111",
    textDecoration: "none",
    fontSize: 9.5,
    marginBottom: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    lineHeight: 1.3,
  },
  paragraph: {
    marginBottom: 6,
    lineHeight: 1.45,
  },
  skillGroup: {
    marginBottom: 6,
    lineHeight: 1.4,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
  },
  jobHeader: {
    marginBottom: 5,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    lineHeight: 1.4,
  },
  jobMeta: {
    color: "#555555",
    marginBottom: 4,
    lineHeight: 1.4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 4,
    paddingRight: 8,
  },
  bullet: {
    width: 12,
    lineHeight: 1.45,
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.45,
  },
  projectBlock: {
    marginBottom: 11,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  projectMeta: {
    color: "#555555",
    marginBottom: 4,
    lineHeight: 1.4,
  },
  footer: {
    marginTop: 8,
    fontSize: 9,
    color: "#666666",
    lineHeight: 1.4,
  },
});

function formatLinkLabel(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ResumeLink({
  href,
  label,
}: {
  href: string;
  label?: string;
}) {
  return (
    <Link src={href} style={styles.linkLine} wrap={false}>
      {label ?? formatLinkLabel(href)}
    </Link>
  );
}

function ContactLinkRow({ label, href }: { label: string; href: string }) {
  return (
    <View style={styles.contactLinkRow}>
      <Text style={styles.contactLabel}>{label}:</Text>
      <Link src={href} style={styles.link} wrap={false}>
        {formatLinkLabel(href)}
      </Link>
    </View>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export function ResumeDocument() {
  const portfolioUrl = getPortfolioUrl();
  const linkedIn = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <Document
      title={`${profile.fullName} — Resume`}
      author={profile.fullName}
      subject="Product Engineer Resume"
      keywords="Product Engineer, Product Design, UI/UX, Generative AI, Cursor, Figma, WOXO, Shoturo"
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.title}>{profile.title}</Text>

        <View style={styles.contactBlock}>
          <Text style={styles.contactLine}>
            {profile.email}  |  {profile.phone}
          </Text>
          <Text style={styles.contactLine}>{profile.location}</Text>
          <ContactLinkRow label="Portfolio" href={portfolioUrl} />
          {linkedIn ? (
            <ContactLinkRow label="LinkedIn" href={linkedIn.href} />
          ) : null}
          <ContactLinkRow label="GitHub" href={profile.github} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          {summary.long.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CORE SKILLS</Text>
          <View style={styles.skillGroup}>
            <Text style={styles.skillLabel}>Design</Text>
            <Text>{skillGroups.design.join(" · ")}</Text>
          </View>
          <View style={styles.skillGroup}>
            <Text style={styles.skillLabel}>Tools</Text>
            <Text>{skillGroups.tools.join(" · ")}</Text>
          </View>
          <View style={styles.skillGroup}>
            <Text style={styles.skillLabel}>AI & Prototyping</Text>
            <Text>{skillGroups.ai.join(" · ")}</Text>
          </View>
          <View style={styles.skillGroup}>
            <Text style={styles.skillLabel}>Methods</Text>
            <Text>{skillGroups.methods.join(" · ")}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
          {experience.map((job) => (
            <View key={`${job.company}-${job.role}`} style={styles.projectBlock}>
              <View style={styles.jobHeader}>
                <Text style={styles.jobTitle}>
                  {job.role} — {job.company}
                </Text>
                <Text style={styles.jobMeta}>
                  {job.location} | {job.startDate} – {job.endDate}
                </Text>
              </View>
              <BulletList items={job.highlights} />
            </View>
          ))}
        </View>
      </Page>

      <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>
          <Text style={styles.paragraph}>
            Full case studies with screens and metrics:
          </Text>
          <ResumeLink href={portfolioUrl} />
          {projects.map((project) => (
            <View key={project.slug} style={styles.projectBlock}>
              <Text style={styles.projectTitle}>
                {project.title} — {project.role}
              </Text>
              <Text style={styles.projectMeta}>
                {project.year} | {project.tools.slice(0, 5).join(", ")}
              </Text>
              {project.url ? <ResumeLink href={project.url} /> : null}
              <Text style={styles.paragraph}>{project.summary}</Text>
              <BulletList items={project.results.slice(0, 4)} />
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {education.map((item) => (
            <Text key={item.institution} style={styles.paragraph}>
              {item.degree} — {item.institution} ({item.year})
            </Text>
          ))}
          <Text style={styles.paragraph}>
            {profile.workAuthorization} · {profile.languages}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PORTFOLIO & LINKS</Text>
          <Text style={styles.paragraph}>
            Online portfolio and case studies:
          </Text>
          <ResumeLink href={portfolioUrl} />
          {socialLinks.map((link) => (
            <View key={link.label} style={{ marginBottom: 4 }}>
              <Text style={styles.contactLabel}>{link.label}:</Text>
              <ResumeLink href={link.href} />
            </View>
          ))}
          <Text style={styles.footer}>
            Resume generated from portfolio website. Last updated automatically
            from site content.
          </Text>
        </View>
      </Page>
    </Document>
  );
}
