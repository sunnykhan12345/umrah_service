// 'use client'

// import * as React from "react"
// import Autoplay from "embla-carousel-autoplay"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import Image from "next/image"
// import homeimg from "../../../public/images/home.png"
// import homeimg3 from "../../../public/images/gallery3.png"
// import gal from "../../../public/images/gallery4.png"


// export function HomeSlider() {
//     const plugin = React.useRef(
//         Autoplay({ delay: 2000, stopOnInteraction: true })
//     )

//     return (
//         <div className="relative w-full overflow-hidden">
//             <Carousel

//                 plugins={[plugin.current]}
//                 className="w-full h-full"
//                 onMouseEnter={plugin.current.stop}
//                 onMouseLeave={plugin.current.reset}
//             >

//                 <CarouselContent>
//                     {Array.from({ length: 5 }).map((_, index) => (
//                         <>
//                             <CarouselItem key={index} className="relative w-full h-full">
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={homeimg}
//                                         alt="banner_img"
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="relative z-10 2xl:h-[500px] md:h-[1031px] h-[620px] bg-home bg-cover bg-center bg-opacity-50 bg-no-repeat">
//                                     <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
//                                         <div className="absolute top-1/2 -translate-y-1/2">
//                                             <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                                 Umrah Packages <br /> 2024
//                                             </h1>
//                                             <div className="lg:mt-8 mt-5">
//                                                 <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
//                                                     Let's Get Started
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CarouselItem>

//                             {/* // second slider */}
//                             <CarouselItem key={index} className="relative w-full h-full">
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={homeimg}
//                                         alt="banner_img"
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="relative z-10 2xl:h-[h-500px] md:h-[1031px] h-[620px] bg-home bg-opacity-50 bg-no-repeat">
//                                     <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
//                                         <div className="absolute top-1/2 -translate-y-1/2">
//                                             <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                                 Tour's Packages <br /> 2024
//                                             </h1>
//                                             <div className="lg:mt-8 mt-5">
//                                                 <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
//                                                     Let's Get Started
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CarouselItem>

//                             {/* // third slider */}
//                             <CarouselItem key={index} className="relative w-full h-full">
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={homeimg}
//                                         alt="banner_img"
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="relative z-10 2xl:h-[h-500px] md:h-[1031px] h-[620px] bg-home bg-opacity-50 bg-no-repeat">
//                                     <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
//                                         <div className="absolute top-1/2 -translate-y-1/2">
//                                             <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                                 Hotel's Packages <br /> 2024
//                                             </h1>
//                                             <div className="lg:mt-8 mt-5">
//                                                 <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
//                                                     Let's Get Started
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CarouselItem>
//                             {/* // fouth slider */}
//                             <CarouselItem key={index} className="relative w-full h-full">
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={homeimg}
//                                         alt="banner_img"
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="relative z-10 2xl:h-[h-500px] md:h-[1031px] h-[620px] bg-home bg-opacity-50 bg-no-repeat">
//                                     <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
//                                         <div className="absolute top-1/2 -translate-y-1/2">
//                                             <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                                 Transport's Packages <br /> 2024
//                                             </h1>
//                                             <div className="lg:mt-8 mt-5">
//                                                 <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
//                                                     Let's Get Started
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CarouselItem>
//                             {/* // fifth slider */}
//                             <CarouselItem key={index} className="relative w-full h-full">
//                                 <div className="absolute inset-0">
//                                     <Image
//                                         src={homeimg}
//                                         alt="banner_img"
//                                         width={100}
//                                         height={100}
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                                 <div className="relative z-10 2xl:h-[h-500px] md:h-[1031px] h-[620px] bg-home bg-opacity-50 bg-no-repeat">
//                                     <div className="md:container mx-auto px-5 lg:py-[114px] py-14">
//                                         <div className="absolute top-1/2 -translate-y-1/2">
//                                             <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                                 Haj and Umrah Packages <br /> 2024
//                                             </h1>
//                                             <div className="lg:mt-8 mt-5">
//                                                 <button className="bg-[#2379BD] sm:py-4 sm:px-[35px] py-3 px-6 text-8 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500" >
//                                                     Let's Get Started
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </CarouselItem>

//                         </>
//                     ))}
//                 </CarouselContent>

//                 <CarouselPrevious />
//                 <CarouselNext />
//             </Carousel>
//         </div>
//     )
// }
// export default HomeSlider

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


// import React from "react";
// import Slider from "react-slick";
// import home from "../../../public/images/homenew.jpg"
// import Image from "next/image";

// const HomeSlider = () => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 3,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true
//     };

//     return (
//         <>
//             <div className="slider-container">
//                 <Slider {...settings}>
//                     <div className="relative w-full">
//                         <Image src={home} alt="" className="w-full bg-cover" />
//                         <div className="lg:container mx-auto px-5">
//                             <div className="absolute top-1/2  -translate-y-1/2 text-center">
//                                 <h1 className="text-white font-bold lg:text-[79px] sm:text-[50px] text-[30px] lg:leading-[91px] sm:leading-[60px]">
//                                     Umrah Packages <br /> 2024
//                                 </h1>
//                                 <button className="bg-[#2379BD] lg:mt-10 mt-3 sm:py-4 sm:px-[35px] py-3 px-6 rounded-[30px] text-white hover:opacity-80 ease-in-out duration-500">
//                                     Let's Get Started
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </Slider>
//             </div>
//         </>
//     )
// }

// export default HomeSlider;
