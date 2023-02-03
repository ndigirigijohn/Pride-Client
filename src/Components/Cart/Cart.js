import React, { useEffect } from 'react'
import Footer from '../Footer/Footer'
import './Cart.scss'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useState } from 'react';
import { useDispatch, } from "react-redux";
import { changeCart } from "../../redux/slices/cartSlice";
import { changeCount } from "../../redux/slices/countSlice";

import { useSelector } from "react-redux";
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios'

function Cart() {
  let userCode=(localStorage.getItem('skincode'))
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [total, setTotal]= useState(0)
  const [itemsCount, setItemCount]= useState(0)
  const [pop, setPop]= useState('pop_none')
  const[processing, setProcessing]= useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const [userItems, setUserItems]= useState([])
  const [name, setName]= useState('none')


useEffect(()=>{
  let items=cart;

  setTotal(0)
  let i =0;
  let tot=0
  let count=0
  for(i;i<items.length;i++){
      tot=tot+items[i].count*items[i].price
      count=count+items[i].count

  }
  setTotal(tot)
  setItemCount(count)
  dispatch(changeCount(count))


  if(userCode!=="" && userCode!==null&&userCode!==undefined){
    if(userCode.length>2){
    const code = JSON.parse(userCode)

    console.log(code)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    axios.get(`http://localhost:8080/products/code/${code}`).then((res)=>{
      setName("show")
      console.log("data",res.data, "userCode:", userCode)
      const itemIds=res.data.map(item=>item.identifier)
      setUserItems(itemIds)
      

    }).catch((err)=>{
      console.log(err)
    })
  }
  return

  }


},[cart, dispatch, userCode])
console.log("userItems", userItems)

  const increment=(id,count )=>{
    const items=cart
    const newItems=items.map(item=>{
      if(item._id===id){
        return {...item, count: item.count+1}
      }
      return item
    })
    dispatch(changeCart(newItems))
  }
  const decrement=(id,count )=>{
    const items=cart
    const newItems=items.map(item=>{
      if(item._id===id){
        if(count>1){
          return {...item, count: item.count-1}

        }
      }
      return item
    })
    dispatch(changeCart(newItems))
  }
  const remove = (id)=>{
    const items=cart
    dispatch(changeCart(items.filter(item=>item._id!==id)))
  }
  
  const removeAll = ()=>{
    dispatch(changeCart([]))
  }

const shipping=30;


const handleCheckout=()=>{
  if(user===null){
    setPop('pop_show')
    return
  }
  else if(processing){
    alert("Your order is being processed")
    return
  }
  setProcessing(true)

  const order={
    "customer_id":user._id,
    "count":itemsCount,
    "subTotal":total,
    "shipping":shipping,
    "total":total+shipping,
    "products":cart,
}
    console.log("ORDER", order)

  axios.post('http://localhost:8080/orders/makeorder', order).then(res=>{

    
    dispatch(changeCart([]))
    setProcessing(false)
    alert("Order placed successfully")
  }).catch(err=>{
    console.log(err)
    setProcessing(false)
    alert("Something went wrong")
  })

}

  return (
    <>
    <div className='cart_container'>
      {
        cart.length===0?
          <div className="cart_empty">
          <p>Empty</p>
          <p className='back' onClick={()=>{
            navigate(-1)
          }}><AiOutlineArrowLeft/> Go back</p>

          

        </div>
        :
        <div className='shopping_cart'>
          <div className="cart_items">
            <div className="items_head">
              <h3>Shopping cart</h3>
              <p>{itemsCount} Items</p>
            </div>
            <p className="line"></p>
            <div className="items_body">
            <div className='cart_item'>
                    <div className="_image">
                      <p>Image</p>

                    </div>
                    <p>Name</p>
                  <p>Price</p>

                  <p>Count</p>
              <p className='total'>Total</p>
              {
                !Array.isArray(userItems)?'':
                <p className={name}>Matching</p>

              }
              <button onClick={()=>{
                removeAll()
              }} className='remove remove_all'>Remove all</button>


                  </div>

              {
                cart.map((item)=>{
                  return <div key={item._id} className='cart_item'>
                    <div className="image">
                    <img src={item.image} alt={item.name} />

                    </div>
                    <p>{item.name}</p>
                    <p className='price'>
                  KSH.  {item.price}
                  </p>
                    <div className="values">
                <button onClick={
                  ()=>{
                    increment(item._id, item.count)
                  }
                }  className="rm">
                    +
                </button>
                <input onChange={(e)=>{
                }} value={item.count} type={'number'} />
                <button onClick={()=>{
                  decrement(item._id, item.count)
                }} className="add">
                    -
                </button>
              </div>

              <p className='total'>KSH. {item.price*item.count}</p>{
                !Array.isArray(userItems)?'':
                              <p style={userItems.includes(item.identifier)?{color:"green"}:{"color":"red"}} className={name}>{userItems.includes(item.identifier)?"Matched":"Mismatched"}</p>


              }
              <button onClick={()=>{
                remove(item._id)
              }} className='remove'>Remove</button>


                  </div>
                })
              }
            </div>
            <div className="continue">
            <p className=''  onClick={()=>{
            navigate(-1)
          }}><AiOutlineArrowLeft/> Continue to shopping</p>


            </div>
            <div className="data_info">
          <p>You can update your suplements recommendatios <Link style={{color:"#c9104e"}} to='/FMS'>here</Link></p>
        </div>

          </div>
          <div className="order">
            <h3>Order Summary</h3>
            <p className="line"></p>
            <div className="summary">
              <div className="items_total">
                <span>ITEMS {itemsCount} </span>
                <span>KSH {total}</span>

              </div>
              <div className="shipping">
                <span>SHIPPING</span>
                <span>KSH {shipping}</span>
              </div>
              <div className="total_cost">
                  <span>TOTAL COST</span>
                  <span>KSH {total+shipping}</span>
              </div>
              <button onClick={()=>{
                handleCheckout()
              }} className='checkout'>PROCEED TO PAY</button>
            </div>

          </div>
        </div>
      }
        <Footer/>
    </div>
    <div className={pop}>
      <h3>Please log in to continue</h3>
      <button className='' onClick={()=>{navigate('/auth/login')}}>Login</button>

    </div>

        </>

  )
}

export default Cart