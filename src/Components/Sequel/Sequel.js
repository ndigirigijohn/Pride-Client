import React from 'react'
import './Sequel.scss'
import Products from '../Products/Products'
import NavBar from '../NavBar/NavBar'
function Sequel() {
  return (
    <div className='sequel'>
        <NavBar/>
        <div className="sequel_heading">
            <h3>
                Based on your skin characteristics, the following products are recommended for you
            </h3>
        </div>
        <Products/>
    </div>
  )
}

export default Sequel