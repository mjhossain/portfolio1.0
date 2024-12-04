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
                <p className="intro-para">As an IT Technician at DigaCore, I specialize in delivering comprehensive support for Networking, Windows Server, Active Directory, and Microsoft 365. My role includes optimizing network performance with SonicWall firewalls and VPNs, automating workflows using Azure, PowerShell, and Power Automate, and streamlining deployment processes through DevOps practices.
                    <br /><br />
                    Driven by a passion for cloud computing and automation, I am actively pursuing AWS Solutions Architect certification to transition into roles such as Cloud Engineer or Junior DevOps Engineer. With a focus on innovation, I aim to build secure, scalable, and efficient solutions that bridge infrastructure management and software development.</p>
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

