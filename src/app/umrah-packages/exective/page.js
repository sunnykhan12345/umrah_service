import React from 'react'
import Packages from './components/Packages'

const page = () => {
    return (
        <>
            <div className='bg-pack bg-cover h-[50vh] bg-center flex flex-col justify-center items-center'>
                <div className='text-white lg:text-6xl text-3xl text-center font-bold'>Executive Umrah Packages</div>

            </div>
            <Packages />
        </>
    )
}

export default page