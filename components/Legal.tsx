import React from 'react';

const sections = [
  {
    title: 'Company Information',
    content: [
      'AM Digital Agency Ltd is a company registered in England and Wales.',
      'Company Number: 14167111',
      'VAT: GB422190922',
      'Registered Address: 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom',
      'Contact: hello@amdigital.agency',
    ],
  },
  {
    title: 'Privacy Policy',
    content: [
      'AM Digital Agency Ltd. ("we", "us", or "our") is a digital agency offering web design, web development, branding, and consulting services. We are committed to protecting your privacy and ensuring a safe online experience.',
      'The data controller for your information is AM Digital Agency Ltd., located at 27 Old Gloucester Street, London, WC1N 3AX, United Kingdom.',
    ],
  },
  {
    title: 'Data We Collect',
    content: [
      'Information You Provide: Name, email address, and phone number, which you voluntarily submit to us via contact forms, email, phone, or social media.',
      'Information Collected Automatically: Usage data including your IP address, browser type, browser version, pages you visit, time and date of your visit, time spent on pages, and other diagnostic data. Device data such as mobile device unique ID, IP address, operating system, and browser type.',
    ],
  },
  {
    title: 'Use of Cookies',
    content: [
      'We use cookies and similar tracking technologies to monitor activity on our website and store certain information. You can set your browser to refuse cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our service may not function properly.',
      'Necessary Cookies: Essential for providing services and enabling certain features on our website.',
      'Performance Cookies: Used for statistical analysis to improve website performance.',
    ],
  },
  {
    title: 'How We Use Your Data',
    content: [
      'To provide and maintain our service. To contact you with updates, marketing, and promotional materials. To manage your requests and inquiries. For business development and analytical purposes.',
      'We process your data based on legitimate interest, consent, or contractual necessity in accordance with GDPR Article 6.',
    ],
  },
  {
    title: 'Sharing Your Data',
    content: [
      'We may share your personal data with service providers to facilitate our services, for business transfers in case of a merger or acquisition, with affiliates under common control requiring them to honor this policy, and with business partners to offer you certain products or services.',
    ],
  },
  {
    title: 'Data Retention & Your Rights',
    content: [
      'We will retain your personal data only as long as necessary for the purposes set out in this policy.',
      'You have the right to access, correct, or delete your personal data. Your information may be transferred to and maintained on computers located outside your jurisdiction where data protection laws may differ.',
      'To exercise your rights or request deletion of your data, contact us at hello@amdigital.agency.',
    ],
  },
  {
    title: 'Security',
    content: [
      'We use commercially acceptable means to protect your personal data, but no method of transmission or storage is 100% secure. We strive to protect your data but cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.',
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
