'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:aishkawibowo4@gmail.com',
    icon: <Mail size={18} />,
    external: false,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/aishkawibowo',
    icon: <SocialIcon name="Github" className="h-4.5 w-4.5" />,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aishkawibowo',
    icon: <SocialIcon name="Linkedin" className="h-4.5 w-4.5" />,
    external: true,
  },
];

export function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 md:mb-14">
            <span className="section-label mb-3 inline-flex items-center gap-2"><span className="inline-block h-px w-6 bg-gradient-purple" aria-hidden="true" />Kontak</span>
            <h2 className="section-title text-3xl md:text-4xl">Terbuka untuk Peluang &amp; Diskusi</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary md:text-base">Terbuka untuk kolaborasi rekayasa web, arsitektur IoT, manajemen server Linux/Docker, maupun konsultasi proyek teknologi.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-3">
            <Reveal>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="glass-card group flex items-center gap-3 p-4 rounded-xl border border-border-subtle bg-bg-surface text-text-secondary hover:border-purple-primary hover:text-text-primary transition-colors duration-300"
                >
                  <div className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 text-text-muted transition-colors duration-300 group-hover:text-purple-primary">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="block text-[11px] uppercase tracking-wider text-text-muted">
                      {link.label}
                    </p>
                    <p className="block truncate text-sm transition-colors group-hover:text-purple-primary">
                      {link.href.replace('https://', '').replace('mailto:', '')}
                    </p>
                  </div>
                </a>
              ))}
            </Reveal>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle bg-bg-surface">
            <Reveal>
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                    placeholder="Ceritakan tentang proyek atau ide yang ingin Anda diskusikan..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending || sent}
                  className={cn(
                    'w-full px-6 py-3 rounded-xl font-semibold text-sm text-text-primary transition-colors duration-300 focus-ring',
                    isSending || sent
                      ? 'bg-white/5 text-text-muted cursor-not-allowed'
                      : 'bg-purple-primary text-on-accent shadow-purple-primary/25 hover:scale-[1.02]'
                  )}
                >
                  {sent ? 'Terkirim!' : isSending ? 'Mengirim...' : 'Kirim Pesan'}
                  <Send size={18} className="ml-2" />
                </button>
              </form>

              {sent && (
                <div className="mt-4 p-4 rounded-xl bg-purple-primary/10 border border-purple-primary/20 text-purple-light text-sm">
                  Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
