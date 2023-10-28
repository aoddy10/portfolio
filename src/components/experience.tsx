"use client";

import React, { useContext } from "react";
import SectionHeader from "./section-header";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { useThemeContext } from "@/context/theme-context";

function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useThemeContext();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 flex flex-col items-center sm:mb-40 sm:min-w-[62rem]"
    >
      <SectionHeader>My Experience</SectionHeader>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light"
                    ? "rgba(0,0,0,0.07)"
                    : "rgba(255,255,255,0.05)",
                boxShadow: "none",

                textAlign: "left",
                padding: "1.3rem, 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(0,0,0,0.07)"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "rgb(33, 150, 243)" : "#252F38",
                fontSize: "1.2rem",
                color: theme === "light" ? "#fff" : "#888",
              }}
              visible
            >
              <h3 className=" font-semibold capitalize">{item.title}</h3>
              <p className="!font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal !text-sm text-gray-400 dark:text-white/50">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
