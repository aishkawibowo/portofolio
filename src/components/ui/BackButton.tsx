'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-purple-primary font-semibold hover:text-purple-light transition-colors focus-ring"
      onClick={(e) => {
        e.preventDefault();
        window.history.back();
      }}
    >
      <ArrowLeft size={16} className="shrink-0" /> Kembali ke daftar proyek
    </Link>
  );
}