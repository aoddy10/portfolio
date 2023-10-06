"use client";

import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeader>Contact</SectionHeader>

      <p className="text-gray-700 -mt-6">
        Please contact me at email:{" "}
        <a
          className="underline font-semibold"
          href="mailto:anirut.puangkingkaew@gmail.com"
        >
          anirut.puangkingkaew@gmail.com
        </a>
        <br />
        or through the contact form below.
      </p>

      <form action="" className="mt-10 flex flex-col gap-y-2">
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex justify-center items-center gap-x-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1
          "
          />
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
