import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import gallery1 from "../../public/images/gallery1.png";
import visa from "../../public/images/visa.jpg";
import visa1 from "../../public/images/visa1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

const combose = [
    {
        title: "My First Combose",
        desc: "Typically used for displaying a combination of an image, title, description, and action button, combo cards are ideal for highlighting promotional offers, product details, or service packages.",
        img: gallery1,
        price: 296,
    },
    {
        title: "My Second Combose",
        desc: "Combo cards often feature a responsive design to adapt to various screen sizes, ensuring a consistent user experience across all devices.",
        img: visa,
        price: 596,
    },
    {
        title: "My Third Combose",
        desc: "Styled with shadows, rounded corners, and hover effects, combo cards enhance engagement and interactivity, capturing attention and driving user actions.",
        img: visa1,
        price: 256,
    }
];

const Combos = () => {
    return (
        <div className='mt-20'>
            <div className="lg:container mx-auto px-5">
                <h2 className='lg:text-[35px] text-2xl font-bold text-black capitalize lg:mb-10 mb-6  border-l-8 border-blue-300 pl-4'>
                    Combos
                </h2>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {combose.map((card, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
                            <Image src={card.img} alt={card.title} className='w-full  object-cover transition-transform duration-500 hover:scale-105' />
                            <div className='p-5'>
                                <h3 className='text-xl font-semibold mb-2 capitalize'>{card.title}</h3>
                                <p className='text-gray-600 mb-4'>{card.desc}</p>
                                <div className='flex justify-between items-center mb-4'>
                                    <p className='text-lg font-bold text-green-600'>$<span>{card.price}</span><sup>*</sup></p>
                                    <Link href="#" className='text-blue-500 flex items-center hover:underline'>
                                        View Details <FaArrowRight className='ml-2' />
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <IoStarHalf className="text-blue-500" />
                                    <div className="h-1 w-full max-w-md bg-gradient-to-r from-blue-500 via-blue-400 to-green-400"></div>
                                    <IoStarHalf className="text-green-400" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Combos;
