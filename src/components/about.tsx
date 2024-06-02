"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
        },
      }}
      className="mb-28 p-4 max-w-[45rem] flex flex-col items-center sm:mb-40 text-lg leading-8 scroll-mt-28 text-[var(--primary-white)] font-light"
    >
      <SectionHeader>About</SectionHeader>

      <p className="mb-3">
        With a strong aptitude for problem-solving, meticulous attention to
        detail, and a constant drive to learn new skills, I excel in tackling
        complex challenges.
      </p>

      <p>
        My commitment to personal growth and ability to adapt to emerging
        technologies enables me to stay at the forefront of the industry. As a
        software developer, I am eager to contribute my expertise to your team,
        delivering top-quality solutions in web and mobile development, as well
        as leveraging Machine Learning to enhance your projects while
        continuously expanding my knowledge.
      </p>
    </motion.section>
  );
}

export default About;
