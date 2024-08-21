import Link from 'next/link'
import logo from "../../public/images/logo.png"
import Image from 'next/image'
import { Facebook } from "../../public/icons/icons"
import { InstaGram } from "../../public/icons/icons"
import { Twitter } from "../../public/icons/icons"
import { Youtube } from "../../public/icons/icons"
import { Fac } from "../../public/icons/icons"
const Footers = () => {
    return (
        <div>
            <footer className="bg-black text-white  2xl:py-20 xl:py-16 md:py-14 py-10">
                <div className="md:container mx-auto px-5">
                    <div className="flex lg:flex-nowrap flex-wrap">
                        <div className="lg:w-4/12 w-full lg:mb-0 md:mb-12 mb-0">
                            <Link href="/" className='lg:mx-0 mx-auto'>
                                <Image src={logo} alt="logo" width={160} height={72} className="lg:mx-0 mx-auto w-[160px] h-[72px] object-contain" />
                            </Link>
                        </div>
                        <div className="flex sm:flex-nowrap flex-wrap gap-5 w-full">
                            <div className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center ">
                                <ul className='flex flex-col gap-y-4'>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Seslendirme ve Alt jazz</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Medya Merket</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Gizlilik</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Bize Ulaşın</Link>
                                    </li>
                                    <li className='list-none mt-4 '>
                                        <Link href="/" className='text-sm font-normal text-[#808080] ring-1 ring-[#808080] py-3 px-4 rounded-sm hover:opacity-50 ease-in-out duration-500'>Hizmet Kodu</Link>
                                    </li>

                                </ul>
                            </div>
                            <div className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center">
                                <ul className='flex flex-col gap-y-4'>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Sesli Betimleme</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Yatırımcı İlişkileri</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Yasal Hükümler</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center">
                                <ul className='flex flex-col gap-y-4'>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Yardım Merkezi</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>İş İmkanları</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Çerez Tercihleri</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center">
                                <ul className='flex flex-col gap-y-4'>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Hediye Kartları</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Kullanım Koşulları</Link>
                                    </li>
                                    <li className='list-none'>
                                        <Link href="/" className='text-sm font-normal text-[#808080]'>Kurumsal Bilgiler</Link>
                                    </li>
                                    <div className='flex gap-4 md:pt-14 pt-3 items-center sm:justify-start justify-center'>
                                        <li>
                                            <Link href="/" className=''>
                                                <Facebook />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <InstaGram className="hover:opacity-15 w-[3] h-[3]" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <Twitter />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <Youtube />
                                            </Link>
                                        </li>

                                    </div>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footers
