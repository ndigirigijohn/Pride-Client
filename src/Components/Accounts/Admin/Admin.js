import React from 'react'
import './Admin.css'
import { Link, Outlet, } from 'react-router-dom';
import {MdSpaceDashboard } from 'react-icons/md';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {FiPieChart } from 'react-icons/fi';
import { RiProductHuntFill} from 'react-icons/ri';
import { AiOutlineShop} from 'react-icons/ai';
import { FaPeopleCarry} from 'react-icons/fa';
import {FiLogOut } from 'react-icons/fi';





function Admin() {
  return (
    <div className='admin'>
      <div className="container">

      <div className="left_container">
        <h4><Link to='/'>Pride</Link></h4>
        <div className="content">
          <div>
            <Link to='/admin/dashboard'><MdSpaceDashboard/><p>Dashboard</p></Link>
          </div>
          <div>
            <Link to='/admin/orders'><AiOutlineShoppingCart/><p>Orders</p></Link>
          </div>
          <div>
            <Link to='/admin/customers'><FiPieChart/><p>Customers</p></Link>
          </div>
          <div>
            <Link to='/admin/productsa'><RiProductHuntFill/><p>Products</p></Link>
          </div>
          <div>
            <Link to='/admin/shops'><AiOutlineShop/><p>Shops</p></Link>
          </div>
          <div>
            <Link to='/admin/owners'><FaPeopleCarry/><p>Shop Owners</p></Link>
          </div>
          <div>
              <Link
              onClick={()=>{
                localStorage.removeItem('user')
                localStorage.removeItem('skincode')
              }}
               to='/auth/login'><FiLogOut/><p>Sign out</p></Link>
            </div>


        </div>
       

      </div>
      <div className="right_container">
        <Outlet/>

      </div>
      </div>

    </div>
  )
}

export default Admin