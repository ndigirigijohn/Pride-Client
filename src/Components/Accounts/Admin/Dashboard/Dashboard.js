import React from 'react'
import AdminNav from '../adminnav/AdminNav'
import './Dashboard.css'
import Total from './totals/Total'
import { AiOutlineShopping } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { IoReturnDownBackOutline } from 'react-icons/io5';


function Dashboard() {
  return (
    <div className='dashboard'>
      <AdminNav title={"Dashboard"}/>
      <div className="totals">
        <Total icon={<AiOutlineShopping/>} head={'Total sales'} value={'$'+ 825491.73} percent={20.9} number={18.4}/>
        <Total icon={<HiUserGroup/>} head={'Visitors'} value={780192} percent={13} number={3.5}/>
        <Total icon={<AiFillStar/>} head={'Total Orders'} value={'$'+ 26285.991} percent={4.2} number={5}/>
        <Total icon={<IoReturnDownBackOutline/>} head={'Refunded'} value={780732} percent={-9.2} number={-1.3}/>


      </div>
    </div>
  )
}

export default Dashboard