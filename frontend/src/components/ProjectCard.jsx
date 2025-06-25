import SkillCard from './SkillCard'
import { FaStarOfLife, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({title, description, bullets = [], skills = [], link}) {
    return(
        <>
        <div className="col-span-1 text-center xl:text-start">
            <div>
                <div className="text-2xl font-bold text-emerald-500">
                    <div className="flex justify-center gap-x-3">
                        {title}
                        <a href={link} target="blank_"><FaExternalLinkAlt className="hover:scale-115 transform transition-transform duration-250"/></a>
                    </div>
                </div>
                <p className="mt-4 text-gray-400 max-w-3xl">{description}</p>
                <ul className="mt-8 text-white items-center xl:items-start flex flex-col mx-auto xl:mx-0 max-w-3xl"> 
                    {bullets.map((point, index) => (
                        <li key={index} className="flex items-start justify-start md:justify-center xl:justify-start gap-2">
                            <FaStarOfLife className="text-fuchsia-400 w-4 h-4 shrink-0 mt-1 animate-[spin_10s_linear_infinite]" />
                            <span className="text-left">{point}</span> 
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap mt-8 gap-2 justify-center xl:justify-start max-w-3xl">
                    {skills.map((skill, i) => (
                        <SkillCard key={i} icon={skill.icon} name={skill.name}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}
export default ProjectCard;