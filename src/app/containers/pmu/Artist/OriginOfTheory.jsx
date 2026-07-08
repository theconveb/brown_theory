import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function OriginOfTheory() {
  return (
    <section className="w-full min-h-screen grid grid-cols-2 overflow-hidden">

      {/* LEFT — text content */}
      <div className="flex flex-col justify-between px-10 md:px-16 ">

        {/* Heading — top */}
        <div>
          <h2 className="text-[#1a1a1a] leading-tight">
            <span className="text-4xl md:text-[64px] font-light">
              The{" "}
              <span className={`${playfair.className} font-normal text-5xl md:text-[96px]`}>
                O
              </span>
              rigin of
            </span>
            <br />
            <span
              className={`${playfair.className} italic font-normal text-4xl md:text-[64px] `}
            >
              the Theory
            </span>
          </h2>
        </div>

        {/* Body text — bottom */}
        <div className="max-w-sm">
          <p className="text-[#1a1a1a] text-xs md:text-sm leading-relaxed">
            Every great theory begins with an observation. For us, it started in
            the field. After completing rigorous, specialized studies in
            permanent cosmetics, we began our journey as freelance PMU artists.
            Working one-on-one with clients, we witnessed firsthand the profound
            impact a single brow stroke or lip tint could have. We weren&apos;t
            just changing appearances; we were restoring lost symmetry, saving
            precious morning hours, and giving people a renewed sense of
            unshakeable confidence.
          </p>
        </div>

      </div>

      {/* RIGHT — full height image */}
      <div className="relative w-full h-full min-h-screen">
        <Image
          src="/pngs/about_thoery.png"
          alt="The Origin of the Theory"
          fill
          className="object-cover object-center"
        />
      </div>

    </section>
  );
}