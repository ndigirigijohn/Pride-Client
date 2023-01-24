import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import './ProductPage.scss'
import Shop from './Shop/Shop'
import Footer from '../../Footer/Footer'
import { useDispatch, useSelector } from "react-redux";
import { changeCart } from "../../../redux/slices/cartSlice";
import { changeCount } from "../../../redux/slices/countSlice";





function ProductPage() {
    const [text, setText]=useState("Add to Cart")
    const cart = useSelector((state) => state.cart);
    const Allcount = useSelector((state) => state.count);


    const {id} = useParams()

    const [count, setCount] = useState(1)

    const dispatch = useDispatch();


    
    const [product, setProduct] = useState(false)
    useEffect(()=>{
        // console.log("id", id)
        axios.get(`http://localhost:8080/products/${id}`).then(
            (res)=>{
                setProduct(res.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        })
    }, [id])

    const addToCart=()=>{
        let cart1=cart
        const data= {
          _id: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          description: product.description,
          countInStock: product.countInStock,
          category: product.category,
          identifier: product.identifier,
          shopId: product.shopId,
          count: count,
        }
        if(cart.length===0){

          cart1=[...cart1, data]
    
          dispatch(changeCart(cart1)) 
          dispatch(changeCount(count+Allcount))

          setText("Added")

        }
        else if(cart.some((item)=>{return item._id===product._id})){
            alert("Item already in cart")
       
            }
            else{
              cart1=[...cart1, data]
              dispatch(changeCart(cart1)) 
              dispatch(changeCount(count+Allcount))

              setText("Added")


            }
    
    
      }



  return (
    <div className='Product_Page'>
        <NavBar/>
        <div className="burner">
        <div className="burner_links">
          <Link to='/'>Home/</Link><Link to={'/'}>Products/</Link><Link to={`/product/${id}`}>{product.name}</Link>
        </div>
      </div>

        {
            !product?
            <h1>Loading...</h1>
            :
        <div className="product">
            <div className="image_detail">

            <div className="image_container">
                <div className="image">
                <img src={product.image} alt={product.name} />


                </div>

            </div>
            <div className="detail">
                <div className="name">
                    <h2>{product.name}</h2>

                </div>
                <div className="current_rating">
                    <h6>CURRENT RATINGS</h6>
                </div>
                <div className="price">
                <h2>
                KSH.  {(product.price).toLocaleString()}
            </h2>

                </div>
                <div className="add">
                    <div className="change">
                        <button
                        onClick={()=>{
                            count>1?
                            setCount(count-1)
                            :
                            setCount(count)
                        }}
                         className="dec">
                            -
                        </button>
                        <input value={count} onChange={(e)=>{
                            setCount(Number(e.target.value))

                        }}
                        type="number" className="count" />
                        <button
                        onClick={()=>{
                            setCount(count+1)

                        }}
                         className="inc">
                            +</button>
                    </div>
                    <div className="add_button">
                        <button onClick={addToCart} id='act'>
                            {text}

                        </button>
                    </div>
                </div>
                <div className="rate">
                    <h6>RATE NOW</h6>
                </div>
            </div>
            </div>

            <div className="details_shop">
                <div className="des">
                    <h3>DESCRIPTION</h3>
                    <p>{product.description}</p>
                </div>
                <Shop id={product.shopId}/>
            </div>
        </div>
        }
        <Footer/>

    </div>
  )
}

export default ProductPage