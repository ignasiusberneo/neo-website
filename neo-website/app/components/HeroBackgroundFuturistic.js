"use client";

import { useEffect, useRef } from "react";

export default function HeroBackgroundFuturistic() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0; // Uniform waktu seperti pada GLSL Shaders

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01; // Mengupdate delta time untuk fragment distortion

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const gridSize = 50;

      // IMPLEMENTASI SIMULASI GLSL FRAGMENT SHADER (Noise & Distortion Effect)
      // Menggunakan rumus gelombang sinus berderet untuk mendistorsi grid secara matematis
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 8) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Efek Noise Wave / Riak Gelombang Makro (Math Noise Simulation)
          const noiseX =
            Math.sin(y * 0.01 + time * 2) * Math.cos(x * 0.01 + time) * 12;

          let offsetX = noiseX;
          if (dist < 250) {
            const force = (250 - dist) / 250;
            offsetX += (dx / dist) * force * 15;
          }

          if (y === 0) ctx.moveTo(x + offsetX, y);
          else ctx.lineTo(x + offsetX, y);
        }
        ctx.strokeStyle = "rgba(212, 175, 55, 0.03)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Render Lighting / Sorotan Uniform murni berbasis posisi kursor
      if (mouse.x > -1000) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          5,
          mouse.x,
          mouse.y,
          300,
        );
        gradient.addColorStop(0, "rgba(212, 175, 55, 0.15)");
        gradient.addColorStop(0.5, "rgba(212, 175, 55, 0.02)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
