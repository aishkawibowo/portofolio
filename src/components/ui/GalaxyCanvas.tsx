'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  color: string;
  twinklePhase: number;
  twinkleSpeed: number;
  baseAlpha: number;
  depth: number;
  hasGlint: boolean;
  vx: number;
  vy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
  color: string;
}

export function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let isDark = true;

    // Check theme
    const checkTheme = () => {
      isDark = document.documentElement.classList.contains('dark');
    };
    checkTheme();

    const observer = new MutationObserver(() => {
      checkTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
    };

    let stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Date.now() + 2500;

    const paletteDark = [
      '#C4A1FF', // Velvet Lavender
      '#FAF5FF', // Soft White
      '#E6A8C7', // Dusty Rose
      '#38BDF8', // Cosmic Cyan/Blue
      '#D8B4FE', // Pale Purple
    ];

    const paletteLight = [
      '#5D3B80', // Deep Velvet
      '#B96F91', // Plum/Rose
      '#7E52A8', // Medium Purple
      '#2563EB', // Blue
    ];

    const initStars = () => {
      const starCount = Math.floor(Math.min(180, (width * height) / 8000));
      const currentPalette = isDark ? paletteDark : paletteLight;

      stars = Array.from({ length: starCount }, () => {
        const depth = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
        const radius = depth * 1.8 + (Math.random() < 0.08 ? 1.2 : 0.4);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          color: currentPalette[Math.floor(Math.random() * currentPalette.length)],
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          baseAlpha: depth * 0.5 + 0.3,
          depth,
          hasGlint: radius > 2.0 && Math.random() > 0.4,
          vx: (Math.random() - 0.5) * 0.06 * depth,
          vy: (Math.random() - 0.5) * 0.06 * depth,
        };
      });
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initStars();
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const spawnShootingStar = () => {
      const startX = Math.random() * width * 0.9;
      const startY = Math.random() * (height * 0.45);
      const angle = (Math.PI / 4) + (Math.random() * 0.25 - 0.12); // ~45 deg downward
      const speed = Math.random() * 8 + 9;

      shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 70 + 80,
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 35 + 30,
        color: Math.random() > 0.4 ? '#C4A1FF' : '#38BDF8',
      });

      nextShootingStarTime = Date.now() + Math.random() * 5000 + 4000;
    };

    let time = 0;

    const render = () => {
      time += 0.015;

      // Mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Nebula Clouds
      if (isDark) {
        // Hero Cosmic Blue / Cyan Nebula (Sentuhan Biru Khas)
        const nBlueX = width * 0.5 + Math.cos(time * 0.4) * 45;
        const nBlueY = height * 0.18 + Math.sin(time * 0.35) * 35;
        const nBlueGrad = ctx.createRadialGradient(nBlueX, nBlueY, 0, nBlueX, nBlueY, width * 0.55);
        nBlueGrad.addColorStop(0, 'rgba(59, 130, 246, 0.22)');
        nBlueGrad.addColorStop(0.4, 'rgba(56, 189, 248, 0.12)');
        nBlueGrad.addColorStop(0.7, 'rgba(37, 99, 235, 0.05)');
        nBlueGrad.addColorStop(1, 'rgba(23, 18, 31, 0)');
        ctx.fillStyle = nBlueGrad;
        ctx.fillRect(0, 0, width, height);

        // Velvet Lavender Nebula
        const n1X = width * 0.78 + Math.sin(time * 0.5) * 50;
        const n1Y = height * 0.42 + Math.cos(time * 0.4) * 40;
        const n1Grad = ctx.createRadialGradient(n1X, n1Y, 0, n1X, n1Y, width * 0.48);
        n1Grad.addColorStop(0, 'rgba(196, 161, 255, 0.18)');
        n1Grad.addColorStop(0.5, 'rgba(155, 112, 230, 0.08)');
        n1Grad.addColorStop(1, 'rgba(23, 18, 31, 0)');
        ctx.fillStyle = n1Grad;
        ctx.fillRect(0, 0, width, height);

        // Dusty Rose & Plum Nebula
        const n3X = width * 0.18 + Math.sin(time * 0.3) * 40;
        const n3Y = height * 0.7 + Math.cos(time * 0.5) * 45;
        const n3Grad = ctx.createRadialGradient(n3X, n3Y, 0, n3X, n3Y, width * 0.42);
        n3Grad.addColorStop(0, 'rgba(230, 168, 199, 0.16)');
        n3Grad.addColorStop(0.5, 'rgba(185, 111, 145, 0.07)');
        n3Grad.addColorStop(1, 'rgba(23, 18, 31, 0)');
        ctx.fillStyle = n3Grad;
        ctx.fillRect(0, 0, width, height);

        // Soft Interactive Cursor Nebula Aura
        if (mouse.x > -500) {
          const mouseAura = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
          mouseAura.addColorStop(0, 'rgba(196, 161, 255, 0.12)');
          mouseAura.addColorStop(0.6, 'rgba(56, 189, 248, 0.04)');
          mouseAura.addColorStop(1, 'rgba(23, 18, 31, 0)');
          ctx.fillStyle = mouseAura;
          ctx.fillRect(0, 0, width, height);
        }
      } else {
        // Light mode soft celestial tints
        const n1Grad = ctx.createRadialGradient(width * 0.5, height * 0.2, 0, width * 0.5, height * 0.2, width * 0.6);
        n1Grad.addColorStop(0, 'rgba(93, 59, 128, 0.06)');
        n1Grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.03)');
        n1Grad.addColorStop(1, 'rgba(251, 247, 242, 0)');
        ctx.fillStyle = n1Grad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Stars
      const parallaxX = (mouse.x - width / 2) * 0.015;
      const parallaxY = (mouse.y - height / 2) * 0.015;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase);
        const alpha = Math.max(0.1, Math.min(1, star.baseAlpha + twinkle * 0.35));

        star.x += star.vx;
        star.y += star.vy;

        // Wrap around boundaries
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Parallax position
        const drawX = star.x + parallaxX * star.depth;
        const drawY = star.y + parallaxY * star.depth;

        ctx.save();
        ctx.globalAlpha = isDark ? alpha : alpha * 0.5;

        // Star core
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        // 4-point star glint for larger bright stars
        if (star.hasGlint && isDark && alpha > 0.6) {
          const glintLen = star.radius * 3.2;
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(drawX - glintLen, drawY);
          ctx.lineTo(drawX + glintLen, drawY);
          ctx.moveTo(drawX, drawY - glintLen);
          ctx.lineTo(drawX, drawY + glintLen);
          ctx.stroke();
        }

        ctx.restore();
      }

      // 3. Shooting Stars
      if (Date.now() > nextShootingStarTime && isDark) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const progress = s.life / s.maxLife;
        const alpha = (1 - progress) * s.opacity;

        if (progress >= 1 || s.x > width + 100 || s.y > height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = s.x - (s.vx / Math.hypot(s.vx, s.vy)) * s.length;
        const tailY = s.y - (s.vy / Math.hypot(s.vx, s.vy)) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(0.25, s.color);
        grad.addColorStop(1, 'rgba(196, 161, 255, 0)');

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = grad;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glow head
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause when page is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-20 h-full w-full select-none"
      aria-hidden="true"
    />
  );
}

