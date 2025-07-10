import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { PROJECTS } from '../components/Project-list'
import { Button } from '../components/Button';
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { TechnologyIcon } from '../components/Technology-icon';

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
                            <img src={project.img} alt={project.title} />
                            <div className='project-description'>
                                <div className='links'>
                                    <a className='link' href={project.repository} target='_blank' rel='noreferrer'><GithubLogoIcon size={25} weight="fill" /></a>
                                    <a className='link' href={project.link} target='_blank' rel='noreferrer'><ArrowSquareOutIcon size={25} /></a>
                                </div>
                                <p className='project-title'>{project.title}</p>
                                <p className='text'>{project.description}</p>

                                <div className='skills'>
                                    {project.skills.map((skill, index) => (
                                        <TechnologyIcon text={skill} key={index}/>
                                    ))}
                                </div>

                            </div>
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