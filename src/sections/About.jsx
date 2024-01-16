import '../css/Body.css';
import CoderSVG from "../assets/coder-3.svg"
import { AiFillGithub, AiFillLinkedin, AiOutlineCloudDownload, AiOutlineMail } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri';

export default function About() {
    return(
    <div className="about">
                <div className="intro-text">
                <h1 className="hi">Hi, I'm Mohammed</h1>
                <br></br>
                <p className="intro-para">I am a computer systems student deeply fascinated by the complexities of our digital era, with a particular emphasis on cloud computing. My focus is on ensuring the robust and efficient operation of cloud-based infrastructures, which form the backbone of modern applications. I am also heavily involved in the field of DevOps, striving to streamline the integration and delivery processes in cloud environments. Additionally, cybersecurity is a key area of interest for me, where I am dedicated to strengthening cloud security and protecting sensitive data. These areas of expertise collectively guide my academic path and inspire my ambitions in the technology landscape.</p>
                <div className="social-btns">
                    <a className="link-btn" href="MohammedJHossain.pdf" target="_blank"><AiOutlineCloudDownload />Resume</a>
                    <a className="link-btn" href="https://github.com/mjhossain" target="_blank"><AiFillGithub />Github</a> 
                    <a className="link-btn" href="https://www.linkedin.com/in/mohammedjhossain/" target="_blank"><AiFillLinkedin />LinkedIn</a>
                    <a className="link-btn" href="https://twitter.com/mothinks247" target="_blank"><RiTwitterXFill />Twitter</a>
                    <a className="link-btn" href="mailto:mjhossain97@protonmail.com" target="_blank"><AiOutlineMail />Email</a>
                </div>
                </div>
                <img src={CoderSVG} alt="Coder SVG" className='abt-img' />
            </div>
    )
}

