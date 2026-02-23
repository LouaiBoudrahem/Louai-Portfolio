import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    unity,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }
];

export const experiences = [
    {
        title: "Unity Game Development",
        company_name: "Self-taught",
        icon: unity,
        iconBg: "#accbe1",
        date: "2020 - Present",
        points: [
            "Learned the fundamentals of Unity game development, including C# programming, game mechanics, and level design through online tutorials and personal projects.",
        ],
    },
    {
        title: "Data science and machine learning",
        company_name: "ESTIN, Algeria",
        icon: python,
        iconBg: "#a2d2ff",
        date: "2021 - 2025",
        points: [
            "Pursuing a degree in Data Science and Machine Learning, gaining knowledge in statistical analysis, data visualization, and machine learning algorithms.",
        ],
    },
    {
        title: "Master degree in Game development",
        company_name: "University of Artois, France",
        icon: python,
        iconBg: "#a2d2ff",
        date: "2021 - present",
        points: [
            "Pursuing a master's degree in Game Development, focusing on advanced game design, programming, and interactive media.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Louaios',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/louai-boudrahem-365b20258',
    }
];

export const projects = [
    {
        iconUrl: unity,
        theme: 'btn-back-red',
        name: 'Sekiro Like Combat and Traversal System',
        description: 'Developed a comprehensive combat and traversal system inspired by Sekiro, featuring fluid movement, precise combat mechanics, and engaging enemy AI.',
        link: 'https://github.com/Louaios/Sekiro-Like-Combat-and-Traversal-System',
    },
    {
        iconUrl: unity,
        theme: 'btn-back-green',
        name: 'God of War Axe Throw System Replica',
        description: 'Created a replica of the axe-throwing mechanic from God of War, implementing realistic physics, aiming mechanics, and retrieval systems for an immersive gameplay experience.',
        link: 'https://github.com/Louaios/God-of-War-Axe-Throw-System-Replica',
    },
    {
        iconUrl: python,
        theme: 'btn-back-blue',
        name: 'AI Driven Personalized Nutrition Planner',
        description: 'Designed and built a mobile app for personalized nutrition planning, leveraging AI to provide tailored dietary recommendations.',
        link: 'https://github.com/Louaios/AI-Driven-Personlized-Nutrition-Planner',
    },
    {
        iconUrl: unity,
        theme: 'btn-back-pink',
        name: 'Augmented Reality Waste Filtering App',
        description: 'Developed an augmented reality application for waste filtering, enhancing environmental awareness and promoting sustainable practices.',
        link: 'https://github.com/Louaios/Sirius-Club-Bejaia-Hackathon-Augmented-Reality-App',
    },
    {
        iconUrl: python,
        theme: 'btn-back-black',
        name: 'Shortest Path France Cities',
        description: 'Developed an application to find the shortest path between cities in France, optimizing travel routes and distances.',
        link: 'https://github.com/Louaios/Shortest-Path-France-Cities',
    },
    {
        iconUrl: nodejs,
        theme: 'btn-back-yellow',
        name: 'Blogging Web Site inspired by reddit',
        description: 'Created a blogging website inspired by Reddit, featuring user-generated content, voting systems, and community engagement functionalities.',
        link: 'https://github.com/Louaios/Blogging-Web-Site-for-DATABASE-project',
    }
];