import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { PROJECTS } from '../components/Project-list'
import { Button } from '../components/Button';

export const Projects = () => {
    return (
        <MotionRoute>
            <MotionChild>
                <div className='project'>
                    <div className='title'>
                        <h1>Projects</h1>
                    </div>
                    <div className='content'>
                        <span className='project-list'>
                        {PROJECTS.map((project, index) => (
                            <div className='project-list-item' key={index}>
                                <a href={project.link} target='_blank' rel='noreferrer'>
                                    <img src={project.img} alt={project.title} />
                                    <div className='text'>
                                        <p>{project.title}</p>
                                        <p>{project.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                        </span>
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