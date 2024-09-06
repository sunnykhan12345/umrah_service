'use client'
import Image from "next/image"
import img2 from "../../../../../public/images/k.jpg"
import img3 from "../../../../../public/images/k2.jpg"
import img4 from "../../../../../public/images/k3.jpg"
import img5 from "../../../../../public/images/k4.jpg"
import img6 from "../../../../../public/images/24.jpg"
import { CiLocationOn } from "react-icons/ci";
// import img2 from "../../../../../public/images/home.png"
import { IoSettingsOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { TablePackage } from "./TablePackage"


const packCard = [
    {
        id: 1,
        img: img2,
        title: "Executive Umrah Package for 08 Nights",
        para: "This is the perfect Umrah package offer&apos;s for pilgrims seeking a carefree, luxurious journey to Makkah...",
        price: 500,
        day: 8,

    },
    {
        id: 2,
        img: img3,
        title: "Executive Umrah Package for 08 Nights",
        para: "This is the perfect Umrah package offer&apos;s for pilgrims seeking a carefree, luxurious journey to Makkah...",
        price: 600,
        day: 10,

    },
    {
        id: 3,
        img: img5,
        title: "Executive Umrah Package for 08 Nights",
        para: "This is the perfect Umrah package offer&apos;s for pilgrims seeking a carefree, luxurious journey to Makkah...",
        price: 600,
        day: 6

    },
]
const Packages = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.phone) {
            setMessage("All fields are required");
            return;
        }

        // If validation passes
        setMessage("Form is filled successfully");
    };

    return (
        <div className="bg-customBackground lg:py-20 py-10">
            <div className="lg:container px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        packCard.map((card) => (
                            <div className="bg-white rounded-md shadow-md relative hover:shadow-lg ">
                                <Image src={card.img} alt className="object-cover w-full rounded-sm " />
                                <div className="flex items-center gap-3 bg-black opacity-50 px-8 rounded-md text-white absolute -mt-14 left-20">
                                    <IoSettingsOutline className="w-5 h-5" />
                                    <div className="flex flex-col my-0">
                                        <h5 className="text-lg font-bold">{card.day}</h5>
                                        <p>Days</p>
                                    </div>
                                </div>
                                <div className="flex items-center top-5 gap-3  px-8 rounded-md text-white absolute right-0">
                                    <CiLocationOn className="w-6 h-6 text-white cursor-pointer" />
                                    <IoTimeOutline className="w-6 h-6 text-white cursor-pointer" />
                                    <CgCalendarDates className="w-6 h-6 text-white cursor-pointer" />

                                </div>
                                <div className="lg:px-10 px-3 flex flex-col gap-y-3 mt-3">
                                    <h2 className="lg:my-2  lg:text-[22px] text-lg font-bold text-blue-400 hover:text-blue-600 cursor-pointer ">{card.title}</h2>
                                    <div className="flex gap-1 items-center">
                                        <CiStar className="cursor-pointer" /> <CiStar className="cursor-pointer" /> <CiStar className="cursor-pointer" /> <CiStar className="cursor-pointer" /> <CiStar className="cursor-pointer" />
                                    </div>
                                    <p className="text-gray-600 font-medium lg:text-base text-sm">{card.para}</p>
                                    <div className="flex justify-between items-center pb-3">
                                        <h5 className=" lg:text-lg text-base font-medium text-blue-400">  ${card.price}</h5>
                                        <button className="bg-blue-400 capitalize font-medium text-white lg:py-3 py-2 lg:px-5 px-4 rounded-2xl hover:opacity-70 duration-300 ease-in-out">view more</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <div className="flex lg:flex-nowrap flex-wrap gap-5">
                    <div className="lg:w-8/12 w-full lg:pt-20 pt-10">
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            {/* <h2 className="text-2xl text-blue-600 font-semibold pb-10">package 1</h2> */}
                            <li className="py-2 font-bold text-center my-5">Makkah Dar Al Tauhid Intercontinental BB </li>

                            <TablePackage />
                        </div>
                    </div>
                    {/* second */}
                    <div className="lg:w-1/3 w-full lg:py-20 py-10">
                        <div className="bg-white p-5 shadow-lg rounded-lg h-full">
                            {/* form */}
                            <form onSubmit={handleSubmit} className="">
                                <div className="flex flex-col gap-y-7">
                                    <input
                                        type="text"
                                        name="name"
                                        className="bg-slate-50 w-full border-2 border-dashed py-3 px-2 focus:outline-none"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        className="bg-slate-50 w-full border-2 border-dashed py-3 px-2 focus:outline-none"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        className="bg-slate-50 w-full border-2 border-dashed py-3 px-2 focus:outline-none"
                                        placeholder="Enter Your Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="submit"
                                        className="mx-auto bg-slate-50 cursor-pointer hover:bg-red-500 duration-500 ease-in-out text-lg font-medium hover:text-white border-2 border-dashed py-3 px-8 w-fit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {/* form exit */}

                            {/* Display message */}
                            {message && <div className="mt-4 text-center text-lg text-red-500">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Packages
