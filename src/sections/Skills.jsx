import '../css/Skills.css'
import { BiLogoReact, BiLogoPython, BiLogoDocker, BiLogoFirebase, BiLogoPostgresql, BiLogoJava, BiLogoFlutter, BiLogoMongodb } from 'react-icons/bi'
import { BsFiletypeJson } from 'react-icons/bs'
import { SiFastapi, SiGnubash } from 'react-icons/si'
import '../css/logos.css'

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <div className="skills-content">
                <h1>Skills & Expertise</h1>
                <div className="skills-showcase">
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h2>Languages / Frameworks</h2>
                            <div className="skill-items">
                                <span>Python</span>
                                <span>Powershell</span>
                                <span>Bash</span>
                                <span>Javascript</span>
                                <span>SQL</span>
                                <span>Go</span>
                                <span>React</span>
                                <span>Node.js</span>
                                <span>Next.js</span>
                                <span>Flutter</span>
                                <span>Dart</span>   
                                <span>Java</span>
                            </div>
                        </div>
                        <div className="skill-card">
                            <h2>Tools / Operations</h2>
                            <div className="skill-items">
                                <span>CI/CD</span>
                                <span>AWS Cloud</span>
                                <span>Power Automate</span>
                                <span>Power BI</span>
                                <span>PowerApps</span>
                                <span>Docker</span>
                                <span>Github Actions</span>
                                <span>Terraform</span>
                                <span>Ansible</span>
                                <span>Jenkins</span>
                                <span>Networking</span>
                                <span>Kubernetes</span>
                            </div>
                        </div>
                        {/* <div className="skill-card">
                            <h2>Network & Security</h2>
                            <div className="skill-items">
                                <span>Firewall Management</span>
                                <span>Cloud Networking</span>
                                <span>Packet Analysis</span>
                                <span>LOG Analysis</span>
                                <span>VPN Management</span>
                            </div>
                        </div> */}
                    </div>
                    
                    <div className="certifications-section">
                        <h2>Certifications</h2>
                        <div className="cert-grid">
                            <a href="https://coursera.org/share/822a8a1177b065ecb0ebca5fb89314e1" target='_blank' rel="noopener noreferrer" className="cert-card">
                                <img src="/images/google-cc-c.png" alt="Google Cybersecurity" />
                                <div className="cert-info">
                                    <h3>Google Cybersecurity Professional</h3>
                                    <p>View Credential</p>
                                </div>
                            </a>
                            <a href="https://www.credly.com/badges/a8a930c1-c9df-4852-a6a5-15a45d4743d5/public_url" target='_blank' rel="noopener noreferrer" className="cert-card">
                                <img src="/images/cc-c.png" alt="ISC2 Certified" />
                                <div className="cert-info">
                                    <h3>ISC2 Certified in Cybersecurity</h3>
                                    <p>View Credential</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logos-body">
                <BiLogoReact fill='black' size='8em' className='logos logo-1' />
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