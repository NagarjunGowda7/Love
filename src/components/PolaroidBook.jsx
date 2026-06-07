import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const polaroids = [
  {
    title: 'Lalbagh Meeting ❤️',
    short: 'Namma first outdoor meet, mattu nanna favourite memories alli ondu.',
    long: 'Nijavaglu helbeku andre, namma Lalbagh meeting nange tumba special. Yaakandre adu naavu first time horagade meet aagiddu. Aa dina enu dodda plan irlilla, aadre ninna jothe maatadta, suttaadta kaleda aa time tumba khushi kottittu. Ivattigu Lalbagh andre modlu nenapagodu aa dina mattu neene. ❤️',
    image: 'meeting.png',
    fallbackImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop',
    date: '2018',
  },
  {
    title: 'First Bike Ride 🏍️',
    short: 'Ninna jothegina nanna first bike ride.',
    long: 'Ninna first time nanna bike mele karkondu hogiddu innu chennagi nenapide. Jalahalli hatra meet aagidvi, amele ninna mane kade drop maadidde. Bereyavarige adu simple ride agirbahudu, aadre nange adu tumba special. Aa dina ninna drop madovargu nange onthara khushi ittu. ❤️',
    image: 'ride.png',
    fallbackImage: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=600&auto=format&fit=crop',
    date: 'Special Memory',
  },
  {
    title: 'First Proposal ❤️',
    short: 'Nanna feelings first time ninge talupida dina.',
    long: 'Nange innu nenapide, naan modlu Manoj ge helidde ninge nange estu ishta anta. Avnu Sidhu ge helda, amele avlu ning heludlu. but naan neen opkoty anta tumba kushi li edde adre ad agidde bere adru adnella Ivattigu nenaskondre nagau barutte. ❤️',
    image: 'proposal.png',
    fallbackImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop',
    date: '2015',
  },
  {
    title: 'Letters ✉️',
    short: 'Ninna reply goskara kayta idda dinagalu.',
    long: 'Namma letters exchange maadkondiddu nanna favourite memories alli ondu. Letter kotta mele neen en reply baritiyo anta tumba excitement irtittu. School ge hogodu kuda letter sigutta anta. Aa waiting, aa curiosity, aa happiness ivella ivattigu mareyoke agalla. ❤️',
    image: 'letters.png',
    fallbackImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop',
    date: 'One of the Best Memories',
  },
  {
    title: 'Best Adventure 🌍',
    short: 'Ninna meet maadakke bandaddu nanna life na best adventure.',
    long: 'Nij helbekandre, ninna meet maadakke and book eskoloke bandiddu nanna life na biggest adventure. En agutte en anta gottilla adru dairya madi bandidde yappa eglu aa dina nenaskondre nagu barutte. Aa time alli ashtu dhairya ellinda bantu gottilla, aadre aa decision nanna life na best 1st adebenture memory. ❤️',
    image: 'adventure.png',
    fallbackImage: 'https://images.unsplash.com/photo-1501908731398-2342c462796e?q=80&w=600&auto=format&fit=crop',
    date: 'Unforgettable',
  },
  {
    title: 'Your Eyes 👀',
    short: 'Ninna kannugalu nanna favorite, elladakkinta hecchagi ishta.',
    long: 'Nijavaglu helbeku andre, ninna kannugalu nange tumba ishta. Whenever I look into your eyes, I see a beautiful world of honesty, warmth, and complete peace. They don\'t just look at me; they make me feel like I am home. Out of everything I love in you, your eyes will always be my absolute favorite place to get lost in. ❤️',
    image: 'eyes.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop',
    date: 'What I Love Most',
  },
  {
    title: 'Our Video 🎥',
    short: 'Tap to watch our favorite captured moment.',
    long: 'A short video clip of us—smiling, talking, and enjoying life together. These are the seconds I wish I could pause forever.',
    image: 'video_cover.jpeg',
    fallbackImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop',
    date: 'Captured',
    isVideo: true,
  },
];

export default function PolaroidBook() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeStory, setActiveStory] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % polaroids.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + polaroids.length) % polaroids.length);
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-[#234235] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full bg-[#F5E6D3]/2 opacity-10 filter blur-[80px] pointer-events-none" />

      {/* Section Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-[#FFFDF8] tracking-wide text-glow">Our Best Memories</h2>
        <p className="text-[#A8A8A8] text-sm mt-3 tracking-widest uppercase font-sans">Swipe or tap to flip through our book</p>
        <div className="w-12 h-[1px] bg-[#F5E6D3]/40 mx-auto mt-4" />
      </div>

      {/* Polaroid Deck Container */}
      <div className="relative w-full max-w-sm md:max-w-md h-[460px] flex items-center justify-center z-10 select-none">
        <AnimatePresence mode="popLayout">
          {polaroids.map((card, index) => {
            // Only render current, previous and next card to optimize and create overlapping deck effect
            const offset = index - currentIndex;
            const isCurrent = index === currentIndex;
            const isVisible = Math.abs(offset) <= 1 || (currentIndex === 0 && index === polaroids.length - 1) || (currentIndex === polaroids.length - 1 && index === 0);

            if (!isVisible) return null;

            // Calculate stack position styling
            let zIndex = 10 - Math.abs(offset);
            let rotate = offset * 4;
            let translateX = offset * 25;
            let scale = 1 - Math.abs(offset) * 0.05;

            // Adjust values for wrapping cases
            if (currentIndex === 0 && index === polaroids.length - 1) {
              rotate = -4;
              translateX = -25;
              scale = 0.95;
            } else if (currentIndex === polaroids.length - 1 && index === 0) {
              rotate = 4;
              translateX = 25;
              scale = 0.95;
            }

            return (
              <motion.div
                key={index}
                style={{ zIndex }}
                className={`absolute w-[280px] md:w-[330px] bg-[#FFFDF8] p-4 pb-6 rounded-lg shadow-2xl border border-[#F5E6D3]/35 cursor-pointer flex flex-col justify-between`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: isCurrent ? 1 : scale,
                  x: isCurrent ? 0 : translateX,
                  rotate: isCurrent ? -1 : rotate,
                  y: isCurrent ? 0 : 5,
                }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                onTap={() => {
                  if (isCurrent) {
                    setActiveStory(card);
                  } else {
                    setCurrentIndex(index);
                  }
                }}
                drag={isCurrent ? "x" : false}
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 60) handlePrev();
                  else if (info.offset.x < -60) handleNext();
                }}
              >
                {/* Image Area */}
                <div className="w-full aspect-square overflow-hidden bg-[#234235]/5 relative rounded-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = card.fallbackImage;
                    }}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    draggable="false"
                  />
                  {/* Glass glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#234235]/5 to-transparent pointer-events-none" />
                </div>

                {/* Polaroid Bottom Border Caption */}
                <div className="mt-4 text-center font-serif text-[#234235]">
                  <span className="text-[10px] uppercase font-sans tracking-[0.2em] font-bold opacity-45 block mb-1">
                    {card.date}
                  </span>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs italic leading-relaxed opacity-75 max-w-[240px] mx-auto">
                    "{card.short}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 mt-8 z-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full border border-[#F5E6D3]/20 bg-[#234235]/40 text-[#FFFDF8] hover:bg-[#F5E6D3] hover:text-[#234235] transition-all flex items-center justify-center text-sm font-semibold cursor-pointer shadow-lg"
        >
          ←
        </button>
        <span className="text-xs uppercase tracking-widest text-[#A8A8A8] flex items-center">
          {currentIndex + 1} / {polaroids.length}
        </span>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full border border-[#F5E6D3]/20 bg-[#234235]/40 text-[#FFFDF8] hover:bg-[#F5E6D3] hover:text-[#234235] transition-all flex items-center justify-center text-sm font-semibold cursor-pointer shadow-lg"
        >
          →
        </button>
      </div>

      {/* Expandable Memory Modal / Story reveal */}
      <AnimatePresence>
        {activeStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#152720]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setActiveStory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="glass-card max-w-md w-full p-8 rounded-3xl border border-[#F5E6D3]/25 cursor-default text-center shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative pin */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl select-none">
                📍
              </div>

              <span className="text-xs text-[#A8A8A8] tracking-widest uppercase block mt-2 mb-2 font-bold">
                {activeStory.date}
              </span>
              <h3 className="font-serif text-2xl text-[#F5E6D3] text-glow mb-4">
                {activeStory.title}
              </h3>

              <div className="w-12 h-[1px] bg-[#F5E6D3]/30 mx-auto mb-6" />

              {activeStory.isVideo ? (
                <div className="mb-6 w-full max-w-[280px] mx-auto aspect-[9/16] rounded-xl overflow-hidden border border-[#F5E6D3]/15 shadow-inner bg-black">
                  <video
                    controls
                    className="w-full h-full object-cover animate-fade-in"
                    poster={activeStory.image}
                    loop
                  >
                    <source src="video.mp4" type="video/mp4" />
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-holding-hands-of-a-couple-in-close-up-39945-large.mp4" type="video/mp4" />
                  </video>
                </div>
              ) : (
                <p className="font-serif italic text-lg md:text-xl text-[#FFFDF8]/90 leading-relaxed mb-6">
                  "{activeStory.long}"
                </p>
              )}

              <button
                onClick={() => setActiveStory(null)}
                className="px-6 py-2.5 rounded-full bg-[#F5E6D3]/10 border border-[#F5E6D3]/30 text-xs tracking-widest font-semibold text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#234235] transition-all cursor-pointer"
              >
                Close Story
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
