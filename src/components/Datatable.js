import React, { useState, useEffect } from 'react'
import './Datatable.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { getUsers } from '../axios'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Datatable() {

    const [user, setuser] = useState([]);
    const [currentpage, setcurrentpage] = useState([]);
    const [pages, setpages] = useState([]);


    useEffect(() => {
        fetchData();
    }, [currentpage])

    async function fetchData() {
        const req = await getUsers();
        setuser(req.data.data);
        setcurrentpage(req.data.current)
        setpages(req.data.pages)
    }

    const next = (i) => {
        getUsers(i)
    }

    const pp = [];
    if (pages) {
        for (let i = 1; i <= pages; i++) {
            pp.push(i)
        }
    }


    return (
        <div className='datatable'>
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

          

                <div className='table'>
                    <table>
                        <tbody>
                            <tr className='table_head'>
                                <th>customer name</th>
                                <th>contact person</th>
                                <th>mobile phone number</th>
                                <th>email address</th>
                                <th>no of sites</th>
                                <th>status</th>
                            </tr>
                            {user.map(item => (
                                <tr className='table_rows'>
                                    <td className='datatable_name' >{item.name}</td>
                                    <td className='datatable_contact'>{item.contactperson}</td>
                                    <td className='datatable_number'>{item.number}</td>
                                    <td className='datatable_email'>{item.email}</td>
                                    <td className='datatable_site'>{item.site}</td>
                                    <td className='datatable_active' style={{ color: item.status == 'pending' ? '#FFA500' : '#4BB543', display: 'flex' }}>
                                        <FiberManualRecordIcon fontSize="small" />{item.status}</td>
                                </tr>

                            ))}




                        </tbody>
                    </table>
                    </div>
           

        </div>
       
    )
}

export default Datatable 