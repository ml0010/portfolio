import { useState } from 'react'

import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { TechnologyIcon } from '../components/Technology-icon';
import { PROJECTS } from '../components/Project-list'

export const ProjectOutput = ({language}) => {

    const [ showDetail, setShowDetail ] = useState(false);
    const [ item, setItem ] = useState(null);



    const handleClick = (e) => {
        console.log(e.target);
    };
    return (
        <span className='project-list'>
            {PROJECTS.map((project, index) => (
                <div 
                    className={`project-list-item ${item === index ? 'active' : ''}`}
                    key={index} 
                    id={index} 
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                    onClick={(e) => handleClick(e)}
                >
                    <img src={project.img} alt={project.title} />
                    <div className='project-description'>
                        <p className='project-title'>{project.title}</p>
                        <div className='project-detail'>
                            <div className='links'>
                                <a className='link' href={project.repository} target='_blank' rel='noreferrer'><GithubLogoIcon size={15} weight="fill" /> GITHUB REPOSITORY</a>
                                <a className='link' href={project.link} target='_blank' rel='noreferrer'><ArrowSquareOutIcon size={15} /> WEBPAGE </a>
                            </div>
                            <div className='skills'>
                                {project.skills.map((skill, index) => (
                                    <TechnologyIcon text={skill} key={index}/>
                                ))}
                            </div>
                            <p className='text'>{project.description[language]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </span>
    )
}
export default ProjectOutput;