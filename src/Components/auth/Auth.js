import React from 'react'
import { Outlet } from 'react-router-dom'
import './Auth.css'
function Auth() {
  return (
    <div className='auth'>
        <div className="form_div">
            <Outlet/>
        </div>
        <div className="auth_image">
            <img 
            src="https://i.pinimg.com/564x/37/40/6b/37406b30bd03054279ad9359691bf83e.jpg"
            alt="beauty" />

        </div>
    </div>
  )
}

export default Auth