const imageSeeds = [
  'artist-1',
  'artist-2',
  'studio-3',
  'portrait-4',
  'workshop-5',
  'creative-6',
  'handcrafted-7',
];

function getRandomSeed(exclude) {
  const available = imageSeeds.filter((seed) => seed !== exclude);
  return available[Math.floor(Math.random() * available.length)];
}

export default function ArtistSection() {
  const leftSeed = getRandomSeed();
  const rightSeed = getRandomSeed(leftSeed);

  return (
    <div className="  flex items-center justify-center py-10">
      <div className="w-full max-w-8xl">
        {/* Card */}
        <div className=" w-full grid grid-cols-2 gap-6 p-10">
          {/* Left column */}
          <div className="flex flex-col justify-between">
            {/* Top section */}
            <div>
              {/* Label */}
              <p
                className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Artist
              </p>

              {/* Heading */}
              <h1
                className="text-6xl font-normal text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Meet the Artist
              </h1>

              {/* Body text */}
              <p
                className="text-xs text-gray-500 leading-relaxed max-w-2xl"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>

            {/* Bottom image placeholder */}
            <div className="mt-10 w-full h-52 rounded-sm overflow-hidden bg-gray-200">
              <img
                src={`https://picsum.photos/seed/studio-3/800/400`}
                alt="Random artist preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column — tall image placeholder */}
          <div className="w-full h-[600px]  rounded-sm overflow-hidden bg-gray-200">
            <img
              src={`https://picsum.photos/seed/artist-2/800/960`}
              alt="Random artist portrait"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// import React from 'react';
// import { Playfair_Display } from 'next/font/google';

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400'],
// });

// const ArtistSection = () => {
//   return (
//     <section className="bg-[#FFFDF9] py-12 px-10  w-full min-h-[600px] flex items-center select-none">
//       <div className="max-w-8xl mx-auto w-full">
        
//         {/* Main Banner Container with dark brown background */}
//         <div className="bg-[#2B1B12] text-[#FFFDF9] rounded-sm p-8 sm:p-12 md:p-16 lg:p-0 grid grid-cols-1 lg:grid-cols-12 items-center relative">
          
//           {/* Left Text Block */}
//           <div className="lg:col-span-7 xl:col-span-6 lg:pl-16 xl:pl-20 lg:py-24 z-10">
//             <span className="block text-xs sm:text-sm tracking-widest uppercase opacity-70 font-medium mb-4 sm:mb-6">
//               Artist
//             </span>
            
//             <h2 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight mb-6 sm:mb-8`}>
//               Meet the Artist
//             </h2>
            
//             <p className="text-xs sm:text-sm leading-relaxed opacity-80 max-w-md font-light">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//             </p>
//           </div>

//           {/* Right Overlapping Image Container */}
//           <div className="mt-8 lg:mt-0 col-span-1 lg:col-span-5 xl:col-span-6 lg:relative h-full flex items-center justify-center lg:justify-end">
//             <div className="w-full max-w-[450px]  aspect-[4/3] lg:aspect-auto lg:h-[100%] lg:w-[100%] bg-[#D4D4D4] shadow-md border border-black/5 lg:absolute lg:-top-[10%] lg:right-10 transform transition-transform duration-300 hover:scale-[1.01]" />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ArtistSection;
