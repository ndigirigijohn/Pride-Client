import React, { useEffect, useState } from 'react'
import './Products.scss'
import Product from './Product/Product';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import { changeProduct } from "../../redux/slices/productSlice";
import {changePage} from "../../redux/slices/pageSlice" 


function Products() {
 const [products, setPoducts] = useState(useSelector((state) => state.products))
    const pageInitial = useSelector((state) => state.page);
    const [page, setPage] = useState(pageInitial)
    let newProducts = useSelector((state) => state.products)
    const dispatch = useDispatch();


    useEffect(()=>{
      setPoducts(newProducts)
      dispatch(changePage(page))

    },[dispatch, newProducts, page])




    const nextPage=()=>{
       axios.get(`http://localhost:8080/products/page/${page+1}/limit/9`).then((response)=>{
        dispatch(changeProduct(response.data))
        setPage(page+1)
        
        })
        .catch((err)=>{
          console.log(err)
        })
    }

    const prevPage=()=>{
        axios.get(`http://localhost:8080/products/page/${page-1}/limit/9`).then((response)=>{
          dispatch(changeProduct(response.data))
          setPage(page-1)
              })
            .catch((err)=>{
              console.log(err)
            })
    }

    const myRef = React.createRef(null);



  return (
    <div  ref={myRef} className='Products'>
        <div className="contents">
        {
          Array.isArray(products)&&products.length>0?
        products.map((product)=>{
          return <Product key={product._id} product={product}/>
        })
        :
        <h1>No products</h1>
      }



        </div>
        <div className="next_prev">
            <button
            onClick={prevPage}
             className="prev">Prev</button>
            <span>{page}</span>
            <button
            onClick={nextPage}
             className="next">Next</button>
        </div>
    </div>
  )
}

export default Products