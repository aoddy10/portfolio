"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
        },
      }}
      className="mb-28 max-w-[45rem] text-center sm:mb-40 text-lg leading-8"
    >
      <SectionHeader>My Project</SectionHeader>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return <div>{title}</div>;
};

export default Projects;
