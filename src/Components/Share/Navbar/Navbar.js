import React from 'react';
import logo from '../../../Images/Subtract.png';
import title from '../../../Images/mYSITE.png';
import notification from '../../../Images/notifications_24px.png';
import avatar from '../../../Images/Oval.png';
import help from '../../../Images/help_outline_24px.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <section className='navbar-container d-flex justify-content-between'>
            <div className="title-logo d-flex">
                <div className='logo'>
                    <img  src={logo} alt="logo" />
                </div>
                <div className="title">
                    <img  src={title} alt="title" />
                </div>
            </div>
            <div className="info-notification d-flex">
                <div className="avatar-img">
                    <img src={avatar} role="button" alt="avatar" /><span className='ml-2' role="button">Kishore</span>
                </div>
                <div className="notification">
                    <img className='ml-5' role="button" src={notification} alt="" />
                </div>
                <div className="ask-help">
                    <img className='ml-3' role="button" src={help} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Navbar;