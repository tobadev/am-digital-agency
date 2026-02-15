import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "AM Digital didn't just build a website; they transformed how we do business online. Their strategic insight is unmatched.",
    author: "Sarah Jenkins",
    role: "CMO, NovaBank"
  },
  {
    text: "The best design team I've ever worked with. They understood our vague vision and turned it into a masterpiece.",
    author: "Marcus Chen",
    role: "Founder, TechFlow"
  },
  {
    text: "Technical execution was flawless. They navigated our complex legacy backend and delivered a modern frontend.",
    author: "Elena Rodriguez",
    role: "CTO, Vitality"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-brand-black py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">Client Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-brand-gray p-8 rounded-[2rem] relative border border-white/5">
              <Quote className="text-white/20 mb-6 w-10 h-10" />
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10" />
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};