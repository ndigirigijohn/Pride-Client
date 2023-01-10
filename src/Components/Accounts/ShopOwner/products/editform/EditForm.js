import React, { useEffect } from 'react'
import './EditForm.css'
import { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



function EditForm({action,classname,product}) {
    const initialForm = {
        name:"",
        price:"",
        image:  "",
        description:"",
        category:"",
        identifier:""
    }
    const [form, setForm]=useState(initialForm);
    useEffect(()=>{
      setForm({
        name:product.name,
        price:product.price,
        image:  product.image,
        description:product.description,
        category:product.category,
        identifier:product.identifier
    })
    },[product])
    const handleChange = e => {
        const nextFormState = {
          ...form,
          [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
      };
      const [disabled, setDisabled] = useState(false)


      const submitProduct=(e)=> {

        e.preventDefault();
        setDisabled(true)
        if(Object.values(errors).some(err=>err!=='')){
          console.log(Object.values(errors))
            toast.error("Error, invalid input");
            setDisabled(false)

            return;
        }
     

        

        axios.put(`http://localhost:8080/${product._id}`,form).then((res)=>{
            console.log(res)
            setForm({
              name:"",
              price:"",
              image:"",
              description:"",
              category:"",
              identifier:""
            })
            toast.success("Product Updated");
        })
        .catch((err)=>{
            toast.error("Error, try again");
            JSON.stringify(err)
    }).finally(()=>{
        setDisabled(false)
    })



      }
      console.log("form",form);

      const [errors, setErrors] = useState({
        name:"",
        price:"",
        image:"",
        description:"",
        category:"",
        identifier:""
      })
      


      const validateForm = (fieldName, value) => {
        let err;
        const formErrors=errors;
        switch(fieldName) {
            case 'name':
                err= value.length<3?'Name must be atleast 3 characters':''
                formErrors.name=err;
                setErrors(formErrors)
               break;
               case 'image':
                err= value.length<3?'Invalid URL':''
                formErrors.image=err;
                setErrors(formErrors)
               break;
               case 'description':
                err= value.length<15?'Description must be longer than 15 characters':''
                formErrors.description=err;
                setErrors(formErrors)
               break;
            case 'category':
                const categories= ['facemasks', 'moisturizers', 'cleansers', 'toners']
                const newVal = value.toLowerCase();
                categories.includes(newVal)?formErrors.category='':formErrors.category=`${value} is not a valid category`
                setErrors(formErrors)
              break;
     
            case 'identifier':
               err= value.length<3?'Identifier must be at least 3 characters long':''
               formErrors.identifier=err;
               setErrors(formErrors)
              break;
            default:
             

      }
    }
    
  return (
    <>
    <form onSubmit={(e)=>submitProduct(e)} className={classname}>
        <div className="close_form">
            <button onClick={(e)=>{
                e.preventDefault()
                action()}} >X</button>
        </div>
        <div className="editform_heading">
            <h5>Edit product</h5>

        </div>
        <div>
            <input value={form.name} name='name' onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } 
            placeholder={form.name} 
            type="text" />
            <div style={{color:"red"}} className="error">{errors.name}</div>
        </div>
        <div>
            <input value={form.price} name='price'  onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } placeholder={product.price} type="number" />
          <div style={{color:"red"}} className="error">{errors.price}</div>

        </div>
        <div>
            <input value={form.identifier} name='identifier'  onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } placeholder={product.identifier} type="text" />
          <div style={{color:"red"}} className="error">{errors.identifier}</div>

        </div>
        <div>
            <input value={form.image} name='image'  onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } placeholder={product.image} type="text" />
          <div style={{color:"red"}} className="error">{errors.image}</div>

        </div>
        <div>
            <input value={form.category} name='category'  onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } placeholder={product.category} type="text" />
           <div style={{color:"red"}} className="error">{errors.category}</div>

        </div>
        <div>
            <textarea value={form.description} onChange={(e)=>{
                handleChange(e);
                validateForm(e.target.name,e.target.value)
            } } placeholder={product.description} name="description" id="product_description" cols="40" rows="5"></textarea>
           <div style={{color:"red"}} className="error">{errors.description}</div>

        </div>
        <div className="submit_product">
            <button  style={disabled?{opacity:0.5}:{opacity:1}} disabled={disabled} type='submit'>Continue</button>
        </div>

        
        </form>
        <ToastContainer
        className={'toast'}
        style={{width:"300px", height:"10px"}}
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

export default EditForm