import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import '../styles/Carousel.css';

export const CarouselSlider = () => {
  return (
    <div className=""style={{width:'99%'}}>
    <Carousel fade>
       <Carousel.Item>
        <img
          className="w-full h-48"
          src="/assets/vashi.png"
          alt="First slide"
          // style={{ height: 'auto', maxWidth: '100%' }}
          />
      </Carousel.Item> 
     
      {/* <Carousel.Item>
        <img
          className="d-block w-100 carouselImage"
          src="/assets/vashi1.png"
          alt="Third slide"
          style={{ height: 'auto', maxWidth: '100%' }}
        />
      </Carousel.Item> */}
    </Carousel>
    </div>
  );
}


