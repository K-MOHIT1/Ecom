import React from 'react'
import { MainCarousalDataCarousal } from './MainCarousalData'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousal = () => {

const items = MainCarousalDataCarousal.map((item)=> <img className="cursor-pointer -z-10" role="presentation" src={item.image} alt=''></img>)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarousal
