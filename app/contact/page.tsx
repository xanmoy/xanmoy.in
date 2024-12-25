"use client";

import React from "react";
import SectionHeading from "../../components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../../components/submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <div className="flex flex-col items-center px-4">

        
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
                <SectionHeading>
                    <span className="text-5xl sm:text-7xl" style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>Contact me.</span>
                </SectionHeading>

            <p className="text-gray-700 mb-6 pb-3 dark:text-white/80">
                    Have an exciting project where you need some help?
                    Send me over a message, and let's chat.
                    
               
            </p>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Please contact me directly at{" "}
                    <a className="underline" href="mailto:xanmoy.tsx@gmail.com">
                    xanmoy.tsx@gmail.com
                </a>
                or through this form.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                        className="h-14 px-4 rounded-lg borderBlack bg-gray-100 text-black dark:text-white outline-none transition-all dark:bg-white dark:bg-opacity-10 dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    // className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                        className="h-52 my-3 rounded-lg borderBlack p-4 bg-gray-100 text-black dark:text-white outline-none transition-all dark:bg-white dark:bg-opacity-10 dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
            </motion.section>
        </div>
    );
}
