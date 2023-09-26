import '../css/Header.css'

export default function Header() {
    return(
        <div className="header">
            <p><span className="mo">Mo</span>InTech</p>
            <ul className="navbar">
                <li><a href="#skills">Skill</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
    )
}