import Image from "next/image"
import hotel from "../../public/images/hotel.jpg"
import v_cons from "../../public/images/visa_consultance.jpg"
import ticketing from "../../public/images/ticketing.jpg"
import trans from "../../public/images/trans.jpg"

const ServiceProvide = () => {
    return (
        <div className='lg:mt-20 mt-8'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold text-black capitalize lg:mb-10 mb-6 sm:text-start text-center'>service we provide</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:gap-8'>
                    <div className='flex-shrink-0 w-full relative group  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={hotel} alt='' className='w-full object-cover rounded-2xl shadow-2xl relative' />
                        </div>
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">Hotels</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full group relative  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={v_cons} alt='' className='w-full object-cover rounded-2xl shadow-2xl cursor-pointer relative' />
                        </div>
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white  capitalize">visa consultancy</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full group relative cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl ">
                            <Image src={ticketing} alt='' className='w-full object-cover rounded-2xl shadow-2xl cursor-pointer relative' />
                        </div>
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white  capitalize">ticketing</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    <div className='flex-shrink-0 w-full group relative  cursor-pointer'>
                        <div className="overflow-hidden rounded-2xl">
                            <Image src={hotel} alt='' className=' h-auto object-cover rounded-2xl shadow-2xl  relative' />
                        </div>
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white  capitalize">transportation</h5>
                        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>
                    {/* <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                        <Image src={v_cons} alt='' className='w-full object-cover rounded-2xl  relative' />
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">visa consultancy</h5>
                    </div> */}
                    {/* <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                        <Image src={ticketing} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">ticketing</h5>
                    </div> */}

                    {/* <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                        <Image src={hotel} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                        <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">transportation</h5>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default ServiceProvide