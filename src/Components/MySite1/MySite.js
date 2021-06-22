import React from 'react';
import Sidebar from '../Share/Sidebar/Sidebar';
import Features from '../Share/Sidebar/Features/Features';
import plus from '../../Images/add_24px.png';
import edit from '../../Images/edit_24px.png';
import remove from '../../Images/delete_24px.png';
import './MySite.css';

const MySite = () => {
    return (
            <section>
                <Sidebar></Sidebar>
                <div className="col-md-10 mySite1-container" style={{marginLeft: '15rem'}}>
                    <Features></Features>
                    <div className='add-delete mt-4 ml-4'>
                        <button><img src={plus} alt="" /> Add Role</button>
                    </div>
                </div>
                <div className='under-border'></div>
            </section>
    );
};

export default MySite;