'use client';

import { Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Hero />
      <About />
      <Skills />
      <Suspense fallback={<div className="py-20 sm:py-28 animate-pulse">Memuat proyek...</div>}>
        <Projects />
      </Suspense>
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

