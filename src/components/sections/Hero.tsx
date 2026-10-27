'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { profile } from '@/data/profile';
import { Typewriter } from '@/components/ui/Typewriter';
import { CountUp } from '@/components/ui/CountUp';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-surface/80 px-4 py-1.5 text-xs font-semibold text-text-secondary shadow-sm backdrop-blur-md">
            <Sparkles size={13} className="text-purple-primary" aria-hidden="true" />
            <span>Frontend &amp; System Administration</span>
            <span className="inline-block h-1 w-1 rounded-full bg-purple-primary" />
            <Terminal size={12} className="text-pink-accent" aria-hidden="true" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-black leading-[1.1] tracking-tight text-text-primary sm:text-6xl md:text-7xl"
        >
          Halo, saya{' '}
          <span className="text-gradient">Aishka</span>
          <span className="block mt-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-normal text-text-secondary min-h-[1.3em]">
            <Typewriter
              words={[
                'Frontend Developer',
                'System Administrator',
                'IoT & AI Specialist',
                'Data Science Practitioner',
              ]}
              className="text-purple-primary"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {profile.headline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-purple-primary px-6 py-3 text-sm font-bold text-on-accent shadow-lg shadow-purple-primary/25 transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:shadow-purple-primary/35 focus-ring"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lihat Proyek
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl border border-border-subtle bg-bg-surface/80 px-6 py-3 text-sm font-semibold text-text-primary backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-purple-primary hover:text-purple-primary focus-ring"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hubungi Saya
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 grid w-full max-w-2xl grid-cols-3 divide-x divide-border-subtle rounded-2xl border border-border-subtle bg-bg-surface/70 px-2 py-5 shadow-sm backdrop-blur-md"
        >
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-2">
              <dt className="order-2 text-center text-[11px] leading-tight text-text-muted sm:text-xs font-medium">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-black text-text-primary sm:text-3xl text-gradient">
                <CountUp value={stat.value} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

