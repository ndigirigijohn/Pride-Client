import React from 'react'
import axios from 'axios'
import './Confirm.css'
import { ToastContainer, toast } from 'react-toastify';

function Confirm({action,id,classname}) {
    const deleteProduct=(id)=>{
      toast.success("Deleting product");
    
        axios.delete(`http://localhost:8080/${id}`).then((res)=>{
          console.log('connected', res.data)
          toast.success("Product deleted");

          window.location.reload()
        })
      }
    
  return (
    <div className={classname}>
        <p>Are you sure you want to delete this product?</p>
        <div className="button_container">
            <button onClick={()=>{deleteProduct(id)}}>Yes</button>
            <button onClick={action}>No</button>
        </div>
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


    </div>
  )
}

export default Confirm