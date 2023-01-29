import React, {useEffect, useState} from 'react'
import AdminNav from '../adminnav/AdminNav'
import './Dashboard.scss'
import Item from './Items/Item'
import axios from 'axios'






function Dashboard() {
  const [customerCount, setCustomerCount] =useState(0)
  const [orderCount, setOrderCount] =useState(0)
  const [productCount, setProductCount] =useState(0)
  const [shopCount, setShopCount] =useState(0)
  useEffect(() => {
    axios.get('/api/admin/customers/count')
    .then(res => setCustomerCount(res.data))
    .catch(err => console.log(err))
    axios.get('/api/admin/orders/count')
    .then(res => setOrderCount(res.data))
    .catch(err => console.log(err))
    axios.get('/api/admin/products/count')
    .then(res => setProductCount(res.data))
    .catch(err => console.log(err))
    axios.get('/api/admin/shops/count')
    .then(res => setShopCount(res.data))
    .catch(err => console.log(err))
  }, [])
    
  return (
    <div className='dashboard'>
      <AdminNav title={"Dashboard"}/>
      <div className="items">
        <Item text={"CUSTOMERS"} count={customerCount}/>
        <Item text={"ORDERS"} count={orderCount}/>
        <Item text={"PRODUCTS"} count={productCount}/>
        <Item text={"SHOPS"} count={shopCount}/>
      </div>
    </div>
  )
}

export default Dashboard