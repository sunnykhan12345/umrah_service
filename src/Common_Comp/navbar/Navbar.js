
import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu';
import logo from "../../../public/images/logo.png"
import Image from 'next/image';
const Navbar = () => {
    return (
        <nav className='lg:py-5 py-3 absolute w-full z-10 '>
            <div className='lg:container mx-auto px-5 text-white'>
                <div className='flex justify-between items-center'>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={160} height={72} className="w-[160px] h-[72px] object-contain" />
                    </Link>
                    <ul className='lg:flex hidden items-center gap-6'>
                        <li>
                            <Link href="/" className='text-[17px] opacity-90 font-normal border-b pb-1.5 border-white font-
Helvetica'>Home</Link>
                        </li>
                        <li>
                            <Link href="/tours" className='text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white font-
Helvetica'>Tours</Link>
                        </li>
                        <li>
                            <Link href="/visa" className='text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white'>Visa</Link>
                        </li>
                        <li>
                            <Link href="/umrahpackage" className='text-[17px] opacity-90 font-normal hover:border-b pb-1.5 hover:border-white'>Umrah Packages</Link>
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
