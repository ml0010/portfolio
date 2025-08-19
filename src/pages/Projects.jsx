import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { Button } from '../components/Button';
import ProjectOutput from '../components/Project-output';

export const Projects = () => {
    
    const language = 'en';
    
    return (
        <MotionRoute>
            <MotionChild>
                <div className='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='content'>
                        <ProjectOutput language={language}/>
                        <span>
                            <p>More projects are still to come.</p>
                            <Button text='Contact me via Linkedin' link='https://www.linkedin.com/in/mimi-lim' />
                        </span>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default Projects