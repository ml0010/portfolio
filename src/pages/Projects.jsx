import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';

export const Projects = () => {
    return (
        <MotionRoute>
            <MotionChild>
                <div className='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='content'>
                        <span>
                            <p>My project list.</p>
                        </span>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default Projects