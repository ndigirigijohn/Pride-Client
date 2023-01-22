import React, { useEffect } from 'react'
import './Home.scss'
//import Navigation Bar
import NavBar from '../NavBar/NavBar';
//import Carousel
import CarouselRender from './Carousel/CarouselRender';
import Products from '../Products/Products';

import { useDispatch, useSelector} from "react-redux";
import { changeProduct } from "../../redux/slices/productSlice";

import axios from 'axios';



function Home() {
  const dispatch = useDispatch();
  const pageInitial = useSelector((state) => state.page);

  const url=`http://localhost:8080/products/page/${pageInitial}/limit/9`
  const getProducts= axios.get(url)
  useEffect(()=>{
    dispatch(changeProduct([]));
    getProducts.then((response)=>{
      dispatch(changeProduct(response.data))  
    })
    .catch((err)=>{
      console.log(err)

    });;


  });

  return (
    <div className='home'>
      <NavBar/>
      <CarouselRender/>
      <Products/>

    </div>
  )
}

export default Home