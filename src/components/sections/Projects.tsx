'use client';

import { Reveal } from '@/components/ui/Reveal';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { getShowcaseProjects, getSupportProjects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const showcase = getShowcaseProjects();
  const support = getSupportProjects();

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
              Proyek Pilihan
            </span>
            <h2 className="section-title text-3xl md:text-4xl">Karya &amp; Proyek Unggulan</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary md:text-base">
              Platform monitoring IoT, sistem manajemen internal, dan aplikasi web yang dibangun dengan standar produksi untuk kebutuhan nyata.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10 md:mt-14">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {showcase.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="mb-6">
            <h3 className="font-display text-lg font-bold text-text-primary">
              Proyek Pendukung Lainnya
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((project) => (
              <div key={project.slug} className="glass-card group flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated/60 text-text-muted transition-colors duration-300 group-hover:text-purple-primary">
                  <ExternalLink size={18} />
                </div>
                <div className="min-w-0">
                  <p className="block text-[11px] uppercase tracking-wider text-text-muted">
                    {project.roleLabel}
                  </p>
                  <p className="block truncate text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
