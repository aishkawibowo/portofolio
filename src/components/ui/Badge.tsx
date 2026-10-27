import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'subtitle';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const base = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors';
  const variants = {
    primary: 'bg-purple-primary/10 text-purple-light border border-purple-primary/30',
    outline: 'bg-transparent text-text-secondary border border-border-subtle',
    subtitle: 'bg-bg-elevated text-text-muted border border-border-subtle',
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
