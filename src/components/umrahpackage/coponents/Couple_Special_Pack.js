
'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import pop1 from "../../public/images/pop1.jpg"
import pop2 from "../../public/images/op2.jpg"
import pop3 from "../../public/images/op3.jpg"
import { Heart } from "../../../../public/icons/icons"
import { Star } from "../../../../public/icons/icons"
import { Visa } from "../../../../public/icons/icons"
import { Flight } from "../../../../public/icons/icons"
import { Hoteling } from "../../../../public/icons/icons"
import { Travels } from "../../../../public/icons/icons"
const Couple_Special_Pack = () => {
    return (
        <>
            <div className='lg:py-20 my-8 '>
                <div className="lg:container mx-auto px-5">
                    <h2 className='lg:text-[35px] text-2xl font-bold  capitalize pb-8 sm:text-start  text-center '>Couple Special</h2>
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 basis-full">
                                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl">
                                    <div className="relative">
                                        <Image src={pop1} width={380} height={262} alt="" className="object-cover relative rounded-xl w-full" />
                                        <h6 className="absolute right-5 top-5 "><Heart /></h6>
                                    </div>
                                    <div className="flex justify-between pt-6 pl-2 ">
                                        <h5 className="font-normal text-[26px]">mecca</h5>
                                        <div className="flex items-center gap-[10px]">
                                            <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                                            <h5 className="font-normal lg:text-[26px] text-[20px]">4.7</h5>
                                        </div>
                                    </div>
                                    <p className="lg:text-[17px] text-base font-normal py-2">15 days umrah package</p>
                                    <div className="flex items-center justify-between pt-3">
                                        <div className="flex flex-col  items-center">
                                            <Visa />
                                            <h6 className="text-[13px] font-normal pt-2">visa</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Flight />
                                            <h6 className="text-[13px] font-normal pt-2">flight</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Hoteling />
                                            <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Travels />
                                            <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                                        </div>
                                    </div>
                                    <div className="py-6 pl-2 ">
                                        <li className="lg:text-[17px] text-[15px] font-normal sm:text-start ">
                                            Tour combo with return airport transfer
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                                            City Tour
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                                            Curioius Corner
                                        </li>
                                    </div>
                                    <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                                        <del className="sm:text-base text-xs font-light">PKR 188,952</del>
                                        <h6 className="lg:text-[22px] text-base font-medium">PKR 188,952 <sub className="sm:text-[13px] text-[11px] font-light">Per person</sub></h6>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 basis-full">
                                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl">
                                    <div className="relative">
                                        <Image src={pop2} width={380} height={262} alt="" className="object-cover relative rounded-xl w-full" />
                                        <h6 className="absolute right-5 top-5 "><Heart /></h6>
                                    </div>
                                    <div className="flex justify-between pt-6 pl-2 ">
                                        <h5 className="font-normal text-[26px]">mecca</h5>
                                        <div className="flex items-center gap-[10px]">
                                            <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                                            <h5 className="font-normal lg:text-[26px] text-[20px]">4.7</h5>
                                        </div>
                                    </div>
                                    <p className="lg:text-[17px] text-base font-normal py-2">15 days umrah package</p>
                                    <div className="flex items-center justify-between pt-3">
                                        <div className="flex flex-col  items-center">
                                            <Visa />
                                            <h6 className="text-[13px] font-normal pt-2">visa</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Flight />
                                            <h6 className="text-[13px] font-normal pt-2">flight</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Hoteling />
                                            <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Travels />
                                            <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                                        </div>
                                    </div>
                                    <div className="py-6 pl-2 ">
                                        <li className="lg:text-[17px] text-[15px] font-normal sm:text-start ">
                                            Tour combo with return airport transfer
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                                            City Tour
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                                            Curioius Corner
                                        </li>
                                    </div>
                                    <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                                        <del className="sm:text-base text-xs font-light">PKR 188,952</del>
                                        <h6 className="lg:text-[22px] text-base font-medium">PKR 188,952 <sub className="sm:text-[13px] text-[11px] font-light">Per person</sub></h6>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 basis-full">
                                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl">
                                    <div className="relative">
                                        <Image src={pop1} width={380} height={262} alt="" className="object-cover relative rounded-xl w-full" />
                                        <h6 className="absolute right-5 top-5 "><Heart /></h6>
                                    </div>
                                    <div className="flex justify-between pt-6 pl-2 ">
                                        <h5 className="font-normal text-[26px]">mecca</h5>
                                        <div className="flex items-center gap-[10px]">
                                            <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                                            <h5 className="font-normal lg:text-[26px] text-[20px]">4.7</h5>
                                        </div>
                                    </div>
                                    <p className="lg:text-[17px] text-base font-normal py-2">15 days umrah package</p>
                                    <div className="flex items-center justify-between pt-3">
                                        <div className="flex flex-col  items-center">
                                            <Visa />
                                            <h6 className="text-[13px] font-normal pt-2">visa</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Flight />
                                            <h6 className="text-[13px] font-normal pt-2">flight</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Hoteling />
                                            <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Travels />
                                            <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                                        </div>
                                    </div>
                                    <div className="py-6 pl-2 ">
                                        <li className="lg:text-[17px] text-[15px] font-normal sm:text-start ">
                                            Tour combo with return airport transfer
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                                            City Tour
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                                            Curioius Corner
                                        </li>
                                    </div>
                                    <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                                        <del className="sm:text-base text-xs font-light">PKR 188,952</del>
                                        <h6 className="lg:text-[22px] text-base font-medium">PKR 188,952 <sub className="sm:text-[13px] text-[11px] font-light">Per person</sub></h6>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 basis-full">
                                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl">
                                    <div className="relative">
                                        <Image src={pop1} width={380} height={262} alt="" className="object-cover relative rounded-xl w-full" />
                                        <h6 className="absolute right-5 top-5 "><Heart /></h6>
                                    </div>
                                    <div className="flex justify-between pt-6 pl-2 ">
                                        <h5 className="font-normal text-[26px]">mecca</h5>
                                        <div className="flex items-center gap-[10px]">
                                            <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                                            <h5 className="font-normal lg:text-[26px] text-[20px]">4.7</h5>
                                        </div>
                                    </div>
                                    <p className="lg:text-[17px] text-base font-normal py-2">15 days umrah package</p>
                                    <div className="flex items-center justify-between pt-3">
                                        <div className="flex flex-col  items-center">
                                            <Visa />
                                            <h6 className="text-[13px] font-normal pt-2">visa</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Flight />
                                            <h6 className="text-[13px] font-normal pt-2">flight</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Hoteling />
                                            <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Travels />
                                            <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                                        </div>
                                    </div>
                                    <div className="py-6 pl-2 ">
                                        <li className="lg:text-[17px] text-[15px] font-normal sm:text-start ">
                                            Tour combo with return airport transfer
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                                            City Tour
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                                            Curioius Corner
                                        </li>
                                    </div>
                                    <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                                        <del className="sm:text-base text-xs font-light">PKR 188,952</del>
                                        <h6 className="lg:text-[22px] text-base font-medium">PKR 188,952 <sub className="sm:text-[13px] text-[11px] font-light">Per person</sub></h6>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2 basis-full">
                                <div className="bg-white py-3 px-5 rounded-2xl shadow-2xl">
                                    <div className="relative">
                                        <Image src={pop1} width={380} height={262} alt="" className="object-cover relative rounded-xl w-full" />
                                        <h6 className="absolute right-5 top-5 "><Heart /></h6>
                                    </div>
                                    <div className="flex justify-between pt-6 pl-2 ">
                                        <h5 className="font-normal text-[26px]">mecca</h5>
                                        <div className="flex items-center gap-[10px]">
                                            <Star className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px]" />
                                            <h5 className="font-normal lg:text-[26px] text-[20px]">4.7</h5>
                                        </div>
                                    </div>
                                    <p className="lg:text-[17px] text-base font-normal py-2">15 days umrah package</p>
                                    <div className="flex items-center justify-between pt-3">
                                        <div className="flex flex-col  items-center">
                                            <Visa />
                                            <h6 className="text-[13px] font-normal pt-2">visa</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Flight />
                                            <h6 className="text-[13px] font-normal pt-2">flight</h6>
                                        </div>
                                        <div className="flex flex-col  items-center">
                                            <Hoteling />
                                            <h6 className="text-[13px] font-normal pt-2">Hoteling</h6>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Travels />
                                            <h6 className="text-[13px] font-normal pt-2">Travels</h6>
                                        </div>
                                    </div>
                                    <div className="py-6 pl-2 ">
                                        <li className="lg:text-[17px] text-[15px] font-normal sm:text-start ">
                                            Tour combo with return airport transfer
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal  pt-2">
                                            City Tour
                                        </li>
                                        <li className="lg:text-[17px] text-[15px] font-normal pt-2">
                                            Curioius Corner
                                        </li>
                                    </div>
                                    <div className="flex lg:gap-4 gap-1 items-center cursor-pointer">
                                        <del className="sm:text-base text-xs font-light">PKR 188,952</del>
                                        <h6 className="lg:text-[22px] text-base font-medium">PKR 188,952 <sub className="sm:text-[13px] text-[11px] font-light">Per person</sub></h6>
                                    </div>
                                </div>
                            </CarouselItem>

                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Couple_Special_Pack