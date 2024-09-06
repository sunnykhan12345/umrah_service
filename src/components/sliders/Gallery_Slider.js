"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import gallery1 from "../../../public/images/gallery.png";
import gallery2 from "../../../public/images/gallery2.jpg";
import gallery3 from "../../../public/images/gallery3.png";
import gallery4 from "../../../public/images/gallery4.png";
import gallery5 from "../../../public/images/gallery5.png";

const Gallery_Slider = () => {
  var settings = {
    arrows: true,
    dots: true,
    infinite: true,
    // speed: 8000,
    // autoplay: true,
    autoplayspeed: 0,
    slidesToShow: 3,
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
    <Slider {...settings}>
      <div>
        <Image
          src={gallery1}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
      <div>
        <Image
          src={gallery3}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
      <div>
        <Image
          src={gallery4}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
      <div>
        <Image
          src={gallery1}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
      <div>
        <Image
          src={gallery1}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
      <div>
        <Image
          src={gallery1}
          width={344}
          height={428}
          alt=""
          className="w-[344px] h-[428px] object-cover"
        />
      </div>
    </Slider>
  );
};

export default Gallery_Slider;
