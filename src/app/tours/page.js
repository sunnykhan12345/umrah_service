import Navbar from "@/components/navbar/Navbar"
import ShadcnTry from "@/components/ShadcnTry"
import SlickTry from "@/components/SlickTry"
import SwipperTry from "@/components/SwipperTry"

const page = () => {
    return (
        <>
            <Navbar />

            {/* <SlickTry /> */}
            <div className="my-20">
                <div className="lg:container mx-auto px-5">
                    <SwipperTry />
                    <ShadcnTry />
                </div>

            </div>

        </>
    )
}

export default page