import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'Deep dive into brand infrastructure. We break it down to build it up.'
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Roadmapping the future. KPI-driven milestones and tech stack definition.'
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Visual synthesis. Iterative prototyping for emotional impact.'
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Engineering excellence. Scalable code, rigorous testing, flawless launch.'
  }
];

export const Process: React.FC = () => {
  return (
    <section className="bg-brand-black py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Smooth Gradient Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 border-b border-white/10 pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">The Process</h2>
          <p className="text-neutral-400 max-w-2xl text-lg">Systematic chaos. Transparent velocity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative p-8 border border-white/5 bg-black/40 backdrop-blur-sm rounded-[2rem] hover:border-white/20 transition-all duration-300 min-h-[250px] flex flex-col justify-between overflow-hidden hover:-translate-y-1">
              <div>
                <span className="block font-display text-6xl font-bold text-white/5 mb-6 group-hover:text-white/20 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              </div>
              
              <p className="text-neutral-500 text-sm group-hover:text-neutral-300 transition-colors leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};