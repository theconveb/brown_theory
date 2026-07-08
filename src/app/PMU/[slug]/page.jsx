// src/app/PMU/[slug]/page.jsx

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import FormulationProcess from "@/app/containers/pmu/Services/FormulationProcess";
import BigImage from "@/app/containers/pmu/Artist/BigImage";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
    display: "swap",
});

const SERVICES = [
    {
        title: ["MICRO", "BLADING"],
        image: "/images/hero_img.jpg",
    },
    {
        title: ["POWDER", "BROWS"],
        image: "/images/hero_img.jpg",
    },
    {
        title: ["LIP", "BLUSH"],
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    },
    {
        title: ["PERMANENT", "EYELINER"],
        image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
    },
    {
        title: ["LASH", "ENHANCEMENT"],
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    },
    {
        title: ["NANO", "BROWS"],
        image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80",
    },
];

export function generateStaticParams() {
    return SERVICES.map((_, i) => ({ slug: String(i + 1) }));
}

export function generateMetadata({ params }) {
    const service = SERVICES[parseInt(params.slug) - 1];
    return {
        title: service?.title.join(" ") ?? "Service",
    };
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const index = parseInt(slug) - 1;
    const service = SERVICES[index];

    if (!service) return <p>Service not found</p>;

    return (
        <>
        <section >
            <div className=" w-full h-screen relative overflow-hidden flex flex-col items-center justify-center">

            {/* BG line SVG — full bleed */}
            <div className="absolute top-10 z-0">
                <img
                    src="/svgs/servicebg.svg"
                    alt=""
                    className="object-cover "
                />
            </div>

            {/* Title + Image block — centered */}
            <div className="relative z-10 flex flex-col w-4xl">

                {/* Line 1 — left */}
                <h1 className={`${playfair.className} text-[#1a1a1a] text-6xl md:text-[128px] font-normal leading-none text-left`}>
                    {service.title[0]}
                </h1>

                {/* Line 2 — right */}
                <h1 className={`${playfair.className} text-[#1a1a1a] text-6xl md:text-[128px] font-normal leading-none text-right`}>
                    {service.title[1]}
                </h1>

                {/* Image — top 35% visible, clipped at bottom */}

            </div>

            </div>
                <div className="relative -top-28 w-full h-auto mt-4 overflow-hidden flex items-center justify-center">
                        <Image
                            src={service.image}
                            alt={service.title.join(" ")}
                            width={1000}
                            height={600}
                            className="object-cover object-top"
                        />
                </div>
        </section>
        <section>
            <FormulationProcess/>
        </section>
        <section>
            <BigImage/>
        </section>
        </>
    );
}