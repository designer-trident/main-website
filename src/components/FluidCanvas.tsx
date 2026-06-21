"use client";

import { useEffect, useRef } from "react";

class Ripple {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  velocity: number;

  constructor(x: number, y: number, velocity: number) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.alpha = 0.5;
    this.velocity = Math.max(velocity, 1) * 2;
  }

  update() {
    this.radius += this.velocity;
    this.alpha -= 0.02;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = Math.max(this.alpha, 0);
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }
}

export default function FluidCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);
  const ripples = useRef<Ripple[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = now - lastTime.current;
      
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const velocity = dt > 0 ? dist / dt : 0;

      if (dist > 5) {
        ripples.current.push(new Ripple(e.clientX, e.clientY, velocity));
      }

      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastTime.current = now;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ripples.current.forEach((ripple) => ripple.update());
      ripples.current = ripples.current.filter((r) => r.alpha > 0);
      ripples.current.forEach((ripple) => ripple.draw(ctx));

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
    />
  );
}
