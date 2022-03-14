import React, { useState, useEffect } from 'react'
import './demo.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { getUsers } from '../axios'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import axios from 'axios';
function Demo() {

    const [user, setuser] = useState([]);


    //new changes
    const [pageNumber, setPageNumber] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [currentpage, setcurrentpage] = useState(0)
    const [active,setactive] = useState(false)

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

    useEffect(() => {
        fetchData();
    }, [pageNumber])

    async function fetchData() {
        const req = await getUsers(pageNumber);
        setuser(req.data.data);

        //changes
        setNumberOfPages(req.data.totalPages);
        setcurrentpage(req.data.total)


    }

    const gotoNext = () => {
        setPageNumber(Math.min(pageNumber + 1));
    };

    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
    };






    return (

        <div className='demo'>
            <div className='datatable_tooptions'>
                <div className='datatable_search'>
                    <SearchIcon fontSize="small" className="search_icon" />
                    <input type="text" placeholder='search keyword...' />
                </div>
                <div className='datatable_status'>

                    <input type="text" placeholder='status' disabled="disabled" />
                    <ArrowDropDownIcon fontSize="small" className="arrow_icon" />

                </div>
            </div>
            <div className='table_header'>
                <div>customer</div>
                <div>contact</div>
                <div>number</div>
                <div>email</div>
                <div>sites</div>
                <div>status</div>
            </div>
            {user && user.map(item => (
                <div className='table_row'>
                    <div className='row_data' style={{ fontWeight: '600' }}>{item.name}</div>
                    <div className='row_data'>{item.contactperson}</div>
                    <div className='row_data'>{item.number}</div>
                    <div className='row_data'>{item.email}</div>
                    <div className='row_data'>{item.site}</div>
                    <div className='row_data' style={{ color: item.status == 'pending' ? '#FFA500' : '#4BB543', display: 'flex' }}><FiberManualRecordIcon style={{ fontSize: 10 }} />{item.status}</div>
                </div>
            ))}

            <div className='btn_container'>
                {pages.map((pageIndex) => (

                    <button className="pagination_btn_active" key={pageIndex} onClick={() =>setPageNumber(pageIndex + 1)}>
                        {pageIndex + 1}
                    </button>

                ))}
            </div>

            <p className='total_record'>total records: <span>{currentpage}</span></p>
            <p className="pagenumber">page: {pageNumber}</p>
            {/* <button className={pageNumber === numberOfPages ? 'hide' : 'show'} onClick={gotoNext}>Next</button> 
            <button onClick={gotoPrevious}>Previous</button>  */}



        </div>


    )
}

export default Demo