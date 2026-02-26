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

  return {
    title: t("legal.title"),
    description: t("legal.description"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? "/legal" : `/${l}/rechtliches`,
        ])
      ),
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
