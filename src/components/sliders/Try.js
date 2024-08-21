// // 'use client'
// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // // import 'swiper/css';
// // import 'swiper/css/pagination';

// // // import './styles.css';
// // import malysia from "../../../public/images/malysia.jpg"
// // // import required modules
// // import { Pagination } from 'swiper/modules';
// // import Image from 'next/image';

// // export default function Try() {
// //     return (
// //         <>
// //             <Swiper
// //                 spaceBetween={30}
// //                 pagination={{
// //                     clickable: true,
// //                 }}
// //                 modules={[Pagination]}
// //                 className="mySwiper"
// //             >
// //                 <SwiperSlide>
// //                     <Image src={malysia} alt='' className='  object-cover' />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <Image src={malysia} alt='' className='  object-cover' />
// //                 </SwiperSlide>
// //                 <SwiperSlide>
// //                     <Image src={malysia} alt='' className='  object-cover' />
// //                 </SwiperSlide>

// //             </Swiper>


// //         </>
// //     );
// // }


// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import malysia from "../../../public/images/malysia.jpg";

// export default function Try() {
//     return (
//         <div className="w-full">
//             <Swiper
//                 spaceBetween={30}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"
//                 direction="horizontal"
//             >
//                 <SwiperSlide>
//                     <Image src={malysia} alt='' className='w-full h-full object-cover' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image src={malysia} alt='' className='w-full h-full object-cover' />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <Image src={malysia} alt='' className='w-full h-full object-cover' />
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// }
// 'use client'
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination'; // Import pagination CSS only once
// import { Pagination, FreeMode } from "swiper/modules";
// import gal from "../../../public/images/gallery4.png";
// import { BiSolidRightArrowSquare } from "react-icons/bi";

// const data = [
//     {
//         id: 1,
//         image: gal.src,
//     },
//     {
//         id: 2,
//         image: gal.src,
//     },
//     {
//         id: 3,
//         image: gal.src,
//     },
// ];

// const Try = () => {
//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-black">
//             <Swiper
//                 breakpoints={{
//                     340: {
//                         slidesPerView: 2,
//                         spaceBetween: 15,
//                     },
//                     700: {
//                         slidesPerView: 3,
//                         spaceBetween: 15,
//                     },
//                 }}
//                 freeMode={true}
//                 pagination={{ clickable: true }} // Ensure pagination is configured correctly
//                 modules={[FreeMode, Pagination]} // Include Pagination module only once
//                 className="max-w-[90%] lg:max-w-[80%]"
//             >
//                 {data.map((item) => (
//                     <SwiperSlide key={item.id}>
//                         <div
//                             className="flex flex-col gap-6 group relative sm:mb-20 -mt-20 shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]"
//                             style={{
//                                 backgroundImage: `url(${item.image})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         >
//                             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50"></div>
//                             <BiSolidRightArrowSquare className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:-rotate-45" />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             {/* Pagination dots will be automatically inserted here */}
//         </div>
//     );
// }

// export default Try;




import React from 'react'

const Try = () => {
    return (
        <div>Try</div>
    )
}

export default Try