"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  // const { ref } = useSectionInView("Work", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      // ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] pt-6 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className='flex items-baseline lg:pt-3 md:pt-16 pb-5 justify-center'>
        <h3 className='dark:text-white text-black text-sm lg:text-lg border px-3 p-2 rounded-full border-black dark:border-white text-center'>
          <span >
            ChatGPT Desktop Beta Launched | <Link href="https://snapcraft.io/chatgpt-desktop-client" target="_blank" className='text-gray-400'>Get It</Link>
          </span>
        </h3>
      </div>
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
           
          </motion.div>


        </div>
      </div>

      <motion.h1
        className="mt-4 px-1 text-4xl font-medium sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontFamily: 'Brandon Grotesque, sans-serif',fontSize: '2.5rem' }}
      >
        <span className="font-bold sm:text-7xl">Hi. I'm Tanmoy.</span> 
        

      </motion.h1>
      <motion.h1
        className="mb-10 mt-4 font-medium sm:text-4xl w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontFamily: 'Brandon Grotesque, sans-serif', fontSize: '2.5rem' }}
        // !leading-[1.5]
      >
        
        <span className="font-bold sm:text-7xl whitespace-nowrap">a Software Engineer.</span>

      </motion.h1>
      <p className="mb-3 text-base">
        I’m passionate about building innovative, efficient solutions that deliver seamless user experiences.
      </p>
      

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="/contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://linkedin.com/in/xanmoy"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/xanmoy"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
