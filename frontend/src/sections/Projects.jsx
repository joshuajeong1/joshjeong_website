import ProjectCard from '../components/ProjectCard'
import { projectData } from '../data/ProjectData'

function Projects() {
    
    return (
        <div className="">
            <h1 className="text-white text-5xl font-bold">Featured Projects</h1>
            <div className="grid grid-cols-2 grid-rows-3 gap-10 my-10 justify-center items-center">
                {projectData.map((project, index) => (
                    <>
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        bullets={project.bullets}
                        skills={project.skills}
                    />
                    <div className="flex justify-center">
                        <div className="h-lg w-lg rounded-lg border-2 border-gray-800 overflow-hidden">
                            <img src={project.image} />
                        </div>
                    </div>
                    </>
                ))}
                    
            </div>
        </div>
    );
}

export default Projects;