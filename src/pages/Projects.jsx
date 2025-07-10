import React from 'react'
import '../styles/Projects.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { PROJECTS } from '../components/Project-list'
import { Button } from '../components/Button';
import { ArrowSquareOutIcon, BrowsersIcon, GithubLogoIcon } from '@phosphor-icons/react';

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
                            <div className='text'>
                                <p>{project.title}</p>
                                <p>{project.description}</p>
                                <div className='links'>
                                    <a className='link' href={project.repository} target='_blank' rel='noreferrer'><GithubLogoIcon size={35} weight="fill" /></a>
                                    <a className='link' href={project.link} target='_blank' rel='noreferrer'><ArrowSquareOutIcon size={35} /></a>
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