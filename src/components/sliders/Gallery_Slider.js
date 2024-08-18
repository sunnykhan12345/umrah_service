// 'use client'
// // import { Swiper, SwiperSlide } from 'swiper/react';
// import gallery1 from "../../public/images/gallery1.png"
// import gallery2 from "../../public/images/gallery2.jpg"
// import gallery3 from "../../public/images/gallery3.png"
// // Import Swiper styles
// // import 'swiper/css';
// import Image from 'next/image';
// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import Link from "next/link";

// // import "./styles.css";


// const SwipperTry = () => {
//     return (
//         <div>
//             {/* <h3>
//                 Slider5 is visible when you slide to 2,3, or 4, and slider5 has
//                 "swiper-slide-visible" className
//             </h3>{" "} */}
//             <br />
//             <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
//                 <div className='flex gap-4 md:gap-8 '>
//                     <SwiperSlide className="">
//                         <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
//                             <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
//                         <Link href="/" className=''>
//                             <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
//                         <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
//                             <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
//                         <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
//                             <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
//                         </Link>
//                     </SwiperSlide>
//                     <SwiperSlide className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
//                         <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
//                             <Image src={gallery1} alt='' className=' h-full rounded-md object-cover ' />
//                         </Link>
//                     </SwiperSlide>
//                 </div>

//             </Swiper >
//             {/* <Swiper
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide>
//                     <Image src={gallery1} alt='' className='object-cover' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image src={gallery2} alt='' className='object-cover' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image src={gallery1} alt='' className='object-cover' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image src={gallery1} alt='' className='object-cover' />
//                 </SwiperSlide>
//             </Swiper> */}
//         </div >
//     )
// }

// export default SwipperTry

'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import gallery1 from "../../../public/images/gallery.png"
import gallery2 from "../../../public/images/gallery2.jpg"
import gallery3 from "../../../public/images/gallery3.png"
import gallery4 from "../../../public/images/gallery4.png"
import gallery5 from "../../../public/images/gallery5.png"

const Gallery_Slider = () => {
    return (
        <Carousel className="lg:py-14 py-10">
            <CarouselContent>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery5}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery3}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery4}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>


            </CarouselContent>
            <CarouselPrevious className="text-dark-red absolute xl:-left-20 lg:-left-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden left-0 " />
            <CarouselNext className="text-dark-red absolute xl:-right-20 lg:-right-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden right-0 " />
        </Carousel>
    )
}

export default Gallery_Slider
