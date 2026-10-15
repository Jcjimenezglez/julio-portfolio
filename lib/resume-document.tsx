import { Document, Font, Link, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

import { education, experience, profile, skillGroups } from "@/lib/site-content";

Font.registerHyphenationCallback((word) => [word]);

const PORTFOLIO = "https://www.julio-portfolio.com";

const styles = StyleSheet.create({
  page: { paddingTop: 36, paddingBottom: 36, paddingHorizontal: 46, fontFamily: "Helvetica", fontSize: 10, lineHeight: 1.3, color: "#111111" },
  name: { fontSize: 20, fontFamily: "Helvetica-Bold", lineHeight: 1.15 },
  title: { fontSize: 12, marginTop: 2, marginBottom: 6, color: "#222222" },
  contact: { fontSize: 9.5, color: "#333333", marginBottom: 2 },
  link: { color: "#111111", textDecoration: "none" },
  section: { marginTop: 12 },
  sectionTitle: { fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 5, paddingBottom: 3, borderBottomWidth: 0.75, borderBottomColor: "#999999" },
  paragraph: { marginBottom: 4 },
  skillRow: { marginBottom: 3 },
  bold: { fontFamily: "Helvetica-Bold" },
  job: { marginBottom: 8 },
  jobTitle: { fontFamily: "Helvetica-Bold", fontSize: 10.5 },
  jobMeta: { color: "#444444", marginBottom: 3 },
  bulletRow: { flexDirection: "row", marginBottom: 2.5 },
  bullet: { width: 10 },
  bulletText: { flex: 1 },
});

const SUMMARY =
  "Product Designer with 7+ years designing web and mobile products for fintech, SaaS, and AI companies at Front10 in Miami. As Product Owner of WOXO, an AI video platform, I led a 15-person team of developers, designers, and marketers and owned product strategy, UX, and UI quality; we cut the annual loss from $404K to $34K and grew revenue from $76K to a $265K peak year. I design user flows, design systems, and high-fidelity UI in Figma, and build front-end in React and Next.js.";

const SKILLS: [string, string[]][] = [
  ["UX", ["User Research (customer interviews)", "User Flows", "Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "A/B Testing", "Accessibility (WCAG)"]],
  ["UI and Visual", ["UI Design", "Design Systems", "Interaction Design", "Visual Design", "Brand Identity", "Iconography", "Responsive Web and Mobile", "Generative AI UX"]],
  ["Tools", ["Figma", "Cursor", "GitHub", "Vercel", "Stripe"]],
  ["Front-end", skillGroups.engineering],
  ["Ways of working", ["Cross-functional Collaboration", "Agile / Scrum", "Product Ownership", "Design-to-Code"]],
];

function Bullets({ items }: { items: string[] }) {
  return (
    <>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow} wrap={false}>
          <Text style={styles.bullet}>-</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </>
  );
}

export function ResumeDocument() {
  return (
    <Document
      title={`${profile.fullName} - Product Designer Resume`}
      author={profile.fullName}
      subject="Product Designer, UX/UI Designer Resume"
      keywords="Product Designer, UX Designer, UI Designer, UX/UI, Design Systems, User Flows, Prototyping, Figma, Fintech, SaaS, AI"
    >
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.title}>Product Designer | UX/UI Designer</Text>
        <Text style={styles.contact}>
          {profile.location} | {profile.phone} | {profile.email}
        </Text>
        <Text style={styles.contact}>
          Portfolio: <Link src={PORTFOLIO} style={styles.link}>julio-portfolio.com</Link> | LinkedIn:{" "}
          <Link src={profile.linkedIn} style={styles.link}>linkedin.com/in/julio-jimenez-9a114a12b</Link>
        </Text>
        <Text style={styles.contact}>
          {profile.workAuthorization} | {profile.workPreference}
        </Text>
        <Text style={styles.contact}>
          Languages: Spanish (native), English (professional working)
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.paragraph}>{SUMMARY}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {SKILLS.map(([label, items]) => (
            <Text key={label} style={styles.skillRow}>
              <Text style={styles.bold}>{label}: </Text>
              {items.join(", ")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job) => (
            <View key={job.company} style={styles.job}>
              <View wrap={false}>
                <Text style={styles.jobTitle}>
                  {job.role} - {job.company}
                </Text>
                <Text style={styles.jobMeta}>
                  {job.location} | {job.startDate} - {job.endDate}
                </Text>
              </View>
              <Bullets items={job.highlights} />
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((item) => (
            <Text key={item.institution} style={styles.paragraph}>
              {item.degree} - {item.institution} ({item.year})
            </Text>
          ))}
          <Text style={styles.paragraph}>
            Case studies (WOXO, Billshark, A11ySolutions, Shoturo, Superfocus): julio-portfolio.com
          </Text>
        </View>
      </Page>
    </Document>
  );
}
