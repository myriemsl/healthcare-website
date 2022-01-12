import React from 'react';
import doctors from '../Assets/doctors.svg';
import Testimonials from '../Components/Testimonials ';

const Home = () => {
    return (
        <div className='container'>
            <div className='home main'>
                <div className='description1'>
                 <h3>Get the help you need</h3>
                 <p>Lorem ipsum dolor sit amet, nam te nulla labore option.</p>
                 <p>Id probatus insolens scriptorem nec, an enim quodsi vis.</p>
                 <p>Ad fugit harum possim eam.</p>
                </div>
                 <img src={doctors} alt='homepic' className='homepic' />
            </div>
            <div className='home description2'>
                <div>
                 <h4>Why mental health is important?</h4>
                 <p>Lorem ipsum dolor sit amet, nam te nulla labore option. Id probatus insolens scriptorem nec, an enim quodsi vis. Ad fugit harum possim eam.</p>
                 <p>Lorem ipsum dolor sit amet, nam te nulla labore option. Id probatus insolens scriptorem nec, an enim quodsi vis. Ad fugit harum possim eam.</p>
                </div>
                <div>
                 <h4>How does it affect us?</h4>
                 <p>Lorem ipsum dolor sit amet, nam te nulla labore option. Id probatus insolens scriptorem nec, an enim quodsi vis. Ad fugit harum possim eam.</p>
                 <p>Lorem ipsum dolor sit amet, nam te nulla labore option. Id probatus insolens scriptorem nec, an enim quodsi vis. Ad fugit harum possim eam.</p>
                </div>
            </div>
            <div className='home '>
             <Testimonials/>
            </div>
        </div>
    )
}

export default Home;
