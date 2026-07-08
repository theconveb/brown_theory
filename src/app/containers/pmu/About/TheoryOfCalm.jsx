'use client';
export default function TheoryOfCalm() {
  const images = [
    { src: "/images/calm-1.jpg", alt: "Brown Theory studio interior" },
    { src: "/images/calm-2.jpg", alt: "Calm treatment space" },
    { src: "/images/calm-3.jpg", alt: "PMU sanctuary detail" },
  ];

  return (
    <section className=" min-h-screen px-8 md:px-16 py-16 md:py-24">

      {/* Header */}
      <div className="mb-10 md:mb-14">
        <p className="text-[#2C2A25] text-lg md:text-xl font-light tracking-wide leading-snug">
          The Theory of
        </p>
        <h1 className="text-[#2C2A25] text-7xl md:text-9xl font-serif font-normal leading-none mt-1">
          Calm
        </h1>
      </div>

      {/* Body text */}
      <p className="text-[#5C5A55] text-sm md:text-base leading-relaxed max-w-3xl mb-12 md:mb-16">
        Step into a space designed entirely around modern minimalism and serene
        comfort. From the soft, warm lighting to the clean, curated interiors,
        the environment at BROWN THEORY is crafted to feel less like a clinical
        studio and more like an upscale sanctuary. Here, you can completely
        unwind, relax your shoulders, and trust that your beauty is in expert,
        precise hands.
      </p>

      {/* Image grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-square w-full bg-[#D6D3CC] overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

    </section>
  );
}