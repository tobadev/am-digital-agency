import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";
import { CaseStudyContent } from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "projects" });

  const title = `${project.title} — AM Digital Agency`;
  const description = t(`${slug}.description`);
  const url = locale === "en" ? `/work/${slug}` : `/de/arbeiten/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, l === "en" ? `/work/${slug}` : `/${l}/arbeiten/${slug}`])
      ),
    },
    openGraph: {
      title,
      description,
      url,
      locale: locale === "en" ? "en_US" : "de_DE",
      images: [{ url: project.thumbnail, alt: project.title }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 pt-32">
      <CaseStudyContent project={project} />
      <Footer />
    </div>
  );
}
