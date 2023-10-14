import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png"
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

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
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021 – Present",
  },
  {
    title: "IT Consultant",
    location: "Australia and Thailand",
    description:
      "Freelance",
    icon: React.createElement(FaReact),
    date: "Feb 2021 – Present",
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
    title: "Computer network and systems engineer",
    location: "Sydney, Australia",
    description:
      "Australian International College",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2017 - Feb 2021",
  },
  
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
  {
    title: "Bachelor of IT (Mobile application development)",
    location: "Sydney, Australia",
    description:
      "Academy of Information Technology",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2017 - Jun 2020",
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
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2000 - Dec 2013",
  },
  {
    title: "Bachelor in Business Administration",
    location: "Sydney, Australia",
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
      "Proficient in AI and Machine Learning, I used Python and TensorFlow to create a system that detects falls from Raspberry Pi cameras, sending real-time alerts via Firebase and a Flutter app.",
    tags: ["Python", "Tensorflow", "Firebase", "Raspberry-PI", "Open-CV"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Massage Booking Management System",
    description:
      "I developed a cross-platform React Native app for a massage business, streamlining bookings, payments, data analysis, and CRM for growth. Demonstrating mobile app expertise and operational efficiency.",
    tags: ["React Native", "Tailwind", "Redux", "NodeJS", "JWT Authentication", "MongoDB", "Docker container", "Git Version Control"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Project Management System",
    description:
      "I built a web-based project management system using ReactJS, Node.js, and MySQL for efficient staff performance analysis, project timeline management, and cost analysis, ideal for architecture and design projects.",
    tags: ["React", "SQL", "MUI", "NodeJS", "Docker container", "Git Version Control" ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Student Management System",
    description:
      "I'm experienced in SMS development with AwareIM, creating an efficient SMMS Report using ReactJS and Node.js, enhancing data management and integration with Moodle. This showcases my capacity to design and integrate complex systems.",
    tags: ["React", "SQL", "MUI", "NodeJS", "JWT Authentication", "Docker container", "Git Version Control", "AWS EC2" ],
    imageUrl: wordanalyticsImg,
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