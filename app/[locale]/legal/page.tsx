import { setRequestLocale, getTranslations } from "next-intl/server";
import { Legal } from "@/components/Legal";
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

  const title = t("legal.title");
  const description = t("legal.description");
  const url = locale === "en" ? "/legal" : "/de/rechtliches";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === "en" ? "/legal" : `/${l}/rechtliches`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      locale: locale === "en" ? "en_US" : "de_DE",
    },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <Legal />
      <Footer />
    </div>
  );
}
