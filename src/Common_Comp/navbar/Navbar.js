
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu';
import logo from "../../../public/images/logo.png"
import Image from 'next/image';
import TopBar from './TopBar';
import DropdownMenus from './DropDowns';


const Navbar = () => {
    return (
        <>
            <TopBar />
            <nav className=' bg-blue-400 top-0 left-0 w-full sticky z-20 lg:py-5 py-3 '>
                <div className='px-40  text-white'>
                    <div className='flex justify-between items-center'>
                        <Link href="/" className='lg:hidden flex'>
                            <Image src={logo} alt="logo" width={160} height={60} className="filter-white-logo  md:w-[160px] md:h-[60px] h-[60px] w-[60px] object-contain" />
                        </Link>
                        <ul className='lg:flex gap-10 hidden items-center '>
                            <li className=''>
                                <Link href="/" className='relative group  text-[17px] opacity-50 font-medium  font-Helvetica pb-6 text-white hover:border-b-4  hover:border-white'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-in-out"
                                >Home
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>
                            <li>

                                <Link href="/" className='text-[17px] opacity-90 font-medium font-Helvetica  text-white hover:text-orange-500 duration-500 pb-6 hover:border-b-4  hover:border-white'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="400"
                                    data-aos-easing="ease-in-out"
                                >
                                    <DropdownMenus />
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-orange-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>
                            <li>
                                <Link href="/visa" className='text-white text-[17px] opacity-90 font-medium font-Helvetica group relative duration-500 pb-6 hover:border-b-4  hover:border-white'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="600"
                                    data-aos-easing="ease-in-out"
                                >Tours
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>
                            <li>
                                <Link href="/umrahpackage" className=' text-white text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6 text-white hover:border-b-4  hover:border-white duration-500'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >visa
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>
                            <li>
                                <Link href="/umrahpackage" className=' text-white text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6  hover:border-b-4  hover:border-white duration-500'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >Umrah Packages
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className='  text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6  hover:border-b-4  hover:border-white duration-500'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >Contact Us
                                    {/* <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div> */}
                                </Link>
                            </li>

                        </ul>
                        {/* <div className='lg:flex  hidden'>
                            <button className='bg-[#2379BD] py-[15px] px-[35px] rounded-[35px] text-white text-[17px] font-bold font-Helvetica hover:opacity-50 ease-in-out duration-500 hover:bg-blue-400'

                            >Get Started</button>
                        </div> */}

                        <MobileMenu />

                    </div>

                </div>
            </nav>
            {/* <nav className=' bg-blue-400 top-0 left-0 w-full sticky z-20 sm:py-3 py-0 '>
                <div className='lg:container mx-auto px-5 text-white'>
                    <div className='flex justify-between items-center'>
                        <Link href="/" className='lg:hidden flex'>
                            <Image src={logo} alt="logo" width={160} height={60} className="filter-white-logo  md:w-[160px] md:h-[60px] h-[60px] w-[60px] object-contain" />
                        </Link>
                        <ul className='lg:flex gap-8 hidden items-center '>
                            <li className=''>
                                <Link href="/" className='relative group  text-[17px] opacity-50 font-normal  font-Helvetica text-black hover:text-blue-500'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-in-out"
                                >Home
                                    <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                </Link>
                            </li>
                            <li>

                                <Link href="/tours" className='text-[17px] opacity-90 font-normal font-Helvetica relative group  text-black hover:text-blue-500 duration-500 '
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="400"
                                    data-aos-easing="ease-in-out"
                                >Tours
                                    <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/visa" className='text-black text-[17px] opacity-90 font-normal font-Helvetica group relative hover:text-blue-500 duration-500 '
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="600"
                                    data-aos-easing="ease-in-out"
                                >Visa
                                    <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                </Link>
                            </li>
                            <li>
                                <Link href="/umrahpackage" className=' text-black text-[17px] opacity-90 font-normal font-Helvetica relative group hover:text-blue-500 duration-500'
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >Umrah Packages
                                    <div className='absolute h-2 w-2 mt-1  rounded-full group-hover:bg-blue-500 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                </Link>
                            </li>

                        </ul>
                        {/* <div className='lg:flex  hidden'>
                            <button className='bg-[#2379BD] py-[15px] px-[35px] rounded-[35px] text-white text-[17px] font-bold font-Helvetica hover:opacity-50 ease-in-out duration-500 hover:bg-blue-400'

                            >Get Started</button>
                        </div> */}

            {/* <MobileMenu />

                    </div>

                </div>
            </nav>  */}
        </>




    )
}

export default Navbar







