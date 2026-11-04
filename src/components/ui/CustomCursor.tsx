'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { playClickSound } from '@/lib/audio';

interface ClickBurst {
  id: number;
  x: number;
  y: number;
}

interface ClickSpark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

const SPARK_COLORS = ['#C4A1FF', '#E6A8C7', '#38BDF8', '#FAF5FF'];

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bursts, setBursts] = useState<ClickBurst[]>([]);
  const [sparks, setSparks] = useState<ClickSpark[]>([]);

  const pointerRef = useRef<HTMLDivElement>(null);
  const reticleRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const reticlePos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);

  const spawnClickEffect = useCallback((x: number, y: number) => {
    playClickSound();

    const burstId = Date.now() + Math.random();
    setBursts((prev) => [...prev.slice(-3), { id: burstId, x, y }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== burstId));
    }, 450);

    // 4 angular laser sparks shooting along diagonals
    const angles = [Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4];
    const newSparks: ClickSpark[] = angles.map((angle, i) => {
      const speed = 3.2;
      return {
        id: burstId + i,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: SPARK_COLORS[i % SPARK_COLORS.length],
      };
    });

    setSparks((prev) => [...prev.slice(-8), ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((ns) => ns.id === s.id)));
    }, 400);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');

    const frameId = requestAnimationFrame(() => {
      setMounted(true);
      setIsPointerFine(media.matches);
    });

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsPointerFine(e.matches);
    };

    media.addEventListener('change', handleMediaChange);
    return () => {
      cancelAnimationFrame(frameId);
      media.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !isPointerFine) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      if (pointerRef.current) {
        pointerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], .glass-card, [data-interactive="true"]'
        );
        setIsHovered(!!interactive);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      spawnClickEffect(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const render = () => {
      const ease = isHovered ? 0.28 : 0.18;
      reticlePos.current.x += (mousePos.current.x - reticlePos.current.x) * ease;
      reticlePos.current.y += (mousePos.current.y - reticlePos.current.y) * ease;

      if (reticleRef.current) {
        reticleRef.current.style.transform = `translate3d(${reticlePos.current.x}px, ${reticlePos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [mounted, isPointerFine, isVisible, isHovered, spawnClickEffect]);

  if (!mounted || !isPointerFine) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 select-none"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Trailing Geometric Diamond Reticle (NOT ROUND) */}
      <div
        ref={reticleRef}
        className="pointer-events-none fixed left-0 top-0 will-change-transform"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rotate-45 transition-all duration-200 ease-out ${
            isHovered
              ? 'h-6 w-6 border-2 border-pink-accent bg-pink-accent/15 shadow-[0_0_16px_#E6A8C7] scale-125'
              : isMouseDown
              ? 'h-3.5 w-3.5 border border-white bg-white/40 scale-75'
              : 'h-4 w-4 border border-purple-primary/60 bg-purple-primary/10 shadow-[0_0_8px_rgba(196,161,255,0.35)]'
          }`}
        />
      </div>

      {/* Futuristic Angled Arrow Pointer */}
      <div
        ref={pointerRef}
        className="pointer-events-none fixed left-0 top-0 will-change-transform"
      >
        <div
          className={`-translate-x-[2px] -translate-y-[2px] transition-transform duration-150 ease-out ${
            isHovered ? '-rotate-6 scale-110' : isMouseDown ? 'scale-95' : 'rotate-0'
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="filter drop-shadow-[0_2px_10px_rgba(196,161,255,0.65)]"
          >
            {/* Arrow body with Velvet Plum gradient */}
            <path
              d="M3 2L10.8 21.8L14.2 13.8L21.8 10.4L3 2Z"
              fill="url(#arrowGrad)"
              stroke={isHovered ? '#E6A8C7' : '#C4A1FF'}
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            {/* Neon cyan/lavender interior spine */}
            <path
              d="M3 2L14.2 13.8"
              stroke="#38BDF8"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.9"
            />
            {/* Luminous tip spark */}
            <rect
              x="2"
              y="1"
              width="2.5"
              height="2.5"
              transform="rotate(45 3.25 2.25)"
              fill="#FFFFFF"
              className="drop-shadow-[0_0_4px_#38BDF8]"
            />
            <defs>
              <linearGradient id="arrowGrad" x1="3" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#382747" stopOpacity="0.95" />
                <stop offset="1" stopColor="#17121F" stopOpacity="0.98" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Click Diamond / 4-Point Starbursts (NOT ROUND) */}
      {bursts.map((b) => (
        <span
          key={b.id}
          className="pointer-events-none fixed left-0 top-0 animate-ping"
          style={{
            left: `${b.x}px`,
            top: `${b.y}px`,
            width: '28px',
            height: '28px',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            border: '2px solid #C4A1FF',
            backgroundColor: 'rgba(196, 161, 255, 0.25)',
            boxShadow: '0 0 14px #C4A1FF',
            animationDuration: '450ms',
            animationIterationCount: 1,
          }}
        />
      ))}

      {/* Click Laser Sparks along diagonals */}
      {sparks.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none fixed left-0 top-0 rotate-45 transition-all duration-300 ease-out"
          style={{
            left: `${s.x + s.vx * 12}px`,
            top: `${s.y + s.vy * 12}px`,
            width: '4px',
            height: '4px',
            backgroundColor: s.color,
            boxShadow: `0 0 8px ${s.color}`,
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transitionProperty: 'transform, opacity, left, top',
          }}
        />
      ))}
    </div>
  );
}
