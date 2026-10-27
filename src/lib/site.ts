export const SITE = {
  name: 'Aishka Syakirah Wibowo',
  shortName: 'Aishka Wibowo',
  title: 'Aishka Syakirah Wibowo | Frontend Developer & System Administrator',
  description:
    'Portofolio resmi Aishka Syakirah Wibowo — Frontend Developer, System Administrator & BNSP-certified Data Scientist. Spesialis Next.js, FastAPI, IoT monitoring, dan infrastruktur Linux/Docker.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aishka-wibowo.vercel.app',
  ogImage: '/og-default.png',
  email: 'aishkawibowo4@gmail.com',
  location: 'Sidoarjo, Jawa Timur, Indonesia',
} as const;

export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Pendidikan', href: '#education' },
  { label: 'Kontak', href: '#contact' },
] as const;
