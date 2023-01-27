import React, { useEffect, useState } from 'react'
import './Customer.css';

import AccNav from '../AccNav/AccNav';
import { Link, Outlet } from 'react-router-dom';
import {BiCube } from 'react-icons/bi';
import {AiOutlineHeart } from 'react-icons/ai';
import {BsPerson } from 'react-icons/bs';
import {AiOutlineLock } from 'react-icons/ai';
import {FiLogOut } from 'react-icons/fi';
import {BiChevronRight } from 'react-icons/bi';
import {CgProductHunt } from 'react-icons/cg';


function Customer() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));

  }, []);
  

  return (
    <div className='user_Customer'>
      <div className="acc_container">
        <div className="Customer_header">
        <AccNav title='Customer'/>
        </div>
        <div className="acc_content">
          <div className="acc_nav">
        
            <h4>Welcome back {user.name}</h4>

          
            <div>
              <Link to='/accounts/ordersc'><BiCube/><p>Orders</p><BiChevronRight/></Link>
            </div>
            <div>
              <Link to='/accounts/favorites'><AiOutlineHeart/><p>Favorites</p><BiChevronRight/></Link>
            </div>

            <div>
              <Link to='/accounts/personaldata'><BsPerson/><p>Personal data</p><BiChevronRight/></Link>
            </div>

            <div>
              <Link to='/accounts/dataupdate'><AiOutlineLock/><p>Update Data</p><BiChevronRight/></Link>
            </div>
            <div>
              <Link to='/accounts/mysupplements'><CgProductHunt/><p>My supplements</p><BiChevronRight/></Link>
            </div>

            <div>
              <Link
              onClick={()=>{
                localStorage.removeItem('user')
                localStorage.removeItem('skincode')
              }}
               to='/auth/login'><FiLogOut/><p>Sign out</p><BiChevronRight/></Link>
            </div>




          </div>
          <div className="acc_contents">
            <Outlet/>

          </div>
        </div>



      </div>
    </div>
  )
}

export default Customer