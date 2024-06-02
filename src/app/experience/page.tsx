"use client";

import React, { useContext } from "react";
import SectionHeader from "@/components/section-header";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { useThemeContext } from "@/context/theme-context";

function ExperiencePage() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useThemeContext();

  return (
    <main className="flex flex-col items-center  p-32">
      <section
        id="experience"
        ref={ref}
        className="scroll-mt-28 mb-10 flex flex-col items-center sm:min-w-[62rem]"
      >
        <SectionHeader>My Experience</SectionHeader>

        <VerticalTimeline
          lineColor=""
          className=" text-[var(--primary-black)] lg:text-[var(--primary-white)]"
        >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light"
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.05)",
                  boxShadow: "none",

                  textAlign: "left",
                  padding: "1.3rem, 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid rgba(255,2555,255,0.7)"
                      : "0.4rem solid rgba(255,255,255,0.05)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "rgb(33, 150, 243)" : "#252F38",
                  fontSize: "1.2rem",
                  color: theme === "light" ? "#fff" : "#888",
                }}
                visible
              >
                <h3 className=" font-semibold capitalize t-gradient ">
                  {item.title}
                </h3>

                <p className="!font-normal !mt-1 flex flex-wrap items-start gap-2">
                  <span
                    className="!mt-1 !font-normal !text-sm uppercase whitespace-nowrap text-gray-700 
                dark:text-white/50"
                  >
                    {item.company}
                  </span>
                  <span className=" px-2 rounded-md whitespace-nowrap bg-gray-200 text-[var(--primary-black)] dark:bg-gray-400/25 dark:text-[var(--primary-white)]">
                    {item.location}
                  </span>
                </p>

                {item?.tasks?.length > 0 && (
                  <ul className="text-sm text-[var(--primary-black)] mt-2 list-disc pl-8 dark:text-white/80 font-light">
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
    </main>
  );
}

export default ExperiencePage;
