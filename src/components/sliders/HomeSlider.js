
'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import home from "../../../public/images/homenew.jpg"
import home2 from "../../../public/images/umrrah.jpg"
import Image from "next/image";

function HomeSlider() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        rtl: true,
    };
    return (
        <div className="slider-container  ">
            <Slider {...settings}>
                <div className="relative w-full px-4">
                    <Image src={home} alt="" className="w-full bg-cover" />
                    <div className="lg:container mx-auto px-5" >
                        <div className="absolute top-1/2  -translate-y-1/2  ">
                            <h1 className="text-white font-bold font-Helvetica lg:text-[79px] sm:text-[50px] text-[25px] lg:leading-[91px] sm:leading-[60px]">
                                Umrah Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10  sm:py-4 sm:px-[35px] py-3 px-6 lg:text-[30px] text-base font-Helvetica font-bold rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
                                Let's Get Started
                            </button>
                        </div>
                    </div>
                </div>
                {/* second */}
                <div className="relative w-full">
                    <Image src={home} alt="" className="w-full bg-cover" />
                    <div className="lg:container mx-auto px-5">
                        <div className="absolute top-1/2  -translate-y-1/2 ">
                            <h1 className="text-white  lg:text-[79px] sm:text-[50px] font-Helvetica font-bold text-[25px]  lg:leading-[91px] sm:leading-[60px]">
                                tour's Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] py-3 px-6 font-bold lg:text-[30px] text-base rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
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
                            <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[25px] font-Helvetica lg:leading-[91px] sm:leading-[60px]">
                                Vist's Packages <br /> 2024
                            </h1>
                            <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] font-Helvetica text-base py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
                                Let's Get Started
                            </button>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>

        // <div className="slider-container"> {/* Add top margin equal to navbar height */}
        //     <Slider {...settings}>
        //         <div className="relative w-full">
        //             <Image src={home} alt="" className="w-full bg-cover bg-center h-[calc(100vh-200px)]" />
        //             <div className="lg:container mx-auto px-5">
        //                 <div className="absolute top-1/2 transform -translate-y-1/2">
        //                     <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
        //                         Umrah Packages <br /> 2024
        //                     </h1>
        //                     <button className="bg-[#2379BD] lg:mt-10 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
        //                         Let's Get Started
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //         {/* Additional Slides */}
        //         <div className="relative w-full">
        //             <Image src={home2} alt="" className="w-full bg-cover bg-center h-[calc(100vh-200px)]" />
        //             <div className="lg:container mx-auto px-5">
        //                 <div className="absolute top-1/2 transform -translate-y-1/2">
        //                     <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
        //                         Tour's Packages <br /> 2024
        //                     </h1>
        //                     <button className="bg-[#2379BD] lg:mt-10 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
        //                         Let's Get Started
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </Slider>
        // </div>
    );
}

export default HomeSlider;

