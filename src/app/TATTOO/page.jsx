import Image from "next/image";
import { Poiret_One } from "next/font/google";
import HeroSection from "../containers/tattoo/Hero";
import { MdArrowOutward } from "react-icons/md";
import ArtistSection from "../containers/tattoo/Artist";
import PortfolioSection from "../containers/tattoo/Portfolio";
import ReviewsSection from "../containers/tattoo/Review";
import ContactSection from "../containers/tattoo/Contact";
import Footer from "../containers/tattoo/Footer";

const poiret = Poiret_One({
    weight: "400",
    subsets: ["latin"],
});

export default function TattooPage() {
    const poiretRegular = `${poiret.className} font-normal not-italic`;

    return (
        <div className="">
            <HeroSection />
            <div className=" pl-2 md:pl-10   bg-black w-full text-white border flex justify-between items-center ">
                <p className="text-4xl md:text-7xl">Book Experience</p>
                <span className="p-6 md:p-4   border-l-[.5px]"><MdArrowOutward className="text-4xl md:text-8xl" /></span>
            </div>
            <ArtistSection />
            <PortfolioSection/>
            <ReviewsSection/>
            <ContactSection/>
            <Footer/>
        </div>
    );
}
