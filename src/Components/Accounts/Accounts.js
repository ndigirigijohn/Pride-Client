import React, { useEffect } from 'react'
import './Accounts.scss'
import { Outlet  } from 'react-router-dom'

//navigate
import { useNavigate } from "react-router-dom";




function Accounts() {
  const user= localStorage.getItem('user');
  const navigate = useNavigate();
  useEffect(() => {


  if(user===null){
    console.log(null)
    //redirect to auth
    navigate('/auth/login');
    return
  }

}, [navigate, user])

  
return (
  <div>
    <Outlet/>
 
</div>
)
}

export default Accounts

