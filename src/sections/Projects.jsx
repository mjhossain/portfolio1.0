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
        <div className="projects" id="projects" >
            <img src={CoderBot} className='coder-bot' />
            <h1>Projects</h1>
            <div className="project-cards">
               {projects}
            </div>
            
            
        </div>
    )
}