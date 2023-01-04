import React from 'react'
import Carousel, {CarouselItem} from './Carousel'
import './Carousel.scss'
import Card from './Card/Card'


function CarouselRender() {
  return (
    <Carousel>
        <CarouselItem>
          <div className="item item_1">
            <img src="    http://ellie.themes.zone/wp-content/uploads/2018/03/sld1_con.png"
             alt="" 
            />
            <Card heading={'NEW ARRIVALS'} text1={'NEW COSMETICS'} text2={' UPTO 40% OFF'} button={'EXPLORE COLLECTION'}/>

          </div>
        </CarouselItem>
        <CarouselItem>
        <div className="item item_2">
        <img src="http://ellie.themes.zone/wp-content/uploads/2018/03/sld3_con.png"
         alt="" />
            <Card heading={'NEW ARRIVALS'} text1={'NEW COSMETICS'} text2={' UPTO 40% OFF'} button={'EXPLORE COLLECTION'}/>


        </div>


        </CarouselItem>
        <CarouselItem>
        <div className="item item_1">
        <img src="http://ellie.themes.zone/wp-content/uploads/2018/03/sld2_cont.png"
         alt="" />
            <Card heading={'NEW ARRIVALS'} text1={'NEW COSMETICS'} text2={' UPTO 40% OFF'} button={'EXPLORE COLLECTION'}/>




</div>
        </CarouselItem>


    </Carousel>
  )
}

export default CarouselRender