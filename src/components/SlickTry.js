'use client'
import React from "react";
import Slider from "react-slick";
import gallery1 from "../../public/images/gallery1.png"
import gallery2 from "../../public/images/gallery2.jpg"
import gallery3 from "../../public/images/gallery3.png"
import Image from "next/image";

function SlickTry() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="flex">
                <div>
                    <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
                </div>
                <div>
                    <Image src={gallery2} alt='' className=' h-full rounded-md object-cover ' />
                </div> <div>
                    <Image src={gallery2} alt='' className=' h-full rounded-md object-cover ' />
                </div> <div>
                    <Image src={gallery2} alt='' className=' h-full rounded-md object-cover ' />
                </div> <div>
                    <Image src={gallery2} alt='' className=' h-full rounded-md object-cover ' />
                </div>


            </Slider>
        </div>
    );
}

export default SlickTry;
