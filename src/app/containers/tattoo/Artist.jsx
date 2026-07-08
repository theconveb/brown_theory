// ArtistSection.jsx
// Next.js component — requires Tailwind CSS + next/image
// Place TATTOO2.jpg in your /public folder
// Add this to your global CSS or _app.jsx:
//   @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

import Image from "next/image";
import { WindSong } from "next/font/google";
const windSong = WindSong({
  weight: "400",
  subsets: ["latin"]
});
export default function ArtistSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* ── Top label ── */}
      <div className="px-6 pt-8 sm:px-10 sm:pt-10 lg:px-14 lg:pt-12">
        <span
          className="text-black text-xs sm:text-sm tracking-widest uppercase"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          The Artist
        </span>
      </div>

      {/* ── Portrait ── */}
      <div className="flex justify-center mt-8 sm:mt-10 px-6">
        <div
          className="
            relative
            w-[min(340px,75vw)]
            aspect-[4/5]
            overflow-hidden
          "
        >
          <Image
            src="/images/artist.jpg"
            alt="Melvin – Brown Theory tattoo artist"
            fill
            priority
            quality={90}
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ── Script heading ── */}
      <div className="px-4 mt-8 sm:px-10 sm:mt-10 lg:px-14">
        <h2
          className={`${windSong.className} text-3xl sm:text-4xl lg:text-5xl text-center text-black`}
        >
          Hey, I'm Melvin
        </h2>
      </div>

      {/* ── Two-column body text ── */}
      <div
        className="
          px-6 mt-8 pb-20
          grid grid-cols-1 gap-8
          sm:px-10 sm:mt-10 sm:pb-24
          md:grid-cols-2 md:gap-16
          lg:px-14 lg:pb-28
          xl:gap-24
        "
      >
        <p
          className="text-black/80 text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          I like to work with people and create something from zero what is
          going to stay forever on the human body. I do freehand and freestyle
          tattoos – it's about freedom and feeling.
        </p>

        <p
          className="text-black/80 text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: "'EB Garamond', Georgia, serif" }}
        >
          Everyone has their own special energy's which i read in our first 15
          min when we meet: how you smile, how you speak, how you feel yourself.
          There comes an image in my head where i already can see the future
          design for your project.
        </p>
      </div>
      <hr className="w-7xl mx-auto border-t border-[#050505] my-8" />

      {/* ── Subtle bottom rule ── */}
      {/* <div className="absolute bottom-0 left-6 right-6 h-px bg-black/10 sm:left-10 sm:right-10 lg:left-14 lg:right-14" /> */}
    </section>
  );
}