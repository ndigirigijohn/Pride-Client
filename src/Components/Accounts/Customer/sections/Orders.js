import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Orders() {
  const id = JSON.parse(localStorage.getItem('user'))._id
  const [orders, setOrders] = useState(false)
  useEffect(()=>{
    axios.get(`http://localhost:8080/orders/get/customerId/${id}`).then((res)=>{
      setOrders(res.data)

  })
  },[id])
  return (
    <div className='customer_orders'>
      <div className="orders_head">
        <div className="id">
          <p>Order ID</p>
        </div>
        <div className="date">
          <p>Date</p>
        </div>
        <div className="value">
          <p></p>
        </div>
        <div className="status">
          <p>Status</p>

        </div>
        <div className="options">
          <p>Options</p>
        </div>
      </div>
      {
        orders?
        orders.map((order)=>{
          return(
            <div className="order">
              <div className="id">
                <p>{order._id}</p>
              </div>
              <div className="date">
                <p>{ new Date(order.date).toDateString()}</p>
              </div>
              <div className="value">
              <button>View Items</button>

              </div>
              <div className="status">
                <p>{order.status}</p>

              </div>
              <div className="options">
                <p>Options</p>
              </div>
            </div>
          )
        }):
        'Loading...'

      }


    </div>
  )
}

export default Orders