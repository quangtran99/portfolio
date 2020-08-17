import React from 'react'
import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Interests from './Interests';
import ReadingProgress from './ReadingProgress';




export default function ResumeContent() {
    const target = React.createRef();
    return (
        <div>
            <ReadingProgress target={target} />
            <div ref={target}>
                <AboutMe />
                <Education />
                <Experience />
                <Skills />
                <Portfolio />
                <Interests />
            </div>

        </div>
    )
}
