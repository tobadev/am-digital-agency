import { setRequestLocale, getTranslations } from "next-intl/server";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const title = t("work.title");
  const description = t("work.description");
  const url = locale === "en" ? "/work" : "/de/arbeiten";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, l === "en" ? "/work" : `/${l}/arbeiten`])
        ),
        "x-default": "/work",
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'AM Digital Agency',
      title,
      description,
      url,
      locale: locale === "en" ? "en_US" : "de_DE",
      images: [{ url: '/og.webp', width: 2400, height: 1260, alt: 'AM Digital Agency' }],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WorkPage");

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <div className="px-6 md:px-10 max-w-5xl mx-auto">
        <div className="mb-40 mt-16 md:mt-20">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-6 block">
            {t("label")}
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-12">
            {t("title_line1")}
            <br />
            {t("title_line2")}
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl">
            {t("description")}
          </p>
        </div>
      </div>
      <Work />
      <Footer />
    </div>
  );
}
