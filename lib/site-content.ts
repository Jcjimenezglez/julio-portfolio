export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
};

export type ProjectImage = {
  src: string;
  caption: string;
};

export type ProjectFinancialRow = {
  year: string;
  expenses: string;
  revenue: string;
  profit: string;
  note?: string;
};

export type ProjectEmbed = {
  label: string;
  embedUrl: string;
  type: "youtube" | "linkedin";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  sortYear: number;
  workType: "professional" | "personal";
  role: string;
  client: string;
  location?: string;
  url?: string;
  logo: string;
  coverImage?: string;
  gallery?: ProjectImage[];
  financials?: ProjectFinancialRow[];
  embeds?: ProjectEmbed[];
  relatedLinks?: { label: string; slug: string }[];
  links?: { label: string; href: string }[];
  tools: string[];
  keywords: string[];
  summary: string;
  problem: string;
  process: string;
  results: string[];
};

export type WorkSection = {
  id: "professional" | "personal";
  title: string;
  description: string;
  projects: Project[];
};

export const profile = {
  firstName: "Julio",
  lastName: "Jimenez",
  fullName: "Julio Jimenez",
  title: "Design Engineer · Product Designer",
  headline:
    "7+ years designing fintech, SaaS, and AI products, and I build them too: React, Next.js, and TypeScript prototypes and shipped products.",
  pitch:
    "I led WOXO, an AI video product, as Product Owner with a 15-person team — cutting annual loss from $404K to $34K and growing revenue from $76K to a $265K peak.",
  location: "Miami, FL",
  workPreference: "Open to on-site, hybrid, or remote",
  email: "jcjimenezglez@gmail.com",
  phone: "+1 (786) 973-1476",
  workAuthorization: "US Permanent Resident (Green Card)",
  languages: "Spanish (native) · English (professional)",
  linkedIn: "https://www.linkedin.com/in/julio-jimenez-9a114a12b/",
  github: "https://github.com/Jcjimenezglez",
  cursorProfile: "https://cursor.com/@jcjimenezglez",
  portfolioPath: "/",
  resumePath: "/api/resume",
};

export const summary = {
  short:
    "Design Engineer and Product Designer based in Miami. Seven years at Front10 (Mar 2019 – Feb 2026) designing UX and UI for fintech, SaaS, and AI products — including three years as Product Owner of WOXO, leading a 15-person team. Today I design and code my own products, Shoturo and Superfocus, with Next.js, TypeScript, Tailwind, and Vercel.",
  long: [
    "Product Designer with 7+ years at Front10 (Miami) designing web and mobile products for fintech, SaaS, and AI clients — user flows, design systems, and production UI. As Product Owner of WOXO, an AI video platform, I led a 15-person team of developers, designers, and marketers; we cut the annual loss from $404K to $34K and grew revenue from $76K to a $265K peak year.",
    "I work from problem framing and flows to high-fidelity UI in Figma, then into code: React, Next.js, TypeScript, Tailwind, and shadcn/ui, built with AI-assisted tools like Cursor and Claude Code. Designs ship as real, accessible components.",
  ],
};

export const skillGroups = {
  designEngineering: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui and Radix",
    "Code Prototyping",
    "Figma-to-Code",
    "Vercel",
    "Supabase",
    "Clerk",
    "Stripe",
  ],
  design: [
    "UX Design",
    "UI Design",
    "User Flows",
    "Wireframing",
    "Information Architecture",
    "Design Systems",
    "Interaction Design",
    "Visual Design",
    "Prototyping",
    "Generative AI UX",
    "Agent UX Patterns",
    "Motion & Micro-interactions",
    "Brand Identity",
    "Iconography",
  ],
  engineering: [
    "TypeScript",
    "React",
    "Next.js",
    "CSS",
    "HTML",
    "Component Development",
    "Responsive UI",
    "Tailwind CSS",
  ],
  tools: [
    "Figma",
    "Cursor",
    "Vercel",
    "GitHub",
    "Stripe",
    "Clerk",
  ],
  ai: [
    "AI-Assisted Development",
    "AI-Assisted Prototyping",
    "Prompt-to-UI Workflows",
  ],
  methods: [
    "User Research (customer interviews)",
    "Cross-functional Collaboration",
    "Rapid Prototyping",
    "Design-to-Code",
    "Accessibility (WCAG)",
    "Agile / Scrum",
    "A/B Testing",
    "Usability Testing",
  ],
};

export const aiWorkflow = {
  title: "How I work",
  description:
    "I live at the intersection of design and code — prototyping in hours, shipping production UI.",
  points: [
    {
      label: "Design",
      detail:
        "Figma for design systems, flows, and high-fidelity UI when the problem needs exploration before code.",
    },
    {
      label: "Build in code",
      detail:
        "TypeScript, React, and Next.js via Cursor. Since mid-2025, 90%+ of my work goes from idea to production in the editor — not a handoff.",
    },
    {
      label: "AI products",
      detail:
        "At WOXO and in side projects, I design and build the UX around async generation, loading states, error handling, and credit pricing.",
    },
  ],
};

export const atsKeywords = [
  ...skillGroups.designEngineering,
  ...skillGroups.design,
  ...skillGroups.engineering,
  ...skillGroups.ai,
  ...skillGroups.tools,
  ...skillGroups.methods,
  "Product Designer",
  "UX Designer",
  "UI Designer",
  "Design Engineer",
  "Generative AI",
  "AI-Native Product Design",
  "SaaS",
  "Design-to-Code",
  "Video Generation UX",
  "Product Owner",
  "Accessibility (WCAG)",
  "Case Studies",
];

export const experience: Experience[] = [
  {
    company: "Independent (Shoturo, Superfocus)",
    role: "Founder & Product Designer",
    location: "Miami, FL",
    startDate: "Oct 2025",
    endDate: "Present",
    highlights: [
      "Shoturo (shoturo.com): AI photo editor for car listings. Validated demand by talking to Turo hosts before building; designed and shipped end to end. Live with paying users, ~$600 revenue since Mar 2026 launch.",
      "Superfocus (superfocus.live): Pomodoro focus app for students with Spotify, Notion, and Todoist integrations; ~$300 revenue.",
      "Own the full product cycle: user problem, flows, UI, front-end build (Next.js, TypeScript), pricing, and launch.",
    ],
  },
  {
    company: "Front10",
    role: "Product Designer; Product Owner, WOXO (Mar 2023 - Feb 2026)",
    location: "Miami, FL",
    startDate: "Mar 2019",
    endDate: "Feb 2026",
    highlights: [
      "WOXO (AI prompt-to-YouTube-Short platform): as Product Owner, led a 15-person team of developers, designers, and marketing, owning product strategy, UX, and UI quality.",
      "Cut WOXO's annual loss from $404K (2023) to $34K (2025), a ~92% reduction, and grew revenue from $76K (2023) to a $265K peak (2024).",
      "Scaled WOXO to 1,500 creators at peak and 325,000+ videos generated, with ~15–25% retention and ~2% conversion.",
      "Designed and shipped the creator dashboard, credit-based pricing, caption animations, Adobe Firefly integration, and direct YouTube publishing; introduced Scrum and ran weekly planning.",
      "Billshark (fintech client): created brand identity, custom typography, and icons; designed web and mobile UX for onboarding, bill submission, savings estimates, and subscription management with Billshark's Product Manager.",
      "Designed design systems, reusable UI components, marketing websites, and email campaigns for fintech, SaaS, and AI clients in agile teams.",
    ],
  },
  {
    company: "A11ySolutions",
    role: "Product Designer (Freelance)",
    location: "Miami, FL",
    startDate: "2021",
    endDate: "2022",
    highlights: [
      "Redesigned the marketing website around a clear service architecture (audits, VPATs, design review, remediation, training) and a free-scan conversion CTA.",
      "Designed A11yAgent, an embeddable accessibility widget that gives end users on-page controls.",
    ],
  },
];

export const professionalWork: Project[] = [
  {
    slug: "woxo",
    title: "WOXO",
    category: "AI Product Design",
    year: "2023 – 2026",
    sortYear: 2023,
    workType: "professional",
    role: "Product Owner",
    client: "Front10 — WOXO (Flagship AI Product)",
    location: "Miami, FL",
    url: "https://woxo.tech/",
    tools: [
      "Figma",
      "Design Systems",
      "User Flows",
      "Prototyping",
      "Agile / Scrum",
      "A/B Testing",
      "User Research",
      "Cursor",
    ],
    keywords: [
      "Generative AI",
      "AI Video Generation",
      "Product Design",
      "UI/UX Design",
      "Creator Tools",
      "Prompt-to-Video UX",
    ],
    logo: "/work/woxo-logo.png",
    coverImage: "/work/woxo/prompt-home.png",
    financials: [
      {
        year: "2023",
        expenses: "$480,142.54",
        revenue: "$76,405.57",
        profit: "−$403,736.97",
        note: "Year I joined as Product Owner",
      },
      {
        year: "2024",
        expenses: "$346,995.54",
        revenue: "$265,274.84",
        profit: "−$81,720.70",
      },
      {
        year: "2025",
        expenses: "$241,251.36",
        revenue: "$207,233.34",
        profit: "−$34,018.02",
      },
    ],
    embeds: [
      {
        label: "WOXO product video",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/hgFthGfNeVE",
      },
      {
        label: "WOXO demo",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/bXc42CVRgmo",
      },
      {
        label: "WOXO creator workflow",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/GCWnUO8SNJo",
      },
      {
        label: "WOXO on LinkedIn",
        type: "linkedin",
        embedUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:activity:7407844019843522560",
      },
    ],
    gallery: [
      {
        src: "/work/woxo/prompt-home.png",
        caption:
          "Redesigned prompt screen — \"What's your video idea?\" with suggested topics and script settings.",
      },
      {
        src: "/work/woxo/video-generated.png",
        caption:
          "Video generation view — prompt input, vertical preview, and publish flow for YouTube Shorts.",
      },
      {
        src: "/work/woxo/marketing-save-time.png",
        caption: "Marketing creative — \"Save time creating video content.\"",
      },
    ],
    relatedLinks: [{ label: "Front10", slug: "front10" }],
    summary:
      "WOXO turns a single prompt into a faceless YouTube Short — script, visuals, voiceover, captions, and publishing to YouTube. I joined as Product Owner in March 2023 when the product lost about $404K that year. Over three years we cut the annual loss to ~$34K, grew revenue from $76K to a $265K peak, and scaled to 1,500 creators at our best point.",
    problem:
      "When I started in 2023, the numbers were rough. That year: $480K in expenses, $76K in revenue, −$404K profit. Leadership gave us three years to fix it or shut WOXO down.\n\nCreators wanted a faster way to make faceless YouTube Shorts without filming or editing. But we couldn't just chase features — every decision had to balance growth with cost.\n\nGenerative AI products are also hard to design for: long wait times, outputs that miss, confusing credit pricing, and users dropping off before their first video.",
    process:
      "First I mapped where the money went — AI models, infrastructure, tools, payroll — against what each plan tier brought in.\n\nI scaled the team from 15 at peak down to 3. I ran weekly meetings, support, marketing copy, and the product design. I implemented Scrum myself at WOXO.\n\nOn the product side I redesigned core screens: the prompt home (\"What's your video idea?\"), the generation preview, and the publish flow. We built prompt → AI builds video → post to YouTube, with credit pricing, onboarding, and loading/error states for async generation.\n\nWe shipped Adobe Firefly, caption styles (Kinetic, Karaoke, Standard), and direct YouTube posting. A/B tests on pricing and onboarding — conversion around ~2%, retention 15–25%.\n\nWOXO ran on OpenAI for scripts and the video pipeline (10B+ tokens processed).\n\nBy year: 2023 — −$404K profit · 2024 — −$82K · 2025 — −$34K. Revenue went from $76K → $265K → $207K. We never hit a full calendar year in the green, but the trend moved the right way.",
    results: [
      "Cut annual loss from −$404K (2023) to −$34K (2025) — ~92% reduction.",
      "Grew revenue from $76K (2023) to a $265K peak (2024).",
      "1,500 creators at peak; 325,000+ videos generated.",
      "Retention ~15–25%; conversion ~2%.",
      "Redesigned prompt, generation, and publish screens.",
      "Rightsized team from 15 to 3 while still shipping features.",
      "Shipped Adobe Firefly, caption animations, and YouTube publishing.",
    ],
  },
  {
    slug: "front10",
    title: "Front10",
    category: "Product Design",
    year: "2019 – 2026",
    sortYear: 2019,
    workType: "professional",
    role: "Product Designer",
    client: "Front10 — Software & AI Products",
    location: "Miami, FL",
    url: "https://front10.com/",
    tools: [
      "Figma",
      "Adobe Creative Suite",
      "Adobe XD",
      "Sketch",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Cursor",
      "Miro",
    ],
    keywords: [
      "Product Design",
      "UI/UX Design",
      "AI Solutions",
      "Design Systems",
      "Agile",
      "SaaS",
    ],
    logo: "/work/front10-logo.png",
    relatedLinks: [
      { label: "WOXO", slug: "woxo" },
      { label: "Billshark", slug: "billshark" },
      { label: "A11ySolutions", slug: "a11ysolutions" },
    ],
    summary:
      "Seven years of product design at Front10, a Miami-based software company building AI-powered web and mobile products. I started in 2019 on a contract for Billshark — their first client engagement for me — designing brand, typography, icons, and UX for their fintech platform. I then moved full-time into a generalist product design role spanning email campaigns, brand identity, websites, merchandise, and UI components across multiple client and internal projects, before transitioning to WOXO as Product Owner in 2023.",
    problem:
      "Front10 operates as a software consultancy and product studio — shipping fast for startups and enterprise clients across fintech, SaaS, and generative AI. When I joined, the company needed designers who could work across the full visual and product spectrum, not just screens in isolation.\n\nClient projects moved quickly through agile sprints, often with incomplete briefs and tight timelines. Internal products like WOXO needed the same design rigor as client work, but with longer-term product thinking. The challenge was maintaining quality and consistency across brand, marketing, and product surfaces while context-switching between engagements.\n\nThere was no single \"product designer\" playbook — one week I'd be designing email templates for a client campaign, the next building icon systems for a mobile app, the next creating merchandise assets or website landing pages.",
    process:
      "My journey at Front10 followed a natural progression. I started on Billshark as a contract designer in 2019 — their Product Manager assigned prioritized UX improvements on a sprint-by-sprint basis, and I delivered brand work (custom fonts, icon sets) alongside web and mobile interface design.\n\nAfter proving value on Billshark, I moved full-time into Front10's general design pool. This meant working across whatever the studio needed: client email designs, brand guidelines, marketing websites, merchandise graphics, and reusable UI components for different products. I learned to adapt quickly between visual design and product UX without losing consistency.\n\nIn parallel, I took on freelance work for A11ySolutions — redesigning their marketing website and designing the A11yAgent accessibility widget product.\n\nAs Front10 invested more heavily in AI products, my work shifted toward WOXO — a sister company in the same group focused on AI video generation. By March 2023, I transitioned fully into a Product Owner role on WOXO, though I remained part of the Front10 organization until February 2026.\n\nThroughout, Figma was my primary tool for design systems, flows, and high-fidelity UI through early 2025. From mid-2025 onward, I transitioned to a Cursor-first workflow (90%+) for prototyping and shipping production interfaces.",
    results: [
      "7 years at Front10 (2019–Feb 2026) across fintech, SaaS, generative AI, and client services.",
      "Billshark — delivered brand identity, custom typography, icon system, and UX for web and mobile bill-negotiation tools.",
      "Designed across the full visual spectrum: email campaigns, brand, websites, merchandise, and product UI components.",
      "Built design systems and reusable patterns used across multiple client and internal teams.",
      "Freelance work for A11ySolutions — full website redesign plus A11yAgent widget product design.",
      "Evolved from contract designer to full-time product designer to WOXO Product Owner.",
      "WOXO accounted for 10B+ OpenAI tokens processed (scripts, prompts, and video generation pipeline).",
      "Figma was primary through early 2025; moved to Cursor (90%+) after that.",
    ],
  },
  {
    slug: "billshark",
    title: "Billshark",
    category: "Fintech UX",
    year: "2019",
    sortYear: 2019,
    workType: "professional",
    role: "UX/UI Designer",
    client: "Front10 — Billshark (First Client Project)",
    location: "Miami, FL",
    url: "https://www.billshark.com/",
    tools: ["Figma", "Adobe XD", "User Flows", "Prototyping", "Usability Testing"],
    keywords: [
      "Fintech UX",
      "UI/UX Design",
      "Mobile App Design",
      "Brand Design",
      "Icon Design",
      "Conversion Optimization",
      "Bill Negotiation",
      "SaaS",
    ],
    logo: "/work/billshark-logo.png",
    relatedLinks: [{ label: "Front10", slug: "front10" }],
    summary:
      "My first project at Front10 in 2019 — a contract engagement designing brand identity, custom typography, icons, and UX for Billshark, a fintech platform that helps consumers negotiate and cancel recurring bills. I worked directly with Billshark's Product Manager, receiving prioritized tasks and delivering designs on their timeline across both web and mobile.",
    problem:
      "Billshark helps consumers save money by negotiating bills and canceling unwanted subscriptions — but the product experience needed to earn trust in a sensitive financial context. Users had to understand potential savings, submit bills for negotiation, and track outcomes without friction or confusion.\n\nThe brand also lacked visual cohesion across web and mobile. Marketing, product, and support surfaces felt disconnected — there was no unified typography, icon language, or design system tying the experience together.\n\nAs a fintech product handling personal financial data, clarity and trust were non-negotiable. Every screen needed to communicate security, transparency, and progress without overwhelming users who were already stressed about their bills.",
    process:
      "I joined as a contract designer through Front10, working remotely with Billshark's Product Manager who prioritized improvements sprint by sprint. My workflow was task-driven: receive a brief, design the solution, deliver specs, and move to the next priority.\n\nOn the brand side, I designed custom typography, built an icon system for the product, and established visual patterns that carried across marketing and product surfaces. This wasn't just UI polish — it was foundational brand work that made the product feel like a single cohesive experience.\n\nFor product UX, I designed user flows, wireframes, and high-fidelity interfaces for core journeys: onboarding, savings estimation, bill submission, subscription management, and outcome tracking. I worked across both responsive web and native mobile app contexts.\n\nCollaboration was direct and async — the PM would flag areas needing improvement (conversion drop-offs, support ticket themes, churn signals), and I'd design targeted solutions within their requested timelines. Usability testing informed iterations on signup and bill submission flows.",
    results: [
      "Designed Billshark's brand — custom fonts, icons, and visual identity.",
      "Delivered UX for onboarding, bill submission, savings estimates, and subscription management.",
      "Worked task-by-task with Billshark's PM — designs were reviewed and accepted on their timeline.",
      "Built responsive web and mobile UI for a fintech product handling sensitive financial data.",
      "First project at Front10; led to my full-time role there.",
    ],
  },
];

const a11ySolutionsWork: Project = {
  slug: "a11ysolutions",
  title: "A11ySolutions",
  category: "Accessibility & Product Design",
  year: "2021 – 2022",
  sortYear: 2022,
  workType: "professional",
  role: "Product Designer (Freelance)",
  client: "A11ySolutions — Accessibility Consultancy",
  location: "Miami, FL",
  url: "https://www.a11ysolutions.com/",
  tools: [
    "Figma",
    "Web Design",
    "Brand Design",
    "Prototyping",
    "User Flows",
    "Accessibility (WCAG)",
    "Adobe Creative Suite",
    "Information Architecture",
  ],
  keywords: [
    "Accessibility",
    "WCAG",
    "ADA Compliance",
    "Web Design",
    "Product Design",
    "Widget UX",
    "Inclusive Design",
    "B2B SaaS",
    "Enterprise UX",
  ],
  logo: "/work/a11ysolutions-logo.png",
  coverImage: "/work/a11ysolutions/homepage.png",
  gallery: [
    {
      src: "/work/a11ysolutions/homepage.png",
      caption:
        "Homepage — \"Digital Accessibility Built for Humans & AI\" with free scan CTA and enterprise client logos.",
    },
    {
      src: "/work/a11ysolutions/transformation.png",
      caption:
        "Before vs. after — manual audits (8–12 weeks) vs. automated, VPAT-ready delivery (1–4 weeks).",
    },
    {
      src: "/work/a11ysolutions/services.png",
      caption:
        "Services page — audits & VPAT, design review, remediation support, and training with illustrated deliverables.",
    },
    {
      src: "/work/a11ysolutions/a11ydetector.png",
      caption:
        "A11yDetector product page — Chrome extension for one-click page scans, reports, and a central dashboard.",
    },
    {
      src: "/work/a11ysolutions/roi.png",
      caption:
        "ROI section — accessibility framed as investment (20–30% conversion lift, 200–500% average ROI).",
    },
    {
      src: "/work/a11ysolutions/case-studies.png",
      caption:
        "Case studies carousel — Barceló Hotel Group testimonial with enterprise social proof.",
    },
    {
      src: "/work/a11ysolutions/vibra-case-study.png",
      caption:
        "Vibra Hotels case study — reducing booking friction while remediation is in progress.",
    },
    {
      src: "/work/a11ysolutions/blog.png",
      caption:
        "Blog hub — \"Accessibility insights\" with WCAG, inclusive design, and compliance articles.",
    },
    {
      src: "/work/a11ysolutions/contact.png",
      caption:
        "Contact page — lead form with service selector, team reply promise, and Miami HQ details.",
    },
    {
      src: "/work/a11ysolutions/widget-panel.png",
      caption:
        "A11yAgent widget panel — accessibility profiles (color blind, dyslexia, ADHD, seizure-safe) and content adjustments in one overlay.",
    },
    {
      src: "/work/a11ysolutions/widget-profiles.png",
      caption:
        "Widget live on Barceló Hotel Group — profiles, typography controls, and content adjustments embedded on an enterprise site.",
    },
    {
      src: "/work/a11ysolutions/widget-reading-window.png",
      caption:
        "Reading window mode — dims the page and highlights a horizontal band so users can focus on one section at a time.",
    },
    {
      src: "/work/a11ysolutions/widget-contrast-invert.png",
      caption:
        "Color adjustments — contrast invert, saturation, mute sounds, hide images, and pause animations.",
    },
  ],
  relatedLinks: [{ label: "Front10", slug: "front10" }],
  summary:
    "Freelance engagement for A11ySolutions, a Miami-based digital accessibility consultancy serving enterprise clients with WCAG audits, VPATs, design reviews, remediation, and training. I redesigned their full marketing website and designed A11yAgent — an embeddable accessibility support widget that gives end users on-page controls while teams execute long-term remediation.",
  problem:
    "A11ySolutions had deep accessibility expertise and enterprise clients (Barceló, PROS, Billshark, Applause) but their digital presence didn't reflect that caliber. The website needed to communicate complex B2B services — audits, VPAT documentation, design review, remediation support, and training — in a way that converted visitors into qualified leads.\n\nSeparately, enterprise clients faced a common gap: full WCAG remediation takes months, but they needed to show immediate accessibility progress to users and stakeholders. A11ySolutions wanted a deployable widget product that bridged this gap — giving end users reading, contrast, and display controls on live websites without replacing proper audit work.\n\nBoth the website and widget needed to feel trustworthy to procurement teams, accessible themselves (practicing what they preach), and clear enough for non-technical buyers to understand the value.",
  process:
    "I started with the website redesign, restructuring the information architecture around A11ySolutions' core service lines: audits & VPAT support, design review, remediation, and training. Each service needed its own page with clear deliverables, process steps, and outcomes.\n\nI designed the homepage to lead with a free accessibility scan CTA — lowering the barrier to first contact — and built trust sections featuring enterprise client logos, testimonials, and quantified credibility (520+ audits delivered, 110+ enterprise clients, 23K+ pages scanned).\n\nPlatform product sections showcased A11ySolutions' internal tools: A11yDetector (Chrome extension for page scanning) and A11yReport (automated accessibility report generation). These sections positioned A11ySolutions as a technology-enabled consultancy, not just a services shop.\n\nFor A11yAgent (the widget at a11ysolutions.com/widget), I designed the full product experience: embed/install flow for client websites, the user-facing control panel, reading window mode, contrast and display adjustments, and dedicated marketing pages with use cases, testimonials, and enterprise positioning.\n\nThe widget pages followed a before/after narrative — showing how teams could deploy immediate user-facing accessibility controls while working through longer remediation backlogs. I designed conversion flows for consultation requests alongside self-serve product exploration.",
  results: [
    "Redesigned A11ySolutions.com with clear service architecture for audits, VPATs, design review, remediation, and training.",
    "Built homepage conversion flow with free accessibility scan CTA and enterprise trust signals.",
    "Designed platform showcase sections for A11yDetector and A11yReport products.",
    "Featured enterprise client social proof from Barceló, PROS, Billshark, Applause, and others.",
    "Designed A11yAgent widget UX — embed flow, control panel, reading window, and contrast adjustments.",
    "Created dedicated widget marketing pages with use cases, testimonials, and consultation CTAs.",
    "Positioned the widget as a bridge between immediate user needs and long-term WCAG remediation.",
    "Delivered both website and product design as a freelance engagement alongside Front10 work.",
  ],
};

export const personalWork: Project[] = [
  {
    slug: "shoturo",
    title: "Shoturo",
    category: "Design Engineering",
    year: "Mar 2026 – Present",
    sortYear: 2026,
    workType: "personal",
    role: "Founder — Design Engineer",
    client: "Personal Project",
    location: "Miami, FL",
    url: "https://shoturo.com/",
    tools: [
      "Cursor",
      "Figma",
      "Next.js",
      "TypeScript",
      "Vercel",
      "Stripe",
    ],
    keywords: [
      "Generative AI",
      "AI Photo Editing",
      "Product Design",
      "Conversion UX",
      "Marketplace UX",
      "Turo",
      "Founder",
      "SaaS",
    ],
    logo: "/work/shoturo-logo.svg",
    coverImage: "/work/shoturo/homepage.png",
    gallery: [
      {
        src: "/work/shoturo/homepage.png",
        caption:
          "Homepage — \"Buyers decide on your photo before they read the listing\" with interactive before/after slider.",
      },
      {
        src: "/work/shoturo/compare-cybertruck.png",
        caption:
          "Before/after — Cybertruck background replaced from residential driveway to urban skyline.",
      },
      {
        src: "/work/shoturo/compare-classic.png",
        caption:
          "Before/after — classic Thunderbird moved from roadside hedge to cobblestone European street.",
      },
      {
        src: "/work/shoturo/compare-model-y.png",
        caption:
          "Before/after — Model Y background swapped from shoreline to Miami skyline with yacht marina.",
      },
      {
        src: "/work/shoturo/compare-silverado.png",
        caption:
          "Before/after — Silverado from parking lot with oak tree to tropical beach with palm trees.",
      },
      {
        src: "/work/shoturo/gallery.png",
        caption:
          "In-app gallery — \"See what Shoturo can do\" with real edited listing photos.",
      },
      {
        src: "/work/shoturo/testimonials.png",
        caption:
          "Social proof — Turo host testimonials from CAR-GA Management and Shaddai Car Rental, Miami.",
      },
      {
        src: "/work/shoturo/pricing.png",
        caption:
          "Pricing — credit packs from $29.99 (Casual host) to $499.99 (Large fleet), no subscription.",
      },
      {
        src: "/work/shoturo/editor.png",
        caption:
          "Editor — upload flow with location, lighting, and one-click Improve action.",
      },
      {
        src: "/work/shoturo/pick-location.png",
        caption:
          "Pick location — city search and Miami neighborhood backgrounds (Brickell, Coconut Grove, Design District).",
      },
      {
        src: "/work/shoturo/pick-lighting.png",
        caption:
          "Pick lighting — keep original, sunrise, day, or sunset lighting styles.",
      },
      {
        src: "/work/shoturo/generation-progress.png",
        caption:
          "Generation progress — real-time status as location and lighting are applied.",
      },
      {
        src: "/work/shoturo/compare-view.png",
        caption:
          "Result view — before/compare/after slider with location, lighting metadata, and download.",
      },
    ],
    relatedLinks: [{ label: "Superfocus", slug: "superfocus" }],
    summary:
      "Shoturo is an AI photo editor for car listings — background replacement and lighting fixes on real uploads. I started it March 15, 2026 after talking to Turo hosts who told me bad photos were costing them bookings. It's live, has paying users, and has made about $600 so far. Still early — I'm focused on growth, better edits, and getting in front of more sellers.",
    problem:
      "When you list a car — on Turo, Facebook Marketplace, or anywhere else — the photos matter. A cluttered driveway, flat lighting, or a messy background makes a good car look cheap. Professional shoots cost money and take time.\n\nI started by DMing Turo hosts directly and asking what frustrated them. The answer kept coming back: they knew their photos weren't good enough, but they didn't have an easy fix.\n\nGeneric photo editors don't get car listings. Sellers need something that improves the photo without making the car look fake.",
    process:
      "I validated the problem by reaching out to hosts on Turo through DMs before writing any code. Once I had enough signal, I built the core flow in Cursor: upload → AI edits background and lighting → preview → export.\n\nThe product is simple on purpose. One photo, one minute, done. Pricing is credit-based with a free trial (1 photo, no card).\n\nFor growth I'm working on SEO, GEO (local search), getting listed on directories, and showing up in Reddit and Facebook groups where Turo hosts and car sellers hang out.\n\nI designed early flows in Figma, but most of the product — site, upload flow, payments — was built in Cursor.",
    results: [
      "Launched March 15, 2026 — live at shoturo.com with paying users.",
      "~$600 in revenue since launch; still in early growth phase.",
      "Core flow: upload → AI edit (background + lighting) → export in under a minute.",
      "Validated demand by DMing Turo hosts before building.",
      "Credit-based pricing with free trial (1 photo, no card).",
      "Growth channels: SEO, GEO, directories, Reddit, and Facebook communities.",
      "Use-case pages for Turo hosts, private sellers, and marketplace listings.",
    ],
  },
  {
    slug: "superfocus",
    title: "Superfocus",
    category: "Design Engineering",
    year: "Oct 2025 – Present",
    sortYear: 2025,
    workType: "personal",
    role: "Founder — Design Engineer",
    client: "Personal Project",
    location: "Miami, FL",
    url: "https://www.superfocus.live/",
    tools: [
      "Cursor",
      "Figma",
      "Next.js",
      "TypeScript",
      "Clerk",
      "Stripe",
      "Vercel",
      "Resend",
    ],
    keywords: [
      "Product Design",
      "AI-Assisted Development",
      "Pomodoro",
      "Productivity",
      "SaaS",
      "Freemium UX",
      "Founder",
      "Focus Timer",
    ],
    logo: "/work/superfocus-logo.png",
    coverImage: "/work/superfocus/focus-session.png",
    gallery: [
      {
        src: "/work/superfocus/focus-session.png",
        caption:
          "Focus session — Pomodoro timer with ambient cassette background and Spotify playback in one screen.",
      },
      {
        src: "/work/superfocus/timers.png",
        caption:
          "Timer presets — Sprint, Pomodoro, Focus, Flow State, Marathon, and Deep Work with custom durations.",
      },
      {
        src: "/work/superfocus/cassettes.png",
        caption:
          "Cassettes — ambient sound environments with Spotify integration, presets, and public community cassettes.",
      },
      {
        src: "/work/superfocus/tasks.png",
        caption:
          "Tasks — built-in to-do list with Todoist import and create-your-own task flow.",
      },
      {
        src: "/work/superfocus/analytics.png",
        caption:
          "Analytics — focus level, day streak, weekly activity chart, and heatmap.",
      },
      {
        src: "/work/superfocus/leaderboard.png",
        caption:
          "Leaderboard — rank by total focus time with 100+ members and progress toward the next rank.",
      },
    ],
    relatedLinks: [{ label: "Shoturo", slug: "shoturo" }],
    summary:
      "Superfocus is a focus timer I built for high school and college students. Nothing fancy — a Pomodoro timer, a background sound (with Spotify), and your task list. You can also connect Notion and Todoist. I launched it in October 2025. It's active, slower to grow than Shoturo, and has made about $300. I work on it when I can.",
    problem:
      "Students don't need another productivity app with 50 features. They need a timer that works, music in the background, and a simple way to track what they're working on.\n\nMost Pomodoro apps are either too bare or split across too many tabs — timer here, music there, tasks somewhere else. I wanted one place for a study session: set a timer, pick a sound, see your tasks, done.\n\nThe goal wasn't to reinvent studying. Just make the basics feel a bit more modern.",
    process:
      "I talked to students — mostly high school and university — about how they actually study. The pattern was consistent: timer, background noise (usually Spotify), and a short task list.\n\nI built Superfocus in Cursor. Timer presets (Pomodoro, Sprint, Deep Work, Marathon), custom sound cassettes with Spotify, task tracking, focus analytics, and a leaderboard for people who want that.\n\nIntegrations: Todoist and Notion for students who already manage tasks elsewhere.\n\nFreemium pricing — $3.99/mo premium with a 7-day trial. Auth through Clerk, payments through Stripe, hosted on Vercel.\n\nGrowth has been slower than Shoturo. I update it when I have time, mostly based on user feedback.",
    results: [
      "Launched October 2025 — live at superfocus.live.",
      "~$300 in revenue; steady but slower growth than Shoturo.",
      "Timer presets: Pomodoro, Sprint, Deep Work, Marathon.",
      "Custom sound cassettes with Spotify integration.",
      "Task list built in; Todoist and Notion connections available.",
      "Focus analytics, streaks, and leaderboard.",
      "Freemium model: $3.99/mo premium, 7-day trial.",
      "Built with Cursor — auth (Clerk), payments (Stripe), email (Resend).",
    ],
  },
];

export const workSections: WorkSection[] = [
  {
    id: "professional",
    title: "Work Experience",
    description: "Product design and ownership at Front10, WOXO, and Billshark.",
    projects: professionalWork,
  },
  {
    id: "personal",
    title: "Projects",
    description:
      "Freelance and personal products designed and built in TypeScript and React.",
    projects: [personalWork[0], a11ySolutionsWork, personalWork[1]],
  },
];

export const projects: Project[] = [
  personalWork[0], // Shoturo
  a11ySolutionsWork,
  personalWork[1], // Superfocus
];

export const allCaseStudies: Project[] = [...professionalWork, ...projects];

export const testimonials = [
  {
    name: "Olga Roman",
    role: "UX Designer",
    relationship: "Worked together at Front10",
    date: "August 2021",
    quote:
      "There is no better colleague than Julio. He is one of the most dedicated professionals I've worked with and is willing to put in that extra help whenever you need it. His expertise as a designer is considerable, and it helped our team come up with better experiences and more efficient solutions on different projects.",
  },
];

export const education = [
  {
    institution: "University of Havana",
    degree: "Bachelor's in Visual Communication Design",
    year: "2012 – 2017",
  },
  {
    institution: "Coursera",
    degree: "Google UX Design Certificate, in progress",
    year: "2021 – present",
  },
];

export const certifications: { name: string; issuer: string; year: string }[] =
  [];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julio-jimenez-9a114a12b/",
  },
  { label: "GitHub", href: "https://github.com/Jcjimenezglez" },
  { label: "Cursor", href: "https://cursor.com/@jcjimenezglez" },
  { label: "WOXO", href: "https://woxo.tech/" },
  { label: "Front10", href: "https://front10.com/" },
  { label: "Billshark", href: "https://www.billshark.com/" },
  { label: "Shoturo", href: "https://shoturo.com/" },
  { label: "Superfocus", href: "https://www.superfocus.live/" },
];

export const seo = {
  title: "Julio Jimenez — Design Engineer & Product Designer",
  description:
    "Design Engineer & Product Designer in Miami. 7+ years at Front10 designing and building fintech, SaaS, and AI products in Figma, React, and Next.js. Product Owner of WOXO. Case studies: WOXO, Billshark, A11ySolutions, Shoturo, Superfocus.",
  ogTitle: "Julio Jimenez — Design Engineer & Product Designer",
  ogDescription:
    "Design Engineer & Product Designer with 7+ years at Front10. Work: WOXO, Billshark. Shipped products: Shoturo, Superfocus.",
};

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getPortfolioUrl() {
  return `${getSiteUrl()}${profile.portfolioPath}`;
}

export function getResumeUrl() {
  return `${getSiteUrl()}${profile.resumePath}`;
}
