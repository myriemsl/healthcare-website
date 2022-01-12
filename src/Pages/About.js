import React from 'react';
import doctor from '../Assets/doctor.svg';

const About = () => {
    return (
        <div className='container'>
            <div className='about main'>
                <div className='description1'>
                 <h3>About us</h3>
                 <p><span style={{fontWeight:'bolder', fontSize:'1rem'}}>We care about your mental health</span> Lorem ipsum dolor sit amet, nam te nulla labore option.</p>
                 <p>Id probatus insolens scriptorem nec, an enim quodsi vis.</p>
                 <p>Ad fugit harum possim eam.</p>
                </div>
                 <img src={doctor} alt='homepic' className='aboutpic' />
            </div>
        </div>
    )
}

export default About;
