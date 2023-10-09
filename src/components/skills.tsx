"use client";

import React from "react";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { motion } from "framer-motion";

const fadeAnimationsVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeader>My Skills</SectionHeader>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
