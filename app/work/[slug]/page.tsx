import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { CaseStudyContent } from '@/components/CaseStudy';
import { Footer } from '@/components/Footer';

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
