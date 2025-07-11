import akash from "../assets/images/AkashKumarSaw/AkashKumarSaw.png";

import blockchainS from "../assets/images/Services/blockchain.png";
import developmentS from "../assets/images/Services/development.png";
import devopS from "../assets/images/Services/devops.png";

import blockchain from "../assets/images/Skills/blockchain.png";
import webDev from "../assets/images/Skills/web-dev.png";
import mobileDev from "../assets/images/Skills/mobile-dev.jpg";
import devops from "../assets/images/Skills/devops.png";

import itopper from "../assets/images/Projects/itopper.png";
import kubernetes from "../assets/images/Projects/kubernetes.jpeg";
import chatgpt from "../assets/images/Projects/chatgpt.png";
import decentralizedportfolio from "../assets/images/Projects/decentralizedportfolio.png";
import blockdrive from "../assets/images/Projects/blockdrive.png";
import pollhub from "../assets/images/Projects/pollhub.png"
import akash_project from "../assets/images/Projects/AkashKumarSaw.png";

import pawan from "../assets/images/Testimonials/pawan.png";
import rahul from "../assets/images/Testimonials/rahul.png";

import akash_hireme from "../assets/images/Hireme/AkashKumarSaw.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { IoCodeSlash } from 'react-icons/io5';

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: IoCodeSlash,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  AkashKrSaw: {
    title: "Full Stack Engineer",
    subTitle: "DEV | WEB3 | DEVOPS",
    firstName: "Akash",
    LastName: "Kr Saw",
    btnText: "Contact Me",
    image: akash,
    akash_content: [
      {
        count: "10+",
        text: "Proficient in coding across a spectrum of 10+ languages",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TECH PROFICIENCY",
    skills_content: [
      {
        name: "Full Stack Application Development",
        logo: mobileDev,
        skill: ["Java", "Kotlin", "Android Studio", "Swing", "NetBeans", "Swift", "Xcode", "JavaScript", "React Native", "NodeJS", "ExpressJS", "Dart", "Flutter", "API's" , "Firebase", "MySQL", "SQL", "MongoDB", "PostgreSQL", "Git/GitHub", "GitLab"],
      },
      {
        name: "Full Stack Website Development",
        logo: webDev,
        skill: ["Python", "DJango", "Flask", "PHP", "Ajax", "Laravel ", "JavaScript", "ReactJS", "jQuery", "Tailwindcss", "ViteJS", "NextJS", "NodeJS", "ExpressJS", "WebSocket", "MySQL", "SQL", "MongoDB", "PostgreSQL", "Git/GitHub", "GitLab"],
      },
      {
        name: "CloudComputing & DevOps",
        logo: devops,
        skill: ["Linux", "YAML", "Go/Golang", "Gorilla.go", "Mux.go", "AWS", "GCP", "Azure", "Linode", "Docker", "Kubernetes", "Jenkins", "GitHub Action", "Ansible", "Puppet", "Nagios", "Terraform", "MySQL", "SQL", "MongoDB", "PostgreSQL", "Git/GitHub", "GitLab"],
      },
      {
        name: "Web3/Blockchain",
        logo: blockchain,
        skill: ["Solidity", "Smart Contracts", "OpenZeppelin", "ChainLink/Oracle", "Python", "Web3.py", "Eth-Brownie", "Web3.js", "Ethers.js", "Truffle", "Ganache", "Hardhat", "DJango", "Flask", "JavaScript", "ReactJS", "Tailwindcss", "ViteJS", "NextJS", "NodeJS", "ExpressJS",  "MySQL", "SQL", "MongoDB", "PostgreSQL", "Git/GitHub", "GitLab"],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web3/Blockchain Solutions",
        para: "Step into the future with our Web3 and Blockchain expertise. We don't just build applications, we create secure decentralized ecosystems that redefine trust and transparency.",
        logo: blockchainS,
      },
      {
        title: "DevOps Excellence",
        para: "Elevate your development process to new heights with our DevOps mastery. We optimize workflows, enhance collaboration and ensure seamless deployments, so you can focus on what truly matters: innovation.",
        logo: devopS,
      },
      {
        title: "Full Stack Software Development",
        para: "Experience the synergy of design and functionality with our Full Stack Software Development service. From crafting captivating web interfaces to building immersive mobile applications, we bring your ideas to life, ensuring seamless user experiences across platforms.",
        logo: developmentS,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: akash_project,
    project_content: [
      {
        title: "PollHub - Social Polling Platform",
        image: pollhub,
        link: "https://github.com/akash-kumar-saw/PollHub"
      },
      {
        title: "BlockDrive - NFT-Based Files Hosting & Sharing on Ethereum",
        image: blockdrive,
        link: "https://github.com/akash-kumar-saw/BlockDrive"
        
      },
      {
        title: "KubeDeployment - Powerful & Lightweight Kubernetes Deployment Manager",
        image: kubernetes,
        link: "https://github.com/akash-kumar-saw/KubeDeployment"
      },
      {
        title: "DecentralizedPortfolio - Blockchain-Powered Portfolio",
        image: decentralizedportfolio,
        link: "https://github.com/akash-kumar-saw/DecentralizedPortfolio"
      },
      {
        title: "iTopper - Play Live Quiz for JEE/NEET & Win Money",
        image: itopper,
        link: "https://github.com/akash-kumar-saw/iTopper"
      },
      {
        title: "ChatGPT CLI - Command Line Interface",
        image: chatgpt,
        link: "https://github.com/akash-kumar-saw/ChatGPT-CLI"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENTS REVIEW",
    testimonials_content: [
      {
        review:
          "Working with Akash was an absolute pleasure! His expertise in building smart contracts left me impressed. Not only did he deliver a seamless solution, but also his attention to detail and dedication to my project truly stood out.",
        img: pawan,
        name: "Pawan Kumar",
        designation: "Software Engineer @ HighRadius, Bhubaneswar, India",
      },
      {
        review:
          "Kudos to Akash for setting up an exceptional CI/CD Jenkins pipeline for our project. His proficiency in streamlining our development process was evident. The pipeline he designed has already saved us valuable time and effort",
        img: rahul,
        name: "Rahul Kumar",
        designation: "MCA @ Birla Institute of Technology, Mesra, Ranchi, India",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECT",
    image1: akash_hireme,
    image2: akash_hireme,
    para: "Looking for a tech collaborator who can handle all aspects of software magic? Let's come and create something amazing together.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "akashkumarsaw03@gmail.com",
        icon: GrMail,
        link: "mailto:akashkumarsaw03@gmail.com",
      },
      {
        text: "+91 7979985211",
        icon: FaWhatsapp,
        link: "https://wa.me/7979985211",
      },
      {
        text: "akash-kumar-saw",
        icon: FaGithub,
        link: "https://www.github.com/akash-kumar-saw/",
      },
    ],
  },
};
