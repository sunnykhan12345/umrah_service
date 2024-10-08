import Image from "next/image";
import dubai from "../../public/images/dubai.jpg";
import singapore from "../../public/images/singapore.jpg";
import thailand from "../../public/images/thailand.jpg";
import malysia from "../../public/images/malysia.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const popularcard = [
  {
    id: 1,
    img: dubai,
    title: "dubai",
  },
  {
    id: 2,
    img: singapore,
    title: "singapore",
  },
  {
    id: 3,
    img: thailand,
    title: "thailand",
  },
  {
    id: 4,
    img: malysia,
    title: "malaysia",
  },
  {
    id: 5,
    img: singapore,
    title: "balu",
  },
  {
    id: 6,
    img: thailand,
    title: "turkey",
  },
  {
    id: 7,
    img: thailand,
    title: "turkey",
  },
];
const PopularToures = () => {
  return (
    <div className="mt-20  2xl:mt-0 from-blue-200 ">
      <div className="lg:container mx-auto px-5 ">
        <h2 className="lg:text-[35px] text-2xl font-bold font-Helvetica  text-black capitalize xl:my-10 2xl:my-10 lg:mb-10 mb-6 sm:text-start text-center border-l-8  border-blue-300 sm:py-2 py-1 sm:pl-2 pl-1 ">
          international tour&apos;s
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-5">
          {popularcard.map((popcard) => (
            <div
              key={popcard.id}
              className="flex-shrink-0 w-full relative group  cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <Link href={`/internationaltour/${popcard.title}`}>
                  <Image
                    src={popcard.img}
                    alt=""
                    width={400}
                    height={300}
                    className="h-[300px] w-[400px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  {/* Overlay that appears on hover */}
                  <div className="absolute inset-0  bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-white font-semibold text-lg flex items-center gap-2">
                      View Details <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </div>

              <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">
                {popcard.title}
              </h5>
              {/* <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularToures;
