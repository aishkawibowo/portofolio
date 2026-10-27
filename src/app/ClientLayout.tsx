'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';

export function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <AtmosphericBackground />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
