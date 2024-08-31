import Link from 'next/link';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {
    return (
        <Link
            href="https://wa.me/0308534244"
            target="_blank"
            className="flex justify-center items-center ring-1 ring-white bg-green-500 h-12 w-12 text-black rounded-full fixed z-10 md:right-7 right-3 bottom-16 cursor-pointer transform transition-all duration-300 hover:ring-4 hover:ring-green-600 hover:scale-110"
        >
            <FaWhatsapp className="text-white w-8 h-8" />
        </Link>

    )
}

export default Whatsapp