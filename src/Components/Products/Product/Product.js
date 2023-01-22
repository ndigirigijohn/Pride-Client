import React, {useState} from 'react'
import './Product.scss'
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../../redux/slices/cartSlice";




function Product({product}) {
    const cart = useSelector((state) => state.cart);


    const dispatch = useDispatch();
    const [text, setText]=useState("Add to Cart")

    const addToCart=()=>{
        let cart1=cart
        const data= product
        if(cart.length===0){

          cart1=[...cart1, data]
    
          dispatch(changeCart(cart1)) 
          setText("Added")

        }
        else if(cart.some((item)=>{return item._id===product._id})){
            alert("Item already in cart")
       
            }
            else{
              cart1=[...cart1, data]
              dispatch(changeCart(cart1)) 
              setText("Added")


            }
    
    
      }

  return (
    <div className='Product'>
        <Link className='link' to={`/product/${product._id}`}>
            <div className="image">
            <img src={product.image} alt={product.name}/>


            </div>
        <div className="name">
            <p>
                {product.name}
            </p>

        </div>
        <div className="price">
            <p>
              KSH.  {(product.price).toLocaleString()}
            </p>
        </div>
        </Link>

        <div className="add">
            <button
            onClick={addToCart}
            >
                {text}
            </button>
        </div>

    </div>
  )
}

export default Product