import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="lg:py-20 pt-8">
      <div className="lg:mx-auto px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="grid sm:grid-cols-2 grid-cols-1  gap-5">
            <div className="bg-white shadow-xl rounded-lg py-5 flex flex-col items-center justify-center">
              <IoLocation className="text-[#48CFCB] h-10 w-10 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 text-[20px]">
                our main office
              </h3>
              <p className="uppercase mb-1 text-gray-600 font-medium">
                p.0 box 6 0888
              </p>
              <p className="uppercase text-gray-600 font-medium">dubai</p>
            </div>
            <div className="bg-white shadow-xl rounded-lg py-5 flex flex-col items-center justify-center">
              <FaPhoneAlt className="text-[#48CFCB] h-10 w-10 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 text-[20px]">
                phone number
              </h3>
              <p className="uppercase mb-1 text-gray-600 font-medium">
                +92 3085342445
              </p>
              {/* <p className='uppercase text-lg font-medium'>dubai</p> */}
            </div>
            <div className="bg-white shadow-xl rounded-lg py-5 flex flex-col items-center justify-center">
              <MdEmail className="text-[#48CFCB] h-10 w-10 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 text-[20px]">fax</h3>
              <p className="uppercase mb-1 text-gray-600 font-medium">
                2-123-456-6789
              </p>
              {/* <p className='uppercase text-lg font-medium'>dubai</p> */}
            </div>
            <div className="bg-white shadow-xl rounded-lg py-5 flex flex-col items-center justify-center">
              <MdOutlineAttachEmail className="text-[#48CFCB] h-10 w-10 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 text-[20px]">
                email
              </h3>
              <p className=" mb-1  font-medium text-gray-600">
                sunnykhan@gmail.com
              </p>
              {/* <p className='uppercase text-lg font-medium'>dubai</p> */}
            </div>
          </div>
          <div className="flex flex-col items-center  justify-center w-full">
            <div className="lg:w-[80%] w-full">
              <h3 className="text-center capitalize text-4xl text-gray-800 font-bold ">
                contact us
              </h3>
              <div className="bg-white mt-5 shadow-lg rounded-[70px]">
                <input
                  type="text"
                  placeholder="enter your name..."
                  className="rounded-[30px] text-gray-600 text-lg font-medium p-5 w-full outline-none border-none capitalize"
                />
              </div>
              <div className="bg-white my-5 shadow-lg rounded-[70px]">
                <input
                  type="text"
                  placeholder="enter your email..."
                  className="rounded-[30px] text-gray-600 text-lg font-medium p-5 w-full outline-none border-none capitalize "
                />
              </div>
              <div className="bg-white  shadow-lg rounded-[70px] mb-3">
                <textarea
                  placeholder="enter your message or concern..."
                  className="text-gray-600 text-lg font-medium w-full rounded-lg border-none focus:outline-none p-5"
                ></textarea>
              </div>
              <div className="text-center">
                <button className="bg-black text-white text-lg font-medium uppercase px-12 py-3 rounded-lg my-2 hover:opacity-70 duration-700 ease-linear">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
