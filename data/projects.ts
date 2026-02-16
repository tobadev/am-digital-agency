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
    thumbnail: `${IMG}1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop`,
    description: 'All-in-one platform for non-resident entrepreneurs to register and operate US companies in under 48 hours.',
    services: ['Platform Development', 'Document Automation', 'Dashboard UI/UX'],
    challenge: 'Non-resident founders bounced between vendors — LLC registration, IRS filings, virtual addresses, phone numbers. Each system required separate logins and manual syncing. The process felt fragmented and legally opaque.',
    solution: 'We built a single control center that automates entity formation, provisions virtual addresses and VoIP in minutes, and maintains compliance docs automatically. Clean Node.js/React stack with API integrations to filing databases and telecom providers.',
    results: [
      { label: 'Incorporation Time', value: '< 48hrs' },
      { label: 'Onboarding Completion', value: '92%' },
      { label: 'Active Entities', value: '500+' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1616077168079-7e09a677fb2c?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop` },
    ],
  },
  {
    slug: 'dachreach',
    num: '02',
    title: 'Dachreach',
    client: 'Dachreach',
    category: 'Strategy, Design & Development',
    year: '2025',
    thumbnail: `${IMG}1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop`,
    description: 'Cold outreach platform built specifically for the German-speaking market, with GDPR compliance baked in.',
    services: ['Brand Identity', 'Landing Page Design', 'Conversion Optimization'],
    challenge: 'The brand had no local credibility. German Mittelstand buyers are skeptical of unknown tools, especially ones handling prospect data. Initial conversion was flat because messaging didn\'t match the market\'s expectations around security and professionalism.',
    solution: 'We rebuilt the brand around a security-first visual language and redesigned the landing page in Framer with localized UX. Every section emphasized GDPR compliance and included real customer proof from trusted German companies.',
    results: [
      { label: 'Landing Page Conversion', value: '+22%' },
      { label: 'Demo Bookings', value: '3x' },
      { label: 'Trust Rating', value: '4.8/5' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1586023492125-27b2c045efd7?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop` },
    ],
  },
  {
    slug: 'costae-ai',
    num: '03',
    title: 'Costae AI',
    client: 'Costae AI',
    category: 'Strategy, Design & Development',
    year: '2026',
    thumbnail: `${IMG}1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop`,
    description: 'Generative AI platform that turns natural language into production-ready web apps — no coding required.',
    services: ['Product Design', 'Prompt Interface', 'AI Workflow Strategy'],
    challenge: 'The gap between idea and working prototype was too wide for non-technical founders. Existing no-code tools still demanded technical understanding and tedious drag-and-drop workflows.',
    solution: 'We designed a split-pane interface where users chat with the AI to build and refine applications in real-time. The AI interprets intent and outputs clean, modular React/Tailwind code. Users iterate instantly — no exports, no manual code review.',
    results: [
      { label: 'Development Speed', value: '10x' },
      { label: 'Successful Deploys', value: '2,500+' },
      { label: 'Weekly Retention', value: '68%' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1553877522-43269d4ea984?q=80&w=2670&auto=format&fit=crop` },
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
    description: 'Digital showcase for an exclusive horology house — a by-appointment-only calling card for high-net-worth collectors.',
    services: ['Brand Identity', 'Portfolio Showcase Site', 'Print Collateral'],
    challenge: 'A physical vault of investment-grade timepieces needed a digital presence. They didn\'t want e-commerce — they wanted an editorial experience that attracted serious collectors and encouraged private consultations.',
    solution: 'We designed a minimalist, dark-mode gallery centered on provenance and horological storytelling. Deep photography of Patek Philippe and Audemars Piguet pieces, paired with historical context. No shopping cart — just a path to private consultation.',
    results: [
      { label: 'Avg. Order Value', value: '€85K+' },
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
    thumbnail: `${IMG}1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop`,
    description: 'AI-powered digital agency that delivers branding, strategy, and web design in a single platform — from brief to launch.',
    services: ['Product Strategy', 'AI Pipeline Design', 'Platform Development'],
    challenge: 'Small businesses and solo founders couldn\'t afford traditional agency rates for branding and web design. They were stuck choosing between expensive agencies or generic DIY builders that produced forgettable results.',
    solution: 'We built a platform that combines AI-generated branding with human-quality web design output. Users submit a brief, the system produces brand assets, copy, and a fully designed site — all reviewable and editable before going live. No templates, no drag-and-drop.',
    results: [
      { label: 'Avg. Order Value', value: '€1K' },
      { label: 'Delivery Time', value: '< 72hrs' },
      { label: 'Client Satisfaction', value: '94%' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop` },
    ],
  },
];
