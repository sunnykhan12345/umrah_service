
'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import home from "../../../public/images/homenew.jpg"
import home2 from "../../../public/images/umrrah.jpg"
import Image from "next/image";

function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container overflow-hidden">
            <Slider {...settings}>
                <div className="relative w-full">
                    <Image src={home} alt="" className="w-full bg-cover bg-center h-[clc(100vh-200px)]" />
                    <div className="lg:container mx-auto px-5" >
                        <div className="absolute top-1/2  -translate-y-1/2  ">
                            <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
                                Umrah Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
                                Let's Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className="relative w-full">
                    <Image src={home2} alt="" className="w-full bg-cover" />
                    <div className="lg:container mx-auto px-5">
                        <div className="absolute top-1/2  -translate-y-1/2 ">
                            <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
                                tour's Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
                                Let's Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className="relative w-full">
                    <Image src={home} alt="" className="w-full bg-cover" />
                    <div className="lg:container mx-auto px-5">
                        <div className="absolute top-1/2  -translate-y-1/2 ">
                            <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
                                Vist's Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
                                Let's Get Started
                            </button>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default HomeSlider;

