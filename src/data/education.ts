import { EducationItem, CertificationItem } from '@/types';

export const education: EducationItem[] = [
  {
    id: 's1-sistem-informasi',
    institution: 'Universitas Islam Negeri Sunan Ampel Surabaya',
    degree: 'Bachelor of Information Systems (S1 Sistem Informasi)',
    major: 'Sistem Informasi (Peminatan Data Science)',
    period: '2022 — 2026',
    description:
      'Program sarjana Sistem Informasi dengan fokus keilmuan pada Data Science, rekayasa perangkat lunak full-stack, kecerdasan buatan, dan manajemen basis data enterprise.',
    highlights: [
      'Indeks Prestasi Kumulatif (IPK): 3.74 / 4.00',
      'Bidang Peminatan: Data Science, Machine Learning & Software Engineering',
      'Aktif sebagai Asisten Dosen Praktikum Pemrograman dan Pengurus Himpunan Mahasiswa (HIMAPROSIF UINSA)',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'bnsp-data-scientist',
    name: 'Data Scientist Certification — BNSP',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    period: '2025 — 2028',
    credentialId: 'BNSP (National Professional Certification Agency)',
  },
];
