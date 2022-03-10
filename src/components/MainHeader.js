import React from 'react'
import './Mainheader.css'
import AddIcon from '@material-ui/icons/Add';

function MainHeader() {
    return (
        <div className='main_header'>
            <div className='main_header_title'>
                Customers
            </div>

            <div>
                <div className='main_add_button'>
                    <AddIcon className='main_icon' />
                     ADD CUSTOMER
                </div>
            </div>

        </div>
    )
}

export default MainHeader