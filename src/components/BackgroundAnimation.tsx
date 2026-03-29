import { useEffect, useRef, useState } from 'react';

const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<'network' | 'stars' | 'waves'>('network');

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId: number;
    const mouse = { x: -999, y: -999 };
    let particles: any[] = [];
    let wt = 0;
    let t = 0;

    const palettes: Record<string, string[]> = {
      network: ['#6378ff', '#a78bfa', '#38bdf8', '#818cf8'],
      stars: ['#fff', '#e0e7ff', '#bfdbfe', '#fde68a'],
      waves: ['#0ea5e9', '#6366f1', '#a855f7', '#ec4899'],
    };

    const randColor = (m: string) => {
      const p = palettes[m];
      return p[Math.floor(Math.random() * p.length)];
    };

    const init = () => {
      particles = [];
      if (mode === 'network') {
        for (let i = 0; i < 80; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            r: Math.random() * 2 + 1,
            color: randColor('network'),
            alpha: Math.random() * 0.6 + 0.3,
          });
        }
      } else if (mode === 'stars') {
        for (let i = 0; i < 160; i++) {
          particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.8 + 0.3,
            twinkle: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.02 + 0.005,
            vy: Math.random() * 0.15 + 0.05,
            color: randColor('stars'),
          });
        }
      } else if (mode === 'waves') {
        particles = [];
      }
    };

    const drawNetwork = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = (1 - d / 130) * 0.25;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
    };

    const drawStars = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.twinkle += p.speed;
        p.y += p.vy;
        if (p.y > H) p.y = 0;
        const alpha = 0.3 + 0.7 * Math.abs(Math.sin(p.twinkle));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        if (p.r > 1.2) {
          ctx.beginPath();
          ctx.moveTo(p.x - p.r * 3, p.y);
          ctx.lineTo(p.x + p.r * 3, p.y);
          ctx.moveTo(p.x, p.y - p.r * 3);
          ctx.lineTo(p.x, p.y + p.r * 3);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = alpha * 0.3;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      });
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, W, H);
      wt += 0.008;
      const cols = [
        'rgba(99,102,241,',
        'rgba(139,92,246,',
        'rgba(59,130,246,',
        'rgba(236,72,153,',
      ];
      for (let w = 0; w < 4; w++) {
        const amp = 30 + w * 10;
        const freq = 0.008 + w * 0.003;
        const yBase = H * 0.35 + w * 55;
        const phase = wt + w * 1.1;
        const alpha = 0.12 + w * 0.04;
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 3) {
          const y =
            yBase +
            amp * Math.sin(x * freq + phase) +
            15 * Math.sin(x * freq * 2.3 + phase * 1.7);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fillStyle = cols[w] + alpha + ')';
        ctx.fill();
        ctx.beginPath();
        for (let x = 0; x <= W; x += 3) {
          const y =
            yBase +
            amp * Math.sin(x * freq + phase) +
            15 * Math.sin(x * freq * 2.3 + phase * 1.7);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = cols[w] + '0.5)';
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }
    };

    const loop = () => {
      t++;
      if (mode === 'network') drawNetwork();
      else if (mode === 'stars') drawStars(t);
      else if (mode === 'waves') drawWaves();
      animId = requestAnimationFrame(loop);
    };

    const resize = () => {
      W = canvas.width = container.offsetWidth;
      H = canvas.height = container.offsetHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const handleResize = () => {
      cancelAnimationFrame(animId);
      resize();
      loop();
    };

    // Initialize
    resize();
    loop();

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      container?.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ display: 'block' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: 'block', background: '#0a0a14' }}
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button
          onClick={() => setMode('network')}
          className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-all ${
            mode === 'network'
              ? 'bg-blue-500/30 border border-blue-500/60 text-blue-200'
              : 'bg-white/8 border border-white/15 text-white/60 hover:bg-white/15 hover:text-white'
          }`}
        >
          Network
        </button>
        <button
          onClick={() => setMode('stars')}
          className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-all ${
            mode === 'stars'
              ? 'bg-blue-500/30 border border-blue-500/60 text-blue-200'
              : 'bg-white/8 border border-white/15 text-white/60 hover:bg-white/15 hover:text-white'
          }`}
        >
          Stars
        </button>
        <button
          onClick={() => setMode('waves')}
          className={`px-3 py-1 text-xs uppercase tracking-wider rounded-full transition-all ${
            mode === 'waves'
              ? 'bg-blue-500/30 border border-blue-500/60 text-blue-200'
              : 'bg-white/8 border border-white/15 text-white/60 hover:bg-white/15 hover:text-white'
          }`}
        >
          Waves
        </button>
      </div>
    </div>
  );
};

export default BackgroundAnimation;
