import Image from "next/image"
import dubai from "../../public/images/dubai.jpg"
import singapore from "../../public/images/singapore.jpg"
import thailand from "../../public/images/thailand.jpg"
import malysia from "../../public/images/malysia.jpg"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
const PopularToures = () => {

    return (
        <div className='lg:-mt-[150px] md:-mt-[103px]  2xl:mt-0 from-blue-200 to-white'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold font-Helvetica  md:text-white text-black  relative capitalize pb-8 sm:text-start  text-center'

                >other popular tours</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"
                >
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={dubai} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">dubai</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    {/* <div className='bg-white rounded-md z-20  shadow-md hover:shadow-lg overflow-hidden'>
                        <Image src={dubai} alt='' className='w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-105  ' />
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
                    {/* </div>
                    </div>  */}
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={singapore} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out font-Helvetica">Singapore</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>

                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={thailand} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">thailand</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={malysia} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">malaysia</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PopularToures