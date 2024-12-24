"use client";

import AboutComponent from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col items-center px-4">

            <section>
                <div className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
                >
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "tween",
                                    duration: 0.2,
                                }}
                            >
                                <Image
                                    src="/xanmoy.jpeg"
                                    alt="Ricardo portrait"
                                    width="192"
                                    height="192"
                                    quality="95"
                                    priority={true}
                                    className="h-80 w-80 rounded-t-3xl object-cover shadow-xl"
                                />
                            </motion.div>

                           
                        </div>
                    </div>

                    <motion.h1
                        className="mb-10 mt-16 px-4 text-4xl font-medium !leading-[1.5] sm:text-4xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="font-bold sm:text-7xl">Hi. I'm Tanmoy.</span>                         <br />
                        <span className="font-bold sm:text-7xl whitespace-nowrap">a Software Engineer.</span>
                       
                       
                        
                    </motion.h1>

                   
                </div>
            </section>

            <AboutComponent />
            <Skills />
            <Education />
        </div>
        
                
           
    );
}
