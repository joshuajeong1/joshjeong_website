import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data/ProjectData'
import LeftDiv from '../components/LeftDiv'
import RightDiv from '../components/RightDiv'
function Projects() {
    
    return (
        <div className="mt-8">
            <LeftDiv className="text-white text-3xl md:text-4xl xl:text-5xl font-bold text-center xl:text-start">Featured <span className="text-emerald-500">Projects</span></LeftDiv>
            <div className="grid grid-cols-1 3xl:grid-cols-2 gap-x-10 my-16 gap-y-16">
                {projectData.map((project, index) => (
                    <div key={index} className="flex flex-col xl:flex-row items-center gap-6">
                        <RightDiv className="order-1 xl:order-2 flex justify-center">
                            <div className="h-xs w-xs md:h-md md:w-md xl:h-lg xl:w-lg rounded-lg border-2 border-gray-800 overflow-hidden">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </RightDiv>

                        <LeftDiv className="order-2 xl:order-1">
                            <ProjectCard 
                                title={project.title}
                                description={project.description}
                                bullets={project.bullets}
                                skills={project.skills}
                                link={project.link}
                            />
                        </LeftDiv>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;