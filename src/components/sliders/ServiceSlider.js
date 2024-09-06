"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel from "../../../public/images/hotel.jpg";
import v_cons from "../../../public/images/visa_consultance.jpg";
import ticketing from "../../../public/images/ticketing.jpg";
import Image from "next/image";
import gallery1 from "../../../public/images/gallery.png";
import gallery2 from "../../../public/images/gallery2.jpg";
import gallery3 from "../../../public/images/gallery3.png";
import gallery4 from "../../../public/images/gallery4.png";
import gallery5 from "../../../public/images/gallery5.png";

const Gallery_Slider = () => {
  var settings = {
    arrows: true, // Enable arrows
    dots: true,
    infinite: true,
    speed: 500, // Add a speed for sliding animation
    autoplay: true,
    autoplaySpeed: 3000, // Correct the spelling for autoplaySpeed
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Larger screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto mt-10 max-w-screen-xl">
      <Slider {...settings}>
        <div className="p-2">
          <Image
            src={hotel}
            width={344}
            height={428}
            alt="Hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <Image
            src={v_cons}
            width={344}
            height={428}
            alt="Visa Consultancy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <Image
            src={ticketing}
            width={344}
            height={428}
            alt="Ticketing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <Image
            src={hotel}
            width={344}
            height={428}
            alt="Gallery 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <Image
            src={v_cons}
            width={344}
            height={428}
            alt="Gallery 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <Image
            src={hotel}
            width={344}
            height={428}
            alt="Gallery 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Gallery_Slider;
