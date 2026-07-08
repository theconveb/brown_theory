import Image from "next/image";
import { Poiret_One } from "next/font/google";
import Link from "next/link";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"]
});

export default function Home() {
  const poiretRegular = `${poiret.className} font-normal not-italic`;

  return (
    <>
      {/* ── DESKTOP (lg+): original layout, untouched ── */}
      <div className="relative w-full h-screen overflow-hidden bg-black hidden lg:block">

        {/* <p className="absolute top-0 left-1/2 text-white -translate-x-1/2">BROWN THEORY</p> */}
        <Link
          href="/PMU"
          className="absolute top-0 left-0 h-full cursor-pointer z-10 block"
          style={{
            width: "75%",
            clipPath: "polygon(0 0, 85% 0, 48.5% 100%, 0 100%)"
          }}
        >
          <Image
            src="/images/pmu.jpg"
            alt="PMU"
            fill
            priority
            className="object-contain object-left"
            sizes="75vw"
          />
        </Link>

        <Link
          href="/TATTOO"
          className="absolute top-0 right-0 h-full"
          style={{
            width: "75%",
            clipPath: "polygon(51.2% 0, 100% 0, 100% 100%, 15% 100%)",
          }}
        >
          <Image
            src="/images/tattoo.jpg"
            alt="Tattoo"
            fill
            priority
            className="object-contain object-right"
            sizes="75vw"
          />
        </Link>

        {/* White diagonal line */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            clipPath: "polygon(63.3% 0, 63.6% 0, 36.4% 100%, 36.2% 100%)",
            backgroundColor: "white",
          }}
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center ml-52 z-30 pointer-events-none">
          <div className="flex text-white w-[876px] justify-center items-start pointer-events-auto">
            <div className={`${poiretRegular} text-center text-[128px] leading-[1] space-y-6`}>
              <p>PMU</p>
              <p className="text-4xl">പി.എം.യു</p>
            </div>
            <p className={`${poiretRegular} text-[64px] m-5 mx-26`}>OR</p>
            <div className={`${poiretRegular} text-center text-[128px] leading-[1] space-y-6`}>
              <p>TATTOO</p>
              <p className="text-4xl">ടാറ്റൂ</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── MOBILE / TABLET (below lg) ── */}
      <div className="relative w-full h-screen overflow-hidden bg-black lg:hidden">

        {/*
          White line goes: top-right → bottom-left  (same angle as desktop, just horizontal)
          polygon(100% 36.2%, 100% 36.4%, 0 63.6%, 0 63.3%)
          So:
            - PMU (top) must be clipped ABOVE that line:  top-left, top-right, bottom-right at ~36%, bottom-left at ~63%
            - TATTOO (bottom) must be clipped BELOW:      top-right at ~36%, bottom-right, bottom-left, top-left at ~63%
        *)

        {/* PMU — top panel, clipped below by the diagonal (top-right corner is higher) */}
        <Link
          href="/PMU"
          className="absolute top-0 left-0 w-full h-full cursor-pointer z-10 block"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 36.4%, 0 63.6%)"
          }}
        >
          <Image
            src="/images/pmu.jpg"
            alt="PMU"
            fill
            priority
            className="object-cover object-[50%_25%] sm:object-[50%_20%] md:object-[50%_15%]"
            sizes="100vw"
          />

          {/* PMU label */}
          <div className={`${poiretRegular} absolute inset-x-0 flex flex-col items-center text-white pointer-events-none`}
            style={{ top: "28%" }}>
            <span className="text-[clamp(2.5rem,10vw,5rem)] leading-none">PMU</span>
            <span className="text-[clamp(0.9rem,3.5vw,1.5rem)] mt-1">പി.എം.യു</span>
          </div>
        </Link>

        {/* TATTOO — bottom panel, clipped above by the diagonal */}
        <Link
          href="/TATTOO"
          className="absolute top-0 left-0 w-full h-full z-10 block"
          style={{
            clipPath: "polygon(100% 36.4%, 100% 100%, 0 100%, 0 63.6%)"
          }}
        >
          <Image
            src="/images/tattoo.jpg"
            alt="Tattoo"
            fill
            priority
            className="object-cover object-bottom"
            sizes="100vw"
          />

          {/* TATTOO label */}
          <div className={`${poiretRegular} absolute inset-x-0 flex flex-col items-center text-white pointer-events-none`}
            style={{ top: "68%" }}>
            <span className="text-[clamp(2.5rem,10vw,5rem)] leading-none">TATTOO</span>
            <span className="text-[clamp(0.9rem,3.5vw,1.5rem)] mt-1">ടാറ്റൂ</span>
          </div>
        </Link>

        {/* White diagonal line — top-right to bottom-left, matching image clip edges exactly */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            clipPath: "polygon(100% 36.2%, 100% 36.4%, 0 63.6%, 0 63.3%)",
            backgroundColor: "white",
          }}
        />

        {/* OR label centered on the divider */}
        <div
          className={`${poiretRegular} absolute z-30 text-white pointer-events-none`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span
            className="text-3xl sm:text-3xl p-3 bg-black/90 rounded-full"
          >
            OR
          </span>
        </div>

      </div>
    </>
  );
}