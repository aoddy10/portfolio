import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import saasai from "../../public/saas-ai.png";
import urgence from "../../public/urgence.png";
import massageBookingApp from "../../public/massage-booking-app.png";
import smmsReportApp from "../../public/smms-report.png";
import projectManagementApp from "../../public/weera-wissawakan.png";

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
        title: "Master of Software Engineering",
        location: "Auckland, New Zealand",
        company: "Yoobee College of Creative Innovation",
        tasks: [],
        icon: React.createElement(LuGraduationCap),
        date: "Nov 2024 - Present (Expected Nov 2025)",
    },
    {
        title: "Computer network and systems engineer",
        location: "Sydney, Australia",
        company: "Sydney College",
        tasks: [
            "Maintain and monitor computer network, school system, and application software.",
            "Develop and manage SMMS using AngularJS, NodeJS, and Express Framework.",
            "Design and develop system configurations.",
            "Develop and maintain school websites with WordPress, PHP, and JavaScript.",
            "Manage cloud server and student database (AWS EC2 and Hosting).",
            "Direct system installations, evaluate system operations and manage databases.",
            "Install and configure computer systems, diagnose hardware/software faults, and solve technical problems.",
            "Regularly update and maintain school network systems, service servers, and software.",
            "Provide network inventory, troubleshoot system procedures, and determine equipment repair replacement needs.",
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
        title: "Full stack web developer",
        location: "Sydney, Australia",
        company: "The Studio",
        tasks: [
            "Develop websites using HTML, JavaScript, and PHP, ensuring responsive design and optimal user experience.",
            "Update and maintain existing websites, implementing enhancements and resolving issues promptly.",
            "Create a membership system, allowing users to register, log in, and manage their accounts securely.",
            "Integrate websites with marketing platforms like Active Campaign, automating email campaigns and customer interactions.",
            "Integrate websites with payment platforms such as Stripe, enabling secure and seamless online transactions.",
            "Collaborate with cross-functional teams, including designers and back-end developers, to deliver high-quality web solutions.",
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
        title: "Computer network and systems engineer",
        location: "Sydney, Australia",
        company: "Australian International College",
        tasks: [
            "Maintain and monitor computer networks, school systems, and software/hardware configurations.",
            "Develop and manage the SMMS (Student Management System) using AngularJS, NodeJS, and Express Framework.",
            "Design and implement system configurations and installations.",
            "Create and maintain the school website with WordPress, PHP, and JavaScript.",
            "Manage cloud servers and student databases on AWS EC2 and Hosting.",
            "Direct system installations, evaluate operations and oversee database management.",
            "Install and configure computer systems and diagnose and troubleshoot hardware/software issues.",
            "Regularly update the school's network system, service servers, and software.",
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
        title: "Computer system engineer",
        location: "Chiang Mai, Thailand",
        company: "C.P.D. Sheetboard Co., Ltd.",
        tasks: [
            "Utilize virtualization technologies like Hyper-V and/or VMWare.",
            "Design, implement, and manage cloud technologies using Azure and/or AWS.",
            "Manage Office 365 and SharePoint deployments.",
            "Plan and implement hardware and software upgrades in existing installations.",
            "Design hardware and software configurations for new installations.",
            "Handle network and security tasks, including penetration testing.",
            "Research network infrastructure requirements and demands.",
            "Analyse, monitor and optimize system performance.",
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
