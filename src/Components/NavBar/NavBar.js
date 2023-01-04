import React from 'react'
import './NavBar.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';
import { BiMenu } from 'react-icons/bi';
import {Link } from 'react-router-dom';


function NavBar() {
//setOver
  const [over, setOver] = React.useState('none');


  return (
    <div className='navbar'>
      <div className="navdesk">


      <div className="shop">
        <Link to='/'>SHOP</Link>
      </div>
      <div className="about">
      <a href='#about'>ABOUT US</a>
 
      </div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input type={'text'} placeholder='Search...'/>
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
      <div className='cart_dv'><BsCartFill/><div className='cart_span' >{'0'}</div></div>
      </Link>
      </div>
      <div className="account">
      <Link to='/account' className='acc'>
        <FcBusinesswoman/>
      </Link>

      </div>
      </div>
      <div className="navmobile">
      <div className="logo">PRIDE</div>
      <div className="search">
        <div className="search_container">
          <AiOutlineSearch/>
          <input type={'text'} placeholder='Search...'/>
        </div>
      </div>
      <div className="cart">
      <Link to='/cart'>
        <div className='cart_dv'><BsCartFill/><div className='cart_span' style={{backgroundColor:"white", color:'pink'}} >{'0'}</div></div>
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
      <Link to='/account' className=''>
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