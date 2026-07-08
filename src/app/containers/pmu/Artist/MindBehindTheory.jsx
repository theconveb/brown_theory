import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function MindBehindTheory() {
  return (
    <section className=" w-full h-screen relative overflow-hidden">

      {/* SVG arc — full bleed */}
      <div className="absolute top-8 left-1/4 translate-x-5 translate-y-8 ml-10 z-0">
        <img
          src="/svgs/artistpmubg.svg"
          alt=""
          className="object-cover pointer-events-none"
        />
      </div>

      {/* Heading — top left corner */}
      <div className="absolute top-10 left-12 md:top-14 md:left-20 z-10 flex flex-col leading-none gap-1">
        <span className="text-[#1a1a1a] text-lg md:text-[64px] font-light tracking-wide">
          The
        </span>
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className={`${playfair.className} text-5xl md:text-[96px] font-normal text-[#1a1a1a]`}>
            Mind
          </span>
          <span className="text-[#1a1a1a] text-lg md:text-[64px] font-light">
            Behind the
          </span>
        </div>
        <span className={`${playfair.className} text-5xl md:text-[96px] font-normal text-[#1a1a1a]`}>
          Theory
        </span>
      </div>

      {/* Circle — absolute center */}
      <div className="absolute top-62 left-1/2 -translate-x-1/2  z-10 w-[260px] h-[260px] md:w-[500px] md:h-[500px] rounded-full bg-[#C8C5C0] overflow-hidden">
        <Image
          src="/images/founder.jpg"
          alt="Founder"
          fill
          className="object-cover"
        />
      </div>

      {/* Name — bottom right */}
      <p className={`${playfair.className} absolute bottom-12 right-16 md:bottom-16 md:right-52 text-[#1a1a1a] text-2xl md:text-[64px] font-normal z-10`}>
        Anjusree
      </p>

    </section>
  );
}