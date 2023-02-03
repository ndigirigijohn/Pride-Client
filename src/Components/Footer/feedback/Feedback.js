import React from 'react'
import './Feedback.scss'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';




function Feedback() {
  const [form, setForm]=useState({
    name:'',
    email:'',
    message:'',
});
const [errors, setErrors] = useState({
  name: '',
  email: '',
  message: ''
})
const notify = () => {
  toast.success("Feedback sent");
}
const validateForm = (fieldName, value) => {
  let err;
  const formErrors=errors;
  switch(fieldName) {
      case 'name':
          err= value.length<3?'Name must be atleast 3 characters':''
          formErrors.name=err;
          setErrors(formErrors)
         break;
         case 'email':
          //validate email
          const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          err= valid?'':'Email is not valid'
          formErrors.email=err;
          setErrors(formErrors) 
         break;
   

         case 'message':
          err= value.length<9?'Message must be longer than 9 characters':''
          formErrors.message=err;
          setErrors(formErrors)
         break;
      default:   

}
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
    if(Object.values(errors).some(err=>err!=='')){
      toast.error("Error, invalid input");
      // alert("Error, invalid input");
  
      return;
  }
      axios.post('http://localhost:8080/feedback', form).then(
        (res)=>{
          notify();
        }
      )
      .catch((err)=>{
        notify("Error, try again");
      })
  
  };
  




  return (
    <>
    <div className='feedback'>
        <div className="feedback_container">
        <h3>Leave feedback</h3>
        <form onSubmit={onSubmitForm}>
            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            } } name="name" type="text" placeholder="Name"/>
            <div style={{color:"red"}} className="error">{errors.name}</div>
            <input onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            } } name="email" type="text" placeholder="Email"/>
            <div style={{color:"red"}} className="error">{errors.email}</div>

          
            <textarea placeholder='Message' onChange={(e)=>{
                onUpdateField(e);
                validateForm(e.target.name,e.target.value)
            } } name="message" id="" cols="30" rows="5"></textarea>
            <div style={{color:"red"}} className="error">{errors.message}</div>
            <div className="send">
                <button  type='submit'>SEND</button>
            </div>
        </form>


        </div>
    </div>
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

export default Feedback