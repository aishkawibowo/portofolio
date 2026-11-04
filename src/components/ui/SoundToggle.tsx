'use client';

import { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getSoundEnabled, setSoundEnabled, playClickSound } from '@/lib/audio';
import { cn } from '@/lib/utils';

export function SoundToggle() {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setEnabled(getSoundEnabled());
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleToggle = () => {
    const next = !enabled;
    setEnabled(next);
    setSoundEnabled(next);
    if (next) {
      setTimeout(() => playClickSound(1.1), 20);
    }
  };

  const isSoundOn = mounted ? enabled : true;

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isSoundOn ? 'Matikan efek suara' : 'Aktifkan efek suara'}
      title={isSoundOn ? 'Efek suara aktif (klik untuk membisukan)' : 'Efek suara mati (klik untuk mengaktifkan)'}
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105 focus-ring cursor-pointer',
        isSoundOn
          ? 'border-purple-primary/40 bg-purple-primary/10 text-purple-primary'
          : 'border-border-subtle bg-bg-elevated text-text-muted hover:border-purple-primary hover:text-text-primary'
      )}
    >
      <Volume2
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          isSoundOn
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />
      <VolumeX
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          isSoundOn
            ? 'rotate-90 scale-0 opacity-0 pointer-events-none'
            : 'rotate-0 scale-100 opacity-100'
        )}
        aria-hidden="true"
      />
    </button>
  );
}
