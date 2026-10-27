import { Project } from '@/types';
import { ExternalLink, Calendar, UserCheck, Building2 } from 'lucide-react';

interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative pt-28 pb-4 md:pt-36 md:pb-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-purple-primary/10 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-surface/80 px-2.5 py-1 text-xs font-medium text-text-secondary">
              <UserCheck size={13} className="text-purple-primary" />
              {project.roleLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-surface/80 px-2.5 py-1 text-xs font-medium text-text-secondary">
              <Calendar size={13} className="text-purple-primary" />
              {project.period}
            </span>
            {project.organization && (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-bg-surface/80 px-2.5 py-1 text-xs font-medium text-text-secondary">
                <Building2 size={13} className="text-purple-primary" />
                {project.organization}
              </span>
            )}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-border-subtle bg-bg-surface/80 px-4 py-2 text-xs font-semibold text-text-primary transition-all duration-300 hover:border-purple-primary hover:text-purple-primary focus-ring"
                  aria-label={link.label}
                >
                  {link.label}
                  <ExternalLink size={13} />
                </a>
              ))}
            </div>
          )}
        </div>

        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-text-primary mb-3 md:mb-5 leading-[1.08] tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-text-secondary max-w-3xl mb-6 leading-relaxed">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border-subtle bg-bg-surface/80 px-2.5 py-1 text-xs font-medium text-text-muted transition-colors duration-300 hover:border-purple-primary/40 hover:text-text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
