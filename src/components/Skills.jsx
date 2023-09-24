import { BiLogoReact, BiLogoPython, BiLogoDocker, BiLogoFirebase, BiLogoPostgresql, BiLogoJava, BiLogoFlutter, BiLogoMongodb } from 'react-icons/bi'
import { BsFiletypeJson } from 'react-icons/bs'
import { SiFastapi, SiGnubash } from 'react-icons/si'
import '../css/logos.css'

export default function Skills() {
    return(
        <div className="skills"  id="skills">

            <div className="skills-content">
                <h1>Skills // Tools</h1>
                <div className="skills-showcase">
                    <div className="box">
                        <h2>Development</h2>
                        <p>Java, Python, JavaScript, Dart, PHP, SQL, MongoDB, React, FastAPI, NodeJS, Flutter, Firebase</p>
                    </div>
                    <div className="box">
                        <h2>Operations</h2>
                        <p>Cloud Computing, Docker, Virtualization, Networking, CI/CD, Git, Automation, Linux Shell Scripting</p>
                    </div>
                    <div className="box">
                        <h2>Security</h2>
                        <p>SIEM, LOG Analysis, Packet Analysis, Security Controls, Security Frameworks</p>
                    </div>
                </div>
            </div>

            <div className="logos-body">
                <BiLogoReact fill='black' size='8em'className='logos logo-1' /> 
                <BiLogoPython fill='black' size='10em' className='logos logo-2' />
                <BiLogoDocker fill='black' size='10em' className='logos logo-3' />
                <BiLogoFirebase fill='black' size='10em' className='logos logo-4' />
                <BiLogoPostgresql fill='black' size='10em' className='logos logo-5' />
                <BsFiletypeJson fill='black' size='6em' className='logos logo-6' />
                <BiLogoJava fill='black' size='8em' className='logos logo-7' />
                <SiFastapi fill='black' size='6em' className='logos logo-8' />
                <SiGnubash fill='black' size='5em' className='logos logo-9' />
                <BiLogoFlutter fill='black' size='7em' className='logos logo-10' />
                <BiLogoMongodb fill='black' size='10em' className='logos logo-11' />
            </div>
        </div>
    )
}