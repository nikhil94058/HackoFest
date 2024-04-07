import React from "react";
import { Link } from "react-router-dom";
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
          <Link key={item.id} to={`/property/${item.id}`}>
            <Card location={item.location} price={item.price} />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
