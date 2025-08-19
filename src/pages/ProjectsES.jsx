import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import ProjectOutput from '../components/Project-output';
import { Button } from '../components/Button';

export const ProjectsES = () => {
        
        const language = 'es';
        
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
export default ProjectsES