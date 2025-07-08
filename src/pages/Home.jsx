import React, { useEffect, useState } from 'react'
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    
    const [ loadName, setLoadName ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoadName(true);
    }, []);

    return (
        <div className='home'>
            <div>
                <p className={`name ${loadName? 'loading' : ''}`}>
                    <span className={`highlighter ${loadName? 'loading' : ''}`}>Mimi Lim</span>
                </p>
            </div>
            <div className={`description ${loadName? 'loading' : ''}`}>
                <p>Front End Developer</p>
                <button className='projectBttn' onClick={()=>navigate('/projects')}>SEE PROJECTS</button>
            </div>
        </div>
    )
}
