import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
             <div className='navtitle'>
                <h5>Mental Health Matters</h5>
            </div> 
            <div className={click ? "navitems active" : "navitems"}>
                <div className='navitem'>
                    <Link exact to="/healthcare-website" activeClassName="active" className="navlink" onClick={handleClick}>Home</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/healthcare-website/about" activeClassName="active" className="navlink" onClick={handleClick}>About</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/healthcare-website/services" activeClassName="active" className="navlink" onClick={handleClick}>Services</Link>
                </div>
                <div className='navitem'>
                    <Link exact to="/healthcare-website/contact" activeClassName="active" className="navlink" onClick={handleClick}><button>Contact</button></Link>
                </div>                    
            </div>
            <div className='navbaricon' onClick={handleClick}>
             { click ? <FaTimes/> : <FaBars/>}
           </div>
        </div>
    )
}

export default Navbar;
