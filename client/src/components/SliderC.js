import React from "react";
import Slider from "react-slick";
import Card from "./Card";

export default function SliderC() {
  const Data = [
    { id: 1, location: 'House 1', price: '$500,000' },
    { id: 2, location: 'House 2', price: '$600,000' },
    { id: 3, location: 'House 3', price: '$700,000' }
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className='mt-20 ml-7'>
      <Slider {...settings}>
        {Data.map((item) => (
          <Card key={item.id} location={item.location} price={item.price} />
        ))}
      </Slider>
    </div>
  );
}



{/*import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
const SliderC = () => {
  const dummyData = [
    { id: 1, location: 'House 1', price: '$500,000' },
    { id: 2, location: 'House 2', price: '$600,000' },
    { id: 3, location: 'House 3', price: '$700,000' }
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex  ml-[70px]">

          {dummyData.map((item) => (
            <Card key={item.id} location={item.location} price={item.price} />
          ))}
        </div>
      </Slider>
    </div>
  )
}



export default SliderC
*/}