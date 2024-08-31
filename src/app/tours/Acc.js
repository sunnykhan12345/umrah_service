"use client";
import { IoLocation } from "react-icons/io5";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Link from "next/link";
import { MdOutlineFlight, MdFlightTakeoff, MdOutlineFlightLand } from "react-icons/md";
import Image from "next/image";
import umrah from "../../../public/images/umrah.png";
import visa from "../../../public/images/visa.png";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { Dates } from "./Dates";
import { Arriyal } from "./Arriyal";
import { CiMap } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
export function Acc() {
    const [inputType, setInputType] = useState("text");

    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-3 pb-10 bg-home bg-center bg-cover">
            {/* Navigation Links */}
            <div className="flex gap-1">
                <Link
                    href="#"
                    className="gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tl-xl hover:opacity-70 duration-700"
                >
                    <MdOutlineFlight className="lg:w-7 w-5 lg:h-7 h-5" />
                    <h6 className="lg:text-[22px] text-sm font-medium">Flights</h6>
                </Link>
                <Link
                    href="#"
                    className="gap-1 flex items-center bg-[#B31312] text-white lg:px-7 px-4 lg:py-2 py-1 hover:opacity-70 duration-700"
                >
                    <Image src={umrah} alt="Umrah" className="lg:w-7 w-5 lg:h-7 h-5 object-cover" />
                    <h6 className="lg:text-[22px] text-sm font-medium">Umrah</h6>
                </Link>
                <Link
                    href="#"
                    className="gap-1 flex items-center bg-blue-500 text-white lg:px-7 px-4 lg:py-2 py-1 rounded-tr-xl hover:opacity-70 duration-700"
                >
                    <Image src={visa} alt="Visa" className="lg:w-7 w-5 lg:h-7 h-5 object-cover" />
                    <h6 className="lg:text-[22px] text-sm font-medium">Visa</h6>
                </Link>
            </div>
            {/* Tabs Section */}
            <Tabs defaultValue="account" className="w-full ">
                <TabsContent value="account">
                    <div className="bg-white rounded-lg p-8">
                        <TabsList className="flex lg:gap-3 gap-1 justify-start mb-4">
                            <TabsTrigger value="account" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>one way</TabsTrigger>
                            <TabsTrigger value="return" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>return</TabsTrigger>
                            <TabsTrigger value="multi" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>multy city</TabsTrigger>
                        </TabsList>
                        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[2rem] ">

                            {/* first search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdFlightTakeoff className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">departure city</p>
                                    <input className="outline-none border-none" type="text" placeholder="where are you going?" />
                                </div>
                            </div>
                            {/* second search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdOutlineFlightLand className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">arriyal city</p>
                                    <input className="outline-none border-none" type="text" placeholder="Where are you arriving?" />
                                </div>
                            </div>
                            {/* start date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">start date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>

                            {/* search */}
                            <Link href="/" className="text-center flex flex-col justify-center items-center rounded px-14 md:px-28 bg-red-500 text-white py-2.5 overflow-hidden group relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                                <span className="relative font-bold">search</span>
                            </Link>
                        </div>
                    </div>
                    {/* second button return */}
                </TabsContent>
                <TabsContent value="return">
                    <div className="bg-white rounded-lg p-8">
                        <TabsList className="flex lg:gap-3 gap-1 justify-start mb-4">
                            <TabsTrigger value="account" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>one way</TabsTrigger>
                            <TabsTrigger value="return" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>return</TabsTrigger>
                            <TabsTrigger value="two way" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>multy city</TabsTrigger>
                        </TabsList>
                        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[2rem] ">

                            {/* first search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdFlightTakeoff className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">departure city</p>
                                    <input className="outline-none border-none" type="text" placeholder="where are you going?" />
                                </div>
                            </div>
                            {/* second search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdOutlineFlightLand className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">arriyal city</p>
                                    <input className="outline-none border-none" type="text" placeholder="Where are you arriving?" />
                                </div>
                            </div>
                            {/* start date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">start date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>
                            {/* end date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">end date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>

                            {/* search */}

                        </div>

                    </div>
                    <Link href="/" className="flex justify-center w-fit flex-col rounded mx-auto px-14 md:px-28 mt-[-1rem] py-2.5 overflow-hidden group bg-red-500 relative text-white    hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-100 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-linear"></span>
                        <span className="relative font-bold">search</span>
                    </Link>
                    {/* second button return */}
                </TabsContent>
                {/* mukti city */}
                <TabsContent value="multi">
                    <div className="bg-white rounded-lg p-8">
                        <TabsList className="flex lg:gap-3 gap-1 justify-start mb-4">
                            <TabsTrigger value="account" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>one way</TabsTrigger>
                            <TabsTrigger value="return" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>return</TabsTrigger>
                            <TabsTrigger value="multi" className='border border-blue-200 text-xs capitalize rounded-full bg-blue-50'>multy city</TabsTrigger>
                        </TabsList>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-[2rem] ">

                            {/* first search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdFlightTakeoff className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">departure city</p>
                                    <input className="outline-none border-none capitalize" type="text" placeholder="flying from (city or airport)?" />
                                </div>
                            </div>
                            {/* second search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdOutlineFlightLand className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">arriyal city</p>
                                    <input className="outline-none border-none capitalize" type="text" placeholder="flying to (city or airport)?" />
                                </div>
                            </div>
                            {/* start date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">start date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>
                            {/* end date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">end date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>
                            {/* second row */}
                            {/* first search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdFlightTakeoff className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">departure city</p>
                                    <input className="outline-none border-none capitalize" type="text" placeholder="flying from (city or airport)?" />
                                </div>
                            </div>
                            {/* second search input  */}
                            <div className="flex items-center gap-x-6">
                                <MdOutlineFlightLand className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">arriyal city</p>
                                    <input className="outline-none border-none capitalize" type="text" placeholder="flying to (city or airport)?" />
                                </div>
                            </div>
                            {/* start date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">start date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>
                            {/* end date */}
                            <div className="flex items-center gap-x-6">
                                <SlCalender className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <div>
                                    <p className="text-lg font-semibold mb-[0.2rem] capitalize">end date</p>
                                    <input className="outline-none border-none" type="date" />
                                </div>
                            </div>

                            {/* search */}
                            {/* <Link href="/" className="rounded mx-auto px-14 md:px-28 mt-[-1rem] py-2.5 overflow-hidden group bg-red-500 relative text-white    hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-100 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-linear"></span>
                                <span className="relative font-bold">search</span>
                            </Link> */}
                        </div>

                    </div>
                    <Link href="/" className="flex justify-center w-fit flex-col rounded mx-auto px-14 md:px-28 mt-[-1rem] py-2.5 overflow-hidden group bg-red-500 relative text-white    hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-100 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease-linear"></span>
                        <span className="relative font-bold">search</span>
                    </Link>
                    {/* second button return */}
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default Acc;
