"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className=" bg-gray-100 max-w-[96vw] sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative h-[40rem] sm:h-[36rem]   hover:bg-gray-200 transition rounded-lg group-even:sm:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col sm:h-full group-even:sm:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className=" bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase text-white rounded-full tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          className="sm:absolute top-8 -right-[24rem] h-[30rem] object-cover object-left-top rounded-lg shadow-2xl transition 
          group-hover:scale-105 
          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2 

          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2 

          group-even:sm:right-[initial] 
          group-even:sm:-left-[24rem] object-left-top object-cover
          group-even:sm:object-right-top"
        />
      </section>
    </motion.div>
  );
};

export default Project;
