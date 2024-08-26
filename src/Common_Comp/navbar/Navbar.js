import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import DropdownMenus from './DropDowns';


const Navbar = () => {
    return (
        <>
            <nav className="bg-blue-400 top-0 left-0 w-full sticky z-20 lg:py-5 py-1">
                <div className="px-5 lg:px-40 text-white">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
                        <Link href="/" className="lg:hidden flex filter-white-logo">
                            <Image
                                src={logo}
                                alt="logo"
                                width={160}
                                height={60}
                                className="md:w-[160px] md:h-[60px] h-[60px] w-[60px] object-contain"
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <ul className="lg:flex gap-10 hidden items-center">
                            <li>
                                <Link
                                    href="/"
                                    className="relative group text-[17px] opacity-50 font-medium font-Helvetica pb-6 text-white hover:border-b-4 hover:border-white"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-in-out"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/flights"
                                    className="relative group text-[17px] opacity-50 font-medium font-Helvetica pb-6 text-white hover:border-b-4 hover:border-white"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="200"
                                    data-aos-easing="ease-in-out"
                                >
                                    Flights
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-[17px] opacity-90 font-medium font-Helvetica text-white hover:text-orange-500 duration-500 pb-6 hover:border-b-4 hover:border-white"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="400"
                                    data-aos-easing="ease-in-out"
                                >
                                    <DropdownMenus />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/visa"
                                    className="text-white text-[17px] opacity-90 font-medium font-Helvetica group relative duration-500 pb-6 hover:border-b-4 hover:border-white"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="600"
                                    data-aos-easing="ease-in-out"
                                >
                                    Tours
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/visa"
                                    className="text-white text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6 hover:border-b-4 hover:border-white duration-500"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >
                                    Visa
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/umrahpackage"
                                    className="text-white text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6 hover:border-b-4 hover:border-white duration-500"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >
                                    Umrah Packages
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[17px] opacity-90 font-medium font-Helvetica relative group pb-6 hover:border-b-4 hover:border-white duration-500"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-delay="800"
                                    data-aos-easing="ease-in-out"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden flex">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
