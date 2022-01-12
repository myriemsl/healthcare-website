import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiPhone, FiMail, FiMapPin} from "react-icons/fi";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerdetails'>      
                <div className='social'>
                    <h6>Follow us on</h6>
                    <FiFacebook className='icon'/> <FiInstagram className='icon'/> <FiTwitter className='icon'/>
                </div>
                <div className='contact'>
                    <h6><FiPhone className='icon'/> phone number</h6>
                    <h6><FiMail className='icon'/> email address</h6>
                </div>
                <div className='address'>
                    <h6><FiMapPin className='icon'/> address</h6>
                </div>
            </div>
            <div className='copyright'>
               <h6>© 2022 | developed by myriemsl.dev</h6>
            </div>
        </div>
    )
}

export default Footer;
