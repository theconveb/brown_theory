'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const CONCERNS = [
    { id: '1', text: 'SPARSE BROWS', img: '/pngs/about_thoery.png' }, // Replace with actual unique image paths
    { id: '2', text: 'UNRULY BROWS', img: '/pngs/about_thoery.png' }, 
    { id: '3', text: 'PALE LIPS', img: '/pngs/about_thoery.png' },
    { id: '4', text: 'DARK LIPS', img: '/pngs/about_thoery.png' },
    { id: '5', text: 'STRAIGHT LASHES', img: '/pngs/about_thoery.png' },
    { id: '6', text: 'SCARS AND MARKS', img: '/pngs/about_thoery.png' },
];

export default function ConcernsSection() {
    const [activeId, setActiveId] = useState('1');
    const isHoveredRef = useRef(false);

    // Auto-advance loop every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHoveredRef.current) {
                setActiveId((prevId) => {
                    const currentIndex = CONCERNS.findIndex((item) => item.id === prevId);
                    const nextIndex = (currentIndex + 1) % CONCERNS.length;
                    return CONCERNS[nextIndex].id;
                });
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Find the currently active item to render its image
    const activeItem = CONCERNS.find((item) => item.id === activeId) || CONCERNS[0];

    return (
        <section className="w-full min-h-screen bg-[#F3EEE3] px-4 sm:px-12 py-16 flex items-center justify-center">
            <div className="max-w-8xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                
                {/* LEFT SIDE: Active Dynamic Image */}
                <div className="relative w-full aspect-[4/3] md:aspect-square overflow-hidden bg-zinc-200">
                    <Image 
                        src={activeItem.img}
                        alt={activeItem.text}
                        fill
                        className="object-cover transition-all duration-500 ease-in-out"
                        priority
                    />
                </div>

                {/* RIGHT SIDE: Interactive Concerns List */}
                <div className="flex flex-col items-center text-center">
                    <div 
                        className="flex flex-col  mb-10 w-full max-w-xl"
                        onMouseEnter={() => { isHoveredRef.current = true; }}
                        onMouseLeave={() => { isHoveredRef.current = false; }}
                    >
                        {CONCERNS.map((item) => {
                            const isActive = item.id === activeId;
                            return (
                                <div 
                                    key={item.id} 
                                    onMouseEnter={() => setActiveId(item.id)}
                                    className={`text-lg sm:text-3xl font-light tracking-widest text-[#1a1a1a] uppercase flex items-start justify-center gap-1.5 cursor-pointer transition-all duration-300 select-none
                                        ${isActive ? 'font-medium sm:font-semibold scale-[1.02]' : 'opacity-60 hover:opacity-100'}`}
                                >
                                    {/* Superscript Number */}
                                    <span className="text-[10px] font-medium text-zinc-500 mt-1 sm:mt-2">
                                        {item.id}
                                    </span>

                                    {/* Text with CSS layout trick to prevent layout shifts when shifting to bold */}
                                    <span 
                                        data-text={item.text}
                                        className="relative block after:content-[attr(data-text)] after:block after:font-semibold after:height-0 after:invisible after:overflow-hidden"
                                    >
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    <button
                        type="button"
                        className="px-8 py-3 rounded-full border border-[#1a1a1a] text-xs uppercase tracking-widest text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-[#F3EEE3] transition-colors duration-300"
                    >
                        See All Concerns
                    </button>
                </div>

            </div>
        </section>
    );
}