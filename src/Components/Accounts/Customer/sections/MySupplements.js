import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { changeProduct } from "../../../redux/slices/productSlice";
import Products from '../../products/Products'
import axios from 'axios';
import {Link} from 'react-router-dom'



function MySupplements() {
  const dispatch = useDispatch();
  const skincode= JSON.parse(localStorage.getItem('skincode'))

  useEffect(() => {
    axios.get(`https://prideserver.herokuapp.com/code/a/z/${skincode}`).then((res)=>{
      dispatch(changeProduct(res.data))

    }

    )
  }, [dispatch, skincode])
  return (
    <div>
      <h3>My Supplements</h3>
      <div className="data_info">
          <p>You can update your suplements recommendatios <Link style={{color:"#c9104e"}} to='/FMS'>here</Link></p>
        </div>

      <Products/>
      


    </div>
  )
}

export default MySupplements