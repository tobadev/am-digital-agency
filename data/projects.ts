export interface ProjectData {
  slug: string;
  num: string;
  title: string;
  client: string;
  category: string;
  year: string;
  thumbnail: string;
  video?: string; // autoplay on hover — add real video URLs when ready
  description: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
  gallery: { type: 'image' | 'video'; src: string }[];
}

// Placeholder image base — replace with real project assets
const IMG = 'https://images.unsplash.com/photo-';

export const projects: ProjectData[] = [
  {
    slug: 'clyra-biz',
    num: '01',
    title: 'Clyra.biz',
    client: 'Clyra.biz',
    category: 'Strategy, Design & Development',
    year: '2025',
    thumbnail: '/projects/clyra-biz/hero.webp',
    description: 'All-in-one platform for non-resident entrepreneurs to register and operate US companies in under 48 hours.',
    services: ['Platform Development', 'Document Automation', 'Dashboard UI/UX'],
    challenge: 'Non-resident founders face a legal maze — entity formation, IRS filings, virtual addresses, phone numbers. Each vendor operates independently, forcing entrepreneurs to maintain separate logins and manually reconcile systems. The result: confusion, compliance gaps, and months of friction before launch.',
    solution: 'We consolidated the entire workflow into a single command center. Rather than separate tools, users see one unified interface where entity formation, address provisioning, and compliance documentation flow as a single process. The system handles the backend complexity — filing databases, telecom integrations, regulatory updates — while the interface makes it feel effortless.',
    results: [
      { label: 'First Entity Live', value: '< 48hrs' },
      { label: 'Onboarding Completion', value: '92%' },
      { label: 'Active Companies', value: '500+' },
    ],
    gallery: [
      { type: 'image', src: '/projects/clyra-biz/2nd.webp' },
      { type: 'image', src: '/projects/clyra-biz/3rd.webp' },
    ],
  },
  {
    slug: 'dachreach',
    num: '02',
    title: 'Dachreach',
    client: 'Dachreach',
    category: 'Strategy, Design & Development',
    year: '2025',
    thumbnail: '/projects/dachreach/hero.webp',
    description: 'Cold outreach platform built specifically for the German-speaking market, with GDPR compliance baked in.',
    services: ['Brand Identity', 'Landing Page Design', 'Conversion Optimization'],
    challenge: 'German Mittelstand buyers operate under regulatory caution — GDPR violations carry real legal risk. Dachreach was positioned as a generic cold outreach tool, competing on features. Prospects didn\'t trust that security was engineered-in, not bolted-on. Conversion was nearly flat.',
    solution: 'We inverted the positioning: instead of a tool with GDPR compliance, we positioned it as a GDPR-first intelligence platform. The brand identity moved away from SaaS clichés toward institutional gravitas — visual language borrowed from German financial design, not startup aesthetics. The landing page walked prospects through proof points from established German companies, demonstrating compliance as a core engineering commitment.',
    results: [
      { label: 'Landing Page Conversion', value: '+22%' },
      { label: 'Demo Bookings', value: '3x' },
      { label: 'Trust Rating', value: '4.8/5' },
    ],
    gallery: [
      { type: 'image', src: '/projects/dachreach/2nd.webp' },
      { type: 'image', src: '/projects/dachreach/3rd.webp' },
    ],
  },
  {
    slug: 'costae-ai',
    num: '03',
    title: 'Costae AI',
    client: 'Costae AI',
    category: 'Strategy, Design & Development',
    year: '2026',
    thumbnail: '/projects/costae-ai/hero.webp',
    description: 'Generative AI platform that turns natural language into production-ready web apps.',
    services: ['Product Design', 'Prompt Interface', 'AI Workflow Strategy'],
    challenge: 'Non-technical founders hit a wall: building web applications demands either coding skills or tedious visual builders with output too rigid to feel real. The cognitive load is high, time-to-prototype is weeks, and the result often feels constrained.',
    solution: 'We designed the interface as a collaborative conversation, not a builder. Users describe what they want in plain language; the AI interprets intent, generates clean React code in real-time, and renders a working preview instantly. Edits happen in the chat — ask it to add a payment form or change the header font, and it regenerates code and preview together. The interface erases the boundary between thinking and building.',
    results: [
      { label: 'Idea to Prototype', value: '< 60min' },
      { label: 'Successful Deploys', value: '2,500+' },
      { label: 'Weekly Retention', value: '68%' },
    ],
    gallery: [
      { type: 'image', src: '/projects/costae-ai/2nd.webp' },
      { type: 'image', src: '/projects/costae-ai/3rd.webp' },
    ],
  },
  {
    slug: 'kronberg-zeithaus',
    num: '04',
    title: 'KRONBERG Zeithaus',
    client: 'KRONBERG Zeithaus',
    category: 'Design & Development',
    year: '2024',
    thumbnail: '/projects/kronberg/hero.webp',
    description: 'Digital presence for an exclusive horology house — designed to attract high-net-worth collectors seeking investment-grade timepieces.',
    services: ['Brand Identity', 'Portfolio Showcase Site', 'Print Collateral'],
    challenge: 'Patek Philippe and Audemars Piguet collectors don\'t just want to see watches — they want to understand the investment thesis. Kronberg\'s audience is highly educated, globally distributed, and skeptical of hype. The digital presence needed to feel like private consultation, not retail.',
    solution: 'We designed the site as a curatorial experience. Each piece is contextualized through provenance research, historical significance, and market positioning. The interface is deliberately quiet: black backgrounds, generous whitespace, typography that doesn\'t compete with photography. A direct channel to private consultation is woven throughout — never aggressive, always appropriate to the moment.',
    results: [
      { label: 'Avg. Transaction', value: '€85K+' },
      { label: 'Consultation Leads', value: '+150%' },
      { label: 'Acquisition Cost', value: '-30%' },
    ],
    gallery: [
      { type: 'image', src: '/projects/kronberg/gallery-1.webp' },
      { type: 'image', src: '/projects/kronberg/gallery-2.webp' },
    ],
  },
  {
    slug: 'calem-ai',
    num: '05',
    title: 'Calem AI',
    client: 'Calem AI',
    category: 'Strategy, Design & Development',
    year: '2025',
    thumbnail: '/projects/calem-ai/hero.webp',
    description: 'AI-powered creative platform that delivers branding, strategy, and web design from a single brief.',
    services: ['Product Strategy', 'AI Pipeline Design', 'Platform Development'],
    challenge: 'Designers and small agency owners are overwhelmed — more requests than capacity. They need to expand output without hiring, but outsourcing to cheaper agencies compromises quality. They\'re stuck between growing and staying constrained.',
    solution: 'We built Calem as a creative copilot. Designers input brand strategy and reference materials; the AI generates multiple design directions, not templates. The designer reviews, refines, and builds from the best direction — augmenting their own work rather than starting from scratch. The output is always human-approved and human-edited. This isn\'t automation, it\'s leverage.',
    results: [
      { label: 'Avg. Project Fee', value: '€1K' },
      { label: 'Delivery Time', value: '< 15min' },
      { label: 'Client Satisfaction', value: '94%' },
    ],
    gallery: [
      { type: 'image', src: '/projects/calem-ai/3rd.webp' },
      { type: 'image', src: '/projects/calem-ai/2nd.webp' },
    ],
  },
];
