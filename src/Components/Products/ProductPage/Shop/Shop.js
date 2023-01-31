import React, {useState, useEffect} from 'react'
import './Shop.scss'
import {FiMapPin} from 'react-icons/fi'
import axios from 'axios'

function Shop({id}) {
    const [shop, setShop] = useState(false)
    useEffect(()=>{
        // console.log("id", id)
        axios.get(`http://localhost:8080/shops/${id}`).then(
            (res)=>{
                setShop(res.data)
            }
        )
        .catch((err)=>{
            console.log(err)
        })
    }, [id])

  return (
    <div className='Shop'>
        <h3>Where to find the product</h3>
        {
            !shop?
            <h3>Loading...</h3>
            :
            <div className="shop">
                <div className="name">
                    <span>SHOP NAME: </span>
                    <h3>{shop.name}</h3>
                    
                </div>
                <div className="address">
                    <span>LOCATION: </span>
                    <h3>{shop.locationName}</h3>
                </div>
                <div className="phone">
                    <span>PHONE: </span>
                    <h3>{shop.phone}</h3>
                </div>
                <div className="email">
                    <span>EMAIL: </span>
                    <h3>{shop.email}</h3>
                </div>
                <div className="maps">
                    
                    <a href={shop.location} target='_blank' rel="noreferrer" ><span><FiMapPin/></span> GO WITH MAPS  </a>
                </div>
            </div>
        }

    </div>

   
  )
}

export default Shop