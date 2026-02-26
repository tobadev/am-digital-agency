import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "de") return {};
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("impressum.title"),
    description: t("impressum.description"),
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "de") {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("Impressum");

  const sections: { title: string; content: string[] }[] = [
    { title: t("sections.0.title"), content: [t("sections.0.content.0"), t("sections.0.content.1"), t("sections.0.content.2"), t("sections.0.content.3")] },
    { title: t("sections.1.title"), content: [t("sections.1.content.0")] },
    { title: t("sections.2.title"), content: [t("sections.2.content.0")] },
    { title: t("sections.3.title"), content: [t("sections.3.content.0"), t("sections.3.content.1"), t("sections.3.content.2")] },
    { title: t("sections.4.title"), content: [t("sections.4.content.0"), t("sections.4.content.1"), t("sections.4.content.2"), t("sections.4.content.3")] },
    { title: t("sections.5.title"), content: [t("sections.5.content.0"), t("sections.5.content.1")] },
  ];

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <section className="bg-brand-black px-6 md:px-10 pb-32">
        <div className="max-w-5xl mx-auto">
          <div
            className="mb-40 animate-in fade-in slide-in-from-bottom-6 duration-700"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight">
              {t("title")}
            </h1>
          </div>

          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="border-t border-white/10 py-16 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{
                animationDelay: `${200 + idx * 150}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-64 shrink-0">
                  <h2 className="text-sm text-white font-bold uppercase tracking-widest">
                    {section.title}
                  </h2>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-neutral-400 text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
