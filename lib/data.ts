import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { LuSchool } from "react-icons/lu";

import notion from "@/public/notion.jpeg";
import whatsapp from "@/public/whatsapp.webp";
import medinova from "@/public/medinova.webp";
import drawflow from "@/public/drawflow.png";
import xeoly from "@/public/xeoly.png";
import chatgpt from "@/public/chatgpt.png";
import gt from "@/public/gt.png";
import space from "@/public/space.png";
import go from "@/public/go.png";
import xnote from "@/public/xnote.png";
import aurora from "@/public/aurora.png";
// Define types for the project/work data for better type safety
type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // If you want to use Next.js image optimization, change this to 'StaticImageData'
};

export const links = [
  { name: "Work", hash: "/" },
  { name: "About", hash: "/about" },
  { name: "Notes", hash: "/notes" },
  { name: "Contact", hash: "/contact" },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology",
    location: "Kolkata, India",
    description:
      "I'm currently pursuing my B.Tech in Computer Science from West Bengal University of Technology. I'm in my 4th year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
  {
    title: "Cofounder & Developer",
    location: "Kolkata, India",
    description:
      "Co-founder of Generation of Codestars, an innovative online EdTech platform. Contributed as a Full-Stack Developer, designing and implementing robust solutions to enhance the user experience and streamline platform functionality.",
    
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Cloud Lead at Google Developer Student Club (GDSC)",
    location: "Kolkata, India",
    description:
      "I lead cloud computing initiatives, mentor students, and organize workshops to foster learning and innovation in cloud technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Whatsapp Desktop for Linux",
    description:
      "An unofficial Open Source WhatsApp Desktop Client built with Electron, used by 693 users, offering a secure and seamless desktop messaging experience.", 
    tags: ["Electron.js", "Javascript", "Bash", "Linux", "Whatsapp"],
    imageUrl: whatsapp,
    url: "https://github.com/xanmoy/whatsapp-desktop-client", 
  },
  {
    title: "Notion Desktop for Linux",
    description:
      "Open Source Notion Desktop, an Electron-based app with 2000 users, providing a seamless and optimized desktop experience for Notion",
    tags: ["Electron.js", "Javascript", "Bash", "Linux", "Notion"],
    imageUrl: notion,
    url: "https://github.com/xanmoy/notion-desktop", 
  },
  {
    title: "Medinova AI",
    description:
      "A powerful tool designed to provide medical information by answering user queries using state-of-the-art language models and vector stores. This README will guide you through the setup and usage of the Llama2 Medical Bot",
    tags: ["Python", "faiss", "sentence-transformers", "langchain", "ctransformers", "chainlit", "llama2"],
    imageUrl: medinova,
    url: "https://github.com/xanmoy/medinova.git", 
  },
  {
    title: "DrawFlow",
    description:
      "DrawFlow is a powerful web application that allows users to create, edit, and share fowcharts and diagrams with ease",
    tags: ["React", "Next.js", "Typescript", "Convex", "Tailwind", "Kinde"],
    imageUrl: drawflow,
    url: "https://github.com/xanmoy/medinova.git", 
  },
  {
    title: "Xeoly",
    description:
      "a privacy-focused search engine that doesn't track searches or sell data, ensuring secure and relevant results. Your privacy is our priority.",
    tags: ["React", "Next.js", "Typescript", "Convex", "Tailwind", "Kinde"],
    imageUrl: xeoly,
    url: "https://github.com/xanmoy/xeoly.git", 
  },
  {
    title: "ChatGPT Desktop Client for Linux",
    description:
      "ChatGPT Desktop is an unofficial desktop client for OpenAI's ChatGPT, offering a seamless and secure messaging experience.",
    tags: ["Electron.js", "Javascript", "Bash", "Linux", "GPT"],
    imageUrl: chatgpt,
    url: "https://github.com/xanmoy/chatgpt-desktop-client.git", 
  },
  {
    title: "Glamour Threads Ecommerce Website",
    description:
      "An E-commerce website built with React, Remixjs, Sanity, Stripe and Tailwind CSS, offering a seamless shopping experience for users.",
    tags: ["Remix.js", "Typescript", "React", "Sanity", "Stripe", "Tailwind"],
    imageUrl: gt,
    url: "https://github.com/xanmoy/glamourthreads-remix", 
  },
  {
    title: "Space Themed Portfolio",
    description:
      "A space-themed portfolio website,offering a visually appealing and interactive experience for visitors.",
    tags: ["Three.js", "Typescript", "React", "Tailwind", "Framer Motion"],
    imageUrl: space,
    url: "https://xanmoy.live", 
  },
  {
    title: "GoGet",
    description:
      "a package manager for Go that allows users to install, update, and manage Go packages with ease. This README will guide you through the setup and usage of GoGet",
    tags: ["Go"],
    imageUrl: go,
    url: "https://goget.xanmoy.in/", 
  },
  {
    title: "XNOTE",
    description:
      "A simple text editor built with C and GTK3. XNOTE is a lightweight and fast text editor that offers a seamless writing experience for users.",
    tags: ["C", "GTK3", "Linux", "cmake", "Makefile"],
    imageUrl: xnote,
    url: "https://github.com/xanmoy/xnote", 
  },
  {
    title: "Aurora AI",
    description:
      "Aurora AI is a powerful tool designed to provide medical information by answering user queries using state-of-the-art language models and vector stores. This README will guide you through the setup and usage of the Llama2 Medical Bot",
    tags: ["Javascript", "React", "Next.js", "Tailwind", "Gemini"],
    imageUrl: aurora,
    url: "https://github.com/xanmoy/aurora/", 
  },
] as const;

export const skillsData = [
  "C/C++",
  "Go",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Docker",
  "Linux",
  "GraphQL",
  "NextAuth",
  "Express",
  "Docker",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Framer Motion",
] as const;

export const educationData = [
  {
    title: "Primary Education",
    location: "Kolkata, India",
    description:
      "I completed my secondary education from Gangapuri Primary School, Kolkata, securing 80% in the exams.",

    icon: React.createElement(FaSchool),
    date: "2008 - 2019",
  },
  {
    title: "Higher Secondary Education",
    location: "Kolkata, India",
    description:
      "I completed my higher secondary education from Naktala High School, Kolkata, securing 77% in the board exams.",
    icon: React.createElement(LuSchool),
    date: "2019 - 2021",
  },
  {
    title: "Bachelor of Technology",
    location: "Kolkata, India",
    description:
      "I'm currently pursuing my B.Tech in Computer Science from West Bengal University of Technology. I'm in my 4th year.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2025",
  },
] as const;