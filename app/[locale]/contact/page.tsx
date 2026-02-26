import { setRequestLocale, getTranslations } from "next-intl/server";
import { Contact } from "@/components/Contact";
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
    title: t("contact.title"),
    description: t("contact.description"),
    alternates: {
      canonical: locale === "en" ? "/contact" : "/de/kontakt",
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === "en" ? "/contact" : `/${l}/kontakt`])
      ),
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <Contact />
      <Footer />
    </div>
  );
}
