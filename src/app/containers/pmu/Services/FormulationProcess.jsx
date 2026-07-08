"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const PROCESS_IMAGES = [
  "/images/microbladingProcess_1.png",
  "/images/microbladingProcess_2.png",
  "/images/microbladingProcess_3.png",
];

export default function FormulationProcess() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      const clamped = Math.min(Math.max(scrollProgress, 0), 1);
      const index = Math.min(
        Math.floor(clamped * PROCESS_IMAGES.length),
        PROCESS_IMAGES.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Tall section — height controls how long user scrolls
    <div
      ref={sectionRef}
      style={{ height: `${PROCESS_IMAGES.length * 100}vh` }}
      className="relative"
    >
      {/* Sticky container — stays while user scrolls */}
      <div className="sticky top-0 h-screen bg-[#F5F0E8] overflow-hidden flex flex-col items-center">

        {/* BG SVG line */}
        <div className="absolute top-36 z-0">
          <img
            src="/svgs/servicebg_2.svg"
            alt=""
            className="object-cover pointer-events-none"
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 w-full flex items-center justify-center pt-16 md:pt-20 px-8">
          <h2 className="text-[#1a1a1a] text-3xl md:text-[64px] font-light text-center">
            The{" "}
            <span className={`${playfair.className} italic font-normal text-5xl md:text-[128px]`}>
              Formulation
            </span>{" "}
            Process
          </h2>
        </div>

        {/* Fade image */}
        <div className="relative z-10 w-[320px] md:w-[560px] lg:w-[640px] h-[200px] md:h-[320px] mt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={PROCESS_IMAGES[activeIndex]}
                alt={`Process step ${activeIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="relative z-10 flex gap-2 mt-6">
          {PROCESS_IMAGES.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-[#1a1a1a] scale-125" : "bg-[#1a1a1a]/30"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}