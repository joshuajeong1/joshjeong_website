import SkillCard from './SkillCard'
import { FaStarOfLife } from "react-icons/fa";

function ProjectCard({title, description, bullets = [], skills = []}) {
    return(
        <>
        <div className="col-span-1 text-center xl:text-start">
            <div>
                <h1 className="text-2xl font-bold text-emerald-500">{title}</h1>
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