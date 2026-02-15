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
    description: 'Complete digital banking overhaul — from legacy infrastructure to a modern, mobile-first platform serving 2M+ users.',
    services: ['Strategy', 'UX Design', 'Front-end Development', 'API Architecture'],
    challenge: 'NovaBank was operating on decade-old infrastructure that alienated younger demographics. Their mobile experience was fragmented, slow, and lacked the intuitive flow expected by digital-native users. They needed a complete overhaul without disrupting service for existing customers.',
    solution: 'We built a headless architecture decoupling the frontend from the legacy banking core. A new React Native mobile app and Next.js web dashboard were developed in parallel, connected through a custom API middleware layer. The result: sub-second load times and a 94 Lighthouse score.',
    results: [
      { label: 'App Store Rating', value: '4.8' },
      { label: 'Load Time Reduction', value: '73%' },
      { label: 'User Growth (6mo)', value: '+140K' },
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
    description: 'Premium e-commerce experience for a luxury homeware brand — Shopify Plus, custom theme, conversion-focused.',
    services: ['Brand Strategy', 'UI/UX Design', 'Shopify Plus Development'],
    challenge: 'Aura Home had strong brand recognition offline but their digital presence was generic and underperforming. Conversion rates were below industry average and the site didn\'t reflect the quality of their products.',
    solution: 'We designed and built a custom Shopify Plus theme from scratch. Every interaction was considered — from the product gallery with zoom and swatch selection to a streamlined one-page checkout. The design system prioritised photography and whitespace.',
    results: [
      { label: 'Conversion Rate', value: '+68%' },
      { label: 'Avg. Session Duration', value: '+2.4min' },
      { label: 'Revenue Growth (Q1)', value: '+31%' },
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
    description: 'Go-to-market strategy and brand positioning for a B2B SaaS platform entering a crowded market.',
    services: ['Market Research', 'Brand Positioning', 'Messaging Framework', 'Launch Strategy'],
    challenge: 'TechFlow had a strong product but zero market differentiation. They were competing against established players with bigger budgets and couldn\'t articulate why they were different.',
    solution: 'We ran a deep competitive analysis across 14 direct competitors, identified three underserved positioning angles, and built a messaging framework that connected product capabilities to specific buyer pain points. The launch strategy included a phased rollout across three ICP segments.',
    results: [
      { label: 'Qualified Leads (90 days)', value: '340+' },
      { label: 'Demo Conversion', value: '22%' },
      { label: 'Brand Awareness', value: '3x' },
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
    thumbnail: `${IMG}1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop`,
    description: 'Telemedicine platform connecting patients with specialists — real-time video, scheduling, and health records.',
    services: ['UX Research', 'UI Design', 'Full-stack Development', 'HIPAA Compliance'],
    challenge: 'Vitality needed to launch a telemedicine platform that felt trustworthy and simple enough for elderly patients while being feature-rich enough for medical professionals. HIPAA compliance was non-negotiable.',
    solution: 'We designed two distinct interfaces — a simplified patient-facing app focused on clarity and large touch targets, and a comprehensive practitioner dashboard with real-time video, scheduling, and records management. All built on a HIPAA-compliant infrastructure with end-to-end encryption.',
    results: [
      { label: 'Patient Satisfaction', value: '96%' },
      { label: 'Appointments (month 1)', value: '4,200' },
      { label: 'Avg. Wait Time', value: '<3min' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1559757175-5700dde675bc?q=80&w=2670&auto=format&fit=crop` },
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
    description: 'Placeholder description — to be updated with real project content.',
    services: ['Strategy', 'UI/UX Design', 'Full-stack Development'],
    challenge: 'Placeholder challenge — to be updated with real project content.',
    solution: 'Placeholder solution — to be updated with real project content.',
    results: [
      { label: 'Metric 1', value: 'TBD' },
      { label: 'Metric 2', value: 'TBD' },
      { label: 'Metric 3', value: 'TBD' },
    ],
    gallery: [
      { type: 'image', src: `${IMG}1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop` },
      { type: 'image', src: `${IMG}1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop` },
    ],
  },
];
