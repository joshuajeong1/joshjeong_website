import { SiTailwindcss, SiSpringboot, SiMysql, SiMongodb, SiCplusplus  } from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5, FaSwift, FaLaravel, FaPython, FaGithub, FaDocker } from "react-icons/fa";
import { FaGolang, FaJava, FaArrowsSpin } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from 'motion/react';

function Skills() {
    return (
        <>
            <div class="grid grid-cols-2 grid-rows-[40px, 3fr] items-start gap-y-10 gap-x-10">
                <h1 class="bottom-0 font-bold text-5xl col-span-2">My <span class="text-indigo-500">Toolbox</span></h1>
                <div class="flex flex-col gap-y-3">
                    <h1 class="font-bold text-3xl">Frontend</h1>
                    <p class="font-mono">I have created multiple web applications using a variety of technologies, with the ones I am most comfortable with listed here. 
                    However, I am always striving to add to my stack, improving my efficiency and capabilities in the process.
                    </p>
                </div>

                <div class="flex flex-wrap justify-start gap-3">
                    <Skill icon={<IoLogoJavascript size={50} class="text-[#F7DF1E]" />} name="JavaScript"/>
                    <Skill icon={<FaReact size={50} class="text-[#61DAFB]"/>} name="React.js" />
                    <Skill icon={<SiTailwindcss size={50} class="text-[#06B6D4]" />} name="Tailwind" />
                    <Skill icon={<FaHtml5 size={50} class="text-[#E34F26]" />} name="HTML5" />
                    <Skill icon={<FaCss3Alt size={50} class="text-[#264DE4]" />} name="CSS" />
                    <Skill icon={<TbBrandFramerMotion size={50} class="text-purple-500" />} name="Motion" />
                    <Skill icon={<FaSwift size={50} class="text-[#F05138]" />} name="Swift"/>
                </div>

                <div class="flex flex-col gap-y-3">
                    <h1 class="font-bold text-3xl">Backend</h1>
                    <p class="font-mono">I use a variety of technologies when developing robust, maintainable, and efficient backend systems.
                        Similar to my growing frontend toolkit, I am actively learning additional technologies to become more and more flexible.
                    </p>
                </div>

                <div class="flex flex-wrap justify-start gap-3">
                    <Skill icon={<SiSpringboot size={50} class="text-[#6DB33F]"/>} name="Spring Boot" />
                    <Skill icon={<FaPython size={50} class="text-[#06B6D4]" />} name="Python" />
                    <Skill icon={<FaLaravel size={50} class="text-[#FF2D20]" />} name="PHP Laravel" />
                    <Skill icon={<FaGolang size={50} class="text-[#00ADD8]" />} name="Go" />
                    <Skill icon={<TbBrandCSharp size={50} class="text-white" />} name="C#" />
                    <Skill icon={<SiMysql size={50} class="text-[#4479A1]" />} name="SQL" />

                </div>

                <div class="flex flex-col gap-y-3">
                    <h1 class="font-bold text-3xl">Other Skills</h1>
                    <p class="font-mono">While hard to categorize, I use multiple other technologies for many different purposes, whether it is developing software or supporting my fullstack projects.
                    </p>
                </div>

                <div class="flex flex-wrap justify-start gap-3">
                    <Skill icon={<FaDocker size={50} class="text-[#2496ED]"/>} name="Docker" />
                    <Skill icon={<FaGithub size={50} class="text-[#181717]" />} name="GitHub" />
                    <Skill icon={<SiMongodb size={50} class="text-[#47A248]" />} name="MongoDB" />
                    <Skill icon={<SiCplusplus size={50} class="text-[#00599C]" />} name="C++" />
                    <Skill icon={<FaJava size={50} class="text-white" />} name="Java" />
                    <Skill icon={<FaArrowsSpin size={50} class="text-blue-300" />} name="Agile" />
                </div>
            </div>
        </>
    );
}

function Skill({icon, name}) {
    return (
        <motion.div class="w-40 flex flex-col rounded bg-gray-800 border border-gray-600 py-5 px-2 items-center space-y-3"
            initial={{
                opacity: 0,
                y:50
            }}
            whileInView={{
                opacity: 1,
                y:0
            }}
            viewport={{
                once: true,
                amount: 0.4
            }}
            whileHover={{
                scale: 1.05,
                backgroundColor: '#374151',
                boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
            }}
        >
            {icon}
            <p class="font-mono">{name}</p>
        </motion.div>
    )
}

export default Skills;