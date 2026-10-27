'use client';

import { useEffect, useState, useCallback } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setProgress(height ? (winScroll / height) * 100 : 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-gradient-purple z-[60] transition-all duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}
