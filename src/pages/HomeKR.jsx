import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { MotionRoute, MotionChild } from '../components/Motions';


export const HomeKR = () => {
    
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
                        <p className='text'>프론트엔드 프로그래머</p>
                        <button className='button' onClick={()=>navigate('/projects_kr')}>프로젝트 보기</button>
                    </div>
                </div>
            </MotionChild>
        </MotionRoute>
    )
}
export default HomeKR
