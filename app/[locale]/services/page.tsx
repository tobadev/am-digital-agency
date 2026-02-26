import { setRequestLocale, getTranslations } from "next-intl/server";
import { Services } from "@/components/Services";
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
    title: t("services.title"),
    description: t("services.description"),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [
          l,
          l === "en" ? "/services" : `/${l}/dienstleistungen`,
        ])
      ),
    },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <Services />
      <Footer />
    </div>
  );
}
