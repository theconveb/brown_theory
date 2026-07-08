import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function TrueArtistry() {
  return (
    <section className=" w-full min-h-screen flex flex-col items-center px-6 md:px-16 py-16 overflow-hidden">

      {/* Pill / capsule image — top center */}
      <div className="relative w-[180px] md:w-[220px] h-[50px] md:h-[60px] rounded-full bg-[#C8C5C0] overflow-hidden mb-10">
        <Image
          src="/images/founder-pill.jpg"
          alt="Founder"
          fill
          className="object-cover"
        />
      </div>

      {/* Quote — center */}
      <div className="text-center max-w-5xl mb-12">
        <p className="text-[#1a1a1a] text-2xl md:text-[40px] leading-snug font-light">
          <span className="text-3xl md:text-5xl font-light">&ldquo;</span>
          <span className={`${playfair.className} italic font-normal text-2xl md:text-[70px]`}>
            True artistry{" "}
          </span>
          isn&apos;t about altering how you look.
          <br />
          it&apos;s about decoding the symmetry already hidden in your features.&rdquo;
        </p>
      </div>

      {/* Bottom row — left image, center text, right image */}
      <div className="w-full flex items-end justify-between gap-6 md:gap-10">

        {/* Left image */}
        <div className="relative w-[220px] md:w-[280px] h-[280px] md:h-[360px] shrink-0 bg-[#C8C5C0] overflow-hidden rounded-sm">
          <Image
            src="/images/artistry-left.jpg"
            alt="Artistry left"
            fill
            className="object-cover"
          />
        </div>

        {/* Center text */}
        <div className=" flex items-end justify-center px-4 md:px-10 ">
          <p className="text-[#1a1a1a] text-xs md:text-sm leading-relaxed text-center max-w-xl">
            We don&apos;t believe in trends; we believe in facial architecture.
            Led by a passion for premium, high-contrast aesthetics, our master
            artist approaches every brow and lip enhancement as a delicate
            balance of science and design. By mastering the exact physics of
            pigment retention and the geometry of natural bone structure, they
            ensure your results aren&apos;t just beautiful—they are a
            personalized masterpiece.
          </p>
        </div>

        {/* Right image */}
        <div className="relative w-[220px] md:w-[280px] h-[280px] md:h-[360px] shrink-0 bg-[#C8C5C0] overflow-hidden rounded-sm">
          <Image
            src="/images/artistry-right.jpg"
            alt="Artistry right"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}