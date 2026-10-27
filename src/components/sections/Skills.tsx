import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/skills';
import { CodeXml, Server, Brain, Monitor, Terminal, Database, ArrowRight } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  'Frontend Development': CodeXml,
  'System Admin & DevOps': Terminal,
  'Backend & IoT Engineering': Server,
  'Databases & Storage': Database,
  'AI & Data Science': Brain,
  'Data Visualization': Monitor,
};

function SkillCard({ cat }: { cat: { name: string; skills: string[] } }) {
  const IconComponent = categoryIcons[cat.name] ?? CodeXml;
  return (
    <div className="glass-card group p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-primary/10 text-purple-primary transition-colors duration-300 group-hover:bg-gradient-purple group-hover:text-white">
          <IconComponent size={19} aria-hidden="true" />
        </div>
        <h3 className="font-display text-base font-bold text-text-primary">{cat.name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="transition-colors duration-300 hover:border-purple-primary/50 hover:bg-purple-primary/10 hover:text-purple-primary"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
              Keahlian
            </span>
            <h2 className="section-title text-3xl md:text-4xl">Teknologi &amp; Alat</h2>
            <p className="mt-3 max-w-lg text-text-secondary">
              Dikelompokkan berdasarkan spesialisasi utama yang saya gunakan dalam pengembangan aplikasi dan manajemen infrastruktur.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.06}>
              <SkillCard cat={cat} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="glass-card relative overflow-hidden p-8 text-center sm:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-purple-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h3 className="section-title text-2xl md:text-3xl">
                Siap membangun sesuatu bersama?
              </h3>
              <p className="mx-auto mt-3 mb-7 max-w-md text-text-secondary">
                Mari diskusikan ide proyek Anda. Saya terbuka untuk kolaborasi engineering, pekerjaan freelance, dan peluang profesional.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-purple px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-primary/25 transition-all duration-300 hover:scale-[1.03] focus-ring"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mulai Obrolan
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
