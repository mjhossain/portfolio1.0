import { BiLogoReact, BiLogoPython, BiLogoDocker, BiLogoFirebase, BiLogoPostgresql, BiLogoJava, BiLogoFlutter, BiLogoMongodb } from 'react-icons/bi'
import { BsFiletypeJson } from 'react-icons/bs'
import { SiFastapi, SiGnubash } from 'react-icons/si'
import '../css/logos.css'

export default function Skills() {
    return(
        <div className="skills">

            <div className="skills-content">
               
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