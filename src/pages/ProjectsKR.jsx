import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { Button } from '../components/Button';
import ProjectOutput from '../components/Project-output';

export const ProjectsKR = () => {
        
        const language = 'kr';
        
        return (
            <MotionRoute>
                <MotionChild>
                    <div className='project'>
                        <div className='title'>
                            <h1>프로젝트</h1>
                        </div>
                        <div className='content'>
                            <ProjectOutput language={language}/>
                            <span>
                                <p>곧 더 많은 프로젝트가 업로드될 예정입니다.</p>
                                <Button text='Contact me via Linkedin' link='https://www.linkedin.com/in/mimi-lim' />
                            </span>
                        </div>
                    </div>
                </MotionChild>
            </MotionRoute>
        )
}
export default ProjectsKR