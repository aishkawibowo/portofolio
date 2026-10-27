'use client';

import Link from 'next/link';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { Mail } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/5 py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-purple-primary font-display font-bold text-lg">A</span>W
            <span className="text-text-muted text-sm">Aishka Syakirah Wibowo</span>
          </div>

          <div className="flex gap-6 text-sm text-text-secondary">
            <Link href="#hero" className="hover:text-text-primary transition-colors focus-ring" onClick={() => {}}>
              Home
            </Link>
            <Link href="#projects" className="hover:text-text-primary transition-colors focus-ring" onClick={() => {}}>
              Projects
            </Link>
            <Link href="#contact" className="hover:text-text-primary transition-colors focus-ring" onClick={() => {}}>
              Contact
            </Link>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/aishkawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group h-9 w-9 rounded-lg flex items-center justify-center text-text-muted hover:text-purple-primary transition-colors duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <SocialIcon name="Github" className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/aishkawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group h-9 w-9 rounded-lg flex items-center justify-center text-text-muted hover:text-purple-primary transition-colors duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <SocialIcon name="Linkedin" className="h-5 w-5" />
            </a>
            <a
              href="mailto:aishkawibowo4@gmail.com"
              className="glass-card group h-9 w-9 rounded-lg flex items-center justify-center text-text-muted hover:text-purple-primary transition-colors duration-300 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-text-muted/70 text-center">
          © {year} Aishka Syakirah Wibowo. Built with Next.js, TypeScript, Tailwind CSS v4, Framer Motion.
        </p>
      </div>
    </footer>
  );
}
