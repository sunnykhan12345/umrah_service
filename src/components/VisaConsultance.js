import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gallery1 from "../../public/images/gallery1.png"
import visa from "../../public/images/visa.jpg"
import visa1 from "../../public/images/visa1.jpg"
import dubai from "../../public/images/dubai1.jpg"
import singa from "../../public/images/singapore.jpg"
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
const VisaConsultance = () => {
    return (
        <div className='lg:mt-20 mt-8'>
            <div className='lg:container mx-auto px-5'>
                <h2 className='lg:text-[35px] text-2xl font-bold font-Helvetica text-black capitalize lg:mb-10 mb-6 sm:text-start text-center border-l-8  border-blue-300 sm:py-2 py-1 sm:pl-2 pl-1 rounded-full'

                >visa consultancy service</h2>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6'>
                    <div className='bg-white rounded-md  shadow-md hover:shadow-lg overflow-hidden'>
                        <Image src={gallery1} alt='' className='w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  ' />
                        <div className='px-5 mb-6'>
                            <h3 className='my-3 text-[20px] font-medium '>Dubai Visit Visa</h3>
                            <Link href="/" className='mt-2 font-normall text-slate-800'>Starting From</Link>
                            <div className='flex justify-between py-3'>
                                <p className='text-[20px] font-bold text-green-500'>$ <span>190 <sup>*</sup></span></p>
                                <Link href="#" className='flex items-center gap-2 mb-4'>
                                    <p>View Details </p>
                                    <FaArrowRight />
                                </Link>
                            </div>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-star text-blue-500"><IoStarHalf /></i>
                                <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                                <i class="fas fa-star text-green-400"><IoStarHalf /></i>
                            </div>
                            {/* <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div> */}
                        </div>
                    </div>
                    {/* <div className='bg-white duration-500 md:p-4 p-2 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all  flex-shrink-0 w-full '

                    >
                        <Image src={gallery1} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal font-Helvetica uppercase py-3'>canada</h3>
                        <Link href="/" className='text-[#2379BD] font-Helvetica underline md:text-base text-sm'>vist visa</Link>
                    </div> */}
                    {/* <div className='bg-white duration-500 md:p-4 p-2 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all  flex-shrink-0 w-full '
                 
                    >
                        <Image src={visa} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal font-Helvetica uppercase py-3'>usa</h3>
                        <Link href="/" className='text-[#2379BD] font-Helvetica underline md:text-base text-sm'>vist visa</Link>
                    </div> */}
                    <div className='bg-white rounded-md  shadow-md hover:shadow-lg overflow-hidden'>
                        <Image src={visa} alt='' className='w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  ' />
                        <div className='px-5 mb-6'>
                            <h3 className='my-3 text-[20px] font-medium '>Usa Visit Visa</h3>
                            <h6 className='mt-2'>Starting From</h6>
                            <div className='flex justify-between py-3'>
                                <p className='text-[20px] font-bold text-green-500'>$ <span>270 <sup>*</sup></span></p>
                                <Link href="#" className='flex items-center gap-2 mb-4'>
                                    <p>View Details </p>
                                    <FaArrowRight />
                                </Link>
                            </div>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-star text-blue-500"><IoStarHalf /></i>
                                <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                                <i class="fas fa-star text-green-400"><IoStarHalf /></i>
                            </div>
                            {/* <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div> */}
                        </div>
                    </div>
                    {/* <div className='bg-white duration-500 md:p-4 p-2 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all  flex-shrink-0 w-full '

                    >

                        <Image src={visa1} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal font-Helvetica uppercase py-3'>uk</h3>
                        <Link href="/" className='text-[#2379BD] underline font-Helvetica md:text-base text-sm'>vist visa</Link>
                    </div> */}
                    <div className='bg-white rounded-md  shadow-md hover:shadow-lg overflow-hidden'>
                        <Image src={visa1} alt='' className='w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  ' />
                        <div className='px-5 mb-6'>
                            <h3 className='my-3 text-[20px] font-medium '>Uk Visit Visa</h3>
                            <h6 className='mt-2'>Starting From</h6>
                            <div className='flex justify-between py-3'>
                                <p className='text-[20px] font-bold text-green-500'>$ <span>190 <sup>*</sup></span></p>
                                <Link href="#" className='flex items-center gap-2 mb-4'>
                                    <p>View Details </p>
                                    <FaArrowRight />
                                </Link>
                            </div>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-star text-blue-500"><IoStarHalf /></i>
                                <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                                <i class="fas fa-star text-green-400"><IoStarHalf /></i>
                            </div>
                            {/* <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div> */}
                        </div>
                    </div>
                    <div className='bg-white rounded-md  shadow-md hover:shadow-lg overflow-hidden'>
                        <Image src={singa} alt='' className='w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  ' />
                        <div className='px-5 mb-6'>
                            <h3 className='my-3 text-[20px] font-medium '>Singapore Visit Visa</h3>
                            <h6 className='mt-2'>Starting From</h6>
                            <div className='flex justify-between py-3'>
                                <p className='text-[20px] font-bold text-green-500'>$ <span>390 <sup>*</sup></span></p>
                                <Link href="#" className='flex items-center gap-2 mb-4'>
                                    <p>View Details </p>
                                    <FaArrowRight />
                                </Link>
                            </div>
                            <div class="flex items-center space-x-4">
                                <i class="fas fa-star text-blue-500"><IoStarHalf /></i>
                                <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                                <i class="fas fa-star text-green-400"><IoStarHalf /></i>
                            </div>
                            {/* <div class="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div> */}
                        </div>
                    </div>
                    {/* <div className='bg-white duration-500 md:p-4 p-2 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all  flex-shrink-0 w-full'

                    >
                        <Image src={visa} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal font-Helvetica uppercase py-3'>dubai</h3>
                        <Link href="/" className='text-[#2379BD] font-Helvetica underline md:text-base text-sm'>vist visa</Link>
                    </div> */}

                    {/* <div className='bg-white p-4 duration-500 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <Image src={visa} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>vsa</h3>
                        <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                    </div> */}
                    {/* <div className='bg-white p-4 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all duration-500  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <Image src={visa1} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>uk</h3>
                        <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                    </div> */}
                    {/* <div className='bg-white p-4 shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all duration-500  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                        <Image src={gallery1} alt='' className='w-full object-cover ' />
                        <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>dubai</h3>
                        <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default VisaConsultance
