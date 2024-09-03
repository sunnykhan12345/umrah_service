// 'use client'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import { MdOutlineFlight } from "react-icons/md";
// import umrah from "../../../public/images/umrah.png"
// import visa from "../../../public/images/visa.png"
// import Image from 'next/image';
// import { MdFlightTakeoff } from "react-icons/md";
// import { MdOutlineFlightLand } from "react-icons/md";


// const page = () => {
//     const [inputType, setInputType] = useState('text');

//     return (
//         <>
//             <div className='bg-flight bg-no-repeat bg-cover bg-center pb-3'>
//                 <div className='lg:container mx-auto px-5'>
//                     <div className='flex items-center flex-col gap-2 pt-2'>
//                         <div className=''>
//                             <div className='flex items-center gap-1 lg:flex'>
//                                 <Link href="#" className='gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tl-xl hover:opacity-70 duration-700'>
//                                     <MdOutlineFlight className='lg:w-7 w-5 lg:h-7 h-5' />
//                                     <h6 className='lg:text-[22px] text-sm font-medium'>Flights</h6>
//                                 </Link>
//                                 <Link href="#" className='gap-1 flex items-center bg-[#B31312] text-white lg:px-7 px-4 lg:py-2 py-1 hover:opacity-70 duration-700'>
//                                     {/* <MdOutlineFlight className='w-7 h-7' /> */}
//                                     <Image src={umrah} alt='' className='lg:w-7 w-5 lg:h-7 h-5 object-cover' />
//                                     <h6 className='lg:text-[22px] text-sm font-medium'>Umrah</h6>
//                                 </Link>
//                                 <Link href="#" className='gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tr-xl hover:opacity-70 duration-700'>
//                                     {/* <MdOutlineFlight className='w-7 h-7' /> */}
//                                     <Image src={visa} alt='' className='lg:w-7 w-5 lg:h-7 h-5 object-cover' />
//                                     <h6 className='lg:text-[22px] text-sm font-medium'>Visa</h6>
//                                 </Link>
//                             </div>
//                             <div className="bg-white p-3 pb-3 rounded-bl-lg rounded-tr-lg rounded-br-lg">
//                                 <div className="flex flex-wrap items-center gap-2 pb-3">
//                                     {/* First Input */}
//                                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
//                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
//                                         <input
//                                             type="text"
//                                             placeholder="From Where"
//                                             className="focus:outline-none focus:border-blue-500 flex-1"
//                                         />
//                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
//                                     </div>

//                                     {/* Second Input */}
//                                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg py-1 px-2 mt-3 w-full sm:w-auto">
//                                         <MdFlightTakeoff className="text-blue-600 w-7 h-8" />
//                                         <input
//                                             type="text"
//                                             placeholder="To Where"
//                                             className="focus:outline-none focus:border-blue-500 flex-1"
//                                         />
//                                         <MdFlightTakeoff className="text-gray-600 w-6 h-6" />
//                                     </div>

//                                     {/* Departure Date */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type={inputType}
//                                             placeholder="Departure"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                             onFocus={() => setInputType('date')}
//                                             onBlur={() => setInputType('text')}
//                                             id="departure"
//                                         />
//                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="2"
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                                 />
//                                             </svg>
//                                         </span>
//                                     </div>

//                                     {/* Return Date */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type={inputType}
//                                             placeholder="Return"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                             onFocus={() => setInputType('date')}
//                                             onBlur={() => setInputType('text')}
//                                             id="return"
//                                         />
//                                         <span className="absolute right-3 top-2.5 text-gray-500 pointer-events-none">
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="2"
//                                                 stroke="currentColor"
//                                                 className="w-5 h-5"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M8 7V3m8 4V3m-6 8h6m-6 4h6M5 7h14M5 21h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                                                 />
//                                             </svg>
//                                         </span>
//                                     </div>

//                                     {/* Phone Number */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <input
//                                             type="text"
//                                             placeholder="Phone No"
//                                             className="border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:border-blue-500 w-full sm:w-40"
//                                         />
//                                     </div>

//                                     {/* Search Button */}
//                                     <div className="relative mt-3 w-full sm:w-auto">
//                                         <button className="px-3 py-2 text-white bg-blue-500 rounded-lg w-full sm:w-auto">
//                                             Search
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>



//                     </div>
//                 </div>
//             </div>

//             <div className='bg-slate-200'>
//                 <div className='lg:container mx-auto px-5'>
//                     <div className='bg-white rounded-lg lg:p-7 p-3 '>
//                         <Link href="/" className='capitalize border border-dashed border-blue-400 bg-slate-100 py-3 px-2 rounded-md text-black lg:text-2xl font-bold'>
//                             welcome to binham travels
//                         </Link>
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'>
//                             Binham has emerged as a leading travel agency, known for its exceptional service quality and client-focused approach. Leveraging a strong network of global partners and a team of seasoned travel experts, Binham is dedicated to making every travel experience smooth, enjoyable, and unforgettable. Whether you're organizing a corporate trip, a family holiday, or a solo expedition, Binham is your reliable travel partner, providing a comprehensive range of services to meet all your travel needs.
//                         </p>
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'>
//                             <strong>1. Flight Booking:</strong> Binham Travels provides hassle-free flight booking services, offering competitive rates on domestic and international flights. With a user-friendly online booking system and a dedicated team of travel experts, we ensure the flight booking process is smooth and straightforward. Using advanced technology and partnerships with major airlines, Binham Travels ensures that customers get the best deals and the most convenient flight schedules. Our sophisticated booking platform integrates real-time data and advanced algorithms to find and present the most affordable fares and optimal routes. Whether you're flying to a nearby city or an international destination, our extensive network of airline partners enables access to a wide range of flights, from budget-friendly options to premium experiences. Moreover, Binham Travels offers exclusive deals and promotions, providing added value to customers. Our special offers are regularly updated, allowing travelers to take advantage of discounted rates and promotional packages. The company's strong relationships with airlines also mean that customers can benefit from additional perks such as extra baggage allowance, seat upgrades, and priority boarding. By choosing Binham Travels for your flight booking needs, you can enjoy a seamless and stress-free experience, from the moment you start planning your trip until you arrive at your destination. With our dedication to quality service and customer satisfaction, Binham Travels is your trusted partner for all your air travel requirements.
//                         </p >
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'><strong>2. Visa Assistance: </strong>Navigating the complexities of visa applications can be daunting, often involving a myriad of forms, requirements, and procedures that vary from one country to another. This can be particularly challenging for travelers who are unfamiliar with the specific regulations or who have tight timelines. Binham Travels simplifies this process by offering professional visa assistance services, ensuring that every step of the application is handled with precision and expertise. From the outset, we provide accurate and up-to-date information on visa requirements for a wide range of destinations. This includes detailed guidance on the types of visas available, eligibility criteria, necessary documentation, and application timelines. Whether you are applying for a tourist visa, business visa, student visa, or any other type, Binham Travels ensures that you have all the information you need to proceed confidently. Furthermore, we understand that visa application issues can be stressful and time-sensitive. Our dedicated customer support team is available to address any concerns or questions you may have throughout the process. Whether you need clarification on specific requirements or assistance with urgent travel plans, we provide prompt and professional support.</p>
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'><strong>3. Hotel Reservations:</strong> Finding the right accommodation is crucial for a comfortable and enjoyable travel experience. we understand this necessity and offer extensive hotel reservation services designed to meet the diverse needs and preferences of our clients. With a focus on securing the best rates and prime locations, Binham Travels ensures that every traveler can find a suitable place to stay, regardless of their budget or destination. Binham Travels' hotel reservation services are comprehensive and user-friendly, providing customers with a seamless booking experience. With a global network of hotel partners, we offer an impressive array of accommodation options. Whether you are seeking the opulence of a luxury resort, the comfort of a mid-range hotel, or the affordability of budget-friendly lodgings, we have something for everyone. Our partnerships with renowned hotel chains and independent establishments worldwide ensure that customers have access to the best properties in prime locations.</p>
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'><strong>4. Umrah and Hajj Packages:</strong> For those undertaking the sacred journeys of Umrah and Hajj, Binham Travels offers specialized packages that are meticulously designed to ensure a smooth and enriching pilgrimage experience. Understanding the profound spiritual significance and the logistical complexities of these journeys, we provide comprehensive packages that include flights, accommodations, guided tours, and a host of additional services. Our packages are crafted to allow pilgrims to concentrate fully on their spiritual practices and obligations, free from the worries of travel arrangements.</p>
//                         <p className='lg:mt-10 mt-5 text-justify pb-3 lg:text-base text-sm'><strong>5. Customized Tour Packages:</strong> Binham Travels excels in creating customized tour packages tailored to individual preferences and interests, ensuring that every traveler enjoys a unique and memorable experience. Our expertise in personalized travel planning allows us to cater to a wide array of interests and requirements, making sure that each journey is as distinctive and enjoyable as the traveler envisions. Whether you are looking for an adventurous trek, a relaxing beach holiday, or a cultural exploration, Binham Travels crafts personalized itineraries that go beyond the ordinary.</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default page


import React from 'react'
import Acc from '../tours/Acc'
import Flight_Category from './components/Flight_Category'

const page = () => {
    return (
        <div>
            <Acc />
            <Flight_Category />
        </div>
    )
}

export default page