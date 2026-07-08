const leftImageUrl = "/images/pmu.jpg";
const rightImageUrl = "/images/artist.jpg";

export default function AcademySection() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-8xl">

        {/* Label */}
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Academy
        </p>

        {/* Main grid: left image | centered text | right image */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-6 items-stretch min-h-[520px]">

          {/* Left square image */}
          <div className="h-full rounded-sm overflow-hidden bg-gray-200">
            <img
              src={leftImageUrl}
              alt="Academy preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Center: heading + body text + button */}
          <div className="flex flex-col justify-center text-center px-2 lg:px-0">
            <h1
              className="text-5xl lg:text-6xl font-normal text-gray-900 leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              We teach what
              <br />
              We know best!
            </h1>

            <div className="flex flex-col items-center gap-8">
              <p
                className="text-xs text-gray-500 leading-relaxed max-w-[420px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                These programs cover all the basic, trendy and advanced
                techniques, as well as comprehensive information on how to
                launch a profitable lash and brow business in Canada from
                scratch.
              </p>

              <button
                className="border border-gray-800 text-gray-800 text-xs tracking-wide px-6 py-3 hover:bg-gray-800 hover:text-white transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Tell me more
              </button>
            </div>
          </div>

          {/* Right tall image */}
          <div className="h-full rounded-sm overflow-hidden bg-gray-200">
            <img
              src={rightImageUrl}
              alt="Academy image"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}// import React from 'react';
// import { Playfair_Display } from 'next/font/google';

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400'],
// });

// const AcademySection = () => {
//   return (
//     <section className="bg-[#FFFDF9] py-12 px-10  w-full min-h-[650px] flex items-center select-none">
//       <div className="max-w-8xl mx-auto w-full">
        
//         {/* Main Banner Block Container */}
//         <div className="bg-[#2B1B12] text-[#FFFDF9] rounded-sm p-6 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
//           {/* Left Column Content Area */}
//           <div className="col-span-1 lg:col-span-8 flex flex-col justify-between space-y-8 lg:space-y-0">
            
//             {/* Top Text Cluster */}
//             <div>
//               <span className="block text-xs tracking-widest uppercase opacity-70 font-medium mb-6 sm:mb-8">
//                 Academy
//               </span>
              
//               {/* Main Headline */}
//               <h2 className={`${playfair.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight max-w-2xl`}>
//                 We teach what we know best!
//               </h2>
//             </div>

//             {/* Split Row: Bottom Paragraph Description & Call To Action */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-4">
//               <div className="md:col-span-7 lg:col-span-8">
//                 <p className="text-xs sm:text-sm leading-relaxed opacity-80 max-w-md font-light">
//                   These programs cover all the basic, trendy and advanced techniques, as well 
//                   as comprehensive information on how to launch a profitable lash and brow 
//                   business in Canada from scratch.
//                 </p>
//               </div>
              
//               <div className="md:col-span-5 lg:col-span-4 md:text-right">
//                 <button className="w-full md:w-auto bg-[#FFFDF9] text-[#2B1B12] text-xs sm:text-sm font-medium py-3.5 px-8 transition-all duration-200 hover:bg-[#FCECE2] active:scale-98 shadow-sm whitespace-nowrap">
//                   Tell me more
//                 </button>
//               </div>
//             </div>

//           </div>

//           {/* Right Column Content Area: Vertical Placeholder Box */}
//           <div className="col-span-1 lg:col-span-4 flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
//             <div className="w-full max-w-[320px] lg:max-w-none aspect-[3/4] lg:h-full bg-[#D4D4D4] shadow-sm border border-black/5 transform transition-transform duration-300 hover:scale-[1.01]" />
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default AcademySection;