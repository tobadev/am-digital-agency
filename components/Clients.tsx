import React from 'react';
import { getTranslations } from 'next-intl/server';

export const Clients: React.FC = async () => {
  const t = await getTranslations('Clients');
  const clientsCount = 5;

  return (
    <section className="bg-brand-black px-6 md:px-10 py-24 md:py-32">
      <div
        className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-6 animate-in fade-in duration-700"
        style={{ animationDelay: '200ms', animationFillMode: 'both' }}
      >
        {Array.from({ length: clientsCount }).map((_, idx) => (
          <React.Fragment key={idx}>
            <span className="text-sm md:text-base text-neutral-600 uppercase tracking-[0.2em] font-display">
              {t(`clients.${idx}`)}
            </span>
            {idx < clientsCount - 1 && (
              <span className="hidden md:block w-1 h-1 rounded-full bg-neutral-800" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
