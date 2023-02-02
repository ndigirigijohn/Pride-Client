import React from 'react'
import './Item.scss'

function Item({text, count}) {
  return (
    <div className='admin_item'>
        <div className="title">
            <p>{text}</p>
        </div>
        <div className="count">
            <p>{count}</p>
        </div>
        <div className="item_foot">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Item