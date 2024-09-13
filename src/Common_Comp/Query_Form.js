"use client";
import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="lg:mt-10 mt-5">
      <button className="bg-blue-500 text-center text-white capitalize font-bold lg:text-4xl text-lg w-full  lg:text-start py-3 px-2 rounded-md">
        request a callback
      </button>
      <form className="py-5 px-5" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="border-2 rounded-md border-gray-400 lg:py-3 py-2 px-2 font-light focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="border-2 rounded-md border-gray-400 lg:py-3 py-2 px-2 font-light focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone"
            className="border-2 rounded-md border-gray-400 lg:py-3 py-2 px-2 font-light focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-400"
            required
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-5">
          <div className="sm:w-7/12 w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Query Here..."
              className="border-2 rounded-md border-gray-400 py-2 px-2 w-full focus:outline-none focus:ring-2 focus:border-none focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="lg:w-2/12 bg-blue-50 text-black lg:py-3 py-2 text-lg font-medium lg:mx-0 mx-auto hover:opacity-40 cursor-pointer duration-500 ease-in-out lg:px-4 px-10 border-2 border-gray-400 rounded-md flex flex-col items-center justify-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
