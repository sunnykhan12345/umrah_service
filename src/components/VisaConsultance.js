import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import gallery1 from "../../public/images/gallery1.png"
import visa from "../../public/images/visa.jpg"
import visa1 from "../../public/images/visa1.jpg"
const VisaConsultance = () => {
    return (
        <div className='lg:mt-16 mt-8'>
            <div className='lg:container mx-auto px-5'>
                <h2 className='lg:text-[35px] text-2xl font-bold text-black capitalize pb-4'>visa consultancy service</h2>
                <div className='overflow-x-scroll scrollbar-hide'>
                    <div className='flex gap-4 md:gap-8'>
                        <div className='bg-white md:p-4 p-2 rounded-[17px] shadow-lg  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <Image src={gallery1} alt='' className='w-full object-cover ' />
                            <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>canada</h3>
                            <Link href="/" className='text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                        </div>
                        <div className='bg-white p-4 rounded-[17px] shadow-lg  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <Image src={visa} alt='' className='w-full object-cover ' />
                            <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>vsa</h3>
                            <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                        </div>
                        <div className='bg-white p-4 rounded-[17px] shadow-lg  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <Image src={visa1} alt='' className='w-full object-cover ' />
                            <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>uk</h3>
                            <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                        </div>
                        <div className='bg-white p-4 rounded-[17px] shadow-lg  flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <Image src={gallery1} alt='' className='w-full object-cover ' />
                            <h3 className='lg:text-[26px] text-lg font-normal uppercase py-3'>dubai</h3>
                            <Link href="/" className=' text-[#2379BD] underline md:text-base text-sm'>vist visa</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaConsultance
