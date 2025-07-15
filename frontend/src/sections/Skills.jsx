import { SiTailwindcss, SiSpringboot, SiMysql, SiMongodb, SiCplusplus, SiTypescript, SiPostgresql, SiExpress, SiPrisma} from "react-icons/si";
import { FaReact, FaCss3Alt, FaHtml5, FaSwift, FaLaravel, FaPython, FaGithub, FaDocker, FaNodeJs } from "react-icons/fa";
import { FaGolang, FaJava, FaArrowsSpin } from "react-icons/fa6";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'motion/react';
import LeftDiv from '../components/LeftDiv'
import RightDiv from '../components/RightDiv'

function Skills() {
    return (
        <>
            <LeftDiv className="bottom-0 col-span-2 mb-16">
                <h1 className="font-bold text-5xl">My <span className="text-emerald-400">Toolbox</span></h1>
            </LeftDiv>
            <div className="flex-1 items-center flex flex-col xl:grid xl:grid-cols-2 xl:grid-rows-[1fr_1fr_1fr] gap-10">
                <LeftDiv className="flex flex-col gap-y-3">
                    <h1 className="text-emerald-400 font-bold text-3xl text-center xl:text-start">Frontend</h1>
                    <p className="text-center xl:text-start">I have created multiple web applications using a variety of technologies, with the ones I am most comfortable with listed here. 
                    However, I am always striving to add to my stack, improving my efficiency and capabilities in the process.
                    </p>
                </LeftDiv>

                <RightDiv className="flex flex-wrap justify-center xl:justify-start gap-3">
                    <Skill icon={<IoLogoJavascript size={50} className="text-[#F7DF1E]" />} name="JavaScript"/>
                    <Skill icon={<SiTypescript size={50} className="text-[#3178C6]" />} name="TypeScript" />
                    <Skill icon={<FaReact size={50} className="text-[#61DAFB]"/>} name="React.js" />
                    <Skill icon={<RiNextjsFill size={50} className="text-black"/>} name="Next.js" />
                    <Skill icon={<SiTailwindcss size={50} className="text-[#06B6D4]" />} name="Tailwind" />
                    <Skill icon={<FaHtml5 size={50} className="text-[#E34F26]" />} name="HTML5" />
                    <Skill icon={<FaCss3Alt size={50} className="text-[#264DE4]" />} name="CSS" />
                    <Skill icon={<TbBrandFramerMotion size={50} className="text-purple-500" />} name="Motion" />
                    <Skill icon={<FaSwift size={50} className="text-[#F05138]" />} name="Swift"/>

                </RightDiv>

                <LeftDiv className="flex flex-col gap-y-3">
                    <h1 className="text-emerald-400 font-bold text-3xl text-center xl:text-start">Backend</h1>
                    <p className="text-center xl:text-start">I use a variety of technologies when developing robust, maintainable, and efficient backend systems.
                        Similar to my growing frontend toolkit, I am actively learning additional technologies to become more and more flexible.
                    </p>
                </LeftDiv>

                <RightDiv className="flex flex-wrap justify-center xl:justify-start gap-3">
                    <Skill icon={<SiSpringboot size={50} className="text-[#6DB33F]"/>} name="Spring Boot" />
                    <Skill icon={<SiExpress size={50} className="text-black" />} name="Express.js" />
                    <Skill icon={<FaPython size={50} className="text-[#06B6D4]" />} name="Python" />
                    <Skill icon={<FaLaravel size={50} className="text-[#FF2D20]" />} name="PHP Laravel" />
                    <Skill icon={<SiPrisma size={50} className="" />} name="Prisma" />
                    <Skill icon={<FaGolang size={50} className="text-[#00ADD8]" />} name="Go" />
                    <Skill icon={<TbBrandCSharp size={50} className="text-white" />} name="C#" />
                    <Skill icon={<SiMysql size={50} className="text-[#4479A1]" />} name="SQL" />
                    <Skill icon={<SiMongodb size={50} className="text-[#47A248]" />} name="MongoDB" />
                    <Skill icon={<SiPostgresql size={50} className="text-[#0064a5]" />} name="Postgresql" />
                </RightDiv>

                <LeftDiv className="flex flex-col gap-y-3">
                    <h1 className="text-emerald-400 font-bold text-3xl text-center xl:text-start">Other Skills</h1>
                    <p className="text-center xl:text-start">While hard to categorize, I use multiple other technologies for many different purposes, whether it is developing software or supporting my fullstack projects.
                    </p>
                </LeftDiv>

                <RightDiv className="flex flex-wrap justify-center xl:justify-start gap-3">
                    <Skill icon={<FaDocker size={50} className="text-[#2496ED]"/>} name="Docker" />
                    <Skill icon={<FaGithub size={50} className="text-[#181717]" />} name="GitHub" />
                    <Skill icon={<SiCplusplus size={50} className="text-[#00599C]" />} name="C++" />
                    <Skill icon={<FaJava size={50} className="text-white" />} name="Java" />
                    <Skill icon={<FaNodeJs size={50} className="text-[#215732]" />} name="Node.js" />
                    <Skill icon={<FaArrowsSpin size={50} className="text-blue-300" />} name="Agile" />
                </RightDiv>
            </div>

        </>
    );
}

function Skill({icon, name}) {
    return (
        <motion.div className="w-40 flex flex-col rounded bg-gray-800 border border-gray-600 py-5 px-2 items-center space-y-3"
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
            <p className="font-mono">{name}</p>
        </motion.div>
    )
}

export default Skills;