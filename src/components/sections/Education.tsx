'use client';

import { Reveal } from '@/components/ui/Reveal';
import { education, certifications } from '@/data/education';
import { GraduationCap, Award, Wrench } from 'lucide-react';

const tools = [
  'Linux Server (Ubuntu)',
  'Docker Compose',
  'Caddy Reverse Proxy',
  'Git & GitHub',
  'Postman',
  'VS Code',
  'Jupyter Notebook',
];

export function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
              Pendidikan
            </span>
            <h2 className="section-title text-3xl md:text-4xl">Pendidikan &amp; Sertifikasi</h2>
            <p className="mt-3 max-w-lg text-text-secondary">
              Riwayat akademik, sertifikasi profesional, dan alat kerja utama.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-purple text-white">
                  <GraduationCap size={19} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">
                  Riwayat Akademik
                </h3>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {education.map((edu, i) => (
                <Reveal key={edu.id} delay={i * 0.08}>
                  <div className="glass-card p-6">
                    <h4 className="font-display text-base font-bold text-text-primary">
                      {edu.institution}
                    </h4>
                    <p className="mt-1 text-sm text-purple-primary font-medium">
                      {edu.degree} — {edu.major}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{edu.period}</p>
                    {edu.description && (
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                        {edu.description}
                      </p>
                    )}
                    {edu.highlights && edu.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-sm text-text-secondary">
                        {edu.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span
                              className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-purple-primary"
                              aria-hidden="true"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-purple text-white">
                  <Award size={19} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary">Sertifikasi</h3>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 0.08}>
                  <div className="glass-card p-6">
                    <h4 className="font-display text-base font-bold text-text-primary">
                      {cert.name}
                    </h4>
                    <p className="mt-1 text-sm text-purple-primary font-medium">{cert.issuer}</p>
                    <p className="mt-1 text-xs text-text-muted">Periode: {cert.period}</p>
                    {cert.credentialId && (
                      <p className="mt-3 inline-block rounded-md border border-border-subtle bg-bg-elevated px-2.5 py-1 text-xs text-text-muted">
                        Penerbit: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <div className="glass-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-primary/10 text-purple-primary">
                    <Wrench size={17} aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-base font-bold text-text-primary">
                    Tools &amp; Environment
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-lg border border-border-subtle bg-bg-elevated/60 px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
