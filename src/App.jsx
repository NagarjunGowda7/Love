import React from 'react';
import JasminePetals from './components/JasminePetals';
import CinematicOpening from './components/CinematicOpening';
import TimelineBeginning from './components/TimelineBeginning';
import PolaroidBook from './components/PolaroidBook';
import MeaningCard from './components/MeaningCard';
import HeartwrittenNote from './components/HeartwrittenNote';
import FutureDreams from './components/FutureDreams';
import SurpriseSurprise from './components/SurpriseSurprise';

function App() {
  return (
    <div className="relative min-h-screen bg-[#234235] text-[#FFFDF8] font-sans selection:bg-[#F5E6D3] selection:text-[#234235] overflow-x-hidden">
      {/* Slow floating jasmine petals throughout the web app */}
      <JasminePetals />

      {/* Main Sections */}
      <main className="relative z-10 w-full">
        {/* Frame 1 — Cinematic Opening */}
        <CinematicOpening />

        {/* Frame 2 — The Day Everything Started */}
        <TimelineBeginning />

        {/* Frame 3 — Our Best Memories */}
        <PolaroidBook />

        {/* Frame 4 — What You Mean To Me */}
        <MeaningCard />

        {/* Frame 5 — Letter From My Heart */}
        <HeartwrittenNote />

        {/* Frame 6 — Future Dreams */}
        <FutureDreams />

        {/* Frame 7 — Climax Surprise */}
        <SurpriseSurprise />
      </main>

      {/* Custom decorative elegant footer */}
      <footer className="relative py-12 text-center text-xs tracking-[0.25em] text-[#A8A8A8]/60 border-t border-[#F5E6D3]/10 bg-[#152720] z-10">
        <div className="max-w-4xl mx-auto px-4 space-y-2">
          <p className="uppercase">Handcrafted with Love &amp; Care • 2026</p>
          <p className="font-serif italic capitalize text-[#F5E6D3]/40 text-sm">
            For the girl who is the most beautiful chapter of my life.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
