import { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'venambak-frontend-sysadmin',
    role: 'Frontend Developer & System Administrator',
    company: 'PT Venambak Kail Dipantara',
    location: 'Sidoarjo, Jawa Timur, Indonesia · Di lokasi',
    period: 'Jun 2026 — Saat ini',
    employmentType: 'Purnawaktu (Full-time)',
    current: true,
    description:
      'Bertanggung jawab atas rekayasa web full-stack, integrasi REST API, arsitektur IoT monitoring, serta bertindak sebagai System Administrator yang mengelola infrastruktur server Linux, orkestrasi Docker, dan reverse proxy.',
    highlights: [
      'Mengembangkan dan memelihara fitur web full-stack aplikasi IoT aquaculture dengan integrasi REST API dan manajemen database PostgreSQL.',
      'Bertindak sebagai System Administrator: mengelola server Linux, deployment container Docker Compose, Caddy reverse proxy dengan auto-SSL, Mosquitto MQTT broker, dan PgBouncer.',
      'Membangun dan men-deploy sistem monitoring & kontrol device IoT aquaculture (aerator AutoVe, automatic feeder, blower, WQMS, energy meter) menggunakan FastAPI, MQTT, dan WebSockets.',
      'Berkontribusi dalam pengembangan internal tools perusahaan termasuk sistem HRIS untuk absensi (geolokasi GPS & swafoto kamera), task management (Kanban & Gantt chart), dan pengajuan cuti.',
    ],
    tech: [
      'Linux Server',
      'Docker Compose',
      'Caddy',
      'FastAPI',
      'Next.js 16',
      'React',
      'TypeScript',
      'MQTT',
      'WebSocket',
      'PostgreSQL',
      'PgBouncer',
      'Tailwind CSS',
    ],
  },
  {
    id: 'asdos-uinsa',
    role: 'Assistant Lecturer (Asisten Dosen)',
    company: 'UIN Sunan Ampel Surabaya',
    location: 'Surabaya, Jawa Timur, Indonesia · Di lokasi',
    period: 'Sep 2025 — Des 2025 · 4 bln',
    employmentType: 'Purnawaktu (Academic)',
    current: false,
    description:
      'Mendampingi dosen pengampu dalam perkuliahan praktikum pemrograman, membimbing mahasiswa dalam pemecahan masalah algoritma, serta mengevaluasi tugas praktikum mahasiswa.',
    highlights: [
      'Mendampingi dan memfasilitasi mahasiswa dalam menyelesaikan tugas praktikum pemrograman di laboratorium komputer.',
      'Memberikan penjelasan materi teknis, debugging kode, serta pendampingan akademik mandiri saat dosen pengampu berhalangan hadir.',
      'Memonitor, menguji logika program, dan memberikan evaluasi penilaian berkala terhadap tugas praktikum mahasiswa.',
    ],
    tech: ['Java', 'Object-Oriented Programming (OOP)', 'Algoritma & Struktur Data', 'Academic Mentoring'],
  },
  {
    id: 'rpn-analyst',
    role: 'Data Research Analyst',
    company: 'PT Riset Perkebunan Nusantara',
    location: 'Kota Bogor, Jawa Barat, Indonesia · Jarak jauh (Remote)',
    period: 'Mei 2025 · 1 bln',
    employmentType: 'Pekerja Lepas (Freelance)',
    current: false,
    description:
      'Membersihkan, menstrukturkan, dan mentransformasi data mentah produksi menjadi dashboard visualisasi interaktif pada Google Looker Studio untuk pelaporan dan keputusan bisnis strategis.',
    highlights: [
      'Melakukan data cleaning, validasi, dan penataan struktur data mentah produksi dari Google Spreadsheets untuk memastikan akurasi dan konsistensi data.',
      'Memproses dan mentransformasi dataset produksi untuk pelaporan klien dan penyajian data yang terstruktur.',
      'Merancang dan membangun Dashboard Produksi interaktif terintegrasi pada Google Looker Studio untuk memudahkan pemantauan metrik kinerja dan tren produksi secara real-time.',
    ],
    tech: ['Google Looker Studio', 'Google Spreadsheets', 'Data Cleaning', 'Data Modeling', 'Data Visualization', 'ETL'],
  },
  {
    id: 'diskominfo-sidoarjo',
    role: 'Data Science Specialist / Data Scientist (Intern)',
    company: 'Dinas Komunikasi dan Informatika Kabupaten Sidoarjo',
    location: 'Sidoarjo, Jawa Timur, Indonesia · Di lokasi',
    period: 'Jan 2025 — Apr 2025 · 4 bln',
    employmentType: 'Magang (Internship)',
    current: false,
    description:
      'Terlibat dalam pemrosesan data operasional pemerintahan daerah, analisis dataset layanan darurat, dan pengembangan solusi digital otomasi berbasis computer vision/OCR.',
    highlights: [
      'Membersihkan, menstrukturkan, dan memvalidasi dataset laporan Call Center 112 untuk meningkatkan konsistensi dan kesiapan analisis operasional publik.',
      'Mendukung penyiapan dan pemrosesan dataset rekaman CCTV lalu lintas untuk analisis pola pergerakan dan volume kendaraan dinas perhubungan.',
      'Mengembangkan sistem pemindaian KTP otomatis berbasis Optical Character Recognition (EasyOCR & CRNN) untuk ekstraksi data kependudukan secara instan dan memangkas kesalahan input manual.',
      'Berkolaborasi erat dengan tim data dalam menjaga kualitas dataset operasional serta mendukung efisiensi alur kerja administratif berbasis data.',
    ],
    tech: ['Python', 'EasyOCR', 'CRNN', 'OpenCV', 'SQL', 'Data Cleaning', 'Data Modeling', 'Google Sheets'],
  },
  {
    id: 'himaprosif-uinsa',
    role: 'Staff of Public Relations',
    company: 'HIMAPROSIF UIN Sunan Ampel Surabaya',
    location: 'Surabaya, Jawa Timur, Indonesia · Di lokasi',
    period: 'Mar 2023 — Jan 2025 · 1 thn 11 bln',
    employmentType: 'Organisasi / Kontrak',
    current: false,
    description:
      'Mengelola komunikasi eksternal organisasi kemahasiswaan, membangun jejaring kemitraan, dan memimpin program kerja sosial unggulan.',
    highlights: [
      'Membangun dan memelihara hubungan kemitraan kolaboratif dengan mitra eksternal untuk mendukung inisiatif dan program bersama.',
      'Mengelola administrasi kehumasan termasuk penyusunan proposal, pengarsipan, dan korespondensi resmi organisasi.',
      'Memimpin dan mengoordinasikan "SI Care", program bakti sosial unggulan himpunan, memastikan kelancaran eksekusi dan dampak positif di masyarakat.',
    ],
    tech: ['Public Relations', 'Strategic Communication', 'Partnership Management', 'Team Leadership', 'Event Management'],
  },
];
