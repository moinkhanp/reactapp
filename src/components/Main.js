import React from 'react'
import Datatable from './Datatable'
import './Main.css'
import MainHeader from './MainHeader'

function Main() {
    return (
        <div className='main'>
           <MainHeader/>
           <Datatable/>
        </div>
    )
}

export default Main