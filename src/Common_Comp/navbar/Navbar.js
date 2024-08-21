
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu';
import logo from "../../../public/images/logo.png"
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className=' bg-gray-100 top-0 left-0 w-full sticky z-20 sm:py-3 py-0'>
            <div className='lg:container mx-auto px-5 text-white'>
                <div className='flex justify-between items-center'>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={160} height={60} className="md:w-[160px] md:h-[60px] h-14 w-14 object-contain" />
                    </Link>
                    <ul className='lg:flex hidden items-center gap-6'>
                        <li>
                            <Link href="/" className='text-[17px] opacity-90 font-normal border-b pb-1.5 border-black font-Helvetica text-black'
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-back"
                            >Home</Link>
                        </li>
                        <li>
                            <Link href="/tours" className='text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white font-Helvetica text-black'
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                data-aos-easing="ease-in-back"
                            >Tours</Link>
                        </li>
                        <li>
                            <Link href="/visa" className='text-black text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white'
                                data-aos="fade-left"
                                data-aos-duration="1400"
                                data-aos-easing="ease-in-back"
                            >Visa</Link>
                        </li>
                        <li>
                            <Link href="/umrahpackage" className=' text-black text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white'
                                data-aos="fade-left"
                                data-aos-duration="1600"
                                data-aos-easing="ease-in-back"
                            >Umrah Packages</Link>
                        </li>
                        <div>
                            <button className='bg-[#2379BD] py-[15px] px-[35px] rounded-[35px] text-white text-[17px] font-bold hover:opacity-50 ease-in-out duration-500'>Get Started</button>
                        </div>
                    </ul>

                    <MobileMenu />

                </div>

            </div>
        </nav>
    )
}

export default Navbar
