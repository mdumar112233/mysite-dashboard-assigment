import React from 'react';
import permission from '../../../../Images/rss_feed_24px.png';
import view from '../../../../Images/view_module_24px.png';
import reload from '../../../../Images/sync_24px.png';
import line from '../../../../Images/Line 40.png';

const Features = () => {
    return (
        <div>
            <div className="features d-flex justify-content-between" >
                 <div className="user-status d-flex">
                    <div className="permission" role="button">
                        <img src={permission} alt="permisstion" /> <span style={{color: '#673AB7'}} className='ml-1'> Permission</span>
                    </div>
                    <div className="line ml-3">
                        <img src={line} alt="line" />
                    </div>
                    <div className="approval ml-3" role="button">
                        <img src={view} alt="view" /> <span className='ml-1'>Approval Matrix</span>
                    </div>
                </div>
                <div className='mr-5 synced'>
                    <img role="button" src={reload} alt="reload" /><span> Last synced 15 mints ago</span>
                </div>
            </div>
        </div>
    );
};

export default Features;