"use client";

import Image from "next/image";
import { Poiret_One } from "next/font/google";
import AboutSection from "../containers/pmu/About";
import ArtistWorks from "../containers/pmu/ArtistWorks";
import ServicesSection from "../containers/pmu/ServicesSection";
import ArtistSection from "../containers/pmu/ArtistSection";
import AcademySection from "../containers/pmu/AcademySection";
import TheorySection from "../containers/pmu/TheorySection";
import ContactSection from "../containers/pmu/ContactSection";
import HeroSection from "../containers/pmu/Hero";
import AppointmentCTA from "../containers/pmu/AppointmentCTA";
import ConcernsSection from "../containers/pmu/ConcernsSection";

const poiret = Poiret_One({
    weight: ["400"],
    subsets: ["latin"],
});

export default function PMUPage() {
    return (
        <>
            <HeroSection />
            <div className="bg-[#FEFBF4]">
                {/* <AboutSection /> */}
                {/* <ArtistWorks /> */}
                <AppointmentCTA/>
                <ServicesSection />
                <ConcernsSection/>
                {/* <ArtistSection /> */}
                {/* <AcademySection /> */}
                {/* <TheorySection /> */}
                {/* <ContactSection /> */}
            </div>
        </ >
    );
}