import React from 'react'
import TechStack from "./TechStack"

export default function ProjectCard(props) {
    const tech_stack = props.tech.map(tech => {
        return <TechStack key={tech} name={tech} />
    })
    return(
        <div className="project-card">
            <img src={props.img} alt="" />
            <div className="info">
                <div className="btns">
                    { props.github != "" ? <a href={props.github} >Github</a> : "" }
                    { props.demo != "" ? <a href={props.demo} >Demo</a> : "" }
                </div>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
                <div className="tech-stack">
                    {tech_stack}
                </div> 
            </div>
                
        </div>
    )
}