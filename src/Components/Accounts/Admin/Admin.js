import React from 'react'
import './Admin.css'
import { Link, Outlet, } from 'react-router-dom';
import {MdSpaceDashboard } from 'react-icons/md';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {FiPieChart } from 'react-icons/fi';
import { RiProductHuntFill} from 'react-icons/ri';
import { AiOutlineStock} from 'react-icons/ai';
import { MdOutlineLocalOffer} from 'react-icons/md';
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
            <Link to='/admin/products'><RiProductHuntFill/><p>Products</p></Link>
          </div>
          <div>
            <Link to='/admin/stock'><AiOutlineStock/><p>Stock</p></Link>
          </div>
          <div>
            <Link to='/admin/offers'><MdOutlineLocalOffer/><p>Offers</p></Link>
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