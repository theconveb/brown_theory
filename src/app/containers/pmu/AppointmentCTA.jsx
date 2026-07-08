'use client';
import React from 'react';

export default function AppointmentCTA() {
    return (
        <section className="w-full min-h-screen bg-[#F5ECE1] px-4 flex flex-col items-center justify-center text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
                
                {/* Heading Text */}
                <h2 className="text-xl sm:text-3xl md:text-4xl text-[#1a1a1a] font-normal tracking-none leading-relaxed max-w-lg">
                    Tailor-made protocols to address each of your concerns.
                </h2>

                {/* Styled Button */}
                <button
                    type="button"
                    onClick={() => {
                        // Add appointment logic or routing here
                        console.log('Navigate to booking...');
                    }}
                    className="px-8 py-3.5 rounded-full border border-[#1a1a1a] text-xs sm:text-sm uppercase tracking-widest text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-[#F5ECE1] transition-colors duration-300 ease-in-out focus:outline-none"
                >
                    Make an Appointment
                </button>
                
            </div>
        </section>
    );
}