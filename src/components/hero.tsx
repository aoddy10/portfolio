"use client";

import Image from "next/image";
import React from "react";
import profileImage from "../../public/profileImage.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Hero() {
  return (
    <section className=" mb-28 max-w-[50rem] text-center sm:mb-0">
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

      <div className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className=" font-bold">Hello, I'm Anirut</span>I am an
          experienced <span className=" font-bold">Full Stack Developer</span>{" "}
          with <span className="font-bold">6 years of experiences</span> based
          in <span className=" font-bold">Australia.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
          className=" font-normal text-2xl mt-4 !leading-10"
        >
          I possess a diverse range of technical skills. With a strong aptitude
          for problem-solving, meticulous attention to detail, and a constant
          drive to learn new skills, I excel in tackling complex challenges.
        </motion.p>
      </div>

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
        >
          Contact me here{" "}
          <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition cursor-pointer border border-black/10 "
          href="/Anirut_Puangkingkaew_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://linkedin.com/in/anirutpuangkingkaew"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125 hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/aoddy10"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
