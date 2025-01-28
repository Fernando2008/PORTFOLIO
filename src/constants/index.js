const navElements = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Get in Touch",
  },
];

const aboutData = [
  {
    id: 0,
    title: "Who am I?",
    pharagraph:
      "I am an Italian student from Benevento, passionate about computer science and technology, with a solid academic background in Computer Science (IT - ICT). I started programming independently at the age of 11, in middle school, and since then, I have never stopped expanding my knowledge.",
  },
  {
    id: 1,
    title: "What can I do?",
    pharagraph:
      "Over the years, I have gained skills in numerous programming languages and technologies, including: Frontend: HTML, CSS, SCSS, JavaScript, TypeScript, React, Angular, Vite Backend: Node.js, PHP, Python, SQL, MySQL, C# Mobile: Dart, Flutter Other languages: C, C++ 3D/Graphics: Three.js Embedded systems: Arduino (WiFi, Carrier), Raspberry Pi I have developed several web projects on my own using React and Vite, building dynamic and interactive websites. Additionally, I have worked on various hardware projects with Arduino and Raspberry Pi, including WiFi devices and a robotic arm, exploring the integration between software and hardware.",
  },
  {
    id: 2,
    title: "Language skills",
    pharagraph:
      "In addition to my technical skills, I have a solid command of English, which enables me to understand and work with international technical documentation, collaborate with global teams, and undertake projects in international contexts.",
  },
  {
    id: 3,
    title: "My philosophy",
    pharagraph:
      "I am always looking for new challenges and opportunities to learn. My enthusiasm for innovation drives me to keep experimenting with new technologies and languages, and I enjoy tackling complex problems with creative and practical solutions.",
  },
];

const stringsUrls = [
  "https://libreria-barbarossa.netlify.app",
  "https://pcto-malta.mattmantou.com",
  "https://plastic-factory.mattmantou.com",
  "https://github.com/Fernando2008/C-Cpp",
];

const programmingLanguages = [
  { id: 0, name: "Python", color: "#306998", tag: "SiPython" },
  { id: 1, name: "C", color: "#00599C", tag: "SiC" },
  { id: 2, name: "C++", color: "#00599C", tag: "SiCplusplus" },
  { id: 3, name: "C#", color: "#68217A", tag: "TbBrandCSharp" },
  { id: 4, name: "HTML", color: "#E44D26", tag: "FaHtml5" },
  { id: 5, name: "CSS", color: "#1572B6", tag: "FaCss3Alt" },
  { id: 6, name: "SCSS", color: "#C76395", tag: "FaCss3" },
  { id: 7, name: "Tailwind", color: "#38BDF8", tag: "RiTailwindCssFill" },
  { id: 8, name: "JavaScript", color: "#F7DF1E", tag: "IoLogoJavascript" },
  { id: 9, name: "TypeScript", color: "#3178C6", tag: "BiLogoTypescript" },
  { id: 10, name: "NodeJS", color: "#8CC84B", tag: "FaNodeJs" },
  { id: 11, name: "React", color: "#61DAFB", tag: "FaReact" },
  { id: 12, name: "ThreeJs", color: "#FFFFFF", tag: "TbBrandThreejs" },
  { id: 13, name: "Vite", color: "#646CFF", tag: "SiVite" },
  { id: 14, name: "Angular", color: "#DD0031", tag: "FaAngular" },
  { id: 15, name: "Dart", color: "#00B4B6", tag: "SiDart" },
  { id: 16, name: "Flutter", color: "#02569B", tag: "SiFlutter" },
  { id: 17, name: "PHP", color: "#8993BE", tag: "FaPhp" },
  { id: 18, name: "MySQL", color: "#00618A", tag: "SiMysql" },
  { id: 19, name: "SQL", color: "#F29111", tag: "AiOutlineConsoleSql" },
];

import lib from "../assets/barbarossa_svg.svg";
import pcto from "../assets/pcto.png";
import plastic from "../assets/PF_robot.png";
import candcpp from "../assets/candcpp_circular.png";

const workCardsData = [
  {
    id: 0,
    img: lib,
    alt: "Libreria Barbarossa IMG",
    color: `bg-lightText`,
    title: "Libreria Barbarossa Website",
    url: stringsUrls[0],
    tooltip: "TOOLTIP",
  },
  {
    id: 1,
    img: pcto,
    alt: "School-Work IMG",
    color: "bg-[#16314f]",
    title: "School-Work Website",
    url: stringsUrls[1],
    tooltip: "TOOLTIP",
  },
  {
    id: 2,
    img: plastic,
    alt: "Plastic Factory IMG",
    color: "bg-black",
    title: "Plastic Factory Website",
    url: stringsUrls[2],
    tooltip: "TOOLTIP",
  },
  {
    id: 3,
    img: candcpp,
    alt: "C/C++ IMG",
    color: "bg-black",
    title: "C and C++ Projects",
    url: stringsUrls[3],
    tooltip: "TOOLTIP",
  },
];

const socialICons = [
  {
    url: "https://www.linkedin.com/in/fernando-togna-5a43a0339",
    tag: "FaLinkedin",
    color: "#0A66C2",
  },
  {
    url: "https://github.com/Fernando2008",
    tag: "FaGithub",
    color: "#FFFFFF",
  },
  {
    url: "https://t.me/print_ferny?start=Hi,%20I%20come%20from%20your%20portfolio.%20I%20want%20to%20know%20some%20more%about:%20",
    tag: "FaTelegramPlane",
    color: "#0088CC",
  },
  { url: "https://x.com/_Slyder1_", tag: "FaXTwitter", color: "#FFFFFF" },
  {
    url: "https://www.instagram.com/__fernando1._/url",
    tag: "FaInstagram",
    color: "#E1306C",
  },
];

export {
  navElements,
  aboutData,
  stringsUrls,
  programmingLanguages,
  workCardsData,
  socialICons,
};
