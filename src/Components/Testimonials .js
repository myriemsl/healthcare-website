import React from 'react';
import avatar from '../Assets/avatar.svg';

const Testimonials  = () => {
  return (
    <div className='testimonials'>
      <div className='box'>
        <div className='customer-details'>
          <img src={avatar} alt='avatar'/>
          <h6>Name | Job</h6>
        </div>
       <div className='customer-testimonial'>
         <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
       </div>
      </div>
      <div className='box'>
        <div className='customer-details'>
          <img src={avatar} alt='avatar'/>
           <h6>Name | Job</h6>
        </div>
       <div className='customer-testimonial'>
         <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
       </div>
      </div>
      <div className='box'>
        <div className='customer-details'>
          <img src={avatar} alt='avatar'/>
          <h6>Name | Job</h6>
        </div>
       <div className='customer-testimonial'>
         <p>“Lorem ipsum dolor sit amet, nam te nulla labore option.”</p>
       </div>
      </div>           
    </div>
  )
}

export default Testimonials ;