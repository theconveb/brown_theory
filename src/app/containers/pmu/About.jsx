"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InfiniteMarquee from "@/app/components/InfiniteMarquee";

const text = "Excellence in services we provide, individually catered approach and exceptional customer service";

export default function AboutSection() {
    const textRef = useRef(null);
    const paraRef = useRef(null);
    const isTextInView = useInView(textRef, { once: true, margin: "-10% 0px" });
    const isParaInView = useInView(paraRef, { once: true, margin: "-10% 0px" });

    return (
        <section className="my-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <p>About</p>
                <div className="w-full mt-8 flex justify-center">
                    <div className="w-full max-w-4xl">

                        {/* Big text — letter by letter */}
                        <p
                            ref={textRef}
                            className="text-3xl md:text-6xl md:w-3xl"
                            aria-label={text}
                        >
                            {text.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                                    animate={isTextInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                                    transition={{
                                        duration: 0.25,
                                        delay: i * 0.018,
                                        ease: "easeOut",
                                    }}
                                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>

                        {/* Sub paragraph — fades in normally */}
                        <div className="w-full flex justify-end">
                            <motion.p
                                ref={paraRef}
                                className="text-xs md:text-base md:w-md"
                                initial={{ opacity: 0 }}
                                animate={isParaInView ? { opacity: 1 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                            >
                                Established in 2019, Perfection Laboratory is a premier beauty salon and training academy with two locations: Downtown and Midtown Toronto. We specialize in eyelash extensions, lash lifts, brow lamination, microblading and powder brows, lip blush, and medical aesthetics, as well as eyelash extensions training, lash lift and brow lamination certification courses.
                            </motion.p>
                        </div>

                    </div>
                </div>

            </div>
            <InfiniteMarquee />
        </section>
    );
}