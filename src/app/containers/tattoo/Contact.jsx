import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="w-full bg-white px-5 sm:px-10 lg:px-14 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16">

      {/* ── Contact label top-left ── */}
      <p className="text-black text-sm tracking-wide">Contact</p>

      {/* ── Main content row ── */}
      <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row gap-10 lg:gap-0">

        {/* ── LEFT: two images + brand name ── */}
        <div className="flex flex-col lg:w-1/2">

          {/* Two side-by-side images */}
          <div className="flex items-start gap-3 sm:gap-4">

            {/* BIG image — taller */}
            <div className="relative bg-neutral-200 w-56 h-64 sm:w-72 sm:h-80 lg:w-80 lg:h-96 shrink-0">
              <Image
                src="/images/contact-1.jpg"
                alt="Studio photo 1"
                fill
                quality={85}
                className="object-cover"
              />
            </div>

            {/* SMALL image — shorter, sits top-aligned */}
            <div className="relative bg-neutral-200 w-40 h-48 sm:w-52 sm:h-60 lg:w-56 lg:h-64 shrink-0">
              <Image
                src="/images/contact-2.jpg"
                alt="Studio photo 2"
                fill
                quality={85}
                className="object-cover"
              />
            </div>

          </div>

          {/* Brand name below images */}
          <div className="mt-5 sm:mt-6">
            <p className="font-black text-black leading-none text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              BROWN<br />THEORY
            </p>
          </div>

        </div>

        {/* ── RIGHT: heading + description + button ── */}
        <div className="lg:w-1/2 flex flex-col justify-center lg:pl-8 xl:pl-16">

          {/* Big heading */}
          <h2 className="font-black text-black leading-none tracking-tight text-[clamp(4rem,10vw,9rem)]">
            Let's<br />Connect
          </h2>

          {/* Description */}
          <p className="mt-6 sm:mt-8 text-black/80 text-base sm:text-lg text-center lg:text-center leading-relaxed max-w-md mx-auto lg:mx-0">
            I work in a beautiful and comfortable studio in Thrissur
            come and experience the environment and get you self a tattoo
          </p>

          {/* Connect button */}
          <div className="mt-8 sm:mt-10 flex lg:justify-end">
            <button className="bg-black text-white font-bold text-base sm:text-lg px-16 sm:px-20 py-4 sm:py-5 hover:bg-neutral-800 transition-colors w-full sm:w-auto">
              Connect
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}