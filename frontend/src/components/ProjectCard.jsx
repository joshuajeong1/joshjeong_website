import SkillCard from './SkillCard'
function ProjectCard({title, description, bullets = [], skills = []}) {
    return(
        <>
        <div className="col-span-1">
            <div>
                <h1 className="text-2xl font-bold text-emerald-500">{title}</h1>
                <p className="mt-4 text-gray-400">{description}</p>
                <ul className="mt-8 list-disc pl-5 text-white marker:text-xl marker:text-fuchsia-500"> 
                    {bullets.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap mt-8 gap-2">
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