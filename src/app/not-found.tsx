import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-[70vh] text-center">
      <h1 className="font-display text-6xl font-bold text-text-primary mb-4">404</h1>
      <p className="text-text-secondary mb-8">Halaman tidak ditemukan</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-purple-primary text-text-primary font-semibold hover:bg-purple-deep transition-colors focus-ring"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
