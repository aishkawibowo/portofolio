'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { ProjectImage } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = images[selectedIndex] || images[0];

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (!images || images.length === 0) {
    return (
      <div className="glass-card max-w-6xl mx-auto my-12 p-12 text-center">
        <p className="text-xs uppercase tracking-wider text-text-muted">
          Belum ada screenshot yang tersedia
        </p>
      </div>
    );
  }

  return (
    <section className="relative py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="relative group">
          <div
            className="absolute -inset-2 sm:-inset-4 rounded-3xl bg-gradient-to-r from-purple-primary/20 via-cyan-accent/15 to-purple-light/20 blur-2xl sm:blur-3xl opacity-50 transition-opacity duration-700 group-hover:opacity-75 -z-10"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border-subtle bg-bg-surface/90 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-border-subtle/80 bg-bg-elevated/70 px-4 py-3 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 hidden font-mono text-xs text-text-muted sm:inline-block">
                  {activeImage?.caption || activeImage?.alt || 'Screenshot Preview'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-text-muted">
                  {selectedIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  aria-label="Lihat ukuran penuh"
                  title="Lihat ukuran penuh"
                  className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-bg-surface hover:text-text-primary focus-ring"
                >
                  <Maximize2 size={15} />
                </button>
              </div>
            </div>

            <div
              className="relative aspect-[16/10] w-full cursor-pointer overflow-hidden bg-bg-base/60"
              onClick={() => setIsLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Screenshot sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-base/80 text-text-primary shadow-lg backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:border-purple-primary focus:opacity-100 focus-ring"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Screenshot berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-bg-base/80 text-text-primary shadow-lg backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:border-purple-primary focus:opacity-100 focus-ring"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {activeImage.caption && (
              <div className="border-t border-border-subtle/80 bg-bg-surface/80 px-4 py-2.5 sm:px-6">
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {activeImage.caption}
                </p>
              </div>
            )}
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-start gap-3">
            {images.map((img, i) => {
              const isActive = i === selectedIndex;
              return (
                <button
                  key={img.src + i}
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  aria-label={`Pilih screenshot ${i + 1}`}
                  className={cn(
                    'group relative aspect-[16/10] w-24 sm:w-32 overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer focus-ring',
                    isActive
                      ? 'border-purple-primary ring-2 ring-purple-primary/30 shadow-lg shadow-purple-primary/20 scale-[1.03]'
                      : 'border-border-subtle opacity-60 hover:opacity-100 hover:border-purple-primary/50 hover:scale-[1.02]'
                  )}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="128px"
                    className="object-cover object-top"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-purple-primary/10 border border-purple-primary/30" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-ring"
              aria-label="Tutup pratinjau"
            >
              <X size={20} />
            </button>

            <div
              className="relative max-h-[90vh] max-w-[94vw] aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-transform hover:scale-110 focus-ring"
                    aria-label="Sebelumnya"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white shadow-xl backdrop-blur-md transition-transform hover:scale-110 focus-ring"
                    aria-label="Berikutnya"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
