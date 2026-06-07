import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// The anniversary start date: June 5, 2015
const ANNIVERSARY_DATE = new Date('2015-06-05T00:00:00');

export default function TimelineBeginning() {
  const [timeShared, setTimeShared] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalHours: 0,
  });

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const diffMs = now.getTime() - ANNIVERSARY_DATE.getTime();

      if (diffMs > 0) {
        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
        const seconds = Math.floor((diffMs / 1000) % 60);
        const totalHours = Math.floor(diffMs / (1000 * 60 * 60));

        setTimeShared({ days, hours, minutes, seconds, totalHours });
      }
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen py-24 px-4 bg-[#234235] flex flex-col items-center justify-center overflow-hidden peacock-pattern">
      {/* Soft overlay gradient */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#1a3228] to-transparent pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-[#FFFDF8] tracking-wide text-glow">The Day Everything Started</h2>
        <div className="w-12 h-[1px] bg-[#F5E6D3]/40 mx-auto mt-4" />
      </div>

      {/* Main Container */}
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glass-card p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between h-full border border-[#F5E6D3]/10"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs bg-[#F5E6D3]/10 border border-[#F5E6D3]/30 px-4 py-1.5 rounded-full text-[#F5E6D3] font-semibold uppercase tracking-widest">
                June 5, 2015
              </span>
            </div>
            <h3 className="font-serif italic text-2xl md:text-3xl text-[#FFFDF8] mb-6 leading-relaxed">
              "I didn't know it then... <br />
              but this moment would change my life forever."
            </h3>
            <p className="text-[#A8A8A8] text-sm md:text-base leading-relaxed mb-6 font-sans">
              It started with a simple hello—a quiet conversation that grew into the most beautiful chapter of my life. Looking back, every memory, every smile, and every shared laugh traces back to this single day.
            </p>
          </div>
          <div className="w-8 h-[1px] bg-[#F5E6D3]/30" />
        </motion.div>

        {/* Dynamic Live Counter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="glass-card p-8 md:p-10 rounded-2xl border border-[#F5E6D3]/10 shadow-xl text-center flex flex-col justify-center items-center"
        >
          <span className="text-[#A8A8A8] text-[10px] tracking-[0.3em] uppercase block mb-6 font-bold">
            TIME WE HAVE SHARED
          </span>

          {/* Grid Layout of Numbers */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-xs mb-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-[#F5E6D3] font-bold text-glow">
                {timeShared.days}
              </span>
              <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mt-1">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-[#F5E6D3] font-bold text-glow">
                {timeShared.hours}
              </span>
              <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mt-1">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-[#F5E6D3] font-bold text-glow">
                {timeShared.minutes}
              </span>
              <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mt-1">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-serif text-[#F5E6D3] font-bold text-glow">
                {timeShared.seconds}
              </span>
              <span className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mt-1 animate-pulse">Seconds</span>
            </div>
          </div>

          {/* Summary Total Hours & Memories */}
          <div className="border-t border-[#F5E6D3]/10 pt-6 w-full space-y-2 select-none">
            <p className="text-sm text-[#FFFDF8]/90 font-serif italic">
              That's over <span className="text-[#F5E6D3] font-sans font-semibold tracking-wide text-glow">{timeShared.totalHours.toLocaleString()} hours</span> of shared moments,
            </p>
            <p className="text-[#FFFDF8] font-serif italic text-base">
              and countless memories ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
