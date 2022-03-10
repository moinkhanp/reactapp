import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import './Dashboard.css'

function Dashboard() {
    return (
        <div className='dash__wrapper'>
            <Sidebar />
            <Main />
        </div>

    )
}

export default Dashboard