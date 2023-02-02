import React, {useEffect, useState} from 'react'

import axios from 'axios'
import AdminNav from '../adminnav/AdminNav'


function Orders() {
  const [orders, setOrders] = useState(false)
  useEffect(()=>{
    axios.get(`http://localhost:8080/orders/get/all`).then((res)=>{
      setOrders(res.data)

  })
  },[])

  return (
    <div>
       <AdminNav title={'Orders'}/>
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
        <div className="Actions">
          <p>Approve</p>
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
                <button>approve</button>
              </div>
            </div>
          )
        }):
        'Loading...'

      }


    </div>

    </div>
  )
}

export default Orders
