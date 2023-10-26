import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import urgence from '../../public/urgence.png'
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
    title: "Computer network and systems engineer",
    location: "Sydney, Australia",
    description:
    "Sydney College",
    icon: React.createElement(FaReact),
    date: "Feb 2021 – Present",
  },
  {
    title: "IT Consultant",
    location: "Sydney, Australia",
    description:
    "Freelance",
    icon: React.createElement(FaReact),
    date: "Feb 2017 – Present",
  },
  {
    title: "Full stack web developer",
    location: "Sydney, Australia",
    description:
    "The Studio",
    icon: React.createElement(FaReact),
    date: "Feb 2020 - Mar 2022",
  },
  {
    title: "Bachelor of IT (Mobile application development)",
    location: "Sydney, Australia",
    description:
      "Academy of Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2017 - Jun 2020",
  },
  {
    title: "Computer network and systems engineer",
    location: "Sydney, Australia",
    description:
    "Australian International College",
    icon: React.createElement(FaReact),
    date: "Jun 2017 - Feb 2021",
  },
  {
    title: "Diploma of IT (Software development)",
    location: "Sydney, Australia",
    description:
    "Australian Computer Society",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2016 - Jun 2017",
  },
  {
    title: "Computer system engineer",
    location: "Chiang Mai, Thailand",
    description:
    "C.P.D. Sheetboard Co., Ltd.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2000 - Dec 2013",
  },
  
  {
    title: "Bachelor in Business Administration",
    location: "Chiang Mai, Thailand",
    description:
      "Maejo University",
    icon: React.createElement(LuGraduationCap),
    date: "May 1998 - Mar 2000",
  },
] as const;

export const projectsData = [
  {
    title: "People collapsed detection and notify system.",
    description:
      "In a Python project, I showcased my AI and Machine Learning skills by utilizing TensorFlow to detect falls in Raspberry Pi camera footage and send real-time alerts through a Flutter app.",
    tags: ["Python", "Tensorflow", "Firebase", "Raspberry-PI", "Open-CV"],
    imageUrl: urgence,
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
  "AWS",
  "AwareIM"
] as const;