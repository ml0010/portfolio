import React from 'react'
import '../styles/About.css'
import { MotionRoute, MotionChild } from '../components/Motions';


export const AboutES = () => {
  return (
    <MotionRoute>
        <MotionChild>
            <div className='about'>
                <div className='title'>
                    <h1>About</h1>
                </div>
                <div className='content'>
                    <span>
                        <p>Hola! Soy Mimi.</p>
                        <p>Es pagina en castellano.</p>
                    </span>
                </div>
            </div>
        </MotionChild>
    </MotionRoute>
  )
}
export default AboutES