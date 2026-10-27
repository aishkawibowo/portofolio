import { Project } from '@/types';
import { Check } from 'lucide-react';

interface ProjectFactsProps {
  project: Project;
}

export function ProjectFacts({ project }: ProjectFactsProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-4">
            <div className="glass-card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                Peran &amp; Tanggung Jawab
              </p>
              <p className="text-base sm:text-lg font-bold text-text-primary">{project.roleLabel}</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                Periode Pengerjaan
              </p>
              <p className="text-base sm:text-lg font-bold text-text-primary">{project.period}</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                Status Proyek
              </p>
              <p className="text-base sm:text-lg font-bold text-text-primary capitalize">{project.status}</p>
            </div>
            {project.organization && (
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-1">
                  Organisasi / Perusahaan
                </p>
                <p className="text-base sm:text-lg font-bold text-text-primary">{project.organization}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="glass-card p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-3">
                Tech Stack &amp; Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border-subtle bg-bg-surface px-2.5 py-1 text-xs text-text-secondary transition-colors hover:border-purple-primary/40 hover:text-text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="glass-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-3">
                  Metrik &amp; Pencapaian Utama
                </p>
                <div className="space-y-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="flex justify-between items-baseline border-b border-border-subtle/40 pb-2 last:border-b-0 last:pb-0">
                      <span className="text-xs text-text-secondary">{m.label}</span>
                      <span className="font-mono font-bold text-sm text-text-primary">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-8">
            <div className="glass-card p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-4">
                Fitur Kunci &amp; Kontribusi Teknis
              </p>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                    <Check size={16} className="mt-0.5 shrink-0 text-purple-primary" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {project.description && project.description.length > 0 && (
          <div className="mt-8">
            <div className="glass-card p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-text-muted mb-4">
                Tentang Proyek Ini
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-text-secondary">
                {project.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
