
'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import gallery1 from "../../../public/images/gallery.png"
import gallery2 from "../../../public/images/gallery2.jpg"
import gallery3 from "../../../public/images/gallery3.png"
import gallery4 from "../../../public/images/gallery4.png"
import gallery5 from "../../../public/images/gallery5.png"

const Gallery_Slider = () => {
    return (
        <Carousel className="lg:py-14 py-10">
            <CarouselContent>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery5}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery3}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery4}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>
                <CarouselItem className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
                    <Image
                        width={344}
                        height={428}
                        className="w-full h-auto"
                        src={gallery1}
                        alt="temp"
                    />
                </CarouselItem>


            </CarouselContent>
            <CarouselPrevious className="text-dark-red absolute xl:-left-20 lg:-left-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden left-0 " />
            <CarouselNext className="text-dark-red absolute xl:-right-20 lg:-right-8 md:top-1/2 lg:-translate-y-1/2 top-auto lg:-bottom-[65px] -bottom-[30px]  md:hidden right-0 " />
        </Carousel>
        
    )
}

export default Gallery_Slider
