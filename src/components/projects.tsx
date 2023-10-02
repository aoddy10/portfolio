"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Image from "next/image";

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
  return (
    <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition rounded-lg">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-full tracking-wider"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl transition 
        group-hover:scale-105 
        group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 
        group-even:group-hover:rotate-2 

        group-even:right-[initial] 
        group-even:-left-40"
      />
    </section>
  );
};

export default Projects;
