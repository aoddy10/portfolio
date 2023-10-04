"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

function About() {
  const { ref, inView } = useInView({
    threshold: 1, // if the section display 75%, is true
  }); // use this hook to detect elements in the view
  const { setActiveSection } = useActiveSectionContext();

  // set active section when the section display in the view
  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
        },
      }}
      className="mb-28 max-w-[45rem] text-center sm:mb-40 text-lg leading-8 scroll-mt-28"
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
