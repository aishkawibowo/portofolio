'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail, Send, Check, Loader2, AlertCircle } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/aishkawibowo4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Pesan Portofolio Baru dari ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setErrorMessage(data?.message || 'Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Koneksi terputus. Silakan periksa jaringan Anda atau hubungi langsung via email.');
    }
  };

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
              {status === 'success' ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#A8D5BA]/20 text-[#A8D5BA] border border-[#A8D5BA]/40 shadow-lg shadow-[#A8D5BA]/10">
                    <Check size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi saya. Pesan Anda telah otomatis terkirim langsung ke email saya (<span className="text-purple-primary font-medium">aishkawibowo4@gmail.com</span>) dan akan segera saya tanggapi.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border-subtle bg-bg-elevated text-xs font-semibold text-text-secondary hover:border-purple-primary hover:text-text-primary transition-all cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Nama
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                      placeholder="Nama Anda"
                      disabled={status === 'sending'}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                      placeholder="you@example.com"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-primary placeholder-text-muted focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-colors"
                      placeholder="Ceritakan tentang proyek atau ide yang ingin Anda diskusikan..."
                      disabled={status === 'sending'}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={cn(
                      'w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring cursor-pointer flex items-center justify-center gap-2',
                      status === 'sending'
                        ? 'bg-purple-primary/60 text-on-accent cursor-wait'
                        : 'bg-purple-primary text-on-accent shadow-lg shadow-purple-primary/25 hover:scale-[1.02]'
                    )}
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
