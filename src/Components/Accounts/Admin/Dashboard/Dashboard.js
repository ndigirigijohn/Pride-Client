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
    axios.get('http://localhost:8080/users/customer')
    .then(res => setCustomerCount(res.data.length))
    .catch(err => console.log(err))
    axios.get('http://localhost:8080/orders/get/all')
    .then(res => setOrderCount(res.data.length))
    .catch(err => console.log(err))
    axios.get('http://localhost:8080/products')
    .then(res => setProductCount(res.data.length))
    .catch(err => console.log(err))
    axios.get('http://localhost:8080/shops')
    .then(res => setShopCount(res.data.length))
    .catch(err => console.log(err))
  }, [])
    
  return (
    <div className='dashboard'>
      <AdminNav title={"Dashboard"}/>
      <div className="admin_items">
        <Item text={"CUSTOMERS"} count={customerCount}/>
        <Item text={"ORDERS"} count={orderCount}/>
        <Item text={"PRODUCTS"} count={productCount}/>
        <Item text={"SHOPS"} count={shopCount}/>
      </div>
    </div>
  )
}

export default Dashboard