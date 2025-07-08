import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';

export const ProjectsKR = () => {
    return (
        <MotionRoute>
            <MotionChild>
                <div className='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='content'>
                        <span>
                            <p>제 프론트엔트 프로젝트 리스트 입니다.</p>
                        </span>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default ProjectsKR