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

export default function Hero() {
    return (
        <section
            id="home"
            className=" flex items-center flex-col justify-center p-4 py-24 sm:h-screen sm:w-screen
      "
        >
            {/* avatar */}
            <div className="flex justify-center items-center">
                <div className="relative sm:mt-32 md:mt-24 lg:mt-24">
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
                            className="h-40 w-40 rounded-full object-cover shadow-xl"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* text */}
            <motion.section
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="sm:max-w-[50rem] mt-8 flex flex-col items-center text-white"
            >
                {/* <h1 className=" text-3xl mb-4 sm:text-4xl !leading-[150%] text-center ">
                  <span className=" font-bold t-gradient ">
                      Hello, I'm Anirut.
                  </span>{" "}
                  I am a tech person with 7 years of experiences as
                  <span className=" font-bold t-gradient">
                      {" "}
                      Full Stack Developer
                  </span>{" "}
                  and more than 10 years as{" "}
                  <span className="font-bold t-gradient">
                      Computer System Engineer.
                  </span>
              </h1> */}
                <h1 className=" text-3xl mb-4 sm:text-4xl !leading-[150%] text-center ">
                    <span className=" font-bold t-gradient ">
                        Hello, I'm Anirut.
                    </span>{" "}
                    a Software Engineer / Full Stack Developer with{" "}
                    <span className=" font-bold t-gradient">
                        {" "}
                        7+ years of experience
                    </span>{" "}
                    delivering web applications, backend
                    systems, and cloud-based solutions across education, SaaS, and startup environments in{" "}
                    <span className=" font-bold t-gradient">
                        {" "}
                        Australia and New Zealand.
                    </span>
                </h1>

                <p className="sm:max-w-[42rem] text-center font-thin">
                    Strong hands-on expertise in React, Node.js, Django, and AWS, with proven ability to design APIs, integrate
                    complex systems, and deliver production-ready solutions in small, high-ownership teams. Experienced work-
                    ing end-to-end from requirements to deployment, collaborating closely with product and design stakeholders.
                    Seeking Intermediate to Senior Software Engineer roles where I can take ownership of features and contribute
                    to technical decision-making.
                </p>
            </motion.section>

            {/* button */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.2,
                    },
                }}
                className=" inline-flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium mt-10"
            >
                <Link
                    href="#contact"
                    className=" group  text-[var(--primary-white)] px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition font-light
          dark:bg-[var(--secondary-white)] dark:text-[var(--secondary-black)]"
                >
                    <BsArrowRight className=" opacity-70 group-hover:translate-x-1 transition" />
                    GET IN TOUCH{" "}
                </Link>
                <a
                    aria-label="Checking my resume for more information"
                    className="group bg-transparent px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-[var(--secondary-white)] font-light focus:scale-110 hover:scale-110 hover:bg-grey-950 active:scale-105 transition cursor-pointer 
           dark:bg-white/10 dark:font-thin text-white"
                    href="/Anirut_Puangkingkaew_CV_update.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className=" opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <div className=" inline-flex space-x-3 justify-center">
                    <a
                        aria-label="Check out my LinkedIn profile for more professional information and connection."
                        className=" aspect-square  p-4 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125  active:scale-105 transition cursor-pointer bg-white/20 dark:text-white/60"
                        href="https://linkedin.com/in/anirutpuangkingkaew"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        aria-label="Check out my development practice on github"
                        className=" aspect-square  p-4 text-white flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-125  active:scale-105 transition cursor-pointer bg-white/20 dark:text-white/60"
                        href="https://github.com/aoddy10"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
