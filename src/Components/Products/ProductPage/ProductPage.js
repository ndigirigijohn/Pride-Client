import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../../NavBar/NavBar'
import './ProductPage.scss'

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
          <Link to='/'>Home/</Link><Link to={'/'}>Products/</Link><Link to={`/products/${params.id}`}>{product.name}</Link>
        </div>
      </div>

        {
            !product?
            <h1>Loading...</h1>
            :
        <div className="product">
            <div className="image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="detail">
                <div className="name">
                    <p>{product.name}</p>

                </div>
                <div className="current_rating">
                </div>
                <div className="price">
                <p>
                KSH.  {(product.price).toLocaleString()}
            </p>

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
                        <button>
                            {text}
                        </button>
                    </div>
                </div>
            </div>
            <div className="details">
            </div>
        </div>
        }

    </div>
  )
}

export default ProductPage