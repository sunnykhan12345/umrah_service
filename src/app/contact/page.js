// 'use client'
// import Image from "next/image";
// import { FaPhone } from "react-icons/fa6";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaMapLocationDot } from "react-icons/fa6";
// import img from "../../../public/images/contact.jpg";
// import cat from "../../../public/images/catton.webp";
// import { useForm } from "react-hook-form";

// const Page = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data) => {
//         console.log(data)
//     }
//     return (
//         <div className="bg-gray-100 rounded-lg shadow-lg">
//             {/* Container for Image and Heading */}
//             <div className="relative flex justify-center items-center">
//                 {/* Background Image */}
//                 <Image
//                     src={img}
//                     alt="Contact Background"
//                     className="w-full object-cover max-h-[400px] bg-center"
//                 />
//                 {/* Heading Text Over Image */}
//                 <h2 className="absolute text-center lg:text-[70px] text-4xl font-bold mx-auto text-black">
//                     Contact Us
//                 </h2>
//             </div>

//             {/* Main Content Container */}
//             <div className="lg:container mx-auto px-5 -mt-10 relative">
//                 <div className="flex flex-col lg:flex-row gap-10 bg-white shadow-lg rounded-lg p-5">
//                     {/* Contact Information Section */}
//                     <div className="w-full flex flex-col lg:py-10 py-5 lg:pl-20">
//                         <h1 className="text-black lg:text-[60px] leading-tight font-extrabold">
//                             Let's talk about Everything!
//                         </h1>
//                         <div className="flex flex-col gap-5 mt-5">
//                             <p className="text-black text-lg font-medium">Send us an Email instead.</p>
//                             <h6 className="flex items-center gap-3"><FaPhone /> +923085342445</h6>
//                             <h6 className="flex items-center gap-3"><MdOutlineEmail className="w-5 h-5" /> sunnykhan@gmail.com</h6>
//                             <h6 className="flex items-center gap-3"><FaMapLocationDot className="w-10 h-10" /> Binham Travels Office No 34, Second Floor, Office Tower Gulberg Green Luxus Mall, Islamabad, Pakistan</h6>
//                             <Image src={cat} alt="Cat" className="w-full object-cover bg-center rounded-lg shadow-sm mt-5" />
//                         </div>
//                     </div>

//                     {/* Form Section */}
//                     <div className="w-full lg:py-10 py-5 px-4">
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="flex flex-col max-w-[500px] lg:mb-6 mb-3">
//                                 <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
//                                     Full Name
//                                 </label>
//                                 <input
//                                     {...register("fullname")}
//                                     type="text"
//                                     placeholder="Please enter your full name"
//                                     className="capitalize px-3 lg:py-3 py-2 border border-gray-400 rounded-md"
//                                 />

//                             </div>

//                             <div className="flex flex-col max-w-[500px] mb-6">
//                                 <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
//                                     Email
//                                 </label>
//                                 <input
//                                     {...register("email")}
//                                     type="email"
//                                     placeholder="Please enter your email"
//                                     className="capitalize px-3 lg:py-3 py-2 border border-gray-400 rounded-md"
//                                 />
//                             </div>

//                             <div className="flex flex-col max-w-[500px] mb-6">
//                                 <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
//                                     Phone
//                                 </label>
//                                 <input
//                                     {...register("phone")}
//                                     type="tel"
//                                     placeholder="Please enter your phone number"
//                                     className="capitalize px-3 lg:py-3 py-2 border border-gray-400 rounded-md"
//                                 />
//                             </div>

//                             <div className="flex flex-col max-w-[500px] mb-10">
//                                 <label className="block text-gray-700 text-base font-bold mb-2 capitalize">
//                                     Message
//                                 </label>
//                                 <textarea
//                                     {...register("message")}
//                                     className="border border-gray-400 px-3 py-3 rounded-md"
//                                     placeholder="Enter Your Query"
//                                 ></textarea>
//                             </div>
//                             <div className="flex flex-col max-w-[500px] mt-6">
//                                 <button className="uppercase bg-blue-600 text-white rounded-lg lg:py-3 py-2 font-medium hover:bg-blue-800 duration-700 transition-all">send message</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Page;

import React from 'react'

const page = () => {
    return (
        <div>
            hello
        </div>
    )
}

export default page
