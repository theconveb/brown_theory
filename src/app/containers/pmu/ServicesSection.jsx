'use client';
import Image from 'next/image';
import React, { useRef, useCallback } from 'react';

const SOLUTIONS = [
    {
        label: 'Hair transplant',
        image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80',
    },
    {
        label: 'Injections',
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&q=80',
    },
    {
        label: 'Aesthetic medicine',
        image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80',
    },
    {
        label: 'Permanent hair removal',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80',
    },
    {
        label: 'Skin resurfacing',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    },
    {
        label: 'Body contouring',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    },
];

// Repeat the set enough times that the visible window never runs out of
// cards in either scroll direction — this is what makes the loop feel truly
// infinite rather than just "scrolls to the end and stops".
const LOOPS = 4;
const LOOPED_SOLUTIONS = Array.from({ length: LOOPS }, () => SOLUTIONS).flat();

export default function ServicesSection() {
    const trackRef = useRef(null);

    // Keeps the scroll position pinned to the middle copy of the loop.
    // When the user scrolls near either edge of the duplicated list, we
    // silently jump back to the equivalent position in the middle copy —
    // same visual spot, no snap-back the eye can catch.
    const normalizeScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const singleSetWidth = track.scrollWidth / LOOPS;
        if (track.scrollLeft < singleSetWidth * 0.5) {
            track.scrollLeft += singleSetWidth;
        } else if (track.scrollLeft > singleSetWidth * (LOOPS - 1.5)) {
            track.scrollLeft -= singleSetWidth;
        }
    }, []);

    const scrollByCard = (direction) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector('[data-card]');
        const cardWidth = card ? card.getBoundingClientRect().width : 300;
        const gap = 16;
        track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
    };

    // Start the track roughly centered in the middle copy on mount
    const setInitialScroll = useCallback((node) => {
        trackRef.current = node;
        if (node) {
            const singleSetWidth = node.scrollWidth / LOOPS;
            node.scrollLeft = singleSetWidth * Math.floor(LOOPS / 2);
        }
    }, []);

    return (
        <section className="w-full min-h-screen bg-[#F3EEE3] px-4 sm:px-8 flex items-center justify-center pb-20">
            <div className="max-w-[1600px] w-full mx-auto">

                {/* Track */}
                <div
                    ref={setInitialScroll}
                    onScroll={normalizeScroll}
                    className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                    {LOOPED_SOLUTIONS.map((item, i) => (
                        <div
                            key={i}
                            data-card
                            className="group relative shrink-0 w-[78vw] xs:w-[60vw] sm:w-[45vw] md:w-[32vw] lg:w-[23vw] xl:w-[30vw]"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-[#e5ddc8]">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    sizes="(max-width: 768px) 60vw, 20vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    draggable={false}
                                    priority={i < 4}
                                />
                            </div>
                            <p className="mt-4 text-[15px] text-[#1a1a1a] tracking-wide">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex flex-col items-center gap-8 mt-12">
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => scrollByCard(-1)}
                            aria-label="Previous solution"
                            className="h-11 w-11 rounded-full border border-[#1a1a1a]/30 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F3EEE3] transition-colors duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5m0 0l6-6m-6 6l6 6" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollByCard(1)}
                            aria-label="Next solution"
                            className="h-11 w-11 rounded-full border border-[#1a1a1a]/30 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F3EEE3] transition-colors duration-200"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                            </svg>
                        </button>
                    </div>

                    <button
                        type="button"
                        className="px-7 py-3 rounded-full border border-[#1a1a1a]/30 text-[13px] tracking-[0.15em] uppercase text-[#3454D1] hover:bg-[#1a1a1a] hover:text-[#F3EEE3] hover:border-[#1a1a1a] transition-colors duration-200"
                    >
                        See all solutions
                    </button>
                </div>
            </div>
        </section>
    );
}
// import Link from "next/link";

// const IMAGES = [
//   "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
//   "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
//   "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
//   "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
//   "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
//   "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80",
// ];

// export default function ServicesSection() {
//   return (
//     <div className="w-full">
//       <p className="text-[10px] tracking-widest uppercase text-gray-500 mb-4">Services</p>
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 ">
//         {IMAGES.map((src, i) => (
//           <Link key={i} href={`/PMU/${i + 1}`} className="overflow-hidden w-full">
//             <img src={src} alt={`Service ${i + 1}`} className="w-full h-72 md:w-[480px] md:h-[600px] object-cover" />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from 'react';
// import { Playfair_Display } from 'next/font/google';

// const playfair = Playfair_Display({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });

// const ServicesSection = () => {
//   const services = [
//     {
//       id: "01",
//       title: "Microblading",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: "02",
//       title: "Brow Lamination",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: "03",
//       title: "Lips Tint",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: "04",
//       title: "Dark Lip Correction",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: "05",
//       title: "Lash Lamination",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//     {
//       id: "06",
//       title: "Scar Camouflage",
//       desc: "Microblading is a precise, semi-permanent tattooing technique used to create the perfectly shaped eyebrows.",
//       img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400",
//     },
//   ];

//   return (
//     <section className="relative min-h-screen  py-16 px-6 md:px-12 lg:px-24 overflow-hidden select-none my-10">
      
//       {/* Full-Height Background Elegant Letter "S" 
//         - text-[95vh] bounds the font size perfectly to the wrapper height
//         - text-[#FCECE2] sets the soft warmth tint color from the image mockup
//         - opacity-70 controls the blending contrast
//       */}
//       <div className="absolute -top-52 right-[-15%] lg:right-[-15%] h-full flex items-center justify-end pointer-events-none z-0 select-none ">
//         <p className={` ${playfair.className} text-[140rem] font-light leading-none text-[#FCECE2] opacity-70 translate-y-[5%]`}>
//           S
//         </p>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Title */}
//         <span className="block text-sm tracking-widest text-gray-500 uppercase font-medium mb-16">
//           Services
//         </span>

//         {/* Responsive Grid Matrix */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 xl:gap-x-12 items-start justify-items-center ">
//           {services.map((service, index) => {
//             // Editorial staggered column offsets for large desktop screens
//             let desktopOffsetClass = "";
//             if (index === 1) desktopOffsetClass = "lg:mt-28";
//             if (index === 3) desktopOffsetClass = "lg:-mt-12";
//             if (index === 4) desktopOffsetClass = "lg:mt-12";
//             if (index === 5) desktopOffsetClass = "lg:-mt-28";

//             return (
//               <div
//                 key={service.id}
//                 className={`bg-white border border-gray-100 p-6 md:p-8 shadow-sm flex flex-col 
//                   w-full max-w-[380px] transition-transform duration-300 hover:scale-[1.02] ${desktopOffsetClass}`}
//               >
//                 {/* Card ID */}
//                 <span className="block text-xs font-mono text-gray-400 mb-4">
//                   {service.id}
//                 </span>
                
//                 {/* Centered 250px x 250px Image */}
//                 <div className="w-[250px] h-[250px] mx-auto overflow-hidden mb-6 bg-gray-50 flex items-center justify-center">
//                   <img
//                     src={service.img}
//                     alt={service.title}
//                     className="w-full h-full object-cover grayscale brightness-95"
//                   />
//                 </div>

//                 {/* Service Title */}
//                 <h3 className="font-serif text-2xl md:text-3xl font-normal tracking-tight text-gray-900 mb-2 px-1">
//                   {service.title}
//                 </h3>
                
//                 {/* Description Text */}
//                 <p className="text-gray-500 text-xs leading-relaxed max-w-[270px] px-1">
//                   {service.desc}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer Typography Split Row */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center  my-20">
//           <div className="lg:col-span-6">
//             <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight max-w-xl">
//               Our dedication to quality is reflected in our meticulous attention to detail
//             </h2>
//           </div>
//           <div className="lg:col-span-5 lg:col-start-8">
//             <p className="text-gray-600 text-sm md:text-base leading-relaxed">
//               Using only top-of-the-line products, continuously improving our services, 
//               and learning all the latest trends and innovative techniques, we strive to 
//               provide the highest quality service that enhances your natural beauty.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;