import '../css/Skills.css'
import { BiLogoReact, BiLogoPython, BiLogoDocker, BiLogoFirebase, BiLogoPostgresql, BiLogoJava, BiLogoFlutter, BiLogoMongodb } from 'react-icons/bi'
import { BsFiletypeJson } from 'react-icons/bs'
import { SiFastapi, SiGnubash } from 'react-icons/si'
import '../css/logos.css'

export default function Skills() {
    return (
        <div className="skills" id="skills">

            <div className="skills-content">
                <h1>Skills // Tools // Certs</h1>
                <div className="skills-showcase">
                    <div className="box">
                        <h2>Programming</h2>
                        <p>Python | Powershell | Bash | Javascript | SQL</p>
                    </div>
                    <div className="box">
                        <h2>DevOps</h2>
                        <p>CI/CD | AWS | Azure | Docker | Power Automate | Github Actions | Terraform | Ansible | Jenkins</p>
                    </div>
                    <div className="box">
                        <h2>Network & Security</h2>
                        <p>Firewall Management | Cloud Networking | Packet Analysis | LOG Analysis | VPN Management</p>
                    </div>
                    <div className="box-cert">
                        {/* <h2>Certifications</h2> */}
                        <div className="certs">
                            <div className='cert'>
                                <img src="/images/google-cc-c.png" alt="" />
                                <a href="https://coursera.org/share/822a8a1177b065ecb0ebca5fb89314e1" target='_blank'>
                                    Google Cybersecurity Professional
                                </a>
                            </div>
                            <div className='cert'>
                                <img src="/images/cc-c.png" alt="" />
                                <a href="https://www.credly.com/badges/a8a930c1-c9df-4852-a6a5-15a45d4743d5/public_url" target='_blank'>
                                    ISC2 Certified in Cybersecurity
                                </a>
                            </div>
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