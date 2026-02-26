import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { WorkHome } from "@/components/WorkHome";
import { Clients } from "@/components/Clients";
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

  return {
    title: t("home.title"),
    description: t("home.description"),
    alternates: {
      canonical: locale === "en" ? "/" : `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === "en" ? "/" : `/${l}`])
      ),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <BrandStatement />
      <WorkHome />
      <Clients />
      <Footer />
    </div>
  );
}
