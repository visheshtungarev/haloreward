import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";


// const data = 
export default function Breadcurms({ data }) {
    const [currentRoute,] = useState(data)
    // setCurrentRoute(window.location.href.split('/')[window.location.href.split('/').length - 1])
    // console.log(currentRoute[0], "==========")
    return (
        <div className='breadcrums' >
            {/* <Link to="">sdsdsd</Link> */}
            {
                currentRoute && currentRoute.map((item, i) => {
                    return (
                        <Link key={i} to={item.pageLink}>{item.pageName}</Link>
                    )
                })

            }
        </div >
    )
}
