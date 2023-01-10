import React from 'react'
import './AdminNav.css'
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';



function AdminNav({title}) {
  return (
    <div className="admin_nav">
          <div className='title'>
            <h2>Admin</h2>
            <h3>{title}</h3></div>
          <div className="admin_nav_contents">
            <IoMdNotificationsOutline/>
            <BiSearchAlt2/>
            <BiUserCircle/>
          </div>


    </div>
  )
}

export default AdminNav