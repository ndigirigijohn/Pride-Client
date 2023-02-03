import React, { useEffect } from 'react'
import './NavBar.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsCartFill } from 'react-icons/bs';
import { FcBusinesswoman } from 'react-icons/fc';
import { BiMenu } from 'react-icons/bi';
import {Link, useNavigate } from 'react-router-dom';
import { useSelector ,  useDispatch} from "react-redux";



import { changeProduct } from "../../redux/slices/productSlice";
import axios from 'axios';






function NavBar() {
  const page = useSelector((state) => state.page);

  const count = useSelector((state) => state.count);
  const [over, setOver] = React.useState('none');
  const user= JSON.parse(localStorage.getItem('user'));
  const [url, setUrl] = React.useState('/auth/login');

  const dispatch = useDispatch();

  const navigate = useNavigate();


  useEffect(()=>{

    if(user===null){
      console.log(user)
      setUrl('/auth/login')
      return
    }
    if(user.role === 'CUSTOMER'){
      setUrl('/customer')
    }
    else if(user.role === 'SHOPOWNER'){
      setUrl('/shopowner')
    }
    else if(user.role === 'ADMIN'){
  
      setUrl('/admin')  }

  
  },[user])


  const search = (e) => {
    console.log(e.target.value)
    if(e.target.value===''){
      axios.get(`http://localhost:8080/products/page/${page}/limit/9`).then((response)=>{
        dispatch(changeProduct(response.data))
        navigate('/')
      return
    }
    )
    .catch((err)=>{
      console.log(err)
    })
    }
    axios.get(`http://localhost:8080/products/search/${e.target.value}`)
    .then((res)=>{
      dispatch(changeProduct(res.data))
      navigate('/results')
    })
    .catch((err)=>{
      console.log(err)
    }
    )
  }


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
          <input onChange={search} type={'text'} placeholder='Search...'/>
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
      <Link to={url} className='acc'>
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
      <Link to={url} className=''>
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