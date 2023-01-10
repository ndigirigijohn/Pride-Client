import React from 'react'
import './Total.css'
import { AiOutlineRise } from 'react-icons/ai';
import { AiOutlineFall } from 'react-icons/ai';


function Total({icon, head, value, percent, number}) {
  return (
    <div className='total'>
        <div className="total_head">
            <span className='icon'>{icon}</span>
            <span>{head}</span>
        </div>
        <div className="value">
            {value}
        </div>
        <div className="stat">
            <span>
                {percent>0?<AiOutlineRise/>:<AiOutlineFall/>}
                {percent +'%'}
                
            </span>
            <span>
                {number>0?`+ ${number}`:`- ${number}`} K This week
            </span>

        </div>
    </div>
  )
}

export default Total