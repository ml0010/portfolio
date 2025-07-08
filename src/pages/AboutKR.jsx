import React from 'react'
import '../styles/About.css'
import { MotionRoute, MotionChild } from '../components/Motions';


export const AboutKR = () => {
  return (
    <MotionRoute>
        <MotionChild>
            <div className='about'>
                <div className='title'>
                    <h1>About</h1>
                </div>
                <div className='content'>
                    <span>
                        <p>안녕하세요! 저의 이름은 임미미 입니다.</p>
                        <p>한글 페이지</p>
                    </span>
                </div>
            </div>
        </MotionChild>
    </MotionRoute>
  )
}
export default AboutKR