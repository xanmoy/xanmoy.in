"use client";
import React, { useState } from "react";
import { IoIosGitMerge } from "react-icons/io";
import Link from "next/link";

export default function Notifications() {
   

    return (
        <>
            {/* Button */}
            <Link
                className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
                href="/git"
            >
                <IoIosGitMerge />
            </Link>

           
        </>
    );
}
