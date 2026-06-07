import React from 'react';
import { motion } from 'framer-motion';

const dreams = [
  {
    title: 'Learning Car Driving Together',
    subtitle: 'Taking turns behind the wheel, navigation arguments, and finding our own pace.',
    icon: '🚗',
  },
  {
    title: 'Watching Sunrise on a Mountain',
    subtitle: 'Waking up early, wrapping ourselves in blankets, and watching the peaks catch the golden light.',
    icon: '🏔️',
  },
  {
    title: 'Switzerland One Day',
    subtitle: 'Walking through fairytale valleys, snowy mountains, and quiet villages.',
    icon: (
      <svg className="w-5 h-5 inline-block" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" rx="1.5" fill="#D32F2F" />
        <rect x="4" y="2" width="2" height="6" fill="#FFF" />
        <rect x="2" y="4" width="6" height="2" fill="#FFF" />
      </svg>
    ),
  },
  {
    title: 'Building a Home',
    subtitle: 'Creating a warm space filled with books, plants, laughter, and complete comfort.',
    icon: '🏡',
  },
  {
    title: 'Growing Old Together',
    subtitle: 'Living out simple days, holding hands through every single tomorrow.',
    icon: '💚',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 25 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

export default function FutureDreams() {
  return (
    <section className="relative py-28 px-4 bg-[#234235] overflow-hidden pb-48">
      {/* Cinematic Glowing Background Light */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F5E6D3]/2 opacity-10 filter blur-[100px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-[#FFFDF8] tracking-wide text-glow">Our Future Dreams</h2>
        <p className="text-[#A8A8A8] text-sm mt-3 tracking-widest uppercase font-sans">A quiet collection of moments waiting to be lived</p>
        <div className="w-12 h-[1px] bg-[#F5E6D3]/40 mx-auto mt-4" />
      </div>

      {/* Checklist Grid */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {dreams.map((dream, idx) => (
          <motion.div
            key={idx}
            className={`glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-[#F5E6D3]/20 transition-all duration-300 ${
              idx === 4 ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full' : ''
            }`}
            variants={cardVariants}
            whileHover={{ x: 6 }}
          >
            {/* Circle Checkmark indicator */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5E6D3]/10 border border-[#F5E6D3]/35 flex items-center justify-center text-[#F5E6D3] text-sm font-semibold select-none">
              ✓
            </div>

            {/* Content Details */}
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{dream.icon}</span>
                <h3 className="font-serif text-lg md:text-xl text-[#FFFDF8] font-semibold">
                  {dream.title}
                </h3>
              </div>
              <p className="text-[#A8A8A8] text-xs md:text-sm leading-relaxed font-sans">
                {dream.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Layered SVG Mountain Silhouette Footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-[180px] md:h-[240px]"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          {/* Back mountains */}
          <path
            d="M0 240 L0 190 L180 120 L390 200 L600 90 L880 195 L1150 100 L1320 175 L1440 130 L1440 240 Z"
            fill="#F5E6D3"
            opacity="0.04"
          />
          {/* Mid mountains */}
          <path
            d="M0 240 L0 180 L280 140 L520 90 L790 160 L1020 105 L1290 180 L1440 120 L1440 240 Z"
            fill="#1d372c"
            opacity="0.6"
          />
          {/* Front mountains */}
          <path
            d="M0 240 L0 170 L380 130 L720 185 L1080 125 L1440 160 L1440 240 Z"
            fill="#152720"
          />
        </svg>
      </div>
    </section>
  );
}
