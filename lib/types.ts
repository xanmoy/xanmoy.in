import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

// export type SectionName = "Work" | "About" | "Projects" | "Contact" | "Skills";
// export const links = [
//     { name: "Work", path: "/work" },
//     { name: "About", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
// ] as const;

// export type SectionName = (typeof links)[number]["name"];
