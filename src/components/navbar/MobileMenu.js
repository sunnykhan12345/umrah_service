'use client'
import React, { useState } from "react";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="lg:hidden flex items-center relative z-10">
                <button
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue"
                    onClick={() => setOpen(!open)}
                >
                    <RiMenuLine className="w-5 h-5 " />
                </button>

                <div
                    className={`fixed top-0 right-0 bg-white rounded-md h-full w-[300px] flex flex-col justify-center items-center gap-5 transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div
                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-greenishblue absolute top-4 right-4"
                        onClick={() => setOpen(!open)}
                    >
                        <IoMdClose className="w-4 h-4 text-black" />
                    </div>
                    <ul className='flex flex-col gap-6'>
                        <li>
                            <Link href="/" className='text-sm font-medium text-black border-b pb-1.5'>Home</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-sm font-medium text-black '>Tours</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-sm font-medium text-black '>Visa</Link>
                        </li>
                        <li>
                            <Link href="/" className='text-sm font-medium  text-black'>Umrah Packages</Link>
                        </li>
                        <div className=''>
                            <button className='bg-blue-400 py-2 px-5 text-sm rounded-full text-white'>Get Started</button>
                        </div>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default MobileMenu;
