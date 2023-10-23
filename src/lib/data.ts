import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import emergencyAlertApp from '../../public/emergency-alert.png'
import massageBookingApp from '../../public/massage-booking-app.png'
import smmsReportApp from '../../public/smms-report.png'
import projectManagementApp from '../../public/weera-wissawakan.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "People collapsed detection and notify system.",
    description:
      "In a Python project, I showcased my AI and Machine Learning skills by utilizing TensorFlow to detect falls in Raspberry Pi camera footage and send real-time alerts through a Flutter app.",
    tags: ["Python", "Tensorflow", "Firebase", "Raspberry-PI", "Open-CV"],
    imageUrl: emergencyAlertApp,
  },
  {
    title: "Massage Booking Management System",
    description:
      "Utilizing React Native, I designed a cross-platform mobile app for a massage business, simplifying booking and issue recording. It provides payment management and analytics tools, empowering data-driven decisions.",
    tags: ["React Native", "Tailwind", "Redux", "NodeJS", "Express Framework", "JWT Authentication", "MongoDB", "Docker container", "Git Version Control"],
    imageUrl: massageBookingApp,
  },
  {
    title: "Project management System",
    description:
      "Created a project management system with ReactJS, Node.js, and MySQL integration, empowering managers with performance analysis and cost tools, highlighting my full-stack development expertise.",
    tags: ["React", "SQL", "MUI", "NodeJS", "Express framework", "JWT Authentication", "Docker container", "Git Version Control" ],
    imageUrl: projectManagementApp,
  },
  {
    title: "Student Management System",
    description:
      "Developed a Student Management System using AwareIM, expanded it with the SMMS Report via ReactJS and Node.js, and integrated it with Moodle for data transfer efficiency. Docker and Git were employed for deployment and collaboration.",
    tags: ["React", "SQL", "MUI", "NodeJS", "Express framework", "JWT Authentication", "Docker container", "Git Version Control" ],
    imageUrl: smmsReportApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Materia-UI",
  "Bootstrap",
  "MSSQL",
  "MySQL",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
  "AWS"
] as const;