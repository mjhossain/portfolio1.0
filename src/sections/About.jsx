import '../css/Body.css';
import CoderSVG from "../assets/coder-3.svg"
import { AiFillGithub, AiFillLinkedin, AiOutlineCloudDownload, AiOutlineMail, AiOutlineMedium } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri';

export default function About() {
    return (
        <div className="about">
            <div className="intro-text">
                <h1 className="hi">Hi, I'm Mohammed</h1>
                <br></br>
                <p className="intro-para">My enthusiasm for technology spans from the complexities of cloud computing and the strategic aspects of cybersecurity to a deep-seated passion for software development, with a keen focus on crafting cross-platform applications and devops. This interest is fueled by the ambition to develop intuitive, adaptable applications that provide consistent user experiences across various platforms. As an IT Technician at Digacore, my role encompasses a broad spectrum of technical support tasks, including troubleshooting for servers, workstations, and network systems. Beyond these responsibilities, I leverage my software development expertise to improve digital solutions, offering remote support, managing network configurations, and contributing to strategic IT initiatives. My commitment to innovation in software development is integral to my approach, ensuring that both the applications I develop and the infrastructure I support are robust, secure, and efficient.</p>
                <div className="social-btns">
                    <a className="link-btn" href="MohammedJHossain.pdf" target="_blank"><AiOutlineCloudDownload />Resume</a>
                    <a className="link-btn" href="https://github.com/mjhossain" target="_blank"><AiFillGithub />Github</a>
                    <a className="link-btn" href="https://www.linkedin.com/in/mohammedjhossain/" target="_blank"><AiFillLinkedin />LinkedIn</a>
                    <a className="link-btn" href="https://twitter.com/mothinks247" target="_blank"><RiTwitterXFill />Twitter</a>
                    <a className="link-btn" href="https://medium.com/@mjhossainnyc" target="_blank"><AiOutlineMedium />Medium</a>
                    <a className="link-btn" href="mailto:mjhossain97@protonmail.com" target="_blank"><AiOutlineMail />Email</a>
                </div>
            </div>
            <img src={CoderSVG} alt="Coder SVG" className='abt-img' />
        </div>
    )
}

