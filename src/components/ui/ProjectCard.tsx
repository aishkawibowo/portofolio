import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.images.length > 0;
  const firstImage = project.images[0];

  return (
    <article className="relative h-full transition-all duration-300 ease-out will-change-transform rounded-2xl group">
      <a
        href={project.hasDetail ? `/projects/${project.slug}` : '#'}
        className="glass-card flex h-full flex-col overflow-hidden p-3.5 sm:p-4 rounded-2xl border border-border-subtle bg-bg-surface hover:-translate-y-1.5 transition-all duration-300 hover:border-purple-primary shadow-sm hover:shadow-xl hover:shadow-purple-primary/15"
        onClick={(e) => {
          if (!project.hasDetail) e.preventDefault();
        }}
      >
        {hasImage && firstImage ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black/20">
            <Image
              src={firstImage.src}
              alt={firstImage.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
              {project.period}
            </span>
          </div>
        ) : (
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-elevated flex items-center justify-center">
            <div className="text-text-muted text-xs">Preview visual</div>
          </div>
        )}

        <div className="mt-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-text-muted font-medium">
            <span className="font-mono text-[11px] tabular-nums">{project.period}</span>
            <span className="inline-block h-1 w-1 rounded-full bg-text-muted/40" />
            <span className="text-[11px] text-pink-accent">{project.roleLabel}</span>
          </div>
          {project.hasDetail && (
            <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-purple-primary opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5">
              Detail{' '}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
            </span>
          )}
        </div>

        <h3 className="mt-2 font-display text-base sm:text-lg font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-purple-primary line-clamp-1">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-lg border border-border-subtle bg-bg-elevated/70 dark:bg-[#30223D] px-2.5 py-1 text-[11px] font-medium text-text-muted transition-colors duration-300 group-hover:border-purple-primary/40 group-hover:text-text-primary"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[11px] text-text-muted font-medium">+{project.tech.length - 4}</span>
          )}
        </div>
      </a>
    </article>
  );
}
