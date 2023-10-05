"use client";

import React from "react";
import SectionHeader from "./section-header";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      ref={ref}
      id="Skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeader>My Skills</SectionHeader>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className="bg-white border border-black/10 rounded-xl px-5 py-3"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
