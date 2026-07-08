"use client";

export default function TheorySection() {
  const unsplashImages = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=800&q=80",
  ];

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
    >
      {/* Card container — square-ish on desktop, full-width on mobile */}
      <div className="w-full max-w-8xl aspect-square p-6 sm:p-8 md:p-10 flex flex-col gap-3 sm:gap-4">

        {/* ── Row 1: Title ── */}
        <div className="flex-none">
          <h1
            className="text-2xl sm:text-3xl md:text-7xl leading-tight tracking-tight"
          >
            Theory of
            <br />
            <em className="font-normal" style={{ fontStyle: "italic" }}>
              redefining You
            </em>
          </h1>
        </div>

        {/* ── Row 2: Two image strips + one big black square ── */}
        <div className="flex gap-3 sm:gap-4" style={{ flex: "2 1 0" }}>

          {/* Left column: two horizontal strips stacked */}
          <div className="flex flex-col gap-3 sm:gap-4" style={{ flex: 3 }}>
            <div className="overflow-hidden" style={{ flex: 1 }}>
              <img
                src={unsplashImages[0]}
                alt="landscape 1"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="overflow-hidden" style={{ flex: 1 }}>
              <img
                src={unsplashImages[1]}
                alt="landscape 2"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>

          {/* Right column: solid black square */}
          <div
            className="bg-black"
            style={{ flex: 2 }}
          />
        </div>

        {/* ── Row 3: Two wider image strips side by side ── */}
        <div className="flex gap-3 sm:gap-4" style={{ flex: "1.2 1 0" }}>
          <div className="overflow-hidden" style={{ flex: 1 }}>
            <img
              src={unsplashImages[2]}
              alt="landscape 3"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="overflow-hidden" style={{ flex: 1 }}>
            <img
              src={unsplashImages[3]}
              alt="landscape 4"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* ── Row 4: Full-width black bar ── */}
        <div
          className="bg-black w-full h-72"
        />
      </div>
    </div>
  );
}

// import React from 'react';
// import { Playfair_Display } from 'next/font/google';
// import { motion } from 'framer-motion';

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400'],
// });

// const TheorySection = () => {
//   const team = [
//     { id: 1, name: 'Name', delay: 0 },
//     { id: 2, name: 'Name', delay: 0.1 },
//     { id: 3, name: 'Name', delay: 0.2 },
//     { id: 4, name: 'Name', delay: 0.3 },
//     { id: 5, name: 'Name', delay: 0.4 },
//     { id: 6, name: 'Name', delay: 0.5 },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (delay) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//         delay: delay,
//       },
//     }),
//   };

//   return (
//     <section className="relative w-full bg-[#FFFDF9] min-h-screen select-none pb-48 ">
      
//       {/* Sticky Header Layer - Centered horizontally, anchored cleanly near the top */}
//       <div className="sticky top-12 z-10 w-full flex flex-col items-center justify-start pointer-events-none px-6 mb-16 lg:mb-24">
//         <h2 className={`${playfair.className} text-5xl sm:text-6xl md:text-7xl lg:text-[220px] font-normal leading-tight tracking-tight text-[#1C1510] text-center max-w-8xl pointer-events-auto `}>
//           Theory of <br />
//           redefining You
//         </h2>
//       </div>

//       {/* Asymmetric Scrolling Grid Container */}
//       <div className="relative z-20 max-w-8xl mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-0 justify-items-center items-start">
//           {team.map((member, index) => {
            
//             // EXACT STRUCTURAL MAPPING FROM THE MOCKUP:
//             // Index 0 (Card 1) -> Col 1, Top (Base Line)
//             // Index 1 (Card 2) -> Col 2, Top (Heavy down-shift)
//             // Index 2 (Card 3) -> Col 3, Top (Medium down-shift)
//             // Index 3 (Card 4) -> Col 1, Bottom (Standard grid position)
//             // Index 4 (Card 5) -> Col 2, Bottom (Heavy down-shift carried through)
//             // Index 5 (Card 6) -> Col 3, Bottom (Medium down-shift carried through)
            
//             let alignmentClass = "";
            
//             // Column 2 Structural Shift (Cards 2 & 5)
//             if (index === 1) alignmentClass = "lg:mt-36";
//             if (index === 4) alignmentClass = "lg:mt-36";

//             // Column 3 Structural Shift (Cards 3 & 6)
//             if (index === 2) alignmentClass = "lg:mt-16";
//             if (index === 5) alignmentClass = "lg:mt-16";
            
           

//             return (
//               <motion.div
//                 key={member.id}
//                 custom={member.delay}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={cardVariants}
//                 className={`w-full  max-w-[350px] bg-[#2B1B12] border-[8px] border-[#2B1B12] shadow-md flex flex-col justify-between overflow-visible relative transform transition-transform duration-300 hover:scale-[1.02] ${alignmentClass}`}
//               >
//                 {/* Image Placeholder Frame */}
//                 <div className="w-full aspect-square bg-white relative" />

//                 {/* Card Label Footer */}
//                 <div className="w-full py-4 text-center relative flex items-center justify-center">
//                   <span className="text-xs font-light tracking-wide text-[#FFFDF9]/80">
//                     {member.name}
//                   </span>

//                   {/* Corner Custom Overlapping Badge/Dot */}
//                   <div className="absolute right-2 bottom-3 w-6 h-6 rounded-full bg-[#D4D4D4] border-2 border-[#2B1B12] shadow-sm" />
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TheorySection;