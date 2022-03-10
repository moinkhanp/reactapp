import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import './Sidebar.css';

function Sidebar() {
    const [dashboard,setdashboard] = useState(false)
    const [customer,setcustomer] = useState(false)
    const [setting,setsetting] = useState(false)
    return (
        <div className='sidebar'>
            <div className='sidebar__wrapper'>
                <div className={dashboard ? 'sidebar_dashboard_grey sidebar__dashboard' : 'sidebar__dashboard'}  onClick={()=>{setdashboard(!dashboard);setsetting(false);setcustomer(false)}} >
                    <HomeIcon className='sidebar__icon' />
                    <div className='sidebar__title'>Dashboard</div>
                </div>

                <div className={customer ? 'sidebar_dashboard_grey sidebar__dashboard' : 'sidebar__dashboard'} onClick={()=>{setcustomer(!customer);setdashboard(false);setsetting(false)}}>
                    <PersonIcon className='sidebar__icon' />
                    <div className='sidebar__title'>Customer</div>
                </div>

                <div className={setting ? 'sidebar_dashboard_grey sidebar__dashboard' : 'sidebar__dashboard'} onClick={()=>{setcustomer(false);setdashboard(false);setsetting(!setting)}}>
                    <SettingsIcon className='sidebar__icon' />
                    <div className='sidebar__title'>Settings</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar