// BookYourJourney.jsx
// Requires: Tailwind CSS + Playfair Display font + framer-motion
'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ContactSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = (val) => useSpring(val, { stiffness: 80, damping: 20 });

  const bookY    = smooth(useTransform(scrollYProgress, [0, 1], [-80,  60]));
  const yourY    = smooth(useTransform(scrollYProgress, [0, 1], [-60,  80]));
  const journeyY = smooth(useTransform(scrollYProgress, [0, 1], [-40, 100]));
  const contactY = smooth(useTransform(scrollYProgress, [0, 1], [-120, 40]));
  const imgY     = smooth(useTransform(scrollYProgress, [0, 1], [60,  -60]));
  const infoY    = smooth(useTransform(scrollYProgress, [0, 1], [40,  -40]));
  const btnY     = smooth(useTransform(scrollYProgress, [0, 1], [80,  -20]));

  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity: sectionOpacity, fontFamily: "'Playfair Display', Georgia, serif" }}
      className="w-full min-h-screen relative flex flex-col justify-between overflow-hidden bg-[#f5f0eb] pt-32 pb-0"
    >
      {/* ── TOP: Headline ── */}
      <div className="relative z-20 px-0">
        <div className="relative flex items-baseline justify-between leading-none">
          <motion.span
            style={{ y: bookY, display: "inline-block" }}
            className="text-[268px] font-normal text-gray-900 leading-none select-none"
          >
            Book
          </motion.span>

          <motion.span
            style={{ y: contactY, display: "inline-block" }}
            className="text-[11px] uppercase text-gray-500 pb-6 tracking-widest select-none"
          >
            contact
          </motion.span>

          <motion.span
            style={{ y: yourY, display: "inline-block" }}
            className="text-[268px] font-normal text-gray-900 leading-none select-none"
          >
            your
          </motion.span>
        </div>

        <div className="text-center leading-none -mt-20 ml-10">
          <motion.span
            style={{ y: journeyY, display: "inline-block" }}
            className="text-[268px] font-normal text-gray-900 leading-none select-none"
          >
            journey
          </motion.span>
        </div>
      </div>

      {/* ── BOTTOM: 2-col full-width grid ── */}
      <div className="mt-auto grid grid-cols-2 w-full">

        {/* Left col — image, full bleed */}
        <motion.div
          style={{ y: imgY }}
          className="overflow-hidden"
        >
          <img
            src="/images/artist.jpg"
            alt="Woman face skincare"
            className="w-full h-[600px] object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Right col — details */}
        <motion.div
          style={{ y: infoY }}
          className="flex  justify-between items-center px-16 py-12"
          >
          <div className="flex justify-center gap-10 ">

            {/* Visit + Follow */}
            <div className="flex flex-col gap-1">
              <p className="text-[9px] uppercase text-gray-400 mb-2 tracking-widest">Visit our shop</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                Thrissur, kerala<br />
                Second Floor, 3748 Yonge Street,<br />
                Toronto, ON M4N 2L4
              </p>
              <button className="mt-3 border border-gray-700 text-[9px] uppercase px-4 py-1.5 w-fit hover:bg-gray-800 hover:text-white transition-colors tracking-widest">
                HOW TO GET ?
              </button>

              <div className="mt-6">
                <p className="text-[9px] uppercase text-gray-400 mb-2 tracking-widest">Follow us</p>
                <p className="text-gray-600 text-[13px]">Facebook</p>
                <p className="text-gray-600 text-[13px]">Instagram</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <p className="text-[9px] uppercase text-gray-400 mb-2 tracking-widest">Contact us</p>
              <p className="text-gray-600 text-[13px] leading-relaxed">
                +911234 56789<br />
                example@gmail.com
              </p>
            </div>
          </div>

          {/* Book Now */}
          <motion.div style={{ y: btnY }} className="absolute bottom-20 -left-16">
            <button
              className="w-32 h-32 rounded-full bg-[#2c1a10] text-white flex items-center justify-center text-[10px] uppercase text-center leading-tight hover:bg-[#1a0f08] transition-colors"
            >
              Book<br />Now
            </button>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}