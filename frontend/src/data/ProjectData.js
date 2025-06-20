import { SiTailwindcss, SiSpringboot, SiMysql, SiMongodb, SiCplusplus  } from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5, FaSwift, FaLaravel, FaDatabase, FaGithub, FaDocker, FaSpotify, FaMapMarkedAlt } from "react-icons/fa";
import { FaGolang, FaJava, FaArrowsSpin } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

export const projectData = [
  {
    title: "ASU Capstone Judging Application",
    description: "Web application with accompanying iOS and Android apps that is used by Arizona State University to grade capstone projects.",
    bullets: [
      "Written in PHP Laravel and Blade",
      "Mobile applications written in Swift and Kotlin for iOS and Android, respectively",
      "API created with Golang to handle authentication, login, and database access"
    ],
    skills: [
      { icon: FaLaravel, name: "PHP Laravel" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiMysql, name: "MySQL" }
    
    ],
    image: "/asucapstonejudging.png"
  },
  {
    title: "Music Map",
    description: "iOS mobile app for tracking music listening habits on a map, with a variety of filters and interesting statistics.",
    bullets: [
      "Utilizes Spotify API for user listening data",
      "Location tracking and tagging with Apple MapKit and location services",
      "Local data persistence and states with CoreData"
    ],
    skills: [
      { icon: FaSwift, name: "Swift" },
      { icon: FaGithub, name: "GitHub" },
      { icon: FaSpotify, name: "Spotify API"},
      { icon: FaDatabase, name: "Apple CoreData"},
      { icon: FaMapMarkedAlt, name: "Apple MapKit"}
    ],
    image: "/musicmap.PNG"
  },
  {
    title: "Portfolio Website",
    description: "Fullstack web application used as a personal website.",
    bullets: [
        "Frontend written in React.js, Vite, Tailwind CSS, React Motion",
        "Backend written in Java Spring Boot to query APIs, handle contact form, serve downloads",
        "Containerized with Docker and deployed using Vercel"
    ],
    skills: [
        { icon: FaReact, name: "React.js" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: FaDocker, name: "Docker" },
        { icon: FaSpotify, name: "Spotify API" },
        { icon: TbBrandFramerMotion, name: "Motion" },
        { icon: SiSpringboot, name: "Spring Boot" },
        { icon: FaJava, name: "Java" },
    ],
    image: "https://media.gettyimages.com/id/1770279962/photo/smiling-man-levitating-in-mid-air.jpg?s=612x612&w=gi&k=20&c=JCGG07ipNnVF9FIRPYF6E50ttPLEH31KWkS1U7wT2gg="
  }
];