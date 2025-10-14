import '../styles/About.css'
import { MotionRoute, MotionChild } from '../components/Motions';
import { Button } from '../components/Button';
import { RevealOnScroll } from '../components/Reveal-on-scroll';

export const About = () => {
  return (
    <MotionRoute>
        <MotionChild>
            <div className='about'>
                    <div className='title'>
                        <h1>About</h1>
                    </div>
                <div className='content'>
                    <span className='introduction'>
                        <p>Hi! I am Mimi Lim.</p>
                        <p>I majored Computer Science at the university back in 2009. I recently redescovered my interest in UX/UI design. Since then I have been working on a few design projects based on the knowledge I have, also using the new skills I have gathered by completing various courses.</p>
                        <p>I am a passionate React developer and love to discover new ideas. I have extensive knowledge about Node.js, Express.js and MongoDB and it has been applied to many of my projects.</p>
                    </span>
                    <RevealOnScroll>
                        <span>
                            <h3>Education / Certificates</h3>
                            <p>List</p>
                            <p>List</p>
                            <p>List</p>
                        </span>
                    </RevealOnScroll>
                    <span>
                        <Button text={`Download CV`} link='' />
                    </span>
                </div>
            </div>
        </MotionChild>
    </MotionRoute>
  )
}
export default About