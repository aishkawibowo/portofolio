import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ClientLayout } from './ClientLayout';
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aishka-wibowo.vercel.app'),
  title: {
    template: '%s | Aishka Syakirah Wibowo',
    default: 'Aishka Syakirah Wibowo — Frontend Developer & System Administrator',
  },
  description:
    'Portofolio resmi Aishka Syakirah Wibowo — Frontend Developer, System Administrator & BNSP-certified Data Scientist. Spesialis Next.js, FastAPI, IoT monitoring real-time, dan infrastruktur Linux/Docker.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Aishka Syakirah Wibowo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          id="theme-setup"
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const stored = localStorage.getItem('aishka-theme');
                  const isDark = stored !== 'light';
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col antialiased"
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
