// Structured UX case-study content. Every sentence here is restated from
// facts already published in site-content.ts (summary, problem, process,
// results). Sections with no source material are intentionally omitted.

export type CaseStudyStep = { label: string; text: string };

export type CaseStudy = {
  team?: string;
  timeline: string;
  problem: string;
  process: CaseStudyStep[];
  solution: string;
  outcome: string[];
  learnings?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  woxo: {
    team: "Cross-functional team of developers, designers, and marketing: 15 people at peak, later rightsized to 3.",
    timeline: "Mar 2023 – Feb 2026",
    problem:
      "In 2023 WOXO had $480K in expenses, $76K in revenue, and a −$404K loss. Leadership gave the team three years to fix it or shut the product down.\n\nCreators wanted a faster way to make faceless YouTube Shorts without filming or editing, but every decision had to balance growth with cost. Generative AI also brings hard UX problems: long wait times, outputs that miss, confusing credit pricing, and users dropping off before their first video.",
    process: [
      {
        label: "Discovery",
        text: "Mapped where the money went (AI models, infrastructure, tools, payroll) against what each plan tier brought in, so product decisions could be weighed against cost.",
      },
      {
        label: "User flow",
        text: "Defined the core flow: prompt → AI builds the video → post to YouTube, with onboarding, credit pricing, and loading and error states for async generation.",
      },
      {
        label: "Iterations",
        text: "Ran A/B tests on pricing and onboarding. Introduced Scrum and ran weekly meetings, support, marketing copy, and product design.",
      },
    ],
    solution:
      "Redesigned the core screens: the prompt home (\"What's your video idea?\"), the generation preview, and the publish flow. Shipped Adobe Firefly, caption styles (Kinetic, Karaoke, Standard), and direct YouTube publishing. The pipeline ran on OpenAI for scripts and video (10B+ tokens processed).",
    outcome: [
      "Annual loss cut from −$404K (2023) to −$82K (2024) and −$34K (2025), about 92% lower.",
      "Revenue grew from $76K (2023) to a $265K peak (2024); $207K in 2025.",
      "1,500 creators at peak and 325,000+ videos generated.",
      "Retention around 15–25%; conversion around 2%.",
    ],
    learnings:
      "We never hit a full calendar year in the green, but the trend moved the right way, and the team kept shipping while it shrank from 15 to 3.",
  },
  billshark: {
    team: "Contract designer through Front10, working remotely with Billshark's Product Manager.",
    timeline: "2019",
    problem:
      "Billshark is a fintech product for bill negotiation that handles sensitive financial data. It needed a cohesive brand and clear UX across responsive web and native mobile for its core journeys.",
    process: [
      {
        label: "Discovery",
        text: "The PM flagged areas needing improvement (conversion drop-offs, support ticket themes, churn signals) and prioritized them sprint by sprint.",
      },
      {
        label: "User flows & wireframes",
        text: "Designed user flows, wireframes, and high-fidelity interfaces for onboarding, savings estimation, bill submission, subscription management, and outcome tracking.",
      },
      {
        label: "Iterations",
        text: "Usability testing informed iterations on the signup and bill submission flows. Designs were reviewed and accepted on the PM's timeline.",
      },
    ],
    solution:
      "A brand system (custom typography, an icon system, and visual patterns shared by marketing and product) plus responsive web and mobile UI for the core bill-negotiation journeys.",
    outcome: [
      "Delivered Billshark's brand identity: custom fonts, icons, and visual patterns.",
      "Delivered UX for onboarding, bill submission, savings estimates, and subscription management.",
      "First project at Front10; it led to my full-time role there.",
    ],
  },
  a11ysolutions: {
    timeline: "2021 – 2022 (freelance)",
    problem:
      "A11ySolutions had deep accessibility expertise and enterprise clients (Barceló, PROS, Billshark, Applause), but its website didn't reflect that or explain complex B2B services (audits, VPATs, design review, remediation, training) in a way that converted visitors into leads.\n\nClients also faced a gap: full WCAG remediation takes months, but they needed to show users immediate accessibility progress. Both the site and a new widget had to feel trustworthy to procurement teams, be accessible themselves, and be clear to non-technical buyers.",
    process: [
      {
        label: "Information architecture",
        text: "Restructured the site around the core service lines, giving each service its own page with deliverables, process steps, and outcomes.",
      },
      {
        label: "Conversion flow",
        text: "Led the homepage with a free accessibility scan CTA to lower the barrier to first contact, backed by client logos, testimonials, and credibility stats. Designed consultation-request flows alongside self-serve product exploration.",
      },
      {
        label: "Widget UX",
        text: "Designed the A11yAgent experience end to end: the embed/install flow, the user-facing control panel, reading window mode, and contrast and display adjustments.",
      },
    ],
    solution:
      "A redesigned A11ySolutions.com with clear service architecture and showcase sections for A11yDetector and A11yReport, plus A11yAgent, an embeddable widget with accessibility profiles, typography and color controls, and dedicated marketing pages that position it as a bridge while long-term remediation is underway.",
    outcome: [
      "Shipped the full website redesign and the A11yAgent widget product design.",
      "The widget is live on enterprise sites such as Barceló Hotel Group (shown in the screens below).",
    ],
  },
  front10: {
    team: "Front10's design pool, working in agile sprints with client and internal product teams.",
    timeline: "Mar 2019 – Feb 2026",
    problem:
      "Front10 is a software consultancy and product studio shipping fast for startups and enterprise clients across fintech, SaaS, and generative AI. Projects moved through agile sprints, often with incomplete briefs and tight timelines, and quality had to stay consistent across brand, marketing, and product surfaces while switching between engagements.",
    process: [
      {
        label: "Start: Billshark",
        text: "Began in 2019 as a contract designer on Billshark, delivering prioritized UX improvements sprint by sprint alongside brand work (custom fonts, icon sets).",
      },
      {
        label: "Generalist product design",
        text: "Moved full-time into the design pool: client email designs, brand guidelines, marketing websites, merchandise graphics, and reusable UI components across products.",
      },
      {
        label: "Product ownership",
        text: "As Front10 invested in AI, shifted to WOXO and became its Product Owner in March 2023, staying with Front10 until February 2026.",
      },
      {
        label: "Workflow",
        text: "Figma was the primary tool for design systems, flows, and high-fidelity UI through early 2025; from mid-2025 I moved to a Cursor-first workflow (90%+) for prototyping and shipping production UI.",
      },
    ],
    solution:
      "Design systems and reusable patterns used across multiple client and internal teams, plus brand, web, email, and product UI work across fintech, SaaS, and AI.",
    outcome: [
      "7 years at Front10 (Mar 2019 – Feb 2026), growing from contract designer to full-time product designer to WOXO Product Owner.",
      "Billshark brand identity and web/mobile UX.",
      "WOXO turnaround: annual loss from −$404K to −$34K and revenue from $76K to a $265K peak.",
    ],
    learnings:
      "I learned to adapt quickly between visual design and product UX without losing consistency.",
  },
  shoturo: {
    team: "Founder; I designed and built the product.",
    timeline: "Mar 2026 – Present",
    problem:
      "Listing photos decide whether a car gets booked or bought. A cluttered driveway or flat lighting makes a good car look cheap, professional shoots cost money and time, and generic photo editors don't understand car listings. Sellers need better photos without the car looking fake.",
    process: [
      {
        label: "Discovery",
        text: "Before writing any code, I DMed Turo hosts and asked what frustrated them. The answer kept coming back: they knew their photos weren't good enough, but had no easy fix.",
      },
      {
        label: "User flow",
        text: "Kept the core flow deliberately simple: upload → AI edits background and lighting → preview → export. One photo, one minute.",
      },
      {
        label: "Design to code",
        text: "Designed early flows in Figma, then built most of the product (site, upload flow, payments) in Cursor.",
      },
    ],
    solution:
      "An AI photo editor with location and lighting pickers, real-time generation progress, a before/after compare view, use-case pages for Turo hosts, private sellers, and marketplace listings, and credit-based pricing with a free trial (1 photo, no card).",
    outcome: [
      "Launched March 15, 2026; live with paying users.",
      "About $600 in revenue so far; still early.",
      "Current growth channels: SEO, local search, directories, Reddit, and Facebook groups.",
    ],
    learnings: "The product is simple on purpose: one photo, one minute, done.",
  },
  superfocus: {
    team: "Founder; I designed and built the product.",
    timeline: "Oct 2025 – Present",
    problem:
      "Students don't need another productivity app with 50 features. Most Pomodoro apps are either too bare or split across too many tabs: timer here, music there, tasks somewhere else.",
    process: [
      {
        label: "Discovery",
        text: "Talked to high school and university students about how they actually study. The pattern was consistent: a timer, background noise (usually Spotify), and a short task list.",
      },
      {
        label: "Iterations",
        text: "I update the product when I have time, mostly based on user feedback.",
      },
    ],
    solution:
      "One place for a study session: timer presets (Pomodoro, Sprint, Deep Work, Marathon), ambient sound cassettes with Spotify, a built-in task list with Todoist and Notion connections, focus analytics, streaks, and a leaderboard. Freemium at $3.99/mo with a 7-day trial; auth via Clerk, payments via Stripe, hosted on Vercel.",
    outcome: [
      "Launched October 2025; live at superfocus.live.",
      "About $300 in revenue; growth has been slower than Shoturo.",
    ],
    learnings:
      "The goal wasn't to reinvent studying, just to make the basics feel a bit more modern.",
  },
};
