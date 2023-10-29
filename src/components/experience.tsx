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
  const { ref } = useSectionInView("Experience", 0.2);
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
                    ? "rgba(255,255,255,0.4)"
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
              <h3 className=" font-semibold capitalize t-gradient">
                {item.title}
              </h3>

              <p className="!font-normal !mt-1 flex flex-wrap items-start gap-2">
                <span
                  className="!mt-1 !font-normal !text-sm uppercase whitespace-nowrap text-gray-700 
                dark:text-white/50"
                >
                  {item.company}
                </span>
                <span className=" px-2 rounded-md whitespace-nowrap bg-gray-200 dark:bg-gray-400/25">
                  {item.location}
                </span>
              </p>

              {item?.tasks?.length > 0 && (
                <ul className="text-sm text-[var(--primary-black)] mt-2 list-disc pl-8 dark:text-white/80">
                  {item.tasks.map((task, index) => (
                    <li key={`index`}>{task}</li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
