import React from 'react'
import './Card.scss'
function Card({heading,text1, text2, button}) {
  return (
    <div className='carousel_card'>
        <div className='contents'>
        <h6>{heading}</h6>
        <div className='text'><span>{text1}</span><span>{text2}</span></div>
        <a className='button' href='#products'>{button}</a>

        </div>
    </div>
  )
}

export default Card