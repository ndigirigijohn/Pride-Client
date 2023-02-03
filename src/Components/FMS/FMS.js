import React, { useEffect } from 'react'
import './FMS.scss'
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";
import { BsSearch } from 'react-icons/bs';


function FMS() {
  const dispatch = useDispatch();
  const user=JSON.parse(localStorage.getItem('user'))


  

const navigate=useNavigate();
const [code, setCode] = useState('')
const [flag, setFlag] = useState(false)
const [search, setSearch] = useState("");
const [optionsState, setOptionsState] = useState('all');

const page = useSelector((state) => state.page);


const handleSearch= (e) => {
  e.preventDefault();
  if(optionsState==='all'){
    axios.get(`http://localhost:8080/products/search/${e.target.value}`).then((res)=>{
      dispatch(changeProduct(res.data))
      navigate(`/results`)
    })

    return
  }
  if(search===''){
    axios.get(`http://localhost:8080/products/page/${page}/limit/9`).then((response)=>{
      dispatch(changeProduct(response.data))
      navigate(`/results`)
    }
    ).catch((err)=>{
      console.log(err)
    })
    return
  }
  axios.get(`http://localhost:8080/products/category/${optionsState}/${search}`).then((response)=>{
    dispatch(changeProduct(response.data))
    navigate(`/results`)
  }
  ).catch((err)=>{
    console.log(err)
  })

}




useEffect(()=>{
  console.log(optionsState)
  if(flag){
    axios.get(`http://localhost:8080/products/code/${code}`).then((res)=>{
      localStorage.setItem('skincode', JSON.stringify(code));
      dispatch(changeProduct(res.data))

    }
    ).catch((err)=>{
      console.log(err)
    })
    if(user!==null){
      axios.put(`http://localhost:8080/users/set/${user._id}`, {code: code}).then((res)=>{
        console.log(res)
      })
    }
    navigate('/sequel')
  }
}, [code, flag, navigate, dispatch, user, optionsState])




const SEARCH=<div className='fms_div'>
<p>Enter ingridient or the name of your product to search</p>
<div className='select_div'>
  <p>
    Category to search:
  </p>

<select className='select' onChange={(e)=>{
  setOptionsState(e.target.value)

}} value={optionsState}>
    <option value="all">All</option>
  <option value="moisturizers">Moisturizers</option>
  <option value="cleansers">Cleansers</option>
  <option value="facemasks">Face Masks</option>
  <option value="toners">Toners</option>


</select>
</div>

<div className='search_box'>

<input 
          onKeyDown={(e)=>{
            e.key==='Enter' && handleSearch(e)          
          }}
           onChange={(e) => {
            setSearch(e.target.value)
        }} type={'text'} placeholder='Search...'/>
        <div onClick={(e)=>{handleSearch(e)}} className="search_icon">
        <BsSearch  />

        </div>


</div>

</div>


const FMS4=<div className='fms_div'>
<p>Do you have any black spots?</p>
 <button onClick={()=>{
                setCode(code+'1');
                setFlag(true);
              }} className="fms_button">YES</button>
 <button onClick={()=>{
        setCode(code+'0');
        setFlag(true);
              }} className="fms_button">NO</button>
</div>


const FMS3=<div className='fms_div'>
    <p>HOW DOES YOUR SKIN REACT TO ANY APPLICATIONS OR THE SUN?</p>
 <button onClick={()=>{
                setX(x+1)
                setCode(code+'1')

              }} className="fms_button">VERY SENSITIVE</button>
 <button onClick={()=>{
                setCode(code+'0')

                setX(x+1)
              }} className="fms_button">LESS SENSITIVE</button>
</div>

const FMS2=<div className='fms_div'>
  <p>What is your skin type?</p>
   <button onClick={()=>{
                 setCode(code+'1')
                  setX(x+1)
                }} className="fms_button">DRY</button>
   <button onClick={()=>{
              setCode(code+'0')
                  setX(x+1)
                }} className="fms_button">OILY</button>
   <button onClick={()=>{
        setCode(code+'10')
                  setX(x+1)
                }} className="fms_button">COMBINATION (DRY/ OILY)</button>
</div>

const FMS1=<div className='fms_div'>
                <button onClick={()=>{
                  setX(x+1)
                }} className="fms_button">FIND PRODUCTS</button>
                <button onClick={()=>{
                    setX(4)
                 
                }} className="fms_button">I KNOW MY PRODUCTS</button>



             </div>

const FMS=[FMS1, FMS2, FMS3, FMS4, SEARCH]
const [x, setX]=useState(0)
  return (
    <div className='fms_component'>
      <div className="fms_nav">
        <div onClick={()=>{
          if(x===0){
            navigate(-1)

          }else{
            setCode(code.slice(0, -1))
            setX(x-1);

          }

        }} className="prev">
          <AiOutlineArrowLeft />
        </div>
        <div>
          <p>SUPPLEMENT FINDER</p>
        </div>
        <Link onClick={()=>{
          setCode('')
        }} to='/' className="close">
          <AiOutlineClose/>
        </Link>
      </div>
      {FMS[x]}
    </div>
  )
}

export default FMS