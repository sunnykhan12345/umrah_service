
"use client";

import Image from "next/image";
import dubai from "../../../../public/images/dubai.jpg";
import singapore from "../../../../public/images/singapore.jpg";
import thailand from "../../../../public/images/thailand.jpg";
import malysia from "../../../../public/images/malysia.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";

const popularcard = [
    {
        id: 1,
        img: dubai,
        title: "Dubai vist visa",
    },
    {
        id: 2,
        img: singapore,
        title: "Singapore vist visa",
    },
    {
        id: 3,
        img: thailand,
        title: "Thailand vist visa",
    },
    {
        id: 4,
        img: malysia,
        title: "Malaysia vist visa",
    },
    {
        id: 5,
        img: singapore,
        title: "Bali vist visa",
    },
    {
        id: 6,
        img: thailand,
        title: "Turkey vist visa",
    },
];

const Page = ({ params: { tour } }) => {
    // Convert `tour` from a string to an integer and filter the data
    const tourData = popularcard.find((t) => t.id === parseInt(tour));

    if (!tourData) {
        return <div>Tour not found.</div>;
    }

    return (
        <>
            <div className="relative">
                <Image
                    src={tourData.img}
                    alt=""
                    className="object-cover w-full h-[50vh]"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl text-3xl font-bold">
                    {tourData.title}
                </h2>
            </div>
        </>

    );
};

export default Page;


{/* <Link href="/">
<h6 className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
    Go Back <FaArrowRight className="ml-2" />
</h6 >
</Link > */}




