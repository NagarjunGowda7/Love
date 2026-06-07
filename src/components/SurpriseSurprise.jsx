import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function SurpriseSurprise() {
  const [isActivated, setIsActivated] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [wish, setWish] = useState('');
  const [wishSent, setWishSent] = useState(false);
  const [showSecretLetter, setShowSecretLetter] = useState(false);
  const musicRef = useRef(null);

  const handleSurpriseClick = () => {
    setIsActivated(true);
    setIsPlayingMusic(true);

    // Play music
    if (musicRef.current) {
      musicRef.current.play().catch((err) => {
        console.log("Music play blocked or failed:", err);
      });
    }

    // High-end multi-stage Confetti Shower
    // Burst 1: Central Explosion
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#234235', '#F5E6D3', '#A8A8A8', '#FFFDF8'],
    });

    // Burst 2: Left Side
    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 55,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors: ['#F5E6D3', '#234235'],
      });
    }, 250);

    // Burst 3: Right Side
    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 125,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors: ['#F5E6D3', '#234235'],
      });
    }, 500);

    // Burst 4: Magic falling stars duration
    setTimeout(() => {
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;
      const colors = ['#FFFDF8', '#F5E6D3'];

      (function frame() {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      }());
    }, 800);
  };

  const toggleMusic = () => {
    if (musicRef.current) {
      if (isPlayingMusic) {
        musicRef.current.pause();
      } else {
        musicRef.current.play().catch(e => console.log(e));
      }
      setIsPlayingMusic(!isPlayingMusic);
    }
  };

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!wish.trim()) return;
    
    // Save the wish in browser localStorage
    localStorage.setItem('love_birthday_wish', wish.trim());
    
    // Save to free zero-setup online database
    const encodedWish = encodeURIComponent(wish.trim());
    fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/b56g084y/latest_wish/${encodedWish}`, {
      method: 'POST'
    }).catch((err) => {
      console.log("Failed to save wish online:", err);
    });
    
    setWishSent(true);

    // Mini star sparkles
    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.75 },
      colors: ['#F5E6D3', '#FFFDF8'],
    });
  };

  return (
    <section className="relative min-h-screen py-24 px-4 bg-[#1a3228] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Audio Source with fallbacks */}
      <audio ref={musicRef} loop>
        <source src="song.mp3" type="audio/mpeg" />
        <source src="https://assets.mixkit.co/music/preview/mixkit-love-keys-82.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Music Controls (only visible after climax is activated) */}
      <AnimatePresence>
        {isActivated && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 glass-card px-4 py-3 rounded-full flex items-center gap-2 border border-[#F5E6D3]/20 text-[#FFFDF8] hover:bg-[#F5E6D3] hover:text-[#234235] transition-all duration-300 shadow-xl cursor-pointer"
          >
            {isPlayingMusic ? (
              <>
                <span className="flex items-center gap-0.5">
                  <span className="w-1 h-3 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <span className="w-1 h-4.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  <span className="w-1 h-3.5 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                </span>
                <span className="text-xs font-semibold tracking-wider">Mute Music</span>
              </>
            ) : (
              <>
                <span className="text-xs font-semibold tracking-wider">Play Music</span>
                <span className="text-xs">▶</span>
              </>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-3xl w-full text-center relative z-10">
        <AnimatePresence mode="wait">
          {!isActivated ? (
            /* Climax Entrance Button */
            <motion.div
              key="pre-surprise"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="font-serif italic text-2xl md:text-3xl text-[#F5E6D3] text-glow mb-4">
                And...
              </h2>
              <motion.button
                onClick={handleSurpriseClick}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(245,230,211,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 rounded-full bg-[#F5E6D3] text-[#234235] font-serif text-lg md:text-xl font-bold tracking-wider cursor-pointer border border-[#FFFDF8]/30 shadow-2xl transition-all duration-300"
              >
                There's One Last Thing...
              </motion.button>
            </motion.div>
          ) : (
            /* Full-Screen Romantic Typographic Surprise */
            <motion.div
              key="post-surprise"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center min-h-[80vh] py-8 text-center space-y-12 select-none"
            >
              {/* Header Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="font-serif text-4xl md:text-7xl font-bold text-[#FFFDF8] tracking-tight text-glow"
              >
                Happy Birthday, <br />
                <span className="text-[#F5E6D3] italic font-normal font-serif">My Love ❤️</span>
              </motion.h1>

              {/* Core Poetic Quotes */}
              <div className="space-y-8 max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="font-serif italic text-xl md:text-3xl text-[#FFFDF8]/90 leading-relaxed"
                >
                  "Out of all the people, <br />
                  all the places, all the moments, <br />
                  my favorite will always be <span className="text-[#F5E6D3] not-italic font-sans font-semibold tracking-wide text-glow">you</span>."
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 2.0 }}
                  className="font-serif text-lg md:text-2xl text-[#A8A8A8] tracking-wide"
                >
                  Thank you for choosing me every day.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, delay: 2.8, type: 'spring' }}
                  className="font-serif italic text-3xl md:text-5xl text-[#F5E6D3] font-bold text-glow"
                >
                  I love you.
                </motion.p>

                {/* Centered hidden note ornament trigger */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  whileHover={{ opacity: 1, scale: 1.15 }}
                  onClick={() => setShowSecretLetter(true)}
                  className="cursor-pointer text-[#F5E6D3]/40 text-sm mt-4 hover:text-[#F5E6D3] transition-all select-none mx-auto w-16 h-8 flex items-center justify-center"
                >
                  ✦ ✿ ✦
                </motion.div>
              </div>

              {/* 11:11 Make a Wish Input Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 3.5 }}
                className="glass-card p-6 rounded-2xl w-full max-w-sm border border-[#F5E6D3]/10"
              >
                <h3 className="font-serif text-lg text-[#F5E6D3] text-glow mb-3">
                  11:11 ✨ Make A Wish
                </h3>
                <AnimatePresence mode="wait">
                  {!wishSent ? (
                    <motion.form
                      key="wish-input-form"
                      onSubmit={handleSendWish}
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <input
                        type="text"
                        placeholder="Write your secret wish here..."
                        value={wish}
                        onChange={(e) => setWish(e.target.value)}
                        className="w-full bg-[#1c352a]/70 border border-[#F5E6D3]/20 rounded-xl px-4 py-2.5 text-xs text-[#FFFDF8] placeholder-[#A8A8A8]/60 focus:outline-none focus:border-[#F5E6D3]/50 transition-all text-center"
                        maxLength={100}
                      />
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-full bg-[#F5E6D3]/10 border border-[#F5E6D3]/35 text-[10px] tracking-widest font-semibold text-[#F5E6D3] hover:bg-[#F5E6D3] hover:text-[#234235] transition-all cursor-pointer"
                      >
                        Send to the Stars 💫
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="wish-sent-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-3"
                    >
                      <p className="text-[#FFFDF8]/90 font-serif italic text-sm">
                        "Your wish has been carried to the stars..."
                      </p>
                      <div className="text-yellow-200 text-sm animate-pulse mt-1">💫</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Secret Letter trigger moved to centered ornament for mobile compatibility */}

      {/* Secret Letter Modal */}
      <AnimatePresence>
        {showSecretLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#152720]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setShowSecretLetter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              className="glass-card max-w-sm w-full p-8 rounded-3xl border border-[#F5E6D3]/25 cursor-default text-center shadow-2xl relative bg-[#FFFDF8] text-[#234235]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Seal */}
              <div className="text-2xl mb-2 select-none">💌</div>
              <h3 className="font-serif italic text-xl font-bold mb-4 text-[#234235]">
                "If you found this, you know me too well 😄❤️"
              </h3>
              
              <div className="w-12 h-[1px] bg-[#234235]/15 mx-auto mb-5" />

              <p className="font-serif italic text-base leading-relaxed mb-6 text-[#234235]/90 text-left">
                Just a little hidden note to say thank you for being the most caring, genuine, and family-oriented person I know. Every conversation we have is my favorite part of the day. You bring true peace to my heart. 
                <br /><br />
                Happy Birthday, my beautiful Sarala Hudugi. <br /><br />
                - Partha
              </p>

              {/* Secret mailbox displaying her wish */}
              {localStorage.getItem('love_birthday_wish') && (
                <div className="mb-6 p-4 rounded-xl bg-[#234235]/5 border border-dashed border-[#234235]/25 text-left text-xs font-sans text-[#234235]/80 animate-fade-in select-text">
                  <span className="font-bold uppercase tracking-wider block text-[9px] opacity-60 mb-1">
                    ✨ Her Secret 11:11 Wish:
                  </span>
                  "{localStorage.getItem('love_birthday_wish')}"
                </div>
              )}

              <button
                onClick={() => setShowSecretLetter(false)}
                className="px-5 py-2 rounded-full bg-[#234235] text-[#FFFDF8] hover:bg-[#1a3228] transition-all text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Close Note
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
