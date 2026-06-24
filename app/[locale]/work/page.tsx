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
    <div className="bg-brand-black">
      <div className="px-6 md:px-10 pt-40 md:pt-56 pb-32 md:pb-48">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mb-8 block">
          {t("label")}
        </span>
        <h1 className="font-display text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.88] tracking-tight mb-16 break-words">
          {t("title_line1")}<br />
          <span className="text-neutral-500">{t("title_line2")}</span>
        </h1>
        <p className="text-xl text-neutral-400 leading-relaxed">
          {t("description")}
        </p>
      </div>
      <Work />
      <Footer />
    </div>
  );
}
