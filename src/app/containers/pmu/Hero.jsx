import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-61px)] min-h-[500px] bg-zinc-950 overflow-hidden flex items-end">
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <video
          className="w-full h-full object-cover"
          src="/vids/vid_pmu.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Cinematic Premium Vignette/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/30" />
      </div>

      {/* BOTTOM HERO TEXT */}
      <div className="relative w-full max-w-8xl mx-auto px-6 pb-14 md:pb-8 z-10 select-text">
        <div className="max-w-[90%] md:max-w-5xl">
          <h1 className="text-[3.25rem] sm:text-[4.5rem] md:text-[7.5rem] lg:text-[8rem] font-bold leading-[0.85] tracking-tighter text-white uppercase drop-shadow-sm">
            Permanent <br className="block sm:hidden" /> Makeup Studio.
          </h1>
          
          {/* Subtle Accent Subtitle (Optional but levels up the look) */}
          <p className="mt-4 text-[10px] md:text-sm tracking-[0.3em] text-zinc-400 uppercase font-medium max-w-md">
            Precision aesthetics / High-end cosmetic artistry
          </p>
        </div>
      </div>
    </section>
  );
}