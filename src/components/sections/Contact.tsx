'use client';

import { useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail, Send, Check, ExternalLink, Copy, RotateCcw } from 'lucide-react';
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
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const subject = encodeURIComponent(`Pesan Portofolio dari ${formData.name || 'Pengunjung'}`);
  const bodyText = `Halo Aishka,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portofolio Aishka Wibowo`;
  const body = encodeURIComponent(bodyText);

  const mailtoUrl = `mailto:aishkawibowo4@gmail.com?subject=${subject}&body=${body}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aishkawibowo4@gmail.com&su=${subject}&body=${body}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    // Buka aplikasi email default
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setIsSending(false);
      setSent(true);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bodyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSent(false);
    setCopied(false);
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
              {!sent ? (
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
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className={cn(
                      'w-full px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 focus-ring cursor-pointer flex items-center justify-center gap-2',
                      isSending
                        ? 'bg-purple-primary/50 text-on-accent cursor-not-allowed'
                        : 'bg-purple-primary text-on-accent shadow-lg shadow-purple-primary/25 hover:scale-[1.02]'
                    )}
                  >
                    {isSending ? 'Menyiapkan Email...' : 'Kirim Pesan'}
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-purple-primary/10 border border-purple-primary/20 text-text-primary text-sm space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-purple-primary">
                      <Check size={18} />
                      <span>Pesan Siap Dikirim ke aishkawibowo4@gmail.com</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      Pilih metode pengiriman yang paling nyaman untuk Anda di bawah ini:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-primary text-on-accent text-xs font-bold shadow-md shadow-purple-primary/20 hover:scale-[1.02] transition-all"
                    >
                      <span>Buka di Gmail Web</span>
                      <ExternalLink size={14} />
                    </a>

                    <a
                      href={mailtoUrl}
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border-subtle bg-bg-elevated text-text-primary text-xs font-semibold hover:border-purple-primary transition-all"
                    >
                      <Mail size={14} />
                      <span>Aplikasi Email Default</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border-subtle">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-purple-primary transition-colors cursor-pointer"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                      <span>{copied ? 'Teks Tersalin!' : 'Salin Teks Pesan'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-purple-primary transition-colors cursor-pointer"
                    >
                      <RotateCcw size={13} />
                      <span>Tulis Pesan Lain</span>
                    </button>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
