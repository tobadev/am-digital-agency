import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen px-4 md:px-8 pb-20 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-8xl font-bold mb-12">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-neutral-400 leading-relaxed space-y-8">
          <p className="text-lg">Last updated: January 2024</p>
          
          <h2 className="text-2xl font-bold text-white mt-8">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email. This may include your name, email address, phone number, and project details.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">2. How We Use Information</h2>
          <p>
            We use the information we collect to communicate with you, provide services, and improve our offerings. We do not sell or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8">3. Cookies</h2>
          <p>
             We use minimal cookies to ensure the basic functionality of our website. You can control cookie preferences through your browser settings.
          </p>

           <h2 className="text-2xl font-bold text-white mt-8">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at hello@amdigital.agency.
          </p>
        </div>
      </div>
    </div>
  );
};