import { Profile } from '@/types';

export const profile: Profile = {
  name: 'Aishka Syakirah Wibowo',
  shortName: 'Aishka Wibowo',
  title: 'Frontend Developer & System Administrator',
  headline:
    'Frontend Developer & System Administrator bersertifikasi BNSP Data Science. Spesialis Next.js, FastAPI, sistem monitoring IoT real-time, dan infrastruktur Linux/Docker.',
  location: 'Sidoarjo, Jawa Timur, Indonesia',
  email: 'aishkawibowo4@gmail.com',
  bio: [
    'Saya seorang Frontend Developer, System Administrator, dan praktisi Data Science dengan latar belakang S1 Sistem Informasi dari UIN Sunan Ampel Surabaya (IPK 3.74). Berpengalaman membangun aplikasi web full-stack, sistem monitoring & kontrol IoT real-time, serta mengelola infrastruktur server berbasis Linux dan Docker.',
    'Saat ini bertugas di PT Venambak Kail Dipantara sebagai Frontend Developer, memimpin pengembangan platform monitoring IoT aquaculture serta sistem internal HRIS. Bersertifikasi resmi Data Scientist dari BNSP dengan keahlian mencakup machine learning, computer vision, dan analisis data.',
  ],
  avatar: '/images/profile/avatar.svg',
  resumeUrl: 'https://github.com/aishkawibowo',
  socials: [
    { label: 'GitHub', href: 'https://github.com/aishkawibowo', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://id.linkedin.com/in/aishkawibowo', icon: 'Linkedin' },
    { label: 'Email', href: 'mailto:aishkawibowo4@gmail.com', icon: 'Mail' },
  ],
  stats: [
    { label: 'Proyek Showcase', value: '9' },
    { label: 'Proyek Pendukung', value: '7' },
    { label: 'Pengalaman Profesional', value: '5' },
  ],
};
