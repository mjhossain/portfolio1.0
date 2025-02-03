import React, { useState } from 'react';
import TechStack from "./TechStack"

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

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setIsModalOpen(false)}>
                            &times;
                        </button>
                        <h3>{props.name}</h3>
                        <div className="tech-stack">
                            Core Technologies: {tech_stack}
                        </div>
                        <p className='overview'>Idea:</p>
                        <p className='pj-desc'>{props.desc}</p>
                        {props.deployment && <p className='overview'>Deployment:</p>}
                        {props.deployment && <p className='pj-desc'>{props.deployment}</p>}
                        {props.notableFeatures && <p className='overview'>Notable Features:</p>}
                        {props.notableFeatures && (
                            <ul className='feature-list'>
                                {props.notableFeatures.map((feature, index) => (
                                    <li key={index} className='pj-desc'>{feature}</li>
                                ))}
                            </ul>
                        )}
                        <div className="modal-buttons">
                            {props.github && <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
                            {props.demo && <a href={props.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}