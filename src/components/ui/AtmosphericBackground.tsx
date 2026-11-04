'use client';

import { GalaxyCanvas } from './GalaxyCanvas';

export function AtmosphericBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Base Multi-stop Cosmic Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-10%,rgba(37,99,235,0.32),rgba(147,51,234,0.22)_40%,rgba(230,168,199,0.12)_65%,transparent_85%)] dark:bg-[radial-gradient(ellipse_95%_70%_at_50%_-12%,rgba(59,130,246,0.38),rgba(155,112,230,0.26)_45%,rgba(230,168,199,0.14)_68%,rgba(23,18,31,0)_88%)]" />

      {/* 2. Top Hero Vibrant Azure/Blue Aurora (Sentuhan Biru khas acahyadava) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[720px] w-[1000px] max-w-[120vw] rounded-full bg-gradient-to-b from-[#2563EB]/40 via-[#38BDF8]/25 to-transparent blur-[130px] dark:from-[#3B82F6]/48 dark:via-[#1D4ED8]/30 dark:to-transparent" />

      {/* 3. Floating Velvet Lavender Aurora on Right */}
      <div className="animate-float-reverse absolute top-1/4 -right-28 h-[650px] w-[650px] rounded-full bg-gradient-to-br from-[#C4A1FF]/32 via-[#9B70E6]/20 to-transparent blur-[140px]" />

      {/* 4. Dusty Rose & Deep Plum Aurora on Left */}
      <div className="animate-float-slow absolute top-1/2 -left-32 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-[#E6A8C7]/28 via-[#5D3B80]/24 to-transparent blur-[140px]" />

      {/* 5. Lower Viewport Cyan & Electric Indigo Glow */}
      <div className="absolute -bottom-36 left-1/4 h-[550px] w-[750px] rounded-full bg-gradient-to-t from-[#38BDF8]/28 via-[#2563EB]/22 to-transparent blur-[140px]" />

      {/* 6. Galaxy Canvas (Twinkling Stars, Diffraction Glints, Shooting Stars) */}
      <GalaxyCanvas />

      {/* 7. Subtle Architectural Mesh Grid overlay with blend */}
      <div className="absolute inset-0 bg-mesh-grid opacity-20 dark:opacity-30 mix-blend-screen" />

      {/* 8. Soft bottom vignette to keep footer grounded */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[var(--color-bg-base)] to-transparent opacity-75" />
    </div>
  );
}
