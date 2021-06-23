import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Share/Sidebar/Sidebar';
import Features from '../Share/Sidebar/Features/Features';
import edit from '../../Images/edit_24px.png';
import arrow from '../../Images/arrow_back_24px.png';
import open from '../../Images/add_circle_outline_24px.png';
import line from '../../Images/Line 40.png';
import whiteDot from '../../Images/Knob.png';
import btnBg1 from '../../Images/Track.png';
import btnBg2 from '../../Images/Track1.png';
import close from '../../Images/do_disturb_on_24px.png';
import './MySite2.css';

const MySite2 = () => {
    const [openClose, setOpenClose] = useState(false);
    return (
        <div>
            <section>
                <Sidebar></Sidebar>
                <div className="col-md-10 mySite1-container" style={{marginLeft: '15rem'}}>
                    <Features></Features>

                    <div className="back-btn-edit-btn d-flex mt-5 ml-2">
                        <div className="back-btn ml-0">
                            <Link to='/dashboard1'><span style={{marginRight: '5px'}}><img src={arrow} alt="arrow" /></span>  Management Team</Link>
                        </div>
                        <div className="edit" role='button'>
                            <img src={edit} alt="edit" />
                        </div>
                    </div>

                    <div className="control-panel mt-4 ml-4">
                        <button className='access-btn'>Access Control</button>
                        <img className='ml-2 mr-2' src={line} alt="line" />
                        <button className='assign-btn'>Assiged Members</button>
                    </div>
                    <div className="under-line1"></div>
                    <div className="under-line2"></div>

                   <div className='mt-3 ml-4'>

                   
                        <table class="table">
                        <thead class="thead-light">
                            <tr>
                            <th scope="col">Deparment/Role Name</th>
                            <th scope="col" className='text-center'>Access Level</th>
                            <th scope="col" className='text-center'>Summary</th>
                            <th scope="col" className='text-center'>Last Update</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='d-flex'><div role='button' className='mr-2'><img src={open} alt="open" /></div> <div>Budget</div></td>
                            <td className='text-center'><span className='access-status-yes'>All Access</span></td>
                            <td className='text-center '>view <span className='text-secondary'>|</span> Create <span className='text-secondary'>|</span> edit <span className='text-secondary'>|</span> Delete</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center' role='button'><img className='on-btn-bg' src={btnBg1} alt="btnBg" /> <img className='on-btn-dot' src={whiteDot} alt="whiteDot" /></td>
                            </tr>
                                    <tr>                                
                                        {
                                            openClose ? <td className='d-flex' style={{paddingBottom: '240px'}}>
                                            {
                                                !openClose ? <div role='button' onClick={() => setOpenClose(true)} className='mr-2'><img src={open} alt="open" /> </div> : <div role='button' onClick={() => setOpenClose(false)} className='mr-2'><img src={close} alt="open" /> </div>
                                            }
                                        <div>Bidding</div></td> : <td className='d-flex'>
                                            {
                                                !openClose ? <div role='button'  onClick={() => setOpenClose(true)} className='mr-2'><img src={open} alt="open" /> </div> : <div role='button' onClick={() => setOpenClose(false)} className='mr-2'><img src={close} alt="open" /> </div>
                                            }
                                        <div>Bidding</div></td>
                                        }
                                    
                                        <td className='text-center'><span className='access-status-reject'>No Access</span></td>
                                        <td className='text-center'></td>
                                        <td className='text-center'>1 min ago</td>

                                        {
                                        !openClose ? <td className='text-center' role='button'><img className='off-btn-bg' src={btnBg2} alt="btnBg" /> <img className='off-btn-dot' src={whiteDot} alt="whiteDot" /></td> : <td className='text-center' role='button'><img className='on-btn-bg' src={btnBg1} alt="btnBg" /> <img className='on-btn-dot' src={whiteDot} alt="whiteDot" /></td>
                                        }
                                        </tr>                                    
                                        {
                                            openClose ? <div className='drop-down' style={{position: 'absolute', top: '21rem'}}>
                                                <p className='ml-5'>All aspects in bidding module</p>

                                                <div className="access-and-permission d-flex justify-content-evenly">
                                                    <div className="access-setting">
                                                        <p>Access Control</p>
                                                        <input className='mt-3' style={{position: 'absolute'}} type="radio" name='yes'/> <span className='ml-4 span-text'>All Access</span> <br /><small className='ml-4 text-secondary'>Can access all items</small> <br />

                                                        <div className='mt-3'>
                                                        <input className='mt-3' style={{position: 'absolute'}} type="radio" name='yes' /><span className='ml-4 span-text'>All Access</span> <br /><small className='ml-4 text-secondary'>Can access all items</small>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="side-line"></div>
                                                    <div className="permission-setting">
                                                        <p>Permission</p>
                                                        
                                                        <input type="checkbox" /> <span className='ml-1'>View item in access</span> <br />
                                                        <input type="checkbox" /> <span className='ml-1'>Edit items in access</span> <br />
                                                        <input type="checkbox" /> <span className='ml-1'>Create item in access</span> <br />
                                                        <input type="checkbox" /> <span className='ml-1'>Delete item in access</span>
                                                    </div>
                                                </div>
                                            </div>
                                            : ''
                                        }
                            <tr>
                            <td className='d-flex'><div role='button' className='mr-2'><img src={open} alt="open" /></div> <div>Vendor Portal</div></td>
                            <td className='text-center'><span className='access-status-no'>Restricted Access</span></td>
                            <td className='text-center '>view <span className='text-secondary'>|</span> Create <span className='text-secondary'>|</span></td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center' role='button'><img className='on-btn-bg' src={btnBg1} alt="btnBg" /> <img className='on-btn-dot' src={whiteDot} alt="whiteDot" /></td>
                            </tr>

                            <tr>
                            <td className='d-flex'><div role='button' className='mr-2'><img src={open} alt="open" /></div> <div>Purchase Order/Work Order</div></td>
                            <td className='text-center'><span className='access-status-no'>Restricted Access</span></td>
                            <td className='text-center '>view <span className='text-secondary'>|</span> Create <span className='text-secondary'>|</span></td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center' role='button'><img className='on-btn-bg' src={btnBg1} alt="btnBg" /> <img className='on-btn-dot' src={whiteDot} alt="whiteDot" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div role='button' className='mr-2'><img src={open} alt="open" /></div> <div>Organisational Profile</div></td>
                            <td className='text-center'><span className='access-status-yes'>All Access</span></td>
                            <td className='text-center '>view <span className='text-secondary'>|</span> Create <span className='text-secondary'>|</span> edit <span className='text-secondary'>|</span> Delete</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center' role='button'><img className='on-btn-bg' src={btnBg1} alt="btnBg" /> <img className='on-btn-dot' src={whiteDot} alt="whiteDot" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div role='button' className='mr-2'><img src={open} alt="open" /></div> <div>Permission & Access Control</div></td>
                            <td className='text-center'><span className='access-status-reject'>No Access</span></td>
                            <td className='text-center'></td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center' role='button'><img className='off-btn-bg' src={btnBg2} alt="btnBg" /> <img className='off-btn-dot'  src={whiteDot} alt="whiteDot" /></td>
                            </tr>
                        </tbody>
                        </table>
                   </div>
                </div>
                <div className='under-border'></div>
            </section>
        </div>
    );
};

export default MySite2;