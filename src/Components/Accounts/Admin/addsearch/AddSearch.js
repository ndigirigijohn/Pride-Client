import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import './AddSearch.css'


function AddSearch({title,addAction, searchAction}) {
  return (
    <div className="add_search">
    <button onClick={()=>addAction()} className='add_item'>Add {title}</button>
    <div className="search_item">
      <AiOutlineSearch/>
      <input onChange={(e)=>searchAction(e)} type="text" placeholder={`Search ${title}`}/>
    </div>
   </div>
)
}

export default AddSearch