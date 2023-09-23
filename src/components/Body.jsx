
import CoderSVG from "../assets/coder-2.png"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri';
import Skills from "./Skills";

export default function Body() {
    return(
        <div className="body">
            <div className="about">
                <div className="intro-text">
                <h2 className="hi">Hi, I'm Mohammed</h2>
                <br></br>
                <p className="intro-para">I'm a computer science student with a fervent passion for the intricacies that lie behind the scenes of our digital world. My primary focus is on backend programming, ensuring that the engine room of applications runs seamlessly and efficiently. I'm also deeply immersed in the realm of DevOps, always aiming to bridge the gap between software development and IT operations for smoother deployments. Cybersecurity is another domain close to my heart; I believe in fortifying our digital infrastructures and safeguarding data. Together, these disciplines shape my academic journey and fuel my aspirations in the tech world.</p>
                <div className="social-btns">
                    <a className="link-btn" href="https://github.com/mjhossain" target="_blank"><AiFillGithub />Github</a> 
                    <a className="link-btn" href="https://www.linkedin.com/in/mohammedjhossain/" target="_blank"><AiFillLinkedin />LinkedIn</a>
                    <a className="link-btn" href="https://twitter.com/mothinks247" target="_blank"><RiTwitterXFill />Twitter</a>
                </div>
                </div>
                <img src={CoderSVG} alt="Coder SVG" />
            </div>
            <Skills />
        </div>
    )
}