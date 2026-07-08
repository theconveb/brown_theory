"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const leftImages = [
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
];

const rightImages = [
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
  "/images/abouttheory.jpg",
];

function MarqueeColumn({ images, duration }) {
  const doubled = [...images, ...images];
  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="flex flex-col gap-5"
        style={{ animation: `marqueeUp ${duration}s linear infinite` }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="relative w-[265px] h-[350px]  shrink-0 bg-[#2a1a0e]"
          >
            <Image
              src={src}
              alt={`Enhancement ${(i % images.length) + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TheoryOfEnhancement() {
  return (
    <section className="relative bg-[#1a0d06] min-h-screen flex overflow-hidden px-10">


      {/* LEFT — text */}
      <div className="relative z-10 flex flex-col justify-between w-1/2 px-16 py-16">
      {/* SVG background — full bleed */}
      <div className="absolute inset-0 z-0">
        <img
          src="/svgs/aboutpmubg_3.svg"
          alt="line"
          className="object-cover h-full pointer-events-none"
        />
      </div>

        <div className="flex flex-col gap-2">
          <h2
            className={`${playfair.className} text-white text-5xl font-normal leading-tight`}
          >
            The{" "}
            <span className={`${playfair.className} italic`}>Theory</span> of
          </h2>
          <h1
            className={`${playfair.className} text-white text-8xl font-normal leading-none`}
          >
            Enhancement
          </h1>
        </div>

        <p className="text-[#b0a090] text-sm leading-relaxed max-w-xl">
          We don&apos;t believe in one-size-fits-all beauty. Our specialized
          permanent makeup services are rooted in the science of facial symmetry
          and the art of subtle transformation. Using premium pigments and
          advanced techniques, we design custom brows, lips, and eyeliner that
          seamlessly blend with your natural features, giving you a flawless,
          low-maintenance look that lasts.
        </p>
      </div>

      {/* RIGHT — marquee columns */}
      <div className="relative z-10 flex gap-5 h-screen  p-3">
        <div className="flex-1 overflow-hidden">
          <MarqueeColumn images={leftImages} duration={15} />
        </div>
        <div className="flex-1 overflow-hidden">
          <MarqueeColumn images={rightImages} duration={25} />
        </div>
      </div>

    </section>
  );
}