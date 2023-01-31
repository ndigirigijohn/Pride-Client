import React, { useEffect } from 'react'
import AdminNav from '../adminnav/AdminNav'
import { useState } from 'react';
import './Products.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import AddSearch from '../addsearch/AddSearch'
import AddForm from './addform/AddForm';
import EditForm from './editform/EditForm';
import Confirm from './confirm/Confirm';



function Products() {
  let page=1;
  let limit=10;
  const [classnameAdd, setClassnameAdd]=useState('none')
  const [classnameEdit, setClassnameEdit]=useState('none')
  const [confirm, setConfirm]= useState('none')
  const [item, setProduct] = useState([]);


  const [products, setProducts] = useState([])
  useEffect(()=>{

    axios.get(`http://localhost:8080/products/page/${page+1}/limit/9`).then((res)=>{
      console.log('connected', res.data)
      setProducts(res.data)
    })
  },[page, limit])
  const addProductClick=(e)=>{

    classnameAdd==='none'?setClassnameAdd('add_form'):setClassnameAdd('none');
  }
  const editProductClick=(e)=>{
    classnameEdit==='none'?setClassnameEdit('edit_form'):setClassnameEdit('none');
  }
  const searchProduct=(e)=>{
    console.log(e.target.value)
    axios.get(`http://localhost:8080/products/search/${e.target.value}`).then((res)=>{
      console.log('connected', res.data)
      setProducts(res.data)
    })
  }

const confirmDelete = ()=>{
  confirm==='none'?setConfirm('confirm'):setConfirm('none')
 
}
  return (
    <>
     <AdminNav title={'Products'}/>
     <AddSearch title={'product'} addAction={addProductClick} searchAction={searchProduct}/>

    <div className='admin_products'>
             <div className="admin_product_head">
              <div className="product_img">
                Image
              </div>
              <div className="name">
                Name
              </div>
              <div className="identifier">
                Identifier
              </div>
              <div className="price">
                Price

              </div>
              <div className="category">
                Category

              </div>
              <div className="edit">
                Edit  
              </div>
              <div className="rm">
                remove
              </div>
             </div>
             {
     
              products.map((product)=>{
                return              <div className="admin_product">
                <div className="product_img">
                  <img src={product.image} alt="" />
                </div>
                <div className="name">
                  <Link to=''>
                  {product.name}

                  </Link>
                </div>
                <div className="identifier">
                  {product.identifier}
                </div>
                <div className="price">
                  {product.price}
  
                </div>
                <div className="category">
                  {product.category}
  
                </div>
                <div className="edit">
                  <button onClick={()=>{setProduct(product);editProductClick();}}>Edit</button>
                </div>
                <div className="rm">
                  <button onClick={()=>{setProduct(product);confirmDelete();}}>Remove</button>
                </div>

               </div>
  
              })
             }
             

    </div>
    <AddForm action={addProductClick} classname={classnameAdd}/>
   <EditForm action={editProductClick} className={classnameEdit} classname={classnameEdit} product={item}/>
   <Confirm action={confirmDelete} id={item._id} classname={confirm}/>


    
    </>

  )
}

export default Products