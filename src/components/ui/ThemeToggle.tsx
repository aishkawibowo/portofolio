'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();
  const isDark = mounted ? resolvedTheme === 'dark' : true;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
      title={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105 focus-ring cursor-pointer',
        isDark
          ? 'border-purple-primary/40 bg-purple-primary/10 text-purple-primary'
          : 'border-border-subtle bg-bg-elevated text-text-secondary hover:border-purple-primary hover:text-text-primary'
      )}
    >
      <Sun
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          'absolute h-[18px] w-[18px] transition-all duration-300',
          isDark
            ? 'rotate-90 scale-0 opacity-0 pointer-events-none'
            : 'rotate-0 scale-100 opacity-100'
        )}
        aria-hidden="true"
      />
    </button>
  );
}
