import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import saasai from "../../public/saas-ai.png";
import urgence from "../../public/urgence.png";
import massageBookingApp from "../../public/massage-booking-app.png";
import smmsReportApp from "../../public/smms-report.png";
import projectManagementApp from "../../public/weera-wissawakan.png";
import aiResumeAnalyzer from "../../public/ai_resume_analyzer.png";
import kiwiExplorer from "../../public/kiwi-explorer.png";
import favourLogo from "../../public/logos/favour_logo.webp";
// video is served from the public/ folder at runtime; reference via URL below instead of importing the file

import IBM_Data_Analysis_with_Python from "../../public/badges/IBM_Data_Analysis_with_Python.png";
import AWS_AWS_Educate_Machine_Learning_Foundations from "../../public/badges/AWS_AWS_Educate_Machine_Learning_Foundations.png";
import IBM_Generative_AI_and_LLMs_Architecture_and_DataPreparation from "../../public/badges/IBM_Generative_AI_and_LLMs_Architecture_and_DataPreparation.png";
import IBM_Machine_Learning_with_Python from "../../public/badges/IBM_Machine_Learning_with_Python_(V2).png";
import IBM_Generative_AI_Foundational_Models_for_NLP from "../../public/badges/IBM_Generative_AI_Foundational_Models_for_NLP_&_Language_Understanding.png";

export const links = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Projects",
        link: "/project",
    },
    {
        name: "Experience",
        link: "/experience",
    },
] as const;

export const experiencesData = [
    {
        title: "Full Stack Engineer",
        location: "Auckland, New Zealand",
        company: "Favour",
        tasks: [
            "Assist in building and maintaining a cross-platform mobile app using React Native, focusing on responsive UI for both iOS and Android.",
            "Integrated Redux Toolkit to manage shared state across components efficiently.",
            "Connected frontend interfaces with Django-based backend APIs to support features like recipe browsing and meal planning.",
            "Contributed to RESTful API development, MySQL schema design, and AWS Lambda setup for backend scalability.",
            "Helped implement key features such as user authentication, meal customisation, and real-time order tracking.",
            "Participated in sprint planning, code reviews, and team discussions following agile methodology.",
            "Explored AI integration opportunities within the app’s workflow to enhance user experience.",
        ],
        icon: React.createElement(FaReact),
        date: "July 2025 - Present",
    },
    {
        title: "Master of Software Engineering",
        location: "Auckland, New Zealand",
        company: "Yoobee College of Creative Innovation",
        tasks: [],
        icon: React.createElement(LuGraduationCap),
        date: "Nov 2024 - Present (Expected Nov 2025)",
    },
    {
        title: "Full Stack Developer / System Engineer",
        location: "Sydney, Australia",
        company: "Sydney College",
        tasks: [
            "Built a student management system using AwareIM and AWS EC2 for cloud-based data access.",
            "Created SMMS reporting tools using React, Context API, Node.js and reduced report generation time by 40%.",
            "Integrated third-party LMS with RESTful APIs, automating result submissions with full accuracy.",
            "Led cloud migration and CI/CD pipelines for internal tools, enabling continuous delivery.",
        ],
        icon: React.createElement(FaReact),
        date: "Feb 2021 – Sep 2024",
    },
    // {
    //   title: "IT Consultant",
    //   location: "Sydney, Australia",
    //   company: "Freelance",
    //   tasks: [
    //     "Collaborate with clients to understand their specific business needs and challenges. Conduct thorough assessments to identify areas where IT solutions can enhance business operations or address issues effectively.",
    //     "Develop tailored IT solutions, including websites, applications, and system architectures, based on client requirements and industry best practices. Ensure that the proposed solutions align with the client's goals and objectives.",
    //     "Configure and deploy server infrastructure and IT environments that align with the client's business scale. This involves selecting the appropriate hardware and software components, optimizing performance, and ensuring scalability.",
    //     "Seamlessly integrate IT solutions with existing client systems, databases, and third-party services, fostering a cohesive and efficient IT ecosystem.",
    //     "Provide ongoing technical support and troubleshooting to clients, addressing any issues, concerns, or enhancements required post-implementation. Ensure that the IT solutions continue to function optimally.",
    //   ],
    //   icon: React.createElement(FaReact),
    //   date: "Feb 2017 – Present",
    // },
    {
        title: "Web Developer",
        location: "Sydney, Australia",
        company: "The Studio",
        tasks: [
            "Improved website performance and SEO (90+ scores) by refactoring and removing bottlenecks.",
            "Created a secure membership and payment system with user access control.",
        ],
        icon: React.createElement(FaReact),
        date: "Feb 2020 - Jun 2020",
    },
    {
        title: "Bachelor of IT (Mobile application development)",
        location: "Sydney, Australia",
        company: "Academy of Information Technology",
        tasks: [],
        icon: React.createElement(LuGraduationCap),
        date: "Oct 2017 - Jun 2020",
    },
    {
        title: "Software & Network Systems Engineer",
        location: "Sydney, Australia",
        company: "Australian International College",
        tasks: [
            "Implemented internal tools using React, Node.js, PHP, WordPress, and Docker for academic workflows.",
            "Managed server infrastructure, automated backups, and improved cybersecurity.",
        ],
        icon: React.createElement(FaReact),
        date: "Jun 2017 - Jun 2020",
    },
    {
        title: "Diploma of IT (Software development)",
        location: "Sydney, Australia",
        company: "Australian Computer Society",
        tasks: [],
        icon: React.createElement(LuGraduationCap),
        date: "Jul 2016 - Jun 2017",
    },
    {
        title: "ERP System Developer (Earlier Experience)",
        location: "Chiang Mai, Thailand",
        company: "C.P.D. Sheetboard Co., Ltd.",
        tasks: [
            "Developed a full ERP system in Visual Basic for stock, MRP, and production planning",
            "Achieved 60% stock reduction and faster lead times with automated planning tools.",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Aug 2000 - Dec 2013",
    },

    {
        title: "Bachelor in Business Administration",
        location: "Chiang Mai, Thailand",
        company: "Maejo University",
        tasks: [],
        icon: React.createElement(LuGraduationCap),
        date: "May 1998 - Mar 2000",
    },
] as const;

export const projectsData = [
    {
        title: "Favour Recipe Import Feature",
        subtitle: "TikTok & Photo-Based Recipe Import for Favour",
        description:
            "Contributed as a Full Stack Engineer to design, build, and ship a production recipe import feature for Favour, a New Zealand food and lifestyle app. Implemented recipe ingestion from TikTok URLs and from cookbook or recipe card photos, connecting React Native interfaces with Django APIs and AWS serverless pipelines backed by MySQL for reliable data processing across iOS and Android.",
        tags: [
            "React Native",
            "Redux",
            "Django",
            "AWS",
            "MySQL",
            "Serverless Framework",
        ],
        imageUrl: favourLogo,
        bgImage: "../../public/images/favour_bg.png",
        color1: "#7C3AED",
        color2: "#4C1D95",
        link: "https://www.tryfavour.com/",
        logo: favourLogo,
        videoUrl:
            "https://amzn-s3-idevtify-public-bucket.s3.ap-southeast-2.amazonaws.com/Favour_App_Feature_Teaser.mp4",
    },
    {
        title: "AI Resume Analyzer",
        subtitle: "AI-powered job matching with OpenAI & LangChain",
        description:
            "Developed a full-stack AI web app that analyzes resumes and compares them with job descriptions. Integrated OpenAI GPT-3.5 and LangChain for semantic gap analysis, with export options in Markdown and PDF. Built with FastAPI, Next.js, and Tailwind CSS.",
        tags: [
            "FastAPI",
            "Next.js",
            "OpenAI",
            "Tailwind CSS",
            "TypeScript",
            "Docker",
        ],
        imageUrl: aiResumeAnalyzer,
        bgImage: "",
        color1: "#1F2937",
        color2: "#0F172A",
        link: "https://github.com/aoddy10/ai-resume-analyzer",
        logo: "",
        videoUrl: "",
    },
    {
        title: "Kiwi Explorer",
        subtitle: "Tourism Information Web App",
        description:
            "Built a responsive web platform that showcases tourist attractions in New Zealand. Includes user authentication, location info, image galleries, and interactive maps. Developed with React App Router and Tailwind.",
        tags: [
            "React",
            "Tailwind CSS",
            "TypeScript",
            "Framer Motion",
            "Responsive Design",
        ],
        imageUrl: kiwiExplorer,
        bgImage: "",
        color1: "#047857",
        color2: "#065F46",
        link: "https://github.com/aoddy10/yoobee-mse800-kiwiexplorer",
        logo: "",
        videoUrl: "",
    },
    {
        title: "SAAS AI Platform",
        subtitle:
            "AI-Driven Content Creation with Seamless Payment Integration",
        description:
            "SaaS AI platform, developed with Next.js, uses OpenAI's API to generate chat, images, video, music, and code. Integrated with Stripe for seamless payment and subscription management, it provides versatile AI-driven content creation with ease. From automating interactions to producing multimedia, our platform ensures high-quality outputs effortlessly.",
        tags: [
            "Generative AI",
            "OpenAI API",
            "Next.js",
            "Stripe API",
            "Prisma",
            "Postgres",
        ],
        imageUrl: saasai,
        bgImage: "",
        color1: "#27437f",
        color2: "#263791",
        link: "https://idf-saas-ai.vercel.app",
        logo: "",
        videoUrl: "",
    },
    {
        subtitle: "People collapsed detection and notify system.",
        title: "Python and Machine Learning",
        description:
            "In a Python project, I showcased my AI and Machine Learning skills by utilizing TensorFlow to detect falls in Raspberry Pi camera footage and send real-time alerts through a Flutter app.",
        tags: ["Python", "Tensorflow", "Firebase", "Raspberry-PI", "Open-CV"],
        imageUrl: urgence,
        bgImage: "",
        color1: "#57343a",
        color2: "#2f1b3f",
        link: "",
        logo: "",
        videoUrl: "",
    },
    {
        subtitle: "Massage Booking Management System",
        title: "Mobile App with React Native",
        description:
            "Utilizing React Native, I designed a cross-platform mobile app for a massage business, simplifying booking and issue recording. It provides payment management and analytics tools, empowering data-driven decisions.",
        tags: [
            "React Native",
            "Tailwind",
            "Redux",
            "NodeJS",
            "Express Framework",
            "JWT Authentication",
            "MongoDB",
            "Docker container",
            "Git Version Control",
        ],
        imageUrl: massageBookingApp,
        bgImage: "",
        color1: "#276055",
        color2: "#0e826b",
        link: "",
        logo: "",
        videoUrl: "",
    },
    {
        subtitle: "Manage team and control budget",
        title: "Project management System",
        description:
            "Created a project management system with ReactJS, Node.js, and MySQL integration, empowering managers with performance analysis and cost tools, highlighting my full-stack development expertise.",
        tags: [
            "React",
            "SQL",
            "MUI",
            "NodeJS",
            "Express framework",
            "JWT Authentication",
            "Docker container",
            "Git Version Control",
        ],
        imageUrl: projectManagementApp,
        bgImage: "",
        color1: "#27437f",
        color2: "#263791",
        link: "",
        logo: "",
        videoUrl: "",
    },
    {
        subtitle: "Student Management System",
        title: "Modern React Project",
        description:
            "Developed a Student Management System using AwareIM, expanded it with the SMMS Report via ReactJS and Node.js, and integrated it with Moodle for data transfer efficiency. Docker and Git were employed for deployment and collaboration.",
        tags: [
            "React",
            "SQL",
            "MUI",
            "NodeJS",
            "Express framework",
            "JWT Authentication",
            "Docker container",
            "Git Version Control",
        ],
        imageUrl: smmsReportApp,
        bgImage: "",
        color1: "#27437f",
        color2: "#263791",
        link: "",
        logo: "",
        videoUrl: "",
    },
] as const;

export const skillsData = [
    "Generative AI",
    "Go",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Redux",
    "Django",
    "Node.js",
    "Git",
    "Tailwind",
    "Shadcn-ui",
    "Materia-UI",
    "Bootstrap",
    "Framer Motion",
    "GraphQL",
    "Prisma",
    "MSSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "AwareIM",
] as const;

export const badgesData = [
    {
        title: "Generative AI Foundational Models for NLP & Language Understanding",
        description:
            "Credential earned from IBM Developer Skills Network via Coursera. Covers NLP, Transformers, and Foundational LLMs.",
        imageUrl: IBM_Generative_AI_Foundational_Models_for_NLP,
        url: "https://www.credly.com/badges/83d8bb14-9db0-49b5-bd10-a2413b3387a1",
    },
    {
        title: "AWS Machine Learning Foundations",
        description:
            "AWS Educate program for fundamental ML knowledge including supervised, unsupervised learning, and data handling.",
        imageUrl: AWS_AWS_Educate_Machine_Learning_Foundations,
        url: "https://www.credly.com/badges/27ddb523-3524-435e-ac4e-dd011cf97f41",
    },
    {
        title: "Generative AI and LLMs: Architecture and Data Preparation",
        description:
            "IBM credential focusing on LLM architecture, prompt engineering, embeddings and vector stores.",
        imageUrl: IBM_Generative_AI_and_LLMs_Architecture_and_DataPreparation,
        url: "https://www.credly.com/badges/39bc8422-795e-4499-a827-eaf3f4ed2497",
    },
    {
        title: "Machine Learning with Python (V2)",
        description:
            "Covers supervised/unsupervised ML, scikit-learn pipelines, and evaluation methods with Python (IBM Digital Credential).",
        imageUrl: IBM_Machine_Learning_with_Python,
        url: "https://www.credly.com/badges/181ba467-399b-4cca-b01c-426f884ebee9",
    },
    {
        title: "Data Analysis with Python",
        description:
            "IBM credential via Coursera covering pandas, numpy, data wrangling and basic visualization with matplotlib.",
        imageUrl: IBM_Data_Analysis_with_Python,
        url: "https://www.credly.com/badges/adbeac0e-a000-4a9f-bb79-92b6c83fd9c7",
    },
] as const;
