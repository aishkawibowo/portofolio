import { Reveal } from '@/components/ui/Reveal';
import { Activity, Users, Layers, ArrowRight } from 'lucide-react';
import { profile } from '@/data/profile';

const highlights = [
  {
    icon: Activity,
    value: profile.stats[2].value,
    label: 'Peran & Pengalaman Profesional',
  },
  {
    icon: Layers,
    value: profile.stats[0].value,
    label: 'Proyek showcase dengan halaman detail',
  },
  {
    icon: Users,
    value: profile.stats[1].value,
    label: 'Proyek pendukung dalam kartu ringkas',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <Reveal>
              <div className="mb-10">
                <span className="section-label mb-3 inline-flex items-center gap-2">
                  <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
                  Tentang Saya
                </span>
                <h2 className="section-title text-3xl md:text-4xl">
                  Frontend Developer <span className="text-text-muted">&amp;</span> System Administrator
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5">
                {profile.bio.map((p, i) => (
                  <p key={i} className="leading-relaxed text-text-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-border-subtle bg-bg-surface/60 px-5 py-3 text-sm font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:border-purple-primary hover:text-purple-primary focus-ring"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mari Berdiskusi
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pt-16">
            <div className="grid gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="glass-card flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-purple text-white">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black leading-none text-text-primary">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-text-muted">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

