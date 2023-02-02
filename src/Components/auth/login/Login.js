import React from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';



function Login() {
  const navigate=useNavigate()
  const [form, setForm]=useState({
    email:'',
    password:'',
});
const notify = (err) => {
  if(err===""){

  }
  else

  toast.error(err);

}

const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
      axios.post('http://localhost:8080/auth/login', form).then(
        (res)=>{
          localStorage.setItem('user', JSON.stringify(res.data));
          if(res.data.skincode&&res.data.skincode!==''){
            localStorage.setItem('skincode', JSON.stringify(res.data.skincode));
          }
          navigate('/')
        }
      )
      .catch((err)=>{
        console.log(err)
        if(err.response.status===404){
          notify("User not found");
          return
  
        }
        notify("Error, try again");
      })
  
  };
  


  return (
    <>
    
    <form onSubmit={onSubmitForm} className='login'>
        <h3>Sign In</h3>
        <p>Or use email for registeration</p>
        <div>
            <input name='email' value={form.email} onChange={onUpdateField} placeholder='email' type="text" />
        </div>
        <div>
            <input name='password' value={form.password} onChange={onUpdateField} placeholder='password' type="password" />
        </div>
        <div className='submit'>
            <button className='active' type='submit'>Sign In</button>
            <button className='link' onClick={()=>navigate('/auth/signup')} >Sign Up</button>

        </div>
        <Link className='to_home' to='/'>PRIDE HOME</Link>





    </form>
    <ToastContainer
    className={'toast'}
        style={{width:"300px", height:"50px"}}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </>

  )
}

export default Login