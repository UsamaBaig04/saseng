import React from 'react'
import { CarouselSlider } from './CarouselSlider'
import { Brands } from './Brands'
import { Footer } from './Footer'
import{Navbar} from './Navbar'
import { Products } from './Products'
import { Modal } from './Modal'
import { AboutUs } from './AboutUs'

export const Router = () => {
  return (
    <div>
        {/* <CarouselSlider/> */}
      {/* <AboutUs/> */}
        <Products/>
        <Brands/>
       
    </div>
  )
}
