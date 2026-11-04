'use client';

import { MotionConfig } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';
import { CustomCursor } from '@/components/ui/CustomCursor';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <AtmosphericBackground />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  );
}
