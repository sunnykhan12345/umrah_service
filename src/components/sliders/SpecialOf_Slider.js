'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import gallery1 from "../../../public/images/gallery.png"
const SpecialOf_Slider = () => {
    return (
        <Carousel className="">
            <CarouselContent>
                <CarouselItem className="xl:basis-1/2 lg:basis-1/2
                   basis-full">
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                        <Image src={gallery1} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px]" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium pb-4">15 Days Umrah Package</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium "><b>PKR 195,000</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 lg:basis-1/2   basis-full">
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                        <Image src={gallery1} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px]" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium pb-4">15 Days Umrah Package</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium "><b>PKR 195,000</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 lg:basis-1/2   basis-full">
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                        <Image src={gallery1} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px]" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium pb-4">15 Days Umrah Package</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium "><b>PKR 195,000</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 lg:basis-1/2   basis-full">
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                        <Image src={gallery1} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px]" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium pb-4">15 Days Umrah Package</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium "><b>PKR 195,000</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem className="xl:basis-1/2 lg:basis-1/2   basis-full">
                    <div className="flex sm:flex-row flex-col gap-5 py-6 px-4 bg-white cursor-pointer shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 ease-in-out">
                        <Image src={gallery1} alt="" width={367} height={245} className="w-[347px] h-[245px] object-cover rounded-[23px]" />
                        <div className="sm:text-start text-center">
                            <h5 className="md:text-[26px] text-[20px] font-medium pb-4">15 Days Umrah Package</h5>
                            <p className="md:text-[17px] text-base font-medium pb-4">umrah e-visa | return air ticket | hotel | transport</p>
                            <h6 className="pb-7 md:text-[17px] text-base font-medium "><b>PKR 195,000</b></h6>
                            <button className="lg:py-4 lg:px-8 py-3 px-7 bg-[#2379BD] text-white rounded-[35px] capitalize hover:opacity-50 duration-500 ease-in-out">book now</button>
                        </div>
                    </div>
                </CarouselItem>


            </CarouselContent>
            <CarouselPrevious className="text-dark-red absolute xl:-left-20 lg:-left-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden left-0 " />
            <CarouselNext className="text-dark-red absolute xl:-right-20 lg:-right-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden right-0 " />
        </Carousel>
    )
}

export default SpecialOf_Slider