import React from 'react';

const Contact = () => {
    return (
        <div className='container contactform'>
           <h3>Contact </h3>
           <form>
            <div className='contactdetails'>
               <div className='name'>
                <label>Full Name</label>
                <input type='text'/>
               </div>
               <div className='email'>
                <label>Email</label>
                <input type='email'/>
               </div>
            </div>
            <div className='contactdescription'>
               <label>Your Message</label>
               <textarea rows='5' cols='50'/>
            </div>
           </form>
           <button className='submitbtn'>Submit</button>
        </div>
    )
}

export default Contact;
