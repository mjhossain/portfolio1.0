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
                <p className="intro-para">As an Automation Engineer at DigaCore, I design and implement intelligent automation systems that improve efficiency, scalability, and reliability across the organization. I build and maintain complex workflows using n8n and Microsoft Power Automate, integrating multiple business systems to eliminate repetitive tasks and optimize user lifecycle management.<br /><br />

I also lead the modernization of internal SaaS platforms, rebuilding legacy infrastructure into Next.js, Python, and Supabase applications with containerized deployments, CI/CD pipelines, and robust authentication systems — one of which I engineered from the ground up. <br /><br />

Driven by a passion for automation, DevOps, and AI-assisted development, I focus on creating scalable, cloud-ready solutions that bridge software engineering and IT operations — enabling businesses to operate smarter, faster, and more securely.</p>
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

