import React, {useState, useEffect} from 'react'
import './Shops.scss'
import axios from 'axios'
import AdminNav from '../adminnav/AdminNav'
import AddSearch from '../addsearch/AddSearch';






function Shops() {

    const [shops, setShops] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8080/shops`).then((res)=>{
            setShops(res.data)
        })
    },[])

    const addShop = (e) => {
        e.preventDefault()
    }
    const searchShop = (e) => {
        e.preventDefault()
    }

  return (
    <>
           <AdminNav title={'Orders'}/>
           <AddSearch title={'Shop'} addAction={addShop} searchAction={searchShop}/>

    <div className='shops'>

        <div className="shop_nav">
            <div className="name">
                <p>Name</p>
            </div>
            <div className="email">
                <p>Email</p>
            
            </div>
            <div className="location">
                <p>Location</p>
            </div>
            <div className="phone">
                <p>Phone</p>
            </div>
            <div className="shopKey">
                <p>Shop Key</p>
            </div>

        </div>
        {
            shops?
            shops.map((shop)=>{
                return(
                    <div className="shop">
                        <div className="name">
                            <p>{shop.name}</p>
                        </div>
                        <div className="email">
                            <p>{shop.email}</p>
                        </div>
                        <div className="location">
                            <p>{shop.locationName}</p>
                        </div>
                        <div className="phone">
                            <p>{shop.phone}</p>
                        </div>
                        <div className="shopKey">
                            <p>{shop.shopKey}</p>
                        </div>
                    </div>
                )
            }
            ):
            <div className="loading">
                <p>Loading...</p>
            </div>
        }
    </div>
    </>

  )
}

export default Shops