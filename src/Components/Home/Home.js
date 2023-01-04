import React from 'react'
import './Home.scss'
//import Navigation Bar
import NavBar from '../NavBar/NavBar';
//import Carousel
import CarouselRender from './Carousel/CarouselRender';


function Home() {
  return (
    <div>
      <NavBar/>
      <CarouselRender/>

    </div>
  )
}

export default Home