import Image from "next/image"
import offer from "../../public/images/offer.jpg"
import SpecialOf_Slider from "./sliders/SpecialOf_Slider"
const Offers = () => {
    return (
        <div className='lg:mt-20 mt-8'>
            <div className="lg:container mx-auto px-5">
                <h2 className='lg:text-[35px] text-2xl font-bold text-black capitalize sm:py-6 sm:text-start text-center'>special Offers for hajj & umrah</h2>
                <SpecialOf_Slider />
                {/* <div className='overflow-x-scroll scrollbar-hide'>
                    <div className="flex md:gap-8 gap-4">
                        <div className="lg:w-[60%] w-full">
                            <div className="flex gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                                <Image src={offer} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-xl" />
                                <div className="">
                                    <h5 className="text-[26px] font-medium pb-4">15 Days Umrah Package</h5>
                                    <p className="text-[17px] font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                                    <h6 className="pb-7 text-[17px] font-medium "><b>PKR 195,000</b></h6>
                                    <button className="py-4 px-8 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book noew</button>
                                </div>
                            </div>
                        </div>
                        {/* second */}
                {/* <div className="lg:w-[60%] w-full">
                            <div className="flex gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                                <Image src={offer} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-xl" />
                                <div className="">
                                    <h5 className="text-[26px] font-medium pb-4">15 Days Umrah Package</h5>
                                    <p className="text-[17px] font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                                    <h6 className="pb-7 text-[17px] font-medium"><b>PKR 195,000</b></h6>
                                    <button className="py-4 px-8 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">Book Now</button>
                                </div>
                            </div>
                        </div>


                    </div> */}
                {/* </div>  */}
            </div>
        </div>
    )
}

export default Offers
