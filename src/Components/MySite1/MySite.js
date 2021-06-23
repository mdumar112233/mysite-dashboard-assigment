import React from 'react';
import Sidebar from '../Share/Sidebar/Sidebar';
import Features from '../Share/Sidebar/Features/Features';
import plus from '../../Images/add_24px.png';
import edit from '../../Images/edit_24px.png';
import remove from '../../Images/delete_24px.png';
import view from '../../Images/remove_red_eye_24px.png';
import { Link } from 'react-router-dom';
import './MySite.css';

const MySite = () => {
    return (
            <section>
                <Sidebar></Sidebar>
                <div className="col-md-10 mySite1-container" style={{marginLeft: '15rem'}}>
                    <Features></Features>
                    <div className='add-delete mt-5 ml-4 d-flex'>
                        <div>
                            <button className='add-btn'><img src={plus} alt="edit" />  Add Role</button>
                        </div>
                        <div className="edit" role='button'>
                            <img src={edit} alt="edit" />
                        </div>
                        <div className="remove" role='button'>
                            <img src={remove} alt="remove" />
                        </div>
                    </div>

                   <div className='mt-4 ml-4'>
                        <table class="table">
                        <thead class="thead-light">
                            <tr>
                            <th scope="col">Deparment/Role Name</th>
                            <th scope="col" className='text-center'>Access Level</th>
                            <th scope="col" className='text-center'>No of members</th>
                            <th scope="col" className='text-center'>Last Update</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='d-flex'><div className='white-dot'></div> <div>Management Team</div></td>
                            <td className='text-center'><span className='access-status-yes'>All Access</span></td>
                            <td className='text-center'>4</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center'><img src={view} alt="" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div className='white-dot'></div> <div>Procurement Team</div></td>
                            <td className='text-center'><span className='access-status-no'>Restricted Access</span></td>
                            <td className='text-center'>8</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center'><img src={view} alt="" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div className='white-dot'></div> <div>Project Team</div></td>
                            <td className='text-center'><span className='access-status-no'>Restricted Access</span></td>
                            <td className='text-center'>16</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center'><img src={view} alt="" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div className='white-dot'></div> <div>IT Team</div></td>
                            <td className='text-center'><span className='access-status-no'>Restricted Access</span></td>
                            <td className='text-center'>4</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center'><img src={view} alt="" /></td>
                            </tr>
                            <tr>
                            <td className='d-flex'><div className='white-dot'></div> <div>Super Admin Team</div></td>
                            <td className='text-center'><span className='access-status-yes'>All Access</span></td>
                            <td className='text-center'>1</td>
                            <td className='text-center'>1 min ago</td>
                            <td className='text-center'><img src={view} alt="" /></td>
                            </tr>
                        </tbody>
                        </table>

                        <div className="switch-dashboard d-flex justify-content-center">
                            <Link className='dashboard1'  to='/dashboard1'>Dashboard 1</Link>
                            <Link className='dashboard1'  to='/dashboard2'>Dashboard 2</Link>
                            <Link className='dashboard1'  to='/dashboard3'>Dashboard 3</Link>
                        </div>
                   </div>
                </div>
                <div className='under-border'></div>
            </section>
    );
};

export default MySite;