import {
  Document,
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

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.45,
    color: "#111111",
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    color: "#333333",
  },
  contactRow: {
    fontSize: 9.5,
    marginBottom: 16,
    color: "#444444",
  },
  link: {
    color: "#111111",
    textDecoration: "none",
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  paragraph: {
    marginBottom: 6,
    textAlign: "justify",
  },
  skillGroup: {
    marginBottom: 5,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
  },
  jobHeader: {
    marginBottom: 4,
  },
  jobTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
  },
  jobMeta: {
    color: "#555555",
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
    paddingRight: 8,
  },
  bullet: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  projectBlock: {
    marginBottom: 10,
  },
  projectTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 10.5,
    marginBottom: 2,
  },
  projectMeta: {
    color: "#555555",
    marginBottom: 4,
  },
  label: {
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    marginTop: 8,
    fontSize: 9,
    color: "#666666",
  },
});

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
      subject="AI Product Designer Resume"
      keywords="AI Product Designer, Product Design, UI/UX, Generative AI, Cursor, Claude, Codex, Figma"
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.title}>{profile.title}</Text>

        <Text style={styles.contactRow}>
          {profile.email}
          {"  |  "}
          {profile.phone}
          {"  |  "}
          {profile.location}
          {"  |  "}
          Portfolio:{" "}
          <Link src={portfolioUrl} style={styles.link}>
            {portfolioUrl}
          </Link>
          {linkedIn ? (
            <>
              {"  |  "}
              LinkedIn:{" "}
              <Link src={linkedIn.href} style={styles.link}>
                {linkedIn.href}
              </Link>
            </>
          ) : null}
          {"  |  "}
          GitHub:{" "}
          <Link src={profile.github} style={styles.link}>
            {profile.github}
          </Link>
        </Text>

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>
          {projects.map((project) => (
            <View key={project.slug} style={styles.projectBlock}>
              <Text style={styles.projectTitle}>
                {project.title} — {project.category}
              </Text>
              <Text style={styles.projectMeta}>
                {project.role} | {project.client} | {project.year} | Tools:{" "}
                {project.tools.join(", ")}
              </Text>
              <Text style={styles.paragraph}>{project.summary}</Text>
              <Text style={styles.paragraph}>
                <Text style={styles.label}>Problem: </Text>
                {project.problem}
              </Text>
              <Text style={styles.paragraph}>
                <Text style={styles.label}>Process: </Text>
                {project.process}
              </Text>
              <Text style={styles.label}>Results:</Text>
              <BulletList items={project.results} />
              <Text style={styles.paragraph}>
                Keywords: {project.keywords.join(", ")}
              </Text>
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
            Online portfolio and case studies:{" "}
            <Link src={portfolioUrl} style={styles.link}>
              {portfolioUrl}
            </Link>
          </Text>
          {socialLinks.map((link) => (
            <Text key={link.label} style={styles.paragraph}>
              {link.label}:{" "}
              <Link src={link.href} style={styles.link}>
                {link.href}
              </Link>
            </Text>
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
