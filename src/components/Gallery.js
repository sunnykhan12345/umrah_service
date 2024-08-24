import Gallery_Slider from "./sliders/Gallery_Slider"
const Gallery = () => {
    return (
        <div className='relative sm:min-h-[600px] h-[600px] w-full z-10 lg:mt-20 mt-8 md:mb-0 overflow-hidden'>
            <div className="absolute bg-gallery inset-0  bg-cover z-0 overflow-hidden">
            </div>
            <div className="absolute inset-0 overflow-hidden bg-[#2379BD] bg-opacity-70 z-10 overflow-x-scroll w-full scrollbar-hide">

                <div className="lg:container mx-auto px-5">
                    <h4 className='overflow-hidden px-5 mt-8 text-[35px] font-bold font-Helvetica tracking-wide text-white'> Gallery</h4>
                    <Gallery_Slider />
                    {/* <Try /> */}
                </div>
            </div>
        </div>
    )
}

export default Gallery