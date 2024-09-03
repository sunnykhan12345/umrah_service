
"use client";

import Image from "next/image";
import dubai from "../../../../public/images/dubai.jpg";
import singapore from "../../../../public/images/singapore.jpg";
import thailand from "../../../../public/images/thailand.jpg";
import malysia from "../../../../public/images/malysia.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
import like from "../../../../public/images/like.png"
import { FaPhoneAlt } from "react-icons/fa";
const popularcard = [
    {
        id: 1,
        img: dubai,
        title: "Dubai",
        day: "30 days",
        name: "UAE Tourist Visa",
        lis: "UAE Immigration Fees",
        lis2: "Visa Service Charges",
        list3: "All Taxes",
        list4: "Tourist Visa",
        list5: "30 Days Duration of stay in UAE",
        list6: "60 Days Validity (Travel Time )",
        price: "USD 160",
        like: like,
        subCards: [
            {
                id: 101,
                img: dubai,
                title: "Dubai",
                day: "60 days",
                name: "UAE Tourist Visa",
                lis: "UAE Immigration Fees",
                lis2: "Visa Service Charges",
                lis3: "All Taxes",
                lis4: "Extended Tourist Visa",
                lis5: "60 Days Duration of stay in UAE",
                lis6: "90 Days Validity (Travel Time)",
                price: "USD 250",
                like: like,
            },
            {
                id: 102,
                img: dubai,
                title: "Dubai - Business Visa",
                day: "30 days",
                name: "UAE Business Visa",
                lis: "UAE Immigration Fees",
                lis2: "Visa Service Charges",
                lis3: "All Taxes",
                lis4: "Business Visa",
                lis5: "30 Days Duration of stay in UAE",
                lis6: "60 Days Validity (Travel Time)",
                price: "USD 200",
                like: like,
            },
            {
                id: 103,
                img: dubai,
                title: "Dubai - Tourist Package",
                day: "7 days",
                name: "UAE Tourist Package",
                lis: "Flight Included",
                lis2: "Hotel Stay",
                lis3: "City Tour",
                lis4: "Desert Safari",
                lis5: "7 Days Duration of stay in UAE",
                lis6: "10 Days Validity (Travel Time)",
                price: "USD 500",
                like: like,
            }
        ]


    },
    {
        id: 2,
        img: singapore,
        day: "30 days",
        title: "singapore",
        name: "UAE Tourist Visa",
        lis: "UAE Immigration Fees",
        lis2: "Visa Service Charges",
        list3: "All Taxes",
        list4: "Tourist Visa",
        list5: "30 Days Duration of stay in UAE",
        list6: "60 Days Validity (Travel Time )",
        price: "USD 160",
        like: like,
        subCards: [
            {
                id: 101,
                img: dubai,
                title: "Dubai",
                day: "60 days",
                name: "UAE Tourist Visa",
                lis: "UAE Immigration Fees",
                lis2: "Visa Service Charges",
                lis3: "All Taxes",
                lis4: "Extended Tourist Visa",
                lis5: "60 Days Duration of stay in UAE",
                lis6: "90 Days Validity (Travel Time)",
                price: "USD 250",
                like: like,
            },
            {
                id: 102,
                img: dubai,
                title: "Dubai - Business Visa",
                day: "30 days",
                name: "UAE Business Visa",
                lis: "UAE Immigration Fees",
                lis2: "Visa Service Charges",
                lis3: "All Taxes",
                lis4: "Business Visa",
                lis5: "30 Days Duration of stay in UAE",
                lis6: "60 Days Validity (Travel Time)",
                price: "USD 200",
                like: like,
            },
            {
                id: 103,
                img: dubai,
                title: "Dubai - Tourist Package",
                day: "7 days",
                name: "UAE Tourist Package",
                lis: "Flight Included",
                lis2: "Hotel Stay",
                lis3: "City Tour",
                lis4: "Desert Safari",
                lis5: "7 Days Duration of stay in UAE",
                lis6: "10 Days Validity (Travel Time)",
                price: "USD 500",
                like: like,
            }
        ]
    },
    {
        id: 3,
        img: thailand,
        title: "Thailand",
    },
    {
        id: 4,
        img: malysia,
        title: "malysia",
    },
    {
        id: 5,
        img: singapore,
        title: "Balu",
    },
    {
        id: 6,
        img: thailand,
        title: "Turkey",
    },
];

const Page = ({ params: { tour } }) => {
    console.log(tour)
    const tourData = popularcard.find((t) => t.title.toLowerCase() === tour);

    if (!tourData) {
        return <div>Tour not found.</div>;
    }

    return (
        <>
            <div className="relative">
                <Image
                    src={tourData.img}
                    alt=""
                    className="object-cover w-full h-[40vh]"
                />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-6xl text-3xl font-bold">
                    {tourData.title} visit visa
                </h2>
            </div>
            <div className="bg-customBackground py-10 ">
                <div className="lg:container mx-auto px-5">
                    <div className="">
                        <div className="flex items-start flex-wrap gap-5">
                            {/* First Card */}
                            <div className="w-full md:w-[100%] lg:w-[70%] bg-white lg:p-4 p-2 ">
                                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mx-auto">
                                    <div className="rounded-lg shadow-lg ">
                                        <h4 className="py-2 text-[20px] font-semibold bg-blue-500 text-white rounded-tl-md rounded-tr-md text-center">{tourData.day}</h4>
                                        <p className="text-center py-3 border-b text-lg font-bold">{tourData.name}</p>
                                        <ul className="lg:px-3 px-1 my-5 border-b pb-5">
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-center py-3 font-medium text-black">{tourData.lis}</li>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-center py-3 font-medium text-black">{tourData.lis2}</li>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-center py-3 font-medium text-black">{tourData.list3}</li>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-center py-3 font-medium text-black">{tourData.list4}</li>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-center py-3 font-medium text-black">{tourData.list4}</li>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                <li className="text-base text-start py-3 font-medium text-black">{tourData.list6}</li>
                                            </div>
                                        </ul>
                                        <div className="px-3 pb-3">
                                            <h6 className="text-2xl font-semibold text-center">{tourData.price} <sub className="text-base font-light text-gray-400">/ per person</sub></h6>
                                        </div>

                                    </div>
                                    {tourData.subCards && tourData.subCards.map((subCard) => (
                                        <div key={subCard.id} className="rounded-lg shadow-lg ">
                                            <h4 className="py-2 text-[20px] font-semibold bg-blue-500 text-white rounded-tl-md rounded-tr-md text-center">
                                                {subCard.day}
                                            </h4>
                                            <p className="text-center py-3 border-b text-lg font-bold">{subCard.name}</p>
                                            <ul className="lg:px-3 px-1 my-5 border-b pb-5">
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis}</li>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis2}</li>

                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis2}</li>

                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis2}</li>

                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis2}</li>

                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Image src={like} alt="" width={28} height={28} className="sm:w-7 sm:h-7 h-5 w-5 object-cover" />
                                                    <li className="text-base text-center py-3 font-medium text-black">{subCard.lis2}</li>

                                                </div>

                                            </ul>
                                            <div className="px-3 pb-3">
                                                <h6 className="text-2xl font-semibold text-center">{subCard.price} <sub className="text-base font-light text-gray-400">/ per person</sub></h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="py-8 font-light">Are you ready to experience the magic of Dubai? Plan your visit hassle-free with our Dubai Visit Visa services. From the iconic Burj Khalifa to the enchanting desert landscapes, Dubai has something for everyone. Whether you're a tourist, reuniting with family, or exploring business opportunities, your visa needs are covered.
                                    </p>
                                    <h2 className="text-blue-500 font-medium text-lg">Dubai Visit Visa Requirements</h2>
                                    <p className="font-light py-2">Look at the below table and understand the Dubai visa online requirements.</p>
                                    <p className="py-5 font-light"><span className="font-bold">Valid Passport:</span> Your passport should be valid for at least six months from the date of entry into Dubai.
                                    </p>
                                    <p className="py-5 font-light"><span className="font-bold">Visa Application Form:</span> Complete the Dubai visa application form accurately. This is often provided by the visa sponsor</p>
                                    <p className="py-5 font-light"><span className="font-bold">Passport-Sized Photos:</span>  Provide recent passport-sized photographs as per the specifications outlined by the authorities. Flight Reservation: Submit a copy of your round-trip flight reservation. This indicates your intention to leave Dubai after the visit.</p>
                                </div>
                            </div>

                            {/* Second Card */}
                            <div className="lg:flex flex-col  hidden w-full md:w-[48%] lg:w-[28%] ">
                                <button className="bg-blue-500 text-white py-3 mb-5 rounded-md w-full text-lg font-medium">Request a Callback</button>
                                <form className="flex flex-col gap-y-5">
                                    <input type="text" placeholder="Name *" className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none" />
                                    <input type="text" placeholder="Email *" className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none" />
                                    <input type="text" placeholder="Phone Number *" className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none" />
                                    <textarea placeholder="Type a Message..." className="px-2 py-3 rounded-md border-none focus:outline-none"></textarea>
                                    <button className="py-3 px-2 text-center text-lg font-medium bg-blue-100 border border-blue-200 text-black hover:opacity-50 duration-500 ease-in-out rounded-md ">Submit</button>

                                </form>
                                <div className="py-5 px-3 border-2 border-dashed mt-5 text-center">
                                    <button className="text-base  text-blue-500">For additional information, kindly get in</button>
                                    <p className="py-1 text-blue-500">touch via:</p>
                                    <Link href="" className="flex items-center gap-2 justify-center mt-2">
                                        <FaPhoneAlt className="text-blue-500" />
                                        <h6 className="text-blue-500">(+92 3085342445)</h6>
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </div >

        </>

    );
};

export default Page;


{/* <Link href="/">
<h6 className="mt-4 flex items-center text-blue-600 hover:text-blue-800">
    Go Back <FaArrowRight className="ml-2" />
</h6 >
</Link > */}




