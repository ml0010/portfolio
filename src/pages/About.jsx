import React from 'react'
import '../styles/About.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { Button } from '../components/Button';


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
                    <span>
                        <h3>Education</h3>
                        <p></p>
                    </span>
                    <span>
                        <Button text='Download CV' link='' />
                    </span>
                </div>
            </div>
        </MotionChild>
    </MotionRoute>
  )
}
export default About