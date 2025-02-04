import '../css/Projects.css'
import CoderBot from '../assets/laptop-bot.png'
import '../css/logos.css'
import ProjectsData from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {

    const projects = ProjectsData.map(project => {
        return <ProjectCard 
                    key={project.id}
                    {...project} 
                />
    })

    return(
        <div className="projects" id="projects">
            <div className="projects-header">
                <h1>Projects</h1>
                <p className="projects-subtitle">Explore my technical creations and experiments</p>
            </div>
            <div className="project-cards">
               {projects}
            </div>
            
            
        </div>
    )
}