import React from 'react';
import logo from '../../../Images/Subtract.png';
import title from '../../../Images/mYSITE.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className='navbar-container'>
            <div className="title-logo d-flex">
                <div className='logo'>
                    <img  src={logo} alt="logo" />
                </div>
                <div className="title">
                    <img  src={title} alt="title" />
                </div>
            </div>
            <div className="info-notification">
                
            </div>
        </section>
    );
};

export default Navbar;