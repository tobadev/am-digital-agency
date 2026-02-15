import React from 'react';

const sections = [
  {
    title: 'Company Information',
    content: [
      'AM Digital Agency Ltd is a company registered in England and Wales.',
      'Company Number: 14167111',
      'Registered Address: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom',
      'Contact: hello@amdigital.agency',
    ],
  },
  {
    title: 'Privacy Policy',
    content: [
      'We collect information you provide directly to us, such as when you fill out a contact form or communicate with us via email. This may include your name, email address, phone number, and project details.',
      'We use the information we collect to communicate with you and provide our services. We do not sell or share your personal information with third parties for marketing purposes.',
      'We use minimal cookies to ensure the basic functionality of our website. You can control cookie preferences through your browser settings.',
      'Under GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@amdigital.agency.',
    ],
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on this website, including text, graphics, logos, and code, is the property of AM Digital Agency Ltd and protected by copyright laws.',
    ],
  },
  {
    title: 'Limitation of Liability',
    content: [
      'AM Digital Agency Ltd shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues. All services are subject to a separate service agreement signed by both parties.',
    ],
  },
];

export const Legal: React.FC = () => {
  return (
    <section className="bg-brand-black px-6 md:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className="mb-40 animate-in fade-in slide-in-from-bottom-6 duration-700"
          style={{ animationDelay: '100ms', animationFillMode: 'both' }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-8 block">Legal</span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight">
            Legal
          </h1>
        </div>

        {/* Sections */}
        {sections.map((section, idx) => (
          <div
            key={section.title}
            className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${200 + idx * 150}ms`, animationFillMode: 'both' }}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-64 shrink-0">
                <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                  {section.title}
                </h2>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-neutral-400 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Last updated */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-neutral-700 text-sm">Last updated: February 2026</p>
        </div>

      </div>
    </section>
  );
};
