import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./site";

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  isPillar?: boolean;
  label?: { en: string; ar: string };
}

const PILLARS_DATA = [
  { en: "Alrohaimi Theory", ar: "نظرية الرحيمي" },
  { en: "Cognitive Sovereignty", ar: "السيادة الإدراكية" },
  { en: "Conscious Leadership", ar: "القيادة الواعية" },
  { en: "Complex Systems", ar: "الأنظمة المعقدة" },
  { en: "Existential Resilience", ar: "المرونة الوجودية" },
  { en: "Civilizational Transformation", ar: "التحول الحضاري" },
];

export function CognitiveSphereCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Safe dimension resolution
    let width = Math.max(320, canvas.offsetWidth || container?.offsetWidth || 480);
    let height = Math.max(320, canvas.offsetHeight || container?.offsetHeight || 440);
    canvas.width = width;
    canvas.height = height;
    let radius = Math.min(width, height) * 0.36;
    const totalPoints = 350;
    const nodes: Node3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    // 6 Pillars distributed evenly around the globe (60 deg longitude separation, alternating north/south)
    const pillarPositions = [
      { lat: 0.45, lon: 0 },                        // Front-Right-Top: Alrohaimi Theory
      { lat: -0.40, lon: (Math.PI * 2) * (1 / 6) },  // Right-Bottom: Cognitive Sovereignty
      { lat: 0.45, lon: (Math.PI * 2) * (2 / 6) },  // Back-Right-Top: Conscious Leadership
      { lat: -0.45, lon: (Math.PI * 2) * (3 / 6) }, // Back-Bottom: Complex Systems
      { lat: 0.45, lon: (Math.PI * 2) * (4 / 6) },  // Back-Left-Top: Existential Resilience
      { lat: -0.40, lon: (Math.PI * 2) * (5 / 6) }, // Front-Left-Bottom: Civilizational Transformation
    ];

    // Initialize 6 prominent pillars on distinct sides
    for (let i = 0; i < 6; i++) {
      const { lat, lon } = pillarPositions[i];
      const cosLat = Math.cos(lat);
      const x = Math.cos(lon) * cosLat;
      const y = Math.sin(lat);
      const z = Math.sin(lon) * cosLat;

      nodes.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
        size: 5.5,
        color: "#b88a3b",
        isPillar: true,
        label: PILLARS_DATA[i],
      });
    }

    // Initialize remaining background nodes with Fibonacci distribution
    for (let i = 0; i < totalPoints - 6; i++) {
      const y = 1 - (i / (totalPoints - 6 - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * (i + 15);

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      nodes.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
        size: Math.random() * 2 + 1.2,
        color: i % 4 === 0 ? "#b88a3b" : i % 3 === 0 ? "#0284c7" : "#0d1b3e",
        isPillar: false,
      });
    }

    const updateNodeCoordinates = (r: number) => {
      for (let i = 0; i < 6; i++) {
        const { lat, lon } = pillarPositions[i];
        const cosLat = Math.cos(lat);
        nodes[i].baseX = Math.cos(lon) * cosLat * r;
        nodes[i].baseY = Math.sin(lat) * r;
        nodes[i].baseZ = Math.sin(lon) * cosLat * r;
      }
      for (let i = 6; i < nodes.length; i++) {
        const idx = i - 6;
        const totalBg = totalPoints - 6;
        const y = 1 - (idx / (totalBg - 1)) * 2;
        const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = phi * (idx + 15);
        nodes[i].baseX = Math.cos(theta) * radiusAtY * r;
        nodes[i].baseY = y * r;
        nodes[i].baseZ = Math.sin(theta) * radiusAtY * r;
      }
    };

    let rotX = 0.002;
    let rotY = 0.0035;
    let angleX = 0.2;
    let angleY = 0.4;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const halfW = rect.width > 0 ? rect.width / 2 : 240;
      const halfH = rect.height > 0 ? rect.height / 2 : 220;
      const x = e.clientX - rect.left - halfW;
      const y = e.clientY - rect.top - halfH;
      const mx = x / halfW;
      const my = y / halfH;
      if (Number.isFinite(mx) && Number.isFinite(my)) {
        mouseX = Math.max(-1, Math.min(1, mx));
        mouseY = Math.max(-1, Math.min(1, my));
        isHovering = true;
      }
    };

    const onMouseLeave = () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // ResizeObserver for reliable dimension sync
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        const newW = Math.floor(cr.width);
        const newH = Math.floor(cr.height);
        if (newW > 50 && newH > 50 && (newW !== width || newH !== height)) {
          width = newW;
          height = newH;
          canvas.width = newW;
          canvas.height = newH;
          radius = Math.min(newW, newH) * 0.36;
          updateNodeCoordinates(radius);
        }
      }
    });
    if (container) ro.observe(container);

    const render = () => {
      // Safe guard against NaN
      if (!Number.isFinite(angleX)) angleX = 0.2;
      if (!Number.isFinite(angleY)) angleY = 0.4;

      const safeW = Math.max(300, width);
      const safeH = Math.max(300, height);
      const safeR = Math.max(100, radius);

      ctx.clearRect(0, 0, safeW, safeH);

      // Warm radial ambient glow
      const grad = ctx.createRadialGradient(
        safeW / 2,
        safeH / 2,
        safeR * 0.08,
        safeW / 2,
        safeH / 2,
        safeR * 1.25
      );
      grad.addColorStop(0, "rgba(184, 138, 59, 0.16)");
      grad.addColorStop(0.55, "rgba(2, 132, 199, 0.06)");
      grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, safeW, safeH);

      if (isHovering) {
        angleY += mouseX * 0.025;
        angleX -= mouseY * 0.02;
      } else {
        angleX += rotX;
        angleY += rotY;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projectedNodes: {
        px: number;
        py: number;
        scale: number;
        node: Node3D;
        alpha: number;
      }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let x1 = n.baseX * cosY - n.baseZ * sinY;
        let z1 = n.baseZ * cosY + n.baseX * sinY;
        let y2 = n.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + n.baseY * sinX;

        const fov = 420;
        const scale = fov / (fov + z2 + safeR * 0.5);
        const px = safeW / 2 + x1 * scale;
        const py = safeH / 2 + y2 * scale;
        const alpha = Math.max(0.18, Math.min(1, (z2 + safeR) / (safeR * 2)));

        projectedNodes.push({ px, py, scale, node: n, alpha });
      }

      // Draw connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        if (p1.alpha < 0.20) continue;

        const maxConnections = p1.node.isPillar ? 8 : 4;
        let connections = 0;

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 65 * p1.scale) {
            ctx.beginPath();
            const connAlpha = (1 - dist / (65 * p1.scale)) * Math.min(p1.alpha, p2.alpha) * 0.55;
            ctx.strokeStyle = p1.node.isPillar
              ? `rgba(184, 138, 59, ${connAlpha})`
              : `rgba(13, 27, 62, ${connAlpha * 0.7})`;
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
            connections++;
            if (connections >= maxConnections) break;
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        ctx.beginPath();
        const r = p.node.size * p.scale;
        ctx.arc(p.px, p.py, Math.max(0.8, r), 0, Math.PI * 2);

        if (p.node.isPillar) {
          ctx.fillStyle = `rgba(184, 138, 59, ${p.alpha})`;
          ctx.fill();

          // Outer halo ring (fast, no shadowBlur)
          ctx.beginPath();
          ctx.arc(p.px, p.py, r * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(184, 138, 59, ${p.alpha * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Pillar Label - only shown when facing front with smooth fade
          if (p.alpha > 0.58 && p.node.label) {
            const labelText = lang === "ar" ? p.node.label.ar : p.node.label.en;
            const textAlpha = Math.min(1, (p.alpha - 0.55) / 0.35);
            ctx.font = `bold ${Math.round(10.5 * p.scale + 2)}px 'Noto Kufi Arabic', 'IBM Plex Sans', sans-serif`;
            ctx.fillStyle = `rgba(12, 24, 54, ${textAlpha * 0.95})`;
            ctx.fillText(labelText, p.px + 12 * p.scale, p.py + 4 * p.scale);
          }
        } else {
          ctx.fillStyle =
            p.node.color === "#0284c7"
              ? `rgba(2, 132, 199, ${p.alpha * 0.75})`
              : `rgba(13, 27, 62, ${p.alpha * 0.6})`;
          ctx.fill();
        }
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let isVisible = true;
    const io = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    });
    if (canvas) io.observe(canvas);

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [lang]);

  return (
    <div
      ref={containerRef}
      className={`relative flex h-full min-h-[380px] w-full items-center justify-center overflow-hidden ${className}`}
      aria-label="Interactive 3D Cognitive Neural Mind Sphere"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full cursor-grab active:cursor-grabbing"
      />
      <div className="pointer-events-none absolute bottom-3 inset-x-0 mx-auto w-fit flex items-center gap-2 rounded-full border border-amber-900/15 bg-white/95 px-3.5 py-1 text-[10px] text-amber-900 shadow-sm backdrop-blur-md">
        <span className="size-1.5 animate-ping rounded-full bg-amber-600" />
        <span className="font-semibold">
          {lang === "ar"
            ? "النموذج التفاعلي: حرّك الفأرة للاستكشاف"
            : "Interactive 3D Sphere · Move & Rotate to Explore"}
        </span>
      </div>
    </div>
  );
}
