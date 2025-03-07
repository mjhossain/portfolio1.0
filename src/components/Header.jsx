import '../css/Header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <p><span className="mo">Mo</span>InTech</p>
            </div>
            <div className="navbar-box">
                <ul className="navbar">
                    <li><a href="MohammedJHossain.pdf" target='_blank'>Resume</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="/shell">&gt; Shell</a></li>
                </ul>
            </div>


        </div>
    )
}