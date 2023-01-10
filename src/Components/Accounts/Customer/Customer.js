import React from 'react'
import './Customer.css';
import { Link, Outlet } from 'react-router-dom';
import {BiCube } from 'react-icons/bi';
import {AiOutlineHeart } from 'react-icons/ai';
import {BsPerson } from 'react-icons/bs';
import {AiOutlineLock } from 'react-icons/ai';
import {FiLogOut } from 'react-icons/fi';
import {BiChevronRight } from 'react-icons/bi';
import {CgProductHunt } from 'react-icons/cg';



function Customer() {

  return (
    <div className='user_Customer'>
      {/* <Navbar /> */}
      <div className="acc_container">
        <div className="Customer_header">
        <h2>My Customer</h2>
        </div>
        <div className="acc_content">
          <div className="acc_nav">
        
            <h4>Welcome back {"user.username"}</h4>

          
            <div>
              <Link to='/Customer/orders'><BiCube/><p>Orders</p><BiChevronRight/></Link>
            </div>
            <div>
              <Link to='/Customer/favorites'><AiOutlineHeart/><p>Favorites</p><BiChevronRight/></Link>
            </div>

            <div>
              <Link to='/Customer/personaldata'><BsPerson/><p>Personal data</p><BiChevronRight/></Link>
            </div>

            <div>
              <Link to='/Customer/dataupdate'><AiOutlineLock/><p>Update Data</p><BiChevronRight/></Link>
            </div>
            <div>
              <Link to='/Customer/mysupplements'><CgProductHunt/><p>My supplements</p><BiChevronRight/></Link>
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