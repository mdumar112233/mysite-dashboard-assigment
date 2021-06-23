import React from 'react';
import { Link } from 'react-router-dom';

const MySite2 = () => {
    return (
        <div>
            <h3>Hello</h3>
            <div className="switch-dashboard d-flex justify-content-center">
                            <Link className='dashboard1'  to='/dashboard1'>Dashboard 1</Link>
                            <Link className='dashboard1'  to='/dashboard2'>Dashboard 2</Link>
                            <Link className='dashboard1'  to='/dashboard3'>Dashboard 3</Link>
                        </div>
        </div>
    );
};

export default MySite2;