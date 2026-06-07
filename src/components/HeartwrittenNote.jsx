import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeartwrittenNote() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const voiceRef = useRef(null);

  const handlePlayVoice = () => {
    if (voiceRef.current) {
      if (isPlaying) {
        voiceRef.current.pause();
        setIsPlaying(false);
      } else {
        voiceRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch((err) => {
            console.log("Voice note play failed:", err);
            setHasError(true);
          });
      }
    }
  };

  useEffect(() => {
    const voiceAudio = voiceRef.current;
    if (voiceAudio) {
      const handleEnded = () => setIsPlaying(false);
      voiceAudio.addEventListener('ended', handleEnded);
      return () => {
        voiceAudio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen py-24 px-4 flex items-center justify-center overflow-hidden bg-[#234235] peacock-pattern">
      {/* Hidden audio element loading local voice note */}
      <audio ref={voiceRef} src="voice.mp3" />

      {/* Main Container */}
      <motion.div
        className="max-w-2xl w-full relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FFFDF8]">Letter From My Heart</h2>
          <div className="w-12 h-[1px] bg-[#F5E6D3]/40 mx-auto mt-4" />
        </div>

        {/* Polaroid/Handwritten Paper Envelope structure */}
        <div className="glass-card p-1 rounded-3xl shadow-2xl relative">

          {/* Inner Paper Page */}
          <motion.div
            className="bg-[#F5E6D3] text-[#234235] p-8 md:p-14 rounded-2xl relative overflow-hidden flex flex-col justify-between"
            initial={{ rotate: 1, y: 15 }}
            whileInView={{ rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Subtle notebook lines overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(35,66,53,0.85)_1px,transparent_1px)] bg-[size:100%_2rem]" />

            {/* Letter Greeting */}
            <div className="font-serif italic text-lg md:text-xl border-b border-[#234235]/15 pb-4 mb-6">
              Dearest,
            </div>

            {/* Letter Body */}
            <div className="space-y-6 font-serif italic text-base md:text-lg leading-relaxed text-[#234235]/90">
              <p>
                There are some people who enter our lives and leave memories. <br />
                And then there are a few people who become a part of our life itself. <br />
                You are one of those people for me.
              </p>
              <p>
                Over the years, you have become a part of my happiness, my comfort, my peace, and my everyday life. No matter what kind of day I am having, talking to you somehow makes everything feel a little lighter.
              </p>
              <p>
                What I admire most about you is your heart. The way you care, the way you stay genuine, and the way you bring warmth wherever you go. In a world where so many things change, your simplicity is something I will always cherish.
              </p>
              <p>
                Thank you for every smile, every conversation, every moment of support, and every little thing you do without even realizing how much it means to me.
              </p>
              <p>
                Life has given me many reasons to be grateful, but having you in my life will always be one of the biggest ones.
              </p>
              <p>
                You are not just someone I love. <br />
                You are someone I deeply value, respect, appreciate, and thank God for every single day.
              </p>
              <p>
                And if there is one thing I want you to always remember, it is this: <br />
                No matter how many years pass, how much life changes, or where our journey takes us... <br />
                you will always hold a very special place in my heart. ❤️
              </p>
            </div>

            {/* Interactive Voice Note Button Section */}
            <div className="mt-10 mb-6 py-4 px-6 rounded-xl bg-[#234235]/5 border border-[#234235]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎤</span>
                <div className="text-left">
                  <span className="text-xs uppercase tracking-wider font-sans font-bold opacity-60 block">Partha's Voice</span>
                  <span className="text-sm font-serif italic font-bold">Hear My Heart</span>
                </div>
              </div>

              {/* Play Button & Sound Waves */}
              <div className="flex items-center gap-4">
                {isPlaying && (
                  <div className="flex items-end gap-0.5 h-4 w-8">
                    <div className="w-[3px] bg-[#234235] rounded-full animate-bounce h-2" style={{ animationDelay: '0.1s' }} />
                    <div className="w-[3px] bg-[#234235] rounded-full animate-bounce h-4" style={{ animationDelay: '0.3s' }} />
                    <div className="w-[3px] bg-[#234235] rounded-full animate-bounce h-3" style={{ animationDelay: '0.5s' }} />
                    <div className="w-[3px] bg-[#234235] rounded-full animate-bounce h-1" style={{ animationDelay: '0.2s' }} />
                  </div>
                )}
                <button
                  onClick={handlePlayVoice}
                  className="px-5 py-2 rounded-full bg-[#234235] text-[#FFFDF8] hover:bg-[#1a3228] transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer flex items-center gap-2 shadow-md"
                >
                  {isPlaying ? 'Pause Voice' : 'Play Voice'}
                </button>
              </div>
            </div>

            {/* Helper status text for Nagarjun */}
            {hasError && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] text-red-700/80 font-sans tracking-wide text-center mb-4 leading-normal"
              >
                No voice note found yet! Place your recorded audio in <b>public/voice.mp3</b> to play your own voice here.
              </motion.p>
            )}

            {/* Letter Signoff */}
            <div className="pt-4 border-t border-[#234235]/15 text-right font-serif">
              <p className="text-xs not-italic opacity-60">With all my love,</p>
              <p className="text-xl italic font-bold text-[#234235]/95 mt-0.5">Partha</p>
            </div>

            {/* Wax Seal */}
            <div className="absolute right-8 bottom-6 w-9 h-9 rounded-full bg-[#234235]/10 border border-[#234235]/20 flex items-center justify-center opacity-30 select-none pointer-events-none">
              <span className="text-[10px] tracking-widest font-serif text-[#234235]">P</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
