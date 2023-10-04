import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
