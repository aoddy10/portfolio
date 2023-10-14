"use client";

import Image from "next/image";
import React from "react";
import profileImage from "../../public/profileImage.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Hero() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const handleContactButtonClick = () => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96"
    >
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImage}
              alt="Profile Image"
              className="h-24 w-24 rounded-full border-white border-[0.35rem] object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className=" font-bold">Hello, I'm Anirut.</span> I am a tech
        person with 6 years of experiences as
        <span className=" font-bold"> Full Stack Developer</span> and more than
        10 years as <span className="font-bold">Computer System Engineer.</span>{" "}
        I possess a diverse range of technical skills.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
          },
        }}
        className="flex flex-col sm:flex-row justify-center gap-3 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className=" group  bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition"
          onClick={() => {
            handleContactButtonClick;
          }}
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/Anirut_Puangkingkaew_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/anirutpuangkingkaew"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/aoddy10"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
