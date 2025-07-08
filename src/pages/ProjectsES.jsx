import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';

export const ProjectsES = () => {
    return (        
        <MotionRoute>
            <MotionChild>
                <div className='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='content'>
                        <span>
                            <p>Aqui hay mis proyectos.</p>
                        </span>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default ProjectsES