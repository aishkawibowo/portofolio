'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, SITE } from '@/lib/site';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SocialIcon } from '@/components/ui/SocialIcon';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-70px 0% -60% 0%', threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border-subtle bg-bg-base/85 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#hero"
          className="flex items-center gap-2.5 font-display text-lg font-black tracking-tight text-text-primary group"
          onClick={() => scrollTo('#hero')}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-primary text-sm font-bold text-on-accent transition-transform duration-300 group-hover:scale-105 shadow-sm">
            A
          </span>
          <span className="hidden sm:inline transition-colors duration-200 group-hover:text-purple-primary">
            {SITE.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium md:flex">
          {NAV_LINKS.map((nav) => {
            const isActive = activeSection === nav.href.replace('#', '');
            return (
              <Link
                key={nav.label}
                href={nav.href}
                className={cn(
                  'relative rounded-lg px-3.5 py-2 transition-colors duration-200 focus-ring',
                  isActive
                    ? 'text-purple-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                )}
                onClick={() => scrollTo(nav.href)}
                aria-current={isActive ? 'true' : undefined}
              >
                {nav.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-purple-primary rounded-full shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href={`mailto:${SITE.email}`}
            className="ml-2 rounded-xl bg-purple-primary px-4 py-2 text-xs font-bold text-on-accent shadow-md shadow-purple-primary/20 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg focus-ring"
          >
            Kontak
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-lg border border-border-subtle p-2 text-text-secondary transition-colors hover:text-purple-primary focus-ring"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu navigasi"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-base/95 text-text-primary backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center gap-2 font-display text-2xl font-bold">
            {NAV_LINKS.map((nav) => (
              <Link
                key={nav.label}
                href={nav.href}
                onClick={() => scrollTo(nav.href)}
                className="rounded-lg px-4 py-2 transition-colors hover:text-purple-primary focus-ring"
              >
                {nav.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href="https://github.com/aishkawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border-subtle bg-bg-surface p-2.5 text-text-secondary transition-colors hover:border-purple-primary hover:text-purple-primary focus-ring"
              aria-label="GitHub"
            >
              <SocialIcon name="Github" />
            </a>
            <a
              href="https://linkedin.com/in/aishkawibowo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border-subtle bg-bg-surface p-2.5 text-text-secondary transition-colors hover:border-purple-primary hover:text-purple-primary focus-ring"
              aria-label="LinkedIn"
            >
              <SocialIcon name="Linkedin" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="rounded-xl border border-border-subtle bg-bg-surface p-2.5 text-text-secondary transition-colors hover:border-purple-primary hover:text-purple-primary focus-ring"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <button
            className="text-sm font-medium text-text-muted transition-colors hover:text-purple-primary focus-ring"
            onClick={() => setOpen(false)}
          >
            Tutup
          </button>
        </div>
      )}
    </nav>
  );
}
