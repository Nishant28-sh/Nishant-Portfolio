import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  size: number;
  alpha: number;
  layer: 1 | 2 | 3;
  tint: 'cyan' | 'amber' | 'white';
};

const PARTICLE_COUNT = 145;

const PageBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationId = 0;
    const pointer = { x: -9999, y: -9999 };
    const easedPointer = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let time = 0;

    const createParticle = (): Particle => {
      const depthRoll = Math.random();
      const layer: 1 | 2 | 3 = depthRoll > 0.72 ? 1 : depthRoll > 0.32 ? 2 : 3;
      const tintRoll = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.12,
        speed: 0.18 + Math.random() * 0.35,
        size: layer === 1 ? 2 + Math.random() * 1.4 : layer === 2 ? 1.2 + Math.random() * 1 : 0.7 + Math.random() * 0.7,
        alpha: layer === 1 ? 0.42 + Math.random() * 0.25 : layer === 2 ? 0.28 + Math.random() * 0.2 : 0.16 + Math.random() * 0.14,
        layer,
        tint: tintRoll > 0.86 ? 'amber' : tintRoll > 0.32 ? 'cyan' : 'white',
      };
    };

    const init = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, createParticle);
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    const drawBase = () => {
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, '#02040a');
      baseGradient.addColorStop(0.52, '#040a16');
      baseGradient.addColorStop(1, '#010308');
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawAurora = () => {
      const drift = time * 0.0022;
      const centerX = width * 0.55;
      const centerY = height * 0.42;

      const cyanGlow = ctx.createRadialGradient(
        centerX + Math.cos(drift) * width * 0.09,
        centerY + Math.sin(drift * 0.8) * height * 0.06,
        0,
        centerX,
        centerY,
        width * 0.58
      );
      cyanGlow.addColorStop(0, 'rgba(64, 200, 255, 0.2)');
      cyanGlow.addColorStop(0.35, 'rgba(64, 200, 255, 0.09)');
      cyanGlow.addColorStop(1, 'rgba(64, 200, 255, 0)');
      ctx.fillStyle = cyanGlow;
      ctx.fillRect(0, 0, width, height);

      const amberGlow = ctx.createRadialGradient(
        width * 0.66 + Math.cos(drift * 0.9) * width * 0.08,
        height * 0.27 + Math.sin(drift * 0.65) * height * 0.05,
        0,
        width * 0.66,
        height * 0.3,
        width * 0.44
      );
      amberGlow.addColorStop(0, 'rgba(255, 168, 82, 0.16)');
      amberGlow.addColorStop(0.4, 'rgba(255, 168, 82, 0.07)');
      amberGlow.addColorStop(1, 'rgba(255, 168, 82, 0)');
      ctx.fillStyle = amberGlow;
      ctx.fillRect(0, 0, width, height);

      const softBand = ctx.createLinearGradient(0, height * 0.15, width, height * 0.82);
      softBand.addColorStop(0, 'rgba(41, 173, 255, 0)');
      softBand.addColorStop(0.5, 'rgba(41, 173, 255, 0.06)');
      softBand.addColorStop(1, 'rgba(255, 154, 82, 0)');
      ctx.fillStyle = softBand;
      ctx.fillRect(0, 0, width, height);
    };

    const resolveColor = (particle: Particle): string => {
      if (particle.tint === 'amber') return `rgba(255, 185, 106, ${particle.alpha})`;
      if (particle.tint === 'cyan') return `rgba(118, 218, 255, ${particle.alpha})`;
      return `rgba(229, 241, 255, ${particle.alpha})`;
    };

    const drawParticles = () => {
      // Ease pointer to avoid harsh displacement and keep motion cinematic.
      easedPointer.x += (pointer.x - easedPointer.x) * 0.08;
      easedPointer.y += (pointer.y - easedPointer.y) * 0.08;

      for (const p of particles) {
        const layerDrift = p.layer === 1 ? 0.08 : p.layer === 2 ? 0.045 : 0.025;
        const swirlX = Math.sin((p.y + time * p.speed) * 0.006 + p.layer) * layerDrift;
        const swirlY = Math.cos((p.x - time * p.speed) * 0.0045 + p.layer) * layerDrift;

        p.x += p.vx + swirlX;
        p.y += p.vy + swirlY;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const dx = p.x - easedPointer.x;
        const dy = p.y - easedPointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (dx / (dist || 1)) * force * (p.layer === 1 ? 2.2 : 1.2);
          p.y += (dy / (dist || 1)) * force * (p.layer === 1 ? 2.2 : 1.2);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = resolveColor(p);
        ctx.fill();

        if (p.layer === 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = p.tint === 'amber' ? 'rgba(255, 185, 106, 0.06)' : 'rgba(118, 218, 255, 0.06)';
          ctx.fill();
        }
      }
    };

    const drawVignette = () => {
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        width * 0.12,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.7
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(0.62, 'rgba(0, 0, 0, 0.12)');
      vignette.addColorStop(1, 'rgba(0, 0, 0, 0.62)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    const loop = () => {
      time += 1;
      drawBase();
      drawAurora();
      drawParticles();
      drawVignette();
      animationId = requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: MouseEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      easedPointer.x = -9999;
      easedPointer.y = -9999;
    };

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      resize();
      loop();
    };

    resize();
    loop();

    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 h-screen w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.36) 0%, rgba(0,0,0,0.14) 28%, rgba(0,0,0,0.24) 100%)',
        }}
      />
    </div>
  );
};

export default PageBackground;
