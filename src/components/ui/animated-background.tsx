"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingLight {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export function AnimatedBackground() {
  const [lights, setLights] = useState<FloatingLight[]>([]);

  useEffect(() => {
    const generateLights = () => {
      const newLights: FloatingLight[] = [];
      const colors = ['#dbfc7f', '#a5ebc7', '#85e7ea', '#e3f897'];
      
      for (let i = 0; i < 15; i++) {
        newLights.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 10,
        });
      }
      setLights(newLights);
    };

    generateLights();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full opacity-20"
          style={{
            backgroundColor: light.color,
            width: `${light.size}px`,
            height: `${light.size}px`,
            left: `${light.x}%`,
            top: `${light.y}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.5, 0.8, 1],
            opacity: [0.2, 0.5, 0.1, 0.2],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbfc7f]/5 via-transparent to-[#a5ebc7]/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(219,252,127,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(165,235,199,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(133,231,234,0.05),transparent_50%)]" />
    </div>
  );
}