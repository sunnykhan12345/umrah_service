import Image from "next/image"
import gallery from "../../public/images/gallery.png"
import Link from "next/link"
import gallery1 from "../../public/images/gallery1.png"
import gallery2 from "../../public/images/gallery2.jpg"
import gallery3 from "../../public/images/gallery3.png"
const Gallery = () => {
    return (
        <div className='relative h-screen w-full z-10 lg:mt-16 mt-8'>
            <div className="absolute inset-0 bg-gallery  bg-cover z-0">
                {/* Your image will be visible as a background */}
            </div>
            <div className="absolute inset-0 bg-[#2379BD] bg-opacity-70 z-10 overflow-x-scroll w-full scrollbar-hide">
                <h4 className='container mx-auto  px-5 py-8 mt-8 text-[35px] font-bold tracking-wide text-white'> Gallery</h4>
                <div className="lg:container mx-auto px-5 overflow-x-scroll scrollbar-hide">
                    <div className='flex gap-4 md:gap-8 '>
                        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <div className='relative bg-slate-100 w-full h-96'>
                                <Image src={gallery2} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                                <Image src={gallery1} alt='' className='absolute h-full rounded-md object-cover ' />
                            </div>
                        </Link>
                        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <div className='relative bg-slate-100 w-full h-96'>
                                <Image src={gallery3} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                                <Image src={gallery1} alt='' className='absolute h-full rounded-md object-cover ' />
                            </div>
                        </Link>
                        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <div className='relative bg-slate-100 w-full h-96'>
                                <Image src={gallery3} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                                <Image src={gallery1} alt='' className='absolute h-full rounded-md object-cover ' />
                            </div>
                        </Link>
                        <Link href="/" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <div className='relative bg-slate-100 w-full h-96'>
                                <Image src={gallery3} alt='' className='h-full absolute rounded-md object-cover z-10 hover:opacity-0 transition-opacity ease-in-out duration-500' />
                                <Image src={gallery1} alt='' className='absolute h-full rounded-md object-cover ' />
                            </div>
                        </Link>

                    </div>

                    {/* <div className="pt-12 ">
                        <h2 className="text-4xl font-bold text-white pb-12">gallery</h2>
                        <div className="flex gap-6">
                            <Link href="/">
                                <Image src={gallery1} alt="gallery" width={344} height={428} className="w-[344px] h-[428px] object-cover " />
                            </Link>
                            <Link href="/">
                                <Image src={gallery1} width={344} height={428} className="w-[344px] h-[428px] object-cover " />
                            </Link>
                            <Link href="/">
                                <Image src={gallery1} width={344} height={428} className="w-[344px] h-[428px] object-cover " />
                            </Link>
                            <Link href="/">
                                <Image src={gallery1} width={344} height={428} className="w-[344px] h-[428px] object-cover " />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>

        </div>

    )
}

export default Gallery