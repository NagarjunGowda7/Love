import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function JasminePetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate petals with randomized sizes, speeds, and starting positions
    const newPetals = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      xStart: Math.random() * 100, // percentage of screen width
      size: Math.random() * 15 + 10, // 10px to 25px
      delay: Math.random() * 10, // staggered start
      duration: Math.random() * 15 + 20, // slow descent 20s to 35s
      sway: Math.random() * 60 + 40, // pixels of side sway
      rotateSpeed: Math.random() * 360 + 180, // degrees of rotation
      opacity: Math.random() * 0.4 + 0.5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.xStart}%`,
            width: petal.size,
            height: petal.size,
            opacity: petal.opacity,
            top: -30,
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, petal.sway, -petal.sway, 0],
            rotate: [0, petal.rotateSpeed],
          }}
          transition={{
            y: {
              duration: petal.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: petal.delay,
            },
            x: {
              duration: petal.duration / 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: petal.delay,
            },
            rotate: {
              duration: petal.duration / 2,
              repeat: Infinity,
              ease: 'linear',
              delay: petal.delay,
            },
          }}
        >
          {/* Jasmine Petal SVG */}
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(255,255,255,0.15)]"
          >
            <path
              d="M10 2 C13 7, 17 12, 10 18 C3 12, 7 7, 10 2 Z"
              fill="#FFFDF8"
            />
            {/* Soft yellow tint inside for jasmine realism */}
            <path
              d="M10 6 C11.5 9, 13 11, 10 15 C7 11, 8.5 9, 10 6 Z"
              fill="#F5E6D3"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
