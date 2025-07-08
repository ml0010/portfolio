import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';


export const HomeKR = () => {
    
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
                <p>프론트엔드 개발자</p>
                <button className='projectBttn' onClick={()=>navigate('/projects')}>SEE PROJECTS</button>
            </div>
        </div>
    )
}
