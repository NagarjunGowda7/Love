import React from 'react';
import { motion } from 'framer-motion';

const meanings = [
  {
    title: 'My Safe Place',
    icon: '❤️',
    quote: 'Whenever something good happens, you’re the first person I want to tell.',
    description: 'You are the calm haven where my heart rests and where I can be entirely myself without any filters.',
  },
  {
    title: 'My Peace',
    icon: '🌸',
    quote: 'Your presence is my favorite quiet in a world that gets too loud.',
    description: 'A single conversation with you sweeps away all the daily noise and replaces it with absolute tranquility.',
  },
  {
    title: 'My Good Morning',
    icon: '☀️',
    quote: 'Waking up knowing I have you makes every sunrise twice as beautiful.',
    description: 'You are the bright warmth that starts my day and the peaceful thought that carries me into sleep.',
  },
  {
    title: 'My Future',
    icon: '🏡',
    quote: 'The only face I see when I close my eyes and imagine all my tomorrow plans.',
    description: 'I don’t know where the years will lead us, but every single path I build has your footsteps right beside mine.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function MeaningCard() {
  return (
    <section className="relative py-24 px-4 bg-[#234235] peacock-pattern overflow-hidden">
      {/* Background soft glowing lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F5E6D3]/2 opacity-15 filter blur-[110px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-[#FFFDF8] tracking-wide text-glow">What You Mean To Me</h2>
        <p className="text-[#A8A8A8] text-sm mt-3 tracking-widest uppercase font-sans">Beyond words, you are my everything</p>
        <div className="w-12 h-[1px] bg-[#F5E6D3]/40 mx-auto mt-4" />
      </div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {meanings.map((item, idx) => (
          <motion.div
            key={idx}
            className="glass-card p-8 rounded-2xl flex flex-col justify-between hover:border-[#F5E6D3]/20 group transition-all duration-300 hover:shadow-[0_12px_30px_rgba(245,230,211,0.06)]"
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            {/* Header & Icon */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl md:text-2xl text-[#F5E6D3] font-semibold">
                {item.title}
              </h3>
              <span className="text-2xl select-none group-hover:scale-115 transition-transform duration-300">
                {item.icon}
              </span>
            </div>

            {/* Core Quote */}
            <p className="font-serif italic text-lg md:text-xl text-[#FFFDF8] leading-relaxed mb-4 text-glow">
              "{item.quote}"
            </p>

            {/* Small description */}
            <p className="text-xs md:text-sm text-[#A8A8A8] border-t border-[#F5E6D3]/10 pt-4 mt-2 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
