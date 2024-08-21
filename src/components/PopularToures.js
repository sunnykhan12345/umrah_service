import Image from "next/image"
import dubai from "../../public/images/dubai.jpg"
import singapore from "../../public/images/singapore.jpg"
import thailand from "../../public/images/thailand.jpg"
import malysia from "../../public/images/malysia.jpg"

const PopularToures = () => {
    return (
        <div className='lg:-mt-[150px] md:-mt-[180px] -mt-[130px] 2xl:mt-0'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold text-white  relative capitalize pb-8 sm:text-start  text-center'>other popular tours</h2>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3"
                >
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={dubai} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">dubai</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={singapore} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">Singapore</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>

                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={thailand} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">thailand</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={malysia} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer transform transition-transform duration-300 ease-in-out group-hover:scale-105' />
                        </div>
                        <h5 className="absolute -mt-14 md:left-5 left-8 text-2xl font-medium text-white cursor-pointer capitalize  transition-colors duration-300 ease-in-out">malaysia</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                </div>
                {/* <div className='overflow-x-scroll scrollbar-hide'>
                    <div className='flex gap-3 md:gap-4'>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={dubai} alt='' width={343} height={221} className='h-[221px] w-[343px] sm:mx-0 mx-auto object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">dubai</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={singapore} alt='' width={343} height={221} className='h-[221px] w-[343px] object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">singapore</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={thailand} alt='' width={343} height={221} className='h-[221px] w-[343px] object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">thailand</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={malysia} alt='' width={343} height={221} className='h-[221px] w-[343px] object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">malysia</h5>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default PopularToures