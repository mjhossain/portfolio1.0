
import '../index.css'
import '../css/Body.css'
import About from './About';
import Skills from "./Skills";
import Projects from "./Projects"

export default function Body() {
    return(
        <div className="body">
            <About />
            <div className="spacer layer1"></div>
            <Skills />
            <div className="spacer layer2"></div>
            <Projects />
        </div>
    )
}