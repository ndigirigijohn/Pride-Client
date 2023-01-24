import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {emailValidator, usernameValidator, passwordValidator, phoneValidator} from '../Validator'
import axios from 'axios';
function SignUp() {
    const navigate=useNavigate()
    const [form, setForm]=useState({
        username:'',
        email:'',
        phone:'',
        password:'',
    });
    const [errors, setErrors]=useState({
        email:true,
        phone:true,
        username:true,
        password:true
    })
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
        console.log(errors)
        console.log(errors.email)
        if(errors.email){
            notify("Error in email")
            return

        }
        else
        if(errors.username){
            notify('  Error in username')
            return


        }else
        if(errors.phone){
            notify('  Error in username')
            return


        }else

        if(errors.password){
            notify('Error in password')
            return
        }
            else{
                axios.post('http://localhost:8080/users/register', form).then(
                    (res)=>{
                            navigate('/auth/login')                    
                    }
                ).catch((err)=>{
                    if(err.response.status===409){
                        notify('Email already exists')
                    } else

                    notify('Error in registeration, try again')

                    console.log(err)
                })
            }
      };
      
      
  return (
    <>
    <form onSubmit={onSubmitForm} className='signup'>
        <h3>Create account</h3>
        <p>Or use email for registeration</p>
        <div>
            <input name='username' onBlur={()=>{notify(usernameValidator(form.username, errors, setErrors))}} value={form.username} onChange={onUpdateField} placeholder='username' type="text" />
        </div>
        <div>
            <input name='email' onBlur={()=>{notify(emailValidator(form.email, errors, setErrors))}} value={form.email} onChange={onUpdateField} placeholder='email' type="text" />
        </div>
        <div>
            <input name='phone'  onBlur={()=>{notify(phoneValidator(form.phone, errors, setErrors))}} value={form.phone} onChange={onUpdateField} placeholder='phone' type="text" />
        </div>
        <div>
            <input name='password'  onBlur={()=>{notify(passwordValidator(form.password, errors, setErrors))}} value={form.password} onChange={onUpdateField} placeholder='password' type="password" />
        </div>
        <div className='submit'>
            <button  className='active' type='submit'>Sign Up</button>
            <button className='link' onClick={()=>navigate('/auth/login')} >Sign In</button>
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

export default SignUp