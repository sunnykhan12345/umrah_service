import Saved_Packages from '@/components/Saved_Packages'
import Banner from '@/components/umrahpackage/coponents/Banner'
import Couple_Packages from '@/components/umrahpackage/coponents/Couple_Packages'
import Popular_Packages from '@/components/umrahpackage/coponents/Popular_Packages'
import Review from '@/components/umrahpackage/coponents/Review'
import React from 'react'

const page = () => {
    return (
        <div>
            <Banner />
            <Popular_Packages />
            <Review />
            <Saved_Packages />
            <Couple_Packages />
        </div>
    )
}

export default page
