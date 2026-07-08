// PortfolioSection.jsx
// Next.js component — requires Tailwind CSS + next/image
// Fonts (add to globals.css):
//   @import url('https://fonts.googleapis.com/css2?family=WindSong:wght@400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');
//
// Images: place in /public/images/
//   poseidon-1.jpg, poseidon-2.jpg, poseidon-3.jpg
//   abstract-1.jpg, abstract-2.jpg, abstract-3.jpg

import Image from "next/image";
import Link from "next/link";

function ArrowIcon({ className = "" }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className={className}>
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
}

function StarIcon({ className = "" }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
        </svg>
    );
}

export default function PortfolioSection() {
    return (
        <section className="w-full bg-white">

            {/* ── Portfolio label top-right ── */}
            <div className="flex justify-end px-6 pt-8 sm:px-10 sm:pt-10 lg:px-14 lg:pt-12">
                <span
                    className="text-black text-xs sm:text-sm tracking-widest uppercase"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                    Portfolio
                </span>
            </div>

            {/* ── Section heading ── */}
            <div className="px-6 pt-6 pb-10 text-center sm:px-10 sm:pt-8 sm:pb-14 lg:px-14 lg:pt-10 lg:pb-16">
                <h2
                    className="text-black font-light leading-tight text-[clamp(2rem,6vw,4.5rem)]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                    Explore<br />the Art of Tattooing
                </h2>
            </div>

            {/* ══════════════════════════════════════════════════════════
          PROJECT 1 – THE POSEIDON
          [  BIG  ] [ small ]
                     [ small ]   | script →
      ══════════════════════════════════════════════════════════ */}
            <div className="px-6 sm:px-10 lg:px-14">
                <div className="grid grid-cols-12 gap-3 sm:gap-5 lg:gap-6 items-start">

                    {/* Image block */}

                    {/* BIG image left, two smalls stacked right */}
                    <div className="col-span-12 md:col-span-5 relative overflow-hidden bg-neutral-100"
                        style={{ aspectRatio: "3/4" }}>
                        <Image src="/images/port-1.jpg" alt="Poseidon tattoo – full sleeve"
                            fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
                            <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow" />
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-7 flex flex-col justify-between h-full">
                        <div className="flex gap-3 items-start">
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 flex-1">
                                <div className="relative overflow-hidden bg-neutral-100" style={{ aspectRatio: "2/3" }}>
                                    <Image src="/images/port-1.jpg" alt="Poseidon tattoo – detail"
                                        fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute bottom-2 right-2">
                                        <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow" />
                                    </div>
                                </div>
                                <div className="relative overflow-hidden bg-neutral-100" style={{ aspectRatio: "2/3" }}>
                                    <Image src="/images/port-1.jpg" alt="Poseidon tattoo – shoulder"
                                        fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>

                            <div className="hidden sm:flex items-center justify-center self-stretch py-2">
                                <span
                                    className="text-black leading-none select-none"
                                    style={{
                                        fontFamily: "'WindSong', cursive",
                                        fontSize: "clamp(1.1rem, 2.5vw, 2.2rem)",
                                        writingMode: "vertical-rl",
                                        textOrientation: "mixed",
                                        whiteSpace: "nowrap",
                                        transform: "rotate(180deg)",
                                    }}
                                >
                                    the Poseidon
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end gap-6 mt-3 sm:mt-4">
                            <span
                                className="text-[10px] sm:text-xs text-black/50 tracking-widest uppercase"
                                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                            >
                                the Poseidon
                            </span>
                            <button
                                className="group text-red-600 hover:text-black transition-colors"
                                aria-label="View Abstract Tattoo"
                            >
                                <ArrowIcon className="w-7 h-7 sm:w-20 sm:h-20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* ══════════════════════════════════════════════════════════
          PROJECT 2 – ABSTRACT TATTOO
          script ← | [ med ] [ sm ]  [    BIG    ]
      ══════════════════════════════════════════════════════════ */}
            <div className="px-6 mt-14 sm:px-10 sm:mt-20 lg:px-14 lg:mt-24">
                <div className="flex gap-3 sm:gap-5 lg:gap-6 items-end">

                    {/* Script label vertical – left */}
                    <div className="hidden sm:flex items-center justify-center shrink-0 self-stretch py-2">
                        <span
                            className="text-black leading-none select-none"
                            style={{
                                fontFamily: "'WindSong', cursive",
                                fontSize: "clamp(1.1rem, 2.5vw, 2.2rem)",
                                writingMode: "vertical-rl",
                                textOrientation: "mixed",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Abstract tattoo
                        </span>
                    </div>

                    {/* Image block — aligned to top */}
                    <div className="flex-1 grid grid-cols-12 gap-2 sm:gap-3 lg:gap-4 items-start min-w-0">

                        <div className="col-span-7 flex flex-col justify-between h-full">
                            <div className="grid grid-cols-7 gap-2 sm:gap-3 lg:gap-4 items-start">
                                {/* MEDIUM — 4 columns */}
                                <div className="relative overflow-hidden bg-neutral-100 self-start col-span-4"
                                    style={{ aspectRatio: "3/4.2" }}>
                                    <Image src="/images/port-1.jpg" alt="Abstract tattoo – shoulder"
                                        fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>

                                {/* SMALL — 3 columns */}
                                <div className="relative overflow-hidden bg-neutral-100 self-start col-span-3"
                                    style={{ aspectRatio: "3/3.6" }}>
                                    <Image src="/images/port-1.jpg" alt="Abstract tattoo – close up"
                                        fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute bottom-2 right-2">
                                        <StarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-white drop-shadow" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-end gap-6 mt-3 sm:mt-4">
                                <span
                                    className="text-[10px] sm:text-xs text-black/50 tracking-widest uppercase"
                                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                                >
                                    Abstract Tattoo
                                </span>
                                <button
                                    className="group text-red-600 hover:text-black transition-colors"
                                    aria-label="View Abstract Tattoo"
                                >
                                    <ArrowIcon className="w-7 h-7 sm:w-20 sm:h-20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </div>
                        </div>

                        {/* BIG — 5 columns */}
                        <div className="relative min-w-0 overflow-hidden bg-neutral-100 self-start col-span-5"
                            style={{ aspectRatio: "3/5" }}>
                            <Image src="/images/port-1.jpg" alt="Abstract tattoo – full arm"
                                fill quality={85} className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Footer CTA bar ── */}
            <div className="my-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-stretch border border-black/10">

                <div className="flex items-center px-6 py-7 sm:px-10 sm:py-8 lg:px-14 sm:flex-1">
                    <p
                        className="text-black text-sm sm:text-2xl leading-snug"
                    >
                        Combine your ideas and transform<br />
                        them into a tattoo.
                    </p>
                </div>

                <Link
                    href="/portfolio"
                    className="group flex items-center justify-between bg-neutral-900 text-white
            px-8 py-7 sm:px-12 sm:py-8 hover:bg-black transition-colors duration-300
            sm:min-w-[340px] lg:min-w-[400px]"
                >
                    <span
                        className="text-sm sm:text-base tracking-[0.2em] uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        View All Works
                    </span>
                    <span
                        className="text-sm sm:text-base font-light ml-10 opacity-70"
                        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    >
                        20+
                    </span>
                </Link>
            </div>
            <hr className="w-7xl mx-auto border-t border-[#050505] my-8" />


        </section>
    );
}