import { useEffect, useRef } from "react";

// Signature element: an MRI-readout-style waveform in amber,
// referencing the k-space work in my master thesis.
export default function SignalWave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, 1200, 70);
      ctx.beginPath();
      for (let x = 0; x <= 1200; x += 3) {
        const env = Math.exp(-Math.pow((x - 600 - Math.sin(t) * 180) / 260, 2));
        const y = 40 + Math.sin(x * 0.09 + t * 2.4) * 24 * env;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#e8a13c";
      ctx.lineWidth = 1.6;
      ctx.stroke();
      t += 0.008;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1200}
      height={70}
      aria-hidden="true"
      className={`block w-full h-[70px] ${className}`}
    />
  );
}
