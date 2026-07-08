import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import AboutTheory from "../containers/pmu/About/AboutTheory";
import TheoryOfCalm from "../containers/pmu/About/TheoryOfCalm";
import TheoryOfEnhancement from "../containers/pmu/About/TheoryOfEnhancement";
import ContactSection from "../containers/pmu/ContactSection";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    display: "swap",
});

export const metadata = {
    title: 'About PMU',
};

export default function page() {
    return (
        <main className="space-y-20">
            <section className="relative hero w-full overflow-hidden  ">
                <Image src="/svgs/aboutpmubg.svg" alt="Brown Theory" fill className="absolute left-0 right-0 z-0 object-fit" />

                <div className="relative z-10 flex flex-col w-full container mx-auto -space-y-10">
                    <div className="text-start">
                        <p className={`${playfair.className} text-[8rem] font-normal`}>BROWN</p>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Image src="/pngs/aboutpmu.png" alt="Brown Theory" width={1300} height={500} className="w-5xl" />
                    </div>
                    <div className="flex justify-between items-center">
                        <p className='mt-10'>Established in 2019, Perfection Laboratory is a premier beauty <br /> salon and training academy with two locations: Downtown and <br /> Midtown Toronto.</p>
                        <p className={`${playfair.className} text-[8rem] font-normal`}>THEORY</p>
                    </div>

                </div>
            </section>

            <section >
                <AboutTheory/>
            </section>

            <section >
                <TheoryOfCalm/>
            </section>

            <section>
                <TheoryOfEnhancement/>
            </section>
            <section>
                <ContactSection/>
            </section>
        </main >
    );
}
