import Image from "next/image";

export default function AboutTheory() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 w-full bg-white">

      {/* LEFT COLUMN — needs relative so SVG is scoped inside it */}
      <div className="relative flex flex-col items-center justify-between text-center py-20">

        {/* SVG behind content — z-0, absolute inside left column */}
        <img
          src="/svgs/aboutpmubg_2.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full  z-0 pointer-events-none"
        />

        {/* All content above SVG — z-10 */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Image
            src="/images/btlogo-vector.jpeg"
            alt="Brown Theory"
            width={200}
            height={200}
            className="w-[120px] h-[120px] object-cover"
          />
          <p className="text-center mt-4 text-[32px]">BROWN THEORY</p>
          <p>The <span>theory</span> of symmetry and shade.</p>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <Image
            src="/images/abouttheory.jpg"
            alt="Brown Theory"
            width={200}
            height={250}
            className="w-[155px] h-[190px] object-cover"
          />
          <p className="text-center w-sm">
            Where advanced PMU technique meets the natural contours of your face.
            Every stroke is intentional, every pigment is precise.
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <Image
          src="/pngs/about_thoery.png"
          alt="Brown Theory"
          width={700}
          height={800}
          className="w-full h-[780px] object-cover"
        />
      </div>

    </div>
  );
}