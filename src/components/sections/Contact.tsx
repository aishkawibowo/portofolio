'use client';

import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { SITE } from '@/lib/site';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    label: 'WhatsApp Business',
    display: 'Chat langsung via WhatsApp',
    href: SITE.whatsapp,
    icon: <MessageCircle size={18} />,
    external: true,
  },
  {
    label: 'Email',
    display: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: <Mail size={18} />,
    external: false,
  },
  {
    label: 'GitHub',
    display: 'github.com/aishkawibowo',
    href: 'https://github.com/aishkawibowo',
    icon: <SocialIcon name="Github" className="h-4.5 w-4.5" />,
    external: true,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/aishkawibowo',
    href: 'https://linkedin.com/in/aishkawibowo',
    icon: <SocialIcon name="Linkedin" className="h-4.5 w-4.5" />,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />
              Kontak
            </span>
            <h2 className="section-title text-3xl md:text-4xl">Terbuka untuk Peluang &amp; Diskusi</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">
              Terbuka untuk kolaborasi rekayasa web, arsitektur IoT, manajemen server Linux/Docker, maupun konsultasi proyek teknologi.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-3">
            <Reveal>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="glass-card group flex items-center justify-between gap-3 p-4 rounded-xl border border-border-subtle bg-bg-surface text-text-secondary hover:border-purple-primary hover:text-text-primary transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="shrink-0 rounded-xl border border-border-subtle bg-bg-elevated p-3 text-purple-primary transition-colors duration-300 group-hover:bg-purple-primary group-hover:text-on-accent">
                        {link.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="block text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                          {link.label}
                        </p>
                        <p className="block truncate text-sm font-medium text-text-primary transition-colors group-hover:text-purple-primary">
                          {link.display}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-primary"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-surface flex flex-col justify-between">
            <Reveal>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-[#A8D5BA]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                  <span>Respon Cepat via WhatsApp Business</span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Punya ide proyek, kebutuhan pengembangan web, sistem monitoring IoT, atau manajemen server Linux &amp; Docker? Hubungi saya langsung lewat WhatsApp Business untuk diskusi lebih cepat.
                  </p>
                </div>

                <div className="pt-2 space-y-3">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full px-6 py-3.5 rounded-xl font-bold text-sm bg-purple-primary text-on-accent shadow-lg shadow-purple-primary/25 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-primary/30 transition-all duration-300 focus-ring flex items-center justify-center gap-2.5"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    <span>Kirim Pesan via WhatsApp</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={`mailto:${SITE.email}`}
                    className="w-full px-6 py-3 rounded-xl font-semibold text-xs border border-border-subtle bg-bg-elevated text-text-secondary hover:border-purple-primary hover:text-purple-primary transition-all duration-300 focus-ring flex items-center justify-center gap-2"
                  >
                    <Mail size={15} aria-hidden="true" />
                    <span>Atau kirim email ke {SITE.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
