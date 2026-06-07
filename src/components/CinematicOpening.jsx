import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import herPhoto from '../assets/her_photo.jpeg';

// Subcomponent for writing characters one by one
function Typewriter({ text, delay = 0, speed = 50, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timer;
    const startTimeout = setTimeout(() => {
      let currentIdx = 0;
      timer = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(currentIdx));
        currentIdx++;
        if (currentIdx >= text.length) {
          clearInterval(timer);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(timer);
    };
  }, [text, delay, speed]);

  return <span>{displayedText}</span>;
}

export default function CinematicOpening() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Her Photo Background with slow zooming Ken Burns effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${herPhoto})` }}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: 'easeOut' }}
      />

      {/* Cinematic dark bottle green overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#234235]/40 via-[#234235]/70 to-[#234235] cinematic-overlay" />
      <div className="absolute inset-0 z-10 vignette" />

      {/* Floating top brand logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none select-none text-center"
      >
        <svg 
          className="w-5 h-5 text-[#F5E6D3] filter drop-shadow-[0_0_8px_rgba(245,230,211,0.3)]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        <span className="text-[9px] tracking-[0.6em] text-[#FFFDF8]/50 font-sans uppercase pl-[0.6em]">P &amp; S</span>
      </motion.div>

      {/* Center Cinematic Typewriter Message */}
      <div className="relative z-20 text-center px-6 max-w-2xl flex flex-col items-center select-none">
        <h1 className="font-serif text-3xl md:text-5xl font-medium tracking-wide text-[#FFFDF8] text-glow leading-relaxed min-h-[140px] md:min-h-[160px] flex flex-col justify-center gap-4">
          <span className="block font-light">
            <Typewriter
              text="Ouut of all the chapters life has given me,"
              delay={800}
              onComplete={() => setShowSecondLine(true)}
            />
          </span>
          {showSecondLine && (
            <span className="block text-[#F5E6D3] italic font-normal text-glow">
              <Typewriter
                text="meeeting you will always be my favorite one. ❤️"
                delay={400}
                onComplete={() => setShowScrollIndicator(true)}
              />
            </span>
          )}
        </h1>
      </div>

      {/* Scroll indicator - fades in when typewriter finishes */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: [0, 1, 0], y: [15, 0, 15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] text-[#A8A8A8] tracking-[0.4em] uppercase">Scroll Down</span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-[#F5E6D3] to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
