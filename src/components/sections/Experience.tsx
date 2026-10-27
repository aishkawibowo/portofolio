'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { experience } from '@/data/experience';
import { Briefcase, Check } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
              Pengalaman
            </span>
            <h2 className="section-title text-3xl md:text-4xl">Timeline Karir</h2>
            <p className="mt-3 max-w-lg text-text-secondary leading-relaxed">
              Perjalanan profesional, kontribusi teknis, dan kepemimpinan proyek.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute left-[15px] top-5 bottom-5 w-[2px] origin-top bg-gradient-to-b from-purple-primary via-purple-primary/40 to-pink-accent/20 rounded-full"
            aria-hidden="true"
          />

          {experience.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 0.1}>
              <div className="group relative pl-12">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.1 }}
                  className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-purple-primary/50 bg-bg-surface text-purple-primary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-purple-primary group-hover:bg-purple-primary group-hover:text-on-accent"
                  aria-hidden="true"
                >
                  <Briefcase size={14} />
                </motion.div>

                <div className="glass-card p-6 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold tracking-wide text-text-muted">
                      {exp.period}
                    </span>
                    <span
                      className={cn(
                        'rounded-full border px-2.5 py-0.5 text-[11px] font-bold transition-colors',
                        exp.current
                          ? 'border-[#A8D5BA]/60 bg-[#A8D5BA]/15 text-[#A8D5BA] dark:text-[#A8D5BA]'
                          : 'border-border-subtle bg-bg-elevated text-text-muted',
                      )}
                    >
                      {exp.current ? 'Saat Ini' : exp.employmentType || 'Selesai'}
                    </span>
                    {exp.location && (
                      <span className="text-xs text-text-muted">
                        • {exp.location}
                      </span>
                    )}
                  </div>

                  <div className="mb-3">
                    <h3 className="font-display text-xl font-bold text-text-primary group-hover:text-purple-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-purple-primary mt-0.5">{exp.company}</p>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                    {exp.description}
                  </p>

                  <div className="mb-5 grid gap-2.5">
                    {exp.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-purple-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-text-secondary">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border-subtle/60">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline" className="px-2.5 py-1 text-[11px] bg-bg-elevated/70 dark:bg-[#30223D]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
