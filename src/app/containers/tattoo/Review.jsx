import Image from "next/image";

function Img({ src, alt, className = "" }) {
    return (
        <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
            <Image src={src} alt={alt} fill quality={85} className="object-cover" />
        </div>
    );
}

function Vid({ src, className = "" }) {
    return (
        <div className={`relative overflow-hidden bg-neutral-200 ${className}`}>
            <video src={src} autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover" />
        </div>
    );
}

export default function ReviewsSection() {
    return (
        <section className="w-full bg-white px-5 sm:px-10 lg:px-14">

            {/* ── Reviews label ── */}
            <div className="flex justify-end pt-8 sm:pt-10 lg:pt-12">
                <span className="text-[11px] sm:text-xs tracking-widest uppercase text-black/60">
                    Reviews
                </span>
            </div>

            {/* ── Heading ── */}
            <div className="mt-3 sm:mt-5 leading-none">
                <p className="font-black text-black text-[clamp(3rem,11vw,8rem)]">Moments</p>
                <p className="font-black text-black text-[clamp(3rem,11vw,8rem)] flex items-baseline gap-3">
                    <span>You</span>
                    <span className="font-windsong font-normal text-[clamp(2.4rem,9vw,6.8rem)]">Shared</span>
                </p>
            </div>

            {/* ══════════════════════════════════════════════════
          SECTION 1
          Three elements all fixed width, placed in a row:
            big image left | top video | bottom video (offset down)
      ══════════════════════════════════════════════════ */}
            <div className="mt-10 sm:mt-14 grid grid-cols-12  gap-4 ">

                {/* BIG image */}
                <div className="col-span-8  flex justify-end">

                    <Img
                        src="/images/review-1.jpg"
                        alt="Tattoo moment 1"
                        className="w-80 h-96 sm:w-96 sm:h-[480px] lg:w-[420px] lg:h-[520px]"
                    />
                </div>

                {/* Right side: two videos stacked diagonally */}
                <div className="col-span-4 flex flex-col justify-between pt-0">
                    {/* top video — sits at top */}
                    <Vid
                        src="/videos/review-v1.mp4"
                        className="w-36 h-44 sm:w-44 sm:h-52 lg:w-48 lg:h-60"
                    />
                    {/* bottom video — pushed right via ml-auto */}
                    <Vid
                        src="/videos/review-v2.mp4"
                        className="w-36 h-44 sm:w-44 sm:h-52 lg:w-48 lg:h-60 ml-auto"
                    />
                </div>

            </div>

            {/* ══════════════════════════════════════
          SECTION 2
          small video + BIG image, bottom-aligned, pushed right
      ══════════════════════════════════════ */}
            <div className="mt-10 sm:mt-14 flex items-end gap-4 justify-end">

                <Vid
                    src="/videos/review-v1.mp4"
                    className="w-28 h-40 sm:w-36 sm:h-48 lg:w-40 lg:h-56"
                />

                <Img
                    src="/images/review-2.jpg"
                    alt="Tattoo moment 2"
                    className="w-64 h-52 sm:w-80 sm:h-64 lg:w-96 lg:h-72"
                />

            </div>

            {/* ══════════════════════════════════════
          SECTION 3
          two landscape images, left and right
      ══════════════════════════════════════ */}
            <div className="mt-10 sm:mt-14 pb-16 sm:pb-20 lg:pb-24 flex justify-between gap-4">

                <Img
                    src="/images/review-3.jpg"
                    alt="Tattoo moment 3"
                    className="w-[42%] h-48 sm:h-56 lg:h-64"
                />

                <Img
                    src="/images/review-4.jpg"
                    alt="Tattoo moment 4"
                    className="w-[42%] h-48 sm:h-56 lg:h-64"
                />

            </div>
            <hr className="w-7xl mx-auto border-t border-[#050505] my-8" />

        </section>
    );
}