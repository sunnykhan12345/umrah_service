import React from "react";
import Image from "next/image";
import img2 from "../../../../public/images/k.jpg";
import img3 from "../../../../public/images/k2.jpg";
import img4 from "../../../../public/images/k3.jpg";
import hotel from "../../../../public/images/hotel1.jpg";
import hotel2 from "../../../../public/images/hotel2.jpg";
import hotel3 from "../../../../public/images/hotel3.jpg";
import hotel4 from "../../../../public/images/hotel3.jpg";
import hotel5 from "../../../../public/images/hotel5.jpg";
import { FiveStar_Table } from "./components/FiveStar_Table";

const page = () => {
  return (
    <div className="pb-40 lg:pt-20 pt-10 bg-customBackground">
      <div className="lg:container mx-auto px-5 ">
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold pb-3 text-gray-800 tracking-wider">
            <span className="text-blue-500">|</span> 5 Star Umrah Packages
          </h1>
          <h2 className="text-lg font-medium text-gray-600 tracking-wide">
            All Inclusive Umrah Packages 2024
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
          <div className="bg-whte pb-5">
            <div className="lg:text-left text-center pb-10 ">
              <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
                <span className="text-blue-600">Makkah</span> International
                Hotels
              </h1>
              <p className="text-base font-medium text-gray-500 mt-2">
                Discover Luxury and Comfort with Our Handpicked 4-Star Hotels
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              {/* Card 1 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={hotel3}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg capitalize absolute right-0 top-0  px-3 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100  rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={hotel2}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg capitalize absolute right-0 top-0  px-5 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={img4}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg  capitalize absolute right-0 top-0  px-5 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bgwhite ">
            <div className="lg:text-left text-center pb-10 ">
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-wide">
                <span className="text-blue-600">Madinah</span> International
                Hotels
              </h1>
              <p className="text-base font-medium text-gray-500 mt-2">
                Discover Luxury and Comfort with Our Handpicked 4-Star Hotels
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
              {/* Card 1 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={hotel5}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg capitalize absolute right-0 top-0  px-5 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={hotel3}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg capitalize absolute right-0 top-0  px-5 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className=" bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group relative">
                <div className="h-48">
                  <Image
                    src={img2}
                    alt="Umrah Package 1"
                    className="w-full object-cover rounded-t-xl h-full"
                  />
                </div>
                <span className="bg-[#C0D6E8] font-extrabold text-lg capitalize absolute right-0 top-0  px-5 py-4 rounded-bl-2xl text-black ">
                  <sup>$</sup>
                  five star hotel
                </span>
                {/* Overlay with sliding from bottom */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-white text-center text-base px-6 max-w-xs leading-relaxed">
                    Experience luxury and comfort at our Makkah hotel, located
                    just steps from the Holy Mosque. Enjoy modern amenities,
                    exceptional service, and stunning views of the city.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    Hotel Name
                  </h3>
                  <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table five star */}
        <div className="my-10">
          <FiveStar_Table />
        </div>
      </div>
    </div>
  );
};

export default page;
