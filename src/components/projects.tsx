"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5, // if the section display 50%, is true
  }); // use this hook to detect elements in the view
  const { setActiveSection } = useActiveSectionContext();

  // set active section when the section display in the view
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeader>My Project</SectionHeader>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
