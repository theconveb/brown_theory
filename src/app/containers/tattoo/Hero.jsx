import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[500px] max-h-[900px] overflow-hidden bg-black ">

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero_img.jpg"          // place image in /public folder
          alt="Brown Theory – tattoo artist at work"
          fill
          priority
          quality={90}
          className="object-cover object-[45%] md:object-center "
        />
        {/* dark vignette so text pops on all screens */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" /> */}
      </div>

      {/* ── Content wrapper ── */}
      <div className="absolute bottom-20 md:bottom-5 left-3 md:left-0  z-10 flex flex-col  justify-end gap-8   text-white md:flex-row md:justify-between md:items-end md:text-left md:px-10 mx-auto w-full max-w-8xl">
        <div className="order-2 md:order-1 instrument-sans text-[4.5rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8.5rem] xl:text-[128px] leading-[0.9] tracking-tight ">
          <p>BROWN</p>
          <p className="text-[6rem] md:text-[128px] md:ml-48">THEORY</p>
        </div>
        <p className="relative top-20 right-8 md:right-0 md:top-0 order-1 md:order-2 text-xs sm:text-lg md:text-xl text-end">
          Tattoo artist <br /> based in Thrissur.
        </p>
      </div>
      

    </section>
  );
}