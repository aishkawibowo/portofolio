import { cn } from '@/lib/utils';

interface GradientOrbProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export function GradientOrb({ className, 'aria-hidden': ariaHidden = true }: GradientOrbProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        'fixed -z-10 rounded-full blur-[120px] opacity-40',
        className
      )}
    />
  );
}
