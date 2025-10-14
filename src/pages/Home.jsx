import { useEffect, useState } from 'react'
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { MotionRoute, MotionChild } from '../components/Motions';

export const Home = () => {
    
    const [ loadName, setLoadName ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoadName(true);
    }, [loadName]);

    return (
        <MotionRoute>
            <MotionChild>
                <div className='home'>
                    <div>
                        <p className={`name ${loadName? 'loading' : ''}`}>
                            <span className={`highlighter ${loadName? 'loading' : ''}`}>Mimi Lim</span>
                        </p>
                    </div>
                    <div className={`description ${loadName? 'loading' : ''}`}>
                        <p className='text'>Front End Developer</p>
                        <button className='button' onClick={()=>navigate('/projects')}>SEE PROJECTS</button>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default Home
