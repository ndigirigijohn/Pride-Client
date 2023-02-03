import React from 'react'
import './ShopOwner.scss'
import { Link, Outlet, } from 'react-router-dom';
import {MdSpaceDashboard } from 'react-icons/md';
import {AiOutlineShoppingCart } from 'react-icons/ai';
import {FiPieChart } from 'react-icons/fi';
import { RiProductHuntFill} from 'react-icons/ri';
import {FiLogOut } from 'react-icons/fi';





function Admin() {
  return (
    <div className='admin'>
      <div className="container">

      <div className="left_container">
        <h4><Link to='/'>Pride</Link></h4>
        <div className="content">
          <div>
            <Link to='/shopowner/dashboard'><MdSpaceDashboard/><p>Dashboard</p></Link>
          </div>
          <div>
            <Link to='/shopowner/orders'><AiOutlineShoppingCart/><p>Orders</p></Link>
          </div>
          <div>
            <Link to='/shopowner/customers'><FiPieChart/><p>Customers</p></Link>
          </div>
          <div>
            <Link to='/shopowner/productsa'><RiProductHuntFill/><p>Products</p></Link>
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