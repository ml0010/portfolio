import React from 'react'
import '../styles/About.css'
import { MotionRoute, MotionChild } from '../components/Motions';


export const About = () => {
  return (
    <MotionRoute>
        <MotionChild>
            <div className='about'>
                <div className='title'>
                    <h1>About</h1>
                </div>
                <div className='content'>
                    <span>
                        <p>Hi! This is Mimi.</p>
                        <p>This is English page.</p>
                    </span>
                </div>
            </div>
        </MotionChild>
    </MotionRoute>
  )
}
export default About