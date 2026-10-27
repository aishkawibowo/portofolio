import { notFound } from 'next/navigation';
import { getProject, getShowcaseProjects } from '@/data/projects';
import { ProjectHero } from '@/components/project/ProjectHero';
import { ProjectGallery } from '@/components/project/ProjectGallery';
import { ProjectFacts } from '@/components/project/ProjectFacts';
import { BackButton } from '@/components/ui/BackButton';

export interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1">
      <ProjectHero project={project} />
      <ProjectGallery images={project.images} />
      <ProjectFacts project={project} />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <BackButton />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = getShowcaseProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
