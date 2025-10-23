import '../css/Body.css';
import CoderSVG from "../assets/coder-3.svg"
import { AiFillGithub, AiFillLinkedin, AiOutlineCloudDownload, AiOutlineMail, AiOutlineMedium } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri';
import { VscTerminalPowershell } from "react-icons/vsc";

export default function About() {
    return (
        <div className="about">
            <div className="intro-text">
                <h1 className="hi">Hi, I'm Mohammed</h1>
                <br></br>
                <p className="intro-para">As an Automation Engineer at DigaCore, I specialize in developing intelligent business automation solutions that enhance efficiency and scalability across the organization. I build and maintain complex automation workflows using n8n and Microsoft Power Automate, while also managing two SaaS platforms focused on user account consolidation and distribution—one of which I developed from the ground up. <br /><br />

Previously, as an IT Technician, I designed PowerShell-based automation tools, created internal applications with Microsoft PowerApps, and managed database operations using SQL, collaborating closely with service, security, engineering, and project teams to streamline IT operations.
<br /><br />
Driven by a deep passion for cloud computing, development, and automation, I’m now focused on advancing into Cloud Engineering, where I can design and deploy secure, scalable cloud infrastructures that bridge software development and IT operations.</p>
                <div className="social-btns">
                    <a className="link-btn" href="https://github.com/mjhossain" target="_blank"><AiFillGithub />Github</a>
                    <a className="link-btn" href="https://www.linkedin.com/in/mohammedjhossain/" target="_blank"><AiFillLinkedin />LinkedIn</a>
                    <a className="link-btn" href="https://medium.com/@mjhossainnyc" target="_blank"><AiOutlineMedium />Medium</a>
                    <a className="link-btn" href="mailto:mjhossain97@protonmail.com" target="_blank"><AiOutlineMail />Email</a>
                </div>
                <br />
                <a className="shell-btn" href="/Shell" target="_blank"><VscTerminalPowershell /> &nbsp;Learn more about me using this SHELL</a>

            </div>
            <img src={CoderSVG} alt="Coder SVG" className='abt-img' />
        </div>
    )
}

