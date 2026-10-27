'use client';

export function AtmosphericBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-mesh-grid opacity-25 dark:opacity-35" />

      <div
        className="animate-float-slow absolute -top-40 left-1/4 h-[620px] w-[620px] rounded-full bg-[#38BDF8]/12 dark:bg-[#3B82F6]/20 blur-[150px]"
      />

      <div
        className="animate-float-reverse absolute top-1/3 -right-36 h-[680px] w-[680px] rounded-full bg-[#C4A1FF]/14 dark:bg-[#9B70E6]/22 blur-[170px]"
      />

      <div
        className="animate-float-slow absolute bottom-1/4 -left-32 h-[520px] w-[520px] rounded-full bg-[#E6A8C7]/10 dark:bg-[#E6A8C7]/15 blur-[160px]"
      />

      <div
        className="absolute -bottom-48 left-1/3 h-[500px] w-[500px] rounded-full bg-[#2563EB]/10 dark:bg-[#4E7BFF]/15 blur-[150px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-base)] via-transparent to-transparent opacity-60" />
    </div>
  );
}
