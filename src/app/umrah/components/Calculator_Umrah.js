"use client";
import React, { useState } from "react";
import { CiCalculator1 } from "react-icons/ci";
import { RoomSelector } from "./RoomSelector";
import TourForm from "@/Common_Comp/TourForm";
import Form from "./Form";
const Calculator_Umrah = () => {
  const [selectedRoom, setSelectedRoom] = useState("0 rooms");
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  const options = [
    { value: "0 rooms", label: "0 rooms" },
    { value: "1 room", label: "1 room" },
    { value: "2 rooms", label: "2 rooms" },
  ];

  // Function to handle room selection
  const handleSelectRoom = (label) => {
    setSelectedRoom(label);
    setShowDropdown(false); // Close the dropdown after selection
  };

  return (
    <div className="py-20">
      <h1 className="text-white capitalize text-center text-xl md:text-3xl font-medium pb-4 drop-shadow-[0.125rem_0.125rem_0.125rem_gray]">
        book your umrah packages
      </h1>
      <form className="relative grid grid-cols-12 bg-white rounded-md border border-dashed sm:py-6 pb-2 border-[#05153f]">
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-12 gap-2 mx-4 pb-6">
            <div className="col-span-12 hidden md:block">
              <div className="flex items-center gap-5">
                <div className="">
                  <input className="w-4 h-4" type="checkbox" />
                  <label className="text-base font-semibold">
                    &nbsp; Umrah Visa
                  </label>
                </div>
                <div className="">
                  <input className="w-4 h-4" type="checkbox" />
                  <label className="text-base font-semibold">
                    &nbsp; Transport
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap mx-4 pb-6">
            <div className="w-full sm:w-[22%] md:w-[21%] lg:[15%] xl:w-[12%] 2xl:w-[10%]">
              <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                location-1
              </label>
              <select className="text-sm block w-full h-11 border border-gray-300 hover:border-gray-400 text-gray-700 pr-4 pl-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50">
                <option>makkah</option>
                <option>madina</option>
              </select>
            </div>
            <div className="w-full sm:w-[77%] md:w-[78%] lg:[48%] xl:w-[31%] 2xl:w-[37%]">
              <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                hotel in makkah
              </label>
              <div className="relative w-full border border-gray-300 hover:border-gray-400 rounded">
                <select
                  type="text"
                  placeholder="Hotel Name?"
                  className="text-sm block w-full h-[2.68rem] text-gray-700 border-0 focus:ring-0 hover:text-gray-400 pr-7 pl-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                >
                  <option>makkah</option>
                  <option>madina</option>
                  <option>makkah</option>
                  <option>madina</option>
                </select>
              </div>
            </div>
            <div className=" w-[49%] sm:w-[22%] md:w-[21%] lg:w-[17%] xl:w-[15%] 2xl:w-[23%]">
              <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                check in
              </label>
              <div className="text-sm flex items-center justify-center w-full h-11 border border-gray-300 hover:border-gray-400 text-gray-700 pr-4 pl-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50">
                <input type="date" className="focus:outline-none" />
              </div>
            </div>
            <div className=" w-[49%] sm:w-[22%] md:w-[21%] lg:w-[17%] xl:w-[15%] 2xl:w-[23%]">
              <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                check out
              </label>
              <div className="text-sm flex items-center justify-center w-full h-11 border border-gray-300 hover:border-gray-400 text-gray-700 pr-4 pl-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50">
                <input type="date" className="focus:outline-none" />
              </div>
            </div>
            <div className=" w-[49%] sm:w-[22%] md:w-[21%] lg:w-[17%] xl:w-[15%] 2xl:w-[23%]">
              <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                select room
              </label>
              <RoomSelector />

              {/* <select className="text-sm flex items-center justify-center w-full h-11 border border-gray-300 hover:border-gray-400 text-gray-700 pr-4 pl-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-blue-50">
                <option className="capitalize  tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                  0 rooms
                </option>
                <option>aaa</option>
                <option>aaa</option>
                <option>aaa</option>
              </select> */}
            </div>
            {/* <div className=" sm:w-[27%] md:w-[31%] lg:w-[25%] xl:w-[11%] 2xl:w-[12%]">
              <div className="flex gap-1">
                <div className="w-1/2">
                  <label className="capitalize block tracking-wide text-blue-500 sm:text-sm text-xs font-semibold mb-2 ">
                    Rooms
                  </label>
                </div>
              </div>
            </div> */}
          </div>
          <div className=" mx-4 pb-6">
            <button className="bg-green-600 text-white rounded-md px-5 py-3 md:my-2">
              Add
            </button>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <div>
              <button className="bg-red-800 text-white px-8 py-3 rounded-md capitalize">
                reset form
              </button>
            </div>
            <div>
              <button className="bg-green-700 text-white px-8 py-3 rounded-md capitalize">
                calculate UBC
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-12  lg:col-span-3 px-5">
          <Form />
        </div>
      </form>
    </div>
  );
};

export default Calculator_Umrah;
