import React from 'react'
import Datatable from './Datatable'
import './Main.css'
import MainHeader from './MainHeader'
import Demo from './Demo'

function Main() {
    return (
        <div className='main'>
           <MainHeader/>
           <Demo/>
           {/* <Datatable/> */}
        </div>
    )
}

export default Main