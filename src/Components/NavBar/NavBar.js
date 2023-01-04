import React, { useEffect } from 'react'
import './NavBar.scss'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';
import { BiMenu } from 'react-icons/bi';
import { changeCount } from "../../redux/slices/countSlice";


import axios from "axios";
import { useDispatch, } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";
import { useState } from 'react';
import { useSelector } from "react-redux";



function NavBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const cart = useSelector((state) => state.cart);


  const url=`http://localhost:8080/all/random`
  const [search, setSearch] = useState("");
  const getProducts= axios.get(url)
  const user=JSON.parse(localStorage.getItem('user'))
  const [over, setOver] = useState('none')
  const [itemsCount, setItemsCount]= useState(0)



  const reset=()=>{
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


  }
  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      console.log(search)
      console.log('Enter key pressed ✅');
      const url=`http://localhost:8080/products/search/${search}`
      axios.get(url).then((response)=>{
        dispatch(changeProduct(response.data)) 
        navigate(`/result/all/${search}`)
        
      })
      .catch((err)=>{
        console.log(err)
  
      });;
      navigate('/') 

  
    }
  }
  useEffect(()=>{
    let items=cart;
    let i =0;
    let count=0
    for(i;i<items.length;i++){
        count=count+items[i].count
  
    }
    setItemsCount(count)
    dispatch(changeCount(itemsCount))
  
  }, [cart, dispatch, itemsCount])

  const acc=()=>{
    if(user==null){
      return '/auth/login'
    }
    else{
            if(user.role==='customer'){
        
        return '/account/personaldata'
      }
      else return '/admin/dashboard'
    }
  }
  return (
    <div className='navbar'>
      <div className="navdesk">


      <div className="shop">
        <Link onClick={()=>{reset()}} to='/'>SHOP</Link>
      </div>
      <div className="about">
      <a href='#about'>ABOUT US</a>
 
      </div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input
          onKeyDown={handleKeyDown}
           onChange={(e) => {
            setSearch(e.target.value)
        }} type={'text'} placeholder='Search...'/>
        </div>
      </div>
      <Link to='/' className="logo">
        <div className="pride">PRIDE</div>
        <div className="supplements">SUPPLEMENTS</div>
      </Link>
      <div className="fms">
      <Link to='/fms'>FIND MY SUPPLEMENT</Link>
      </div>
      <div className="cart">
      <Link to='/cart'>
      <div className='cart_dv'><BsCartFill/><div className='cart_span' >{count}</div></div>
      </Link>
      </div>
      <div className="account">
      <Link className='acc' to={acc()}>
        <FcBusinesswoman/>
      </Link>

      </div>
      </div>
      <div className="navmobile">
      <div className="logo">PRIDE</div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input
          onKeyDown={handleKeyDown}
           onChange={(e) => {


            setSearch(e.target.value);
      
        }} type={'text'} placeholder='Search...'/>
        </div>
      </div>
      <div className="cart">
      <Link to='/cart'>
        <div className='cart_dv'><BsCartFill/><div className='cart_span' style={{backgroundColor:"white", color:'pink'}} >{count}</div></div>
      </Link>
      </div>
      <div onClick={()=>{
        over==='none'?setOver('overlay'):
        setOver('none');
      }} className="menu">
        <BiMenu/>
      </div>
      <div className={over}>
      <div className="fms">
      <Link to='/fms'>FIND SUPPLEMENT</Link>
      </div>
      <div className="">
      <Link className='' to={acc()}>
        ACCOUNT
      </Link>
      </div>
      <div className="about">
      <a href='#about'>ABOUT US</a>
 
      </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar