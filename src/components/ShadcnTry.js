'use client'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import gallery1 from "../../public/images/gallery1.png"
import gallery2 from "../../public/images/gallery2.jpg"
import { CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function ShadcnTry() {
    const plugin = React.useRef(
        Autoplay({ delay: 7000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full mt-40"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <>

                        <CarouselItem key={index}>
                            <div className="flex gap-4">
                                <div className="p-1 ">
                                    <CardContent className="">
                                        <Image src={gallery1} width={280}
                                            height={972} alt="" className="w-full h-auto object-cover" />
                                    </CardContent>

                                </div>
                                <div className="p-1 ">
                                    <CardContent className="">
                                        <Image src={gallery1} alt="" className="w-full h-full object-cover" />
                                    </CardContent>

                                </div>
                                <div className="p-1 ">
                                    <CardContent className="">
                                        <Image src={gallery1} alt="" className="w-full h-full object-cover" />
                                    </CardContent>

                                </div>
                                <div className="p-1 ">
                                    <CardContent className="">
                                        <Image src={gallery1} alt="" className="w-full h-full object-cover" />
                                    </CardContent>

                                </div>
                            </div>
                        </CarouselItem>


                    </>

                ))}
            </CarouselContent>



        </Carousel >
    )
}


export default ShadcnTry
