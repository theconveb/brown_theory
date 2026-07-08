export default function Footer() {
  return (
    <footer className="w-full bg-white">

      {/* ── Top section ── */}
      <div className="px-5 sm:px-10 lg:px-14 pt-10 sm:pt-14 lg:pt-16 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">

        {/* LEFT: Socials + Contact */}
        <div className="flex gap-16 sm:gap-24">

          {/* Socials */}
          <div>
            <p className="text-black text-sm sm:text-base">Socials :</p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="block text-black text-sm sm:text-base hover:opacity-60 transition-opacity mt-1">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="block text-black text-sm sm:text-base hover:opacity-60 transition-opacity mt-0.5">
              Facebook
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="text-black text-sm sm:text-base">Contact :</p>
            <a href="mailto:browntheory.gmail.com"
              className="block text-black text-sm sm:text-base hover:opacity-60 transition-opacity mt-1">
              browntheory.gmail.com
            </a>
          </div>

        </div>

        {/* RIGHT: Training CTA */}
        <div className="flex flex-col items-start lg:items-end">

          <h3 className="font-black text-black leading-tight text-right text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
            Tattoo artist<br />training
          </h3>

          <p className="mt-4 text-black/80 text-sm sm:text-base text-left lg:text-right leading-relaxed">
            Want to create amazing, realistic tattoos?<br />
            Your journey starts here.
          </p>

          <button className="mt-6 bg-black text-white font-bold text-sm sm:text-base px-10 sm:px-14 py-3 sm:py-4 hover:bg-neutral-800 transition-colors">
            yes , Join now
          </button>

        </div>
      </div>

      {/* ── BROWN THEORY full-width wordmark ── */}
      <div className="mt-10 sm:mt-14 overflow-hidden text-center">
        <p className="font-black text-black text-[10.5rem] ">
          BROWN THEORY
        </p>
      </div>

      {/* ── Copyright ── */}
      <div className="pb-6 sm:pb-8 flex justify-center mt-2">
        <p className="text-black/50 text-xs sm:text-sm tracking-wide">
          browntheory@2026 . All rights reserved
        </p>
      </div>

    </footer>
  );
}