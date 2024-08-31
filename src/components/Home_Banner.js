// // 'use client'
// // import Link from 'next/link'
// // import React, { useState } from 'react'
// // import { MdOutlineFlight } from "react-icons/md";
// // import umrah from "../../public/images/umrah.png"
// // import visa from "../../public/images/visa.png"
// // import Image from 'next/image';
// // import { MdFlightTakeoff } from "react-icons/md";
// // import { MdOutlineFlightLand } from "react-icons/md";


// // const Home_Banner = () => {
// //     const [inputType, setInputType] = useState('text');

// //     return (
// //         <>
// //             <div className='bg-flight bg-no-repeat bg-cover bg-center py-4'>
// //                 <div className='lg:container mx-auto px-5'>
// //                     <div className='flex items-center flex-col gap-2 pt-2'>
// //                         <div className=''>
// //                             <div className='flex items-center gap-1 lg:flex'>
// //                                 <Link href="#" className='gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tl-xl hover:opacity-70 duration-700'>
// //                                     <MdOutlineFlight className='lg:w-7 w-5 lg:h-7 h-5' />
// //                                     <h6 className='lg:text-[22px] text-sm font-medium'>Flights</h6>
// //                                 </Link>
// //                                 <Link href="#" className='gap-1 flex items-center bg-[#B31312] text-white lg:px-7 px-4 lg:py-2 py-1 hover:opacity-70 duration-700'>
// //                                     {/* <MdOutlineFlight className='w-7 h-7' /> */}
// //                                     <Image src={umrah} alt='' className='lg:w-7 w-5 lg:h-7 h-5 object-cover' />
// //                                     <h6 className='lg:text-[22px] text-sm font-medium'>Umrah</h6>
// //                                 </Link>
// //                                 <Link href="#" className='gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tr-xl hover:opacity-70 duration-700'>
// //                                     {/* <MdOutlineFlight className='w-7 h-7' /> */}
// //                                     <Image src={visa} alt='' className='lg:w-7 w-5 lg:h-7 h-5 object-cover' />
// //                                     <h6 className='lg:text-[22px] text-sm font-medium'>Visa</h6>
// //                                 </Link>
// //                             </div>
// //                             <div className="bg-white p-3 pb-3 rounded-bl-lg rounded-tr-lg rounded-br-lg">
// //                                 <div className="flex flex-wrap items-center gap-2 pb-3">
// //                                     {/* First Input */}
// //                                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
// //                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
// //                                         <input
// //                                             type="text"
// //                                             placeholder="From Where"
// //                                             className="focus:outline-none focus:border-blue-500 flex-1"
// //                                         />
// //                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
// //                                     </div>

// //                                     {/* Second Input */}
// //                                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
// //                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
// //                                         <input
// //                                             type="text"
// //                                             placeholder="To Where"
// //                                             className="focus:outline-none focus:border-blue-500 flex-1"
// //                                         />
// //                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
// //                                     </div>

// //                                     {/* Departure Date */}
// //                                     <div className="relative mt-3 w-full sm:w-auto">
// //                                         <input
// //                                             type={inputType}
// //                                             placeholder="Departure"
// //                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
// //                                             onFocus={() => setInputType('date')}
// //                                             onBlur={() => setInputType('text')}
// //                                             id="departure"
// //                                         />
// //                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
// //                                             <svg
// //                                                 xmlns="http://www.w3.org/2000/svg"
// //                                                 fill="none"
// //                                                 viewBox="0 0 24 24"
// //                                                 strokeWidth="2"
// //                                                 stroke="currentColor"
// //                                                 className="w-5 h-5"
// //                                             >
// //                                                 <path
// //                                                     strokeLinecap="round"
// //                                                     strokeLinejoin="round"
// //                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                                                 />
// //                                             </svg>
// //                                         </span>
// //                                     </div>

// //                                     {/* Return Date */}
// //                                     <div className="relative mt-3 w-full sm:w-auto">
// //                                         <input
// //                                             type={inputType}
// //                                             placeholder="Return"
// //                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
// //                                             onFocus={() => setInputType('date')}
// //                                             onBlur={() => setInputType('text')}
// //                                             id="return"
// //                                         />
// //                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
// //                                             <svg
// //                                                 xmlns="http://www.w3.org/2000/svg"
// //                                                 fill="none"
// //                                                 viewBox="0 0 24 24"
// //                                                 strokeWidth="2"
// //                                                 stroke="currentColor"
// //                                                 className="w-5 h-5"
// //                                             >
// //                                                 <path
// //                                                     strokeLinecap="round"
// //                                                     strokeLinejoin="round"
// //                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                                                 />
// //                                             </svg>
// //                                         </span>
// //                                     </div>

// //                                     {/* Phone Number */}
// //                                     <div className="relative mt-3 w-full sm:w-auto">
// //                                         <input
// //                                             type="text"
// //                                             placeholder="Phone No"
// //                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
// //                                         />
// //                                     </div>

// //                                     {/* Search Button */}
// //                                     <div className="relative mt-3 w-full sm:w-auto">
// //                                         <button className="px-3 py-2 text-white bg-blue-500 rounded-lg w-full sm:w-auto">
// //                                             Search
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>



// //                     </div>
// //                 </div>
// //             </div>


// //         </>
// //     )
// // }

// // export default Home_Banner




// 'use client'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { MdOutlineFlight } from "react-icons/md";
// import umrah from "../../public/images/umrah.png"
// import visa from "../../public/images/visa.png"
// import Image from 'next/image';
// import { MdFlightTakeoff } from "react-icons/md";
// import { MdOutlineFlightLand } from "react-icons/md";


// const Home_Banner = () => {
//     const [inputType, setInputType] = useState('text');

//     return (
//         <>
//             <div className='bg-flight bg-no-repeat bg-cover bg-center py-4'>
//                 <div className='lg:container mx-auto px-5'>
//                     <div className='flex items-center flex-col gap-2 pt-2'>
//                         {/* <div className=''>
//                             <div className='flex items-center gap-1 lg:flex'>
//                                 <Link href="#" className='gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tl-xl hover:opacity-70 duration-700'>
//                                     <MdOutlineFlight className='lg:w-7 w-5 lg:h-7 h-5' />
//                                     <h6 className='lg:text-[22px] text-sm font-medium'>Flights</h6>
//                                 </Link>
//                                 <Link href="#" className='gap-1 flex items-center bg-[#B31312] text-white lg:px-7 px-4 lg:py-2 py-1 hover:opacity-70 duration-700'>
//                                     {/* <MdOutlineFlight className='w-7 h-7' /> */}

//                                     {/* First Input */}
//                                     {/* <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
//                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
//                                         <input
//                                             type="text"
//                                             placeholder="From Where"
//                                             className="focus:outline-none focus:border-blue-500 flex-1"
//                                         />
//                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
//                                     </div> */}

//                                     {/* Second Input */}
//                                     {/* <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
//                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
//                                         <input
//                                             type="text"
//                                             placeholder="To Where"
//                                             className="focus:outline-none focus:border-blue-500 flex-1"
//                                         />
//                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
//                                     </div> */}

//                                     {/* Departure Date */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type={inputType}
//                                             placeholder="Departure"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                             onFocus={() => setInputType('date')}
//                                             onBlur={() => setInputType('text')}
//                                             id="departure"
//                                         />
//                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="2"
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                                 />
//                                             </svg>
//                                         </span>
//                                     </div>

//                                     {/* Return Date */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type={inputType}
//                                             placeholder="Return"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                             onFocus={() => setInputType('date')}
//                                             onBlur={() => setInputType('text')}
//                                             id="return"
//                                         />
//                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="2"
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                                 />
//                                             </svg>
//                                         </span>
//                                     </div>

//                                     {/* Phone Number */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type="text"
//                                             placeholder="Phone No"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                         />
//                                     </div>

//                                     {/* Search Button */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <button className="px-3 py-2 text-white bg-blue-500 rounded-lg w-full sm:w-auto">
//                                             Search
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> */}



//                     </div>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Home_Banner


'use client'

import Acc from "@/app/tours/Acc"
const Home_Banner = () => {
    return (
        <div>
            <Acc />
        </div>
    )
}

export default Home_Banner
