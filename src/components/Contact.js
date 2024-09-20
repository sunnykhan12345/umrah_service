"use client";
import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdOutlineAttachEmail } from "react-icons/md";

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Further processing like API call can be done here
  };

  return (
    <div className="lg:py-20 pt-8">
      <div className="lg:mx-auto px-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 lg:order-1 order-2 lg:mb-0 mb-10">
            {/* Location Information */}
            <div className="bg-white shadow-xl rounded-tl-3xl rounded-br-3xl py-5 flex flex-col items-center justify-center">
              <IoLocation className="text-[#48CFCB] lg:h-10 lg:w-10 h-6 w-6 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 lg:text-[20px]">
                our main office
              </h3>
              <p className="uppercase mb-1 text-gray-600 md:text-base text-sm font-medium">
                p.o box 6 0888
              </p>
              <p className="uppercase text-gray-600 md:text-base text-sm font-medium">
                dubai
              </p>
            </div>
            {/* Phone Information */}
            <div className="bg-white shadow-xl rounded-tl-3xl rounded-br-3xl py-5 flex flex-col items-center justify-center">
              <FaPhoneAlt className="text-[#48CFCB] lg:h-10 lg:w-10 h-6 w-6 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 lg:text-[20px]">
                phone number
              </h3>
              <p className="uppercase mb-1 text-gray-600 font-medium md:text-base text-sm">
                +92 3085342445
              </p>
            </div>
            {/* Fax Information */}
            <div className="bg-white shadow-xl rounded-tl-3xl rounded-br-3xl py-5 flex flex-col items-center justify-center">
              <MdEmail className="text-[#48CFCB] lg:h-10 lg:w-10 h-6 w-6 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 lg:text-[20px]">
                fax
              </h3>
              <p className="uppercase mb-1 text-gray-600 font-medium md:text-base text-sm">
                2-123-456-6789
              </p>
            </div>
            {/* Email Information */}
            <div className="bg-white shadow-xl rounded-tl-3xl rounded-br-3xl py-5 flex flex-col items-center justify-center">
              <MdOutlineAttachEmail className="text-[#48CFCB] lg:h-10 lg:w-10 h-6 w-6 mb-2" />
              <h3 className="uppercase font-bold mt-2 mb-2 lg:text-[20px]">
                email
              </h3>
              <p className="mb-1 font-medium text-gray-600 md:text-base text-sm">
                sunnykhan@gmail.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-center justify-center w-full lg:order-2 order-1">
            <div className="lg:w-[80%] w-full">
              <h3 className="text-center capitalize lg:text-4xl text-2xl text-gray-800 font-bold">
                contact us
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="bg-white mt-5 shadow-lg rounded-[70px]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="enter your name..."
                    className="rounded-xl text-gray-600 lg:text-lg font-medium p-5 w-full outline-none border-none capitalize"
                  />
                </div>
                {/* Email Field */}
                <div className="bg-white my-5 shadow-lg rounded-[70px]">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="enter your email..."
                    className="rounded-xl text-gray-600 lg:text-lg font-medium p-5 w-full outline-none border-none capitalize"
                  />
                </div>
                {/* Message Field */}
                <div className="bg-white shadow-lg rounded-[70px] mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="enter your message or concern..."
                    className="text-gray-600 lg:text-lg font-medium w-full rounded-lg border-none focus:outline-none p-5"
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white lg:text-lg font-medium uppercase px-12 py-3 rounded-lg my-3 hover:opacity-70 duration-700 ease-linear"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
