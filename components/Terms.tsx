import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen px-4 md:px-8 pb-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-8xl font-bold mb-12">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-400 leading-relaxed space-y-8">
          <p className="text-lg">Last updated: January 2024</p>
          
          <h2 className="text-2xl font-bold text-white mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. Services</h2>
          <p>
             AM Digital Agency provides design, development, and strategy services. All services are subject to a separate service agreement signed by both parties.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">3. Intellectual Property</h2>
          <p>
             All content on this website, including text, graphics, logos, and code, is the property of AM Digital Agency and protected by copyright laws.
          </p>

           <h2 className="text-2xl font-bold text-white mt-8">4. Limitation of Liability</h2>
          <p>
             AM Digital Agency shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
          </p>
        </div>
      </div>
    </div>
  );
};