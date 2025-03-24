import React, { useState } from 'react';
import TechStack from "./TechStack"
import ProjectModal from './ProjectModal';

export default function ProjectCard(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tech_stack = props.tech.map(tech => {
        return <TechStack key={tech} name={tech} />
    })

    return(
        <>
            <div className="project-card" onClick={() => setIsModalOpen(true)}>
                <img src={props.img} alt="" />
                <h5>{props.name}</h5>
                <div className="info">
                    <div className="btns">
                        { props.github != "" ? <a href={props.github} target='_blank' >Github</a> : "" }
                        { props.demo != "" ? <a href={props.demo} target='_blank' >Visit App</a> : "" }
                    </div>
                    <p className='summary'>{props.summary}</p>
                    {/* <div className="tech-stack">
                        {tech_stack}
                    </div> */}
                </div>
            </div>

            <ProjectModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={props}
            />
        </>
    )
}