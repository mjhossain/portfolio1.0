

export default function ProjectCard(props) {
    return(
        <div className="project-card"  id={props.position === "left" ? "left" : "right"}>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className="tech-stack">

            </div>     
        </div>
    )
}