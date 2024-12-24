"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        I’m a 4th-year{" "}<span className="font-semibold"> B.Tech</span> student in{" "}
        <span className="font-semibold">
          Computer Science and Engineering at West Bengal University of
          Technology.
        </span>{" "}
        As a{" "}
        <span className="font-semibold">
          full-stack and application developer,
        </span>{" "}
        I’m passionate about building impactful projects and constantly
        expanding my skill set.{" "}
        <span className="font-semibold">
          I’m currently diving deeper into DevOps and exploring the fascinating
          world of quantum computing.
        </span>
        {" "}Additionally, I serve as{" "}
        <span className="font-semibold">the Google Developer Group Cloud Lead</span>
        {" "}of my college, where I guide my peers in understanding and leveraging
        cloud technologies. I am proficient in{" "}
        I’m always eager to learn new technologies. I’m currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.{" "}
      </p>
      <p>
        {" "}
        <span className="italic">When I’m not coding,</span>I enjoy expressing
        my creativity through drawing, relaxing with gaming, and following
        cricket. I have a passion for{" "}
        <span className="font-medium">learning new things</span> and am
        currently exploring{" "}
        <span className="font-medium">history and philosophy.</span>
        I’m also teaching myself how to play the guitar.{" "}
      </p>
    </motion.section>
  );
}
