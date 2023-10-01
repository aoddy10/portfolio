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
      "I possess knowledge and skills in AI and Machine Learning, showcased through my active participation in a Machine Learning project. This project, implemented in Python, focused on utilizing machine learning techniques to analyse camera footage, specifically Raspberry Pi cameras, to detect instances of people falling or collapsing. I employed TensorFlow to train the machine learning model, enabling it to accurately identify such events. To enhance user safety, the system was designed to send real-time notifications to alert users about potential emergencies. The recorded data from the system was securely stored in Firebase, which facilitated the delivery of timely notifications to a mobile application developed with Flutter. This project underscores my proficiency in applying machine learning for real-time event detection and my ability to integrate multiple technologies to create a comprehensive and potentially lifesaving solution.",
    tags: ["Python", "Tensorflow", "Firebase", "Raspberry-PI", "Open-CV"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Massage Booking Management System",
    description:
      "I have successfully designed and developed a mobile application for a massage business booking system, leveraging the power of React Native for cross-platform compatibility. The app empowers managers with seamless booking slot management and customer issue recording capabilities. Additionally, it offers business owners robust tools for payment management and in-depth business analysis, enabling data-driven decisions. Furthermore, the app facilitates customer relationship management (CRM) and targeted advertising by leveraging the data recorded, thereby boosting business growth. This project exemplifies my proficiency in mobile app development and my ability to create multifunctional solutions that enhance operational efficiency and business expansion while adhering to industry best practices.",
    tags: ["React Native", "Tailwind", "Redux", "NodeJS", "Express Framework", "JWT Authentication", "MongoDB", "Docker container", "Git Version Control"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Student Management System",
    description:
      "I bring extensive experience in the development of a comprehensive Student Management System(SMS) using AwareIM. Additionally, I've extended its functionality by creating the SMMS Report, a dynamic reporting tool, utilizing ReactJS and Node.js Express Framework, and seamlessly connecting it to an MSSQL Database. This innovative reporting system significantly enhanced management efficiency. Moreover, I've integrated the SMMS Report with both the Student Management System and Moodle, the E-learning system, facilitating automated data transfer through Web Service API functions. Throughout the development process, I adopted Docker Container for efficient deployment and Git Version control for organized and collaborative development. This multifaceted project not only reflects my technical proficiency but also underscores my capacity to design and integrate complex systems while promoting efficient data management and reporting.",
    tags: ["React", "SQL", "MUI", "NodeJS", "Express framework", "JWT Authentication", "Docker container", "Git Version Control" ],
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
  "AWS"
] as const;