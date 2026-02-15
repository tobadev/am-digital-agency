"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const servicesData = [
  {
    num: '01',
    title: 'Strategy',
    subtitle: 'Define a clear position in competitive markets.',
    description: 'Strategy comes before design and development. The focus is on understanding the market landscape, competitive pressure, and the role the brand should own. Research-driven and commercially grounded.',
    items: [
      'Market and competitor analysis',
      'Brand positioning framework',
      'Strategic messaging structure',
      'Execution and rollout roadmap'
    ],
    timeline: '2–3 weeks',
    idealFor: 'Startups pre-launch, rebrands, companies preparing to scale'
  },
  {
    num: '02',
    title: 'Design',
    subtitle: 'Systems built for clarity, usability, and conversion.',
    description: 'Design is treated as a functional system, not decoration. Cohesive design systems that scale across products and platforms. Every element is intentional and supports consistency, usability, and long-term growth.',
    items: [
      'UX structure and information architecture',
      'High-fidelity UI design',
      'Design system and reusable components',
      'Developer-ready design handoff'
    ],
    timeline: '3–5 weeks',
    idealFor: 'SaaS companies, B2B platforms, ambitious digital products'
  },
  {
    num: '03',
    title: 'Development',
    subtitle: 'Reliable, scalable builds engineered for growth.',
    description: 'Strategy and design translated into production-ready digital products. Clean architecture, performance, and maintainability. No unnecessary complexity.',
    items: [
      'Technical planning and system architecture',
      'Front-end and back-end development',
      'Performance and security optimization',
      'Deployment and post-launch support'
    ],
    timeline: '6–8 weeks',
    idealFor: 'Funded startups, growing businesses, platform modernization'
  }
];

const engagements = [
  {
    num: '01',
    title: 'Project-Based',
    price: '£6K – £80K',
    description: 'Fixed scope, fixed timeline, fixed budget. Perfect for specific initiatives with clear outcomes.',
    bestFor: 'Launches, redesigns, new features',
  },
  {
    num: '02',
    title: 'Partnership Retainer',
    price: 'From £5K/month',
    description: 'Ongoing collaboration for continuous improvement and growth. Dedicated team allocation.',
    bestFor: 'Growing companies, continuous optimization',
  },
];

const faqs = [
  {
    num: '01',
    q: "How does this compare to hiring in-house?",
    a: "Senior-level expertise without long-term overhead. Avoids hiring risk, reduces ramp-up time, and delivers focused outcomes faster than building an internal team."
  },
  {
    num: '02',
    q: "What if the direction is not right?",
    a: "Work is structured in clear phases with defined checkpoints. Alignment is validated early, reducing the risk of moving forward on the wrong assumptions."
  },
  {
    num: '03',
    q: "Are international clients supported?",
    a: "Yes. Projects are delivered for clients across Europe, the UK, and North America, with experience working across time zones and business cultures."
  },
  {
    num: '04',
    q: "Can this integrate with an existing team?",
    a: "Yes. Engagements often complement internal designers, developers, or product teams, filling gaps and accelerating delivery."
  },
  {
    num: '05',
    q: "What happens after the project?",
    a: "Ongoing support, maintenance, and retainer-based partnerships are available for teams that require continuous iteration or long-term collaboration."
  }
];

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative z-10 bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 mt-16 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Services</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            We build digital<br />products that drive<br />real growth.
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            We partner with ambitious companies to create digital experiences that actually move the needle. No fluff. No wasted budget.
          </p>
        </div>

        {/* Services — architectural rows */}
        {servicesData.map((service, idx) => (
          <div
            key={service.num}
            className="group border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${250 + idx * 150}ms`, animationFillMode: 'both' }}
          >
            <div className="flex flex-col gap-12">

              {/* Service header */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-2 transition-colors duration-300 group-hover:text-neutral-500">
                  <span className="text-neutral-700">{service.num}</span>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 transition-transform duration-300 group-hover:translate-x-3">{service.title}</h2>
                  <p className="text-xl text-neutral-400 mb-8">{service.subtitle}</p>
                  <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">{service.description}</p>
                </div>
              </div>

              {/* Deliverables + Meta */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="w-40 shrink-0" />
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-12">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-neutral-300 py-2">
                        <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-12 text-sm">
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 block mb-2">Timeline</span>
                      <span className="text-white font-medium">{service.timeline}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-600 block mb-2">Ideal for</span>
                      <span className="text-neutral-400">{service.idealFor}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
        <div className="border-t border-white/10" />

        {/* Engagement Models — rows */}
        <div className="mt-40 mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '700ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Engagement</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Two ways to<br />work with us.
            </h2>
          </div>

          {engagements.map((eng, idx) => (
            <div
              key={eng.num}
              className="group border-t border-white/10 py-10 md:py-14 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${800 + idx * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3 md:pt-1 transition-colors duration-300 group-hover:text-neutral-500">
                  <span className="text-neutral-700">{eng.num}</span>
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 transition-transform duration-300 group-hover:translate-x-3">{eng.title}</h3>
                    <p className="text-neutral-500 text-lg leading-relaxed max-w-lg mb-3">{eng.description}</p>
                    <span className="text-sm text-neutral-600">Best for: {eng.bestFor}</span>
                  </div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-white shrink-0 md:pt-1">
                    {eng.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* FAQ — clean accordion rows */}
        <div>
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1050ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">FAQ</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Common<br />questions.
            </h2>
          </div>

          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFaq(index)}
              className="border-t border-white/10 py-8 md:py-10 cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-16">
                <div className="text-xs uppercase tracking-[0.2em] text-neutral-600 w-40 shrink-0 flex items-center gap-3">
                  <span className="text-neutral-700">{faq.num}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white pr-8 group-hover:text-neutral-300 transition-colors">{faq.q}</h3>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? 'rotate-45 bg-white text-black border-white' : 'text-neutral-600'}`}>
                      <Plus size={14} />
                    </div>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <p className="text-neutral-500 leading-relaxed text-lg max-w-2xl">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Sectors */}
        <div className="mt-40 mb-40">
          <div
            className="mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1200ms', animationFillMode: 'both' }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">Industries</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight">
              Sectors we<br />work across.
            </h2>
          </div>

          <div
            className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: '1350ms', animationFillMode: 'both' }}
          >
            <div className="flex flex-wrap gap-3">
              {['SaaS & Platforms', 'E-commerce', 'FinTech', 'Healthcare', 'B2B', 'Real Estate', 'Startups', 'Enterprise'].map((sector) => (
                <span
                  key={sector}
                  className="px-6 py-3 rounded-full border border-white/10 text-sm text-neutral-500 uppercase tracking-widest hover:border-white/30 hover:text-white transition-all duration-300 cursor-default"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10" />
        </div>

      </div>
    </section>
  );
};
