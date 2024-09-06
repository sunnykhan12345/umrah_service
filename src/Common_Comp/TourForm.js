"use client";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
const TourForm = () => {
  return (
    <div>
      <button className="bg-blue-500 text-white py-3 mb-5 rounded-md w-full text-lg font-medium">
        Request a Callback
      </button>
      <form className="flex flex-col gap-y-5">
        <input
          type="text"
          placeholder="Name *"
          className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none"
        />
        <input
          type="text"
          placeholder="Email *"
          className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none"
        />
        <input
          type="text"
          placeholder="Phone Number *"
          className="w-full  py-3 px-2 rounded-tl-md rounded-tr-md focus:outline-none border-none"
        />
        <textarea
          placeholder="Type a Message..."
          className="px-2 py-3 rounded-md border-none focus:outline-none"
        ></textarea>
        <button className="py-3 px-2 text-center text-lg font-medium bg-blue-100 border border-blue-200 text-black hover:opacity-50 duration-500 ease-in-out rounded-md ">
          Submit
        </button>
      </form>
      <div className="py-5 px-3 border-2 border-dashed mt-5 text-center">
        <button className="text-base  text-blue-500">
          For additional information, kindly get in
        </button>
        <p className="py-1 text-blue-500">touch via:</p>
        <Link href="" className="flex items-center gap-2 justify-center mt-2">
          <FaPhoneAlt className="text-blue-500" />
          <h6 className="text-blue-500">(+92 3085342445)</h6>
        </Link>
      </div>
    </div>
  );
};

export default TourForm;
