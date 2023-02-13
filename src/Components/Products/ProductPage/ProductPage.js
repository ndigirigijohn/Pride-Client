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

import { Rating } from 'react-simple-star-rating'




function ProductPage() {
    const uid = JSON.parse(localStorage.getItem("user"))
    const [text, setText]=useState("Add to Cart")
    const cart = useSelector((state) => state.cart);
    const Allcount = useSelector((state) => state.count);

    const [productRating, setProductRating] = useState(0)
    const [ratingCount, setRatingCount] = useState(0)
    const [rFlag, setRFlag] = useState(true)
    const [comments, setComments] = useState(false)
    const [cc, setCc] = useState('show')




    const {id} = useParams()

    const [count, setCount] = useState(1)

    const dispatch = useDispatch();

    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }

    const [comment, setComment] = useState("")
    
    const handleComment = (e) => {
        console.log(comment, rating)
        if(uid===null){
            alert("Please login to rate")
            return
        }
        axios.post("http://localhost:8080/ratings", {
            userId: uid._id,
            productId: id,
            rating: rating,
            comment: comment
        }).then((res)=>{
            console.log(res)
            alert("Rating added")
        }
        ).catch((err)=>{
            console.log(err)
        }

        )
        //reset
        setComment("")
        setRating(0)
    }




    
    const [product, setProduct] = useState(false)
    useEffect(()=>{
    window.scrollTo(0, 0);
        
        // console.log("id", id)
        axios.get(`http://localhost:8080/products/${id}`).then(
            (res)=>{
                setProduct(res.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`http://localhost:8080/ratings/pid/${id}`).then(
            (res)=>{
                if(res.data.length===0){
                    setRFlag(true)
                    return
                }
                setRFlag(false)
                let sum=0
                res.data.forEach((item)=>{
                    sum+=item.rating
                })
                setProductRating(sum/res.data.length)
                setRatingCount(res.data.length)
            }
        )
        .catch((err)=>{
            console.log(err)
        }
        )

        axios.get(`http://localhost:8080/ratings/pid/${id}`).then(
            (res)=>{
                setComments(res.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        }
        )


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
                    <div className="rating">
                        {
                            rFlag?
                            <h1>No ratings yet</h1>
                            :
                            <div>
                                <h1>{productRating}</h1>
                                <h6>based on {ratingCount} ratings</h6>
                            </div>

                        }

                        </div>
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
                    <Rating
        onClick={handleRating}
      />
      <div className="comment">
        <input onChange={(e)=>{setComment(e.target.value)}} type="text" />
        <button onClick={handleComment}>Comment</button>
      </div>
      <button onClick={()=>{
        cc==="show"?
        setCc("none")
        :
        setCc("show")
      }}>View Comments</button>
      <div className={cc}>
        {comments?
comments.map((item, index)=>{
    return(
        <div className="comment">
            <h6>comment {index}</h6>
            <h6>{item.comment}</h6>
            <h6>{item.rating}</h6>
        </div>
    )}
        )
        :
        <h1>No comments yet</h1>}
        

      </div>

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