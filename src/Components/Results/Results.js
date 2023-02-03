import React from 'react'
import './Results.scss'
import NavBar from '../NavBar/NavBar'

import Products from '../Products/Products'

function Results() {
  return (
    <div className='results'>
        <NavBar/>
        <h3>Search results</h3>

        <Products/>
    </div>
  )
}

export default Results