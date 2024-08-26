import Image from "next/image"
import dubai from "../../public/images/dubai.jpg"
import singapore from "../../public/images/singapore.jpg"
import thailand from "../../public/images/thailand.jpg"
import malysia from "../../public/images/malysia.jpg"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";


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
        title: "malysia",
    },
]
const PopularToures = () => {

    return (
        <div className='lg:-mt-[150px] md:-mt-[103px]  2xl:mt-0 from-blue-200 to-white'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold font-Helvetica  md:text-white text-black  relative capitalize pb-8 sm:text-start  text-center'

                >other popular tours</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"
                >
                    {
                        popularcard.map((popcard,) => (
                            <div key={popcard.id} className='flex-shrink-0 w-full relative group  cursor-pointer'>
                                <div className="overflow-hidden rounded-2xl">
                                    <Image src={popcard.img} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                                </div>
                                <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium font-Helvetica text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">{popcard.title}</h5>
                                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default PopularToures