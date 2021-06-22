import React from 'react';
import project from '../../../Images/dashboard_24px.png';
import control from '../../../Images/security_24px.png';
import profile from '../../../Images/business_center_24px.png';
import './Sidebar.css';

const Sidebar = () => {
    return (
          <div className="col-md-2 sidebar-container">
               <div className="project">
                    <img  src={project} alt="project" /> <span className='text-secondary mt-3'>Projects</span>
                </div>
                <div className="profile">
                    <img src={profile} alt="profile" /> <span className='text-secondary'>Organisation Profile</span>
                </div>
                <div className="control">
                    <img src={control} alt="control" /> <span className='text-secondary'>Access Control</span>
                </div>
             </div>
        );
    };

export default Sidebar;