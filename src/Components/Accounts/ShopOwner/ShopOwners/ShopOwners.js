import React, {useState, useEffect} from 'react'
import './ShopOwners.scss'
import axios from 'axios'
import AdminNav from '../adminnav/AdminNav'

import AddSearch from '../addsearch/AddSearch';


function ShopOwners() {
    const [shopOwners, setShopOwners] = useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8080/users/shopOwner')
        .then(res => {
            setShopOwners(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const addShopOwner = (e) => {
        e.preventDefault()
    }
    const searchShopOwner = (e) => {
        e.preventDefault()
    }

        
  
  return (
    <>
           <AdminNav title={'Shop owners'}/>
           <AddSearch title={'Shop Owner'} addAction={addShopOwner} searchAction={searchShopOwner}/>

    <div className='shop_owners'>
        <div className="shopOwner_Nav">
            <div className="name">
                <p>Name</p>
            </div>
            <div className="email">
                <p>Email</p>
                </div>
            <div className="phone">
                <p>Phone</p>
            </div>
            <div className="shopName">
                <p>Shop Name</p>

            </div>  
            <div className="shopId">
                <p>Shop Id</p>
            </div>





        </div>
        {
            shopOwners? shopOwners.map((shopOwner, i) => {
                return (
                    <div className="shopOwner" key={i}>
                        <div className="name">
                            <p>{shopOwner.name}</p>
                        </div>
                        <div className="email">
                            <p>{shopOwner.email}</p>
                        </div>
                        <div className="phone">
                            <p>{shopOwner.phone}</p>
                        </div>
                        <div className="shopName">
                            <p>{shopOwner.shopName}</p>
                        </div>
                        <div className="shopId">
                            <p>{shopOwner.shopId}</p>
                        </div>
                    </div>

                )
            })
            :
            <p>loading...</p>
            }
    </div>
    </>

  )
}

export default ShopOwners