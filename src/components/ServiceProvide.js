import Image from "next/image"
import hotel from "../../public/images/hotel.jpg"
import v_cons from "../../public/images/visa_consultance.jpg"
import ticketing from "../../public/images/ticketing.jpg"

const ServiceProvide = () => {
    return (
        <div className='lg:mt-20 mt-8'>
            <div className="lg:container mx-auto px-5 ">
                <h2 className='lg:text-[35px] text-2xl font-bold text-black capitalize lg:mb-10 mb-6'>service we provide</h2>
                <div className='overflow-x-scroll scrollbar-hide'>
                    <div className='flex gap-4 md:gap-8'>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={hotel} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">Hotels</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={v_cons} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">visa consultancy</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={ticketing} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">ticketing</h5>
                        </div>
                        <div className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 relative'>
                            <Image src={hotel} alt='' className='w-full object-cover rounded-2xl cursor-pointer relative' />
                            <h5 className="absolute -mt-14 left-5  text-2xl font-medium text-white cursor-pointer capitalize">transportation</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceProvide