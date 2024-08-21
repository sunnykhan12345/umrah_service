import Home from '@/Common_Comp/Home'
import Couple_Special_Pack from '@/components/umrahpackage/coponents/Popular_Packages'
import Review from '@/components/umrahpackage/coponents/Review'
import Saved_Packages from '@/components/Saved_Packages'
import Popular_Packages from '@/components/umrahpackage/coponents/Popular_Packages'
import React from 'react'

const page = () => {
    return (
        <>
            <div>
                <Home />
                <Popular_Packages />
                <Review />
                <Saved_Packages />
                <Couple_Special_Pack />
            </div>
        </>
    )
}

export default page