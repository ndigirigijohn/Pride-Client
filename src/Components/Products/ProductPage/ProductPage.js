import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import './ProductPage.scss'
import Shop from './Shop/Shop'
import Footer from '../../Footer/Footer'

function ProductPage() {
    const [text, setText]=useState("Add to Cart")
    const {id} = useParams()

    
    const [product, setProduct] = useState(false)
    useEffect(()=>{
        // console.log("id", id)
        axios.get(`http://localhost:8080/products/${id}`).then(
            (res)=>{
                console.log(res.data)
                setProduct(res.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        })
    }, [id])

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
                        <button className="dec">
                            -
                        </button>
                        <input type="number" className="count" />
                        <button className="inc">
                            +</button>
                    </div>
                    <div className="add_button">
                        <button id='act'>
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