import Link from 'next/link'
import logo from "../../public/images/logo.png"
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <div className='bg-black text-white lg:py-12 py-8 lg:mt-16 mt-8'>
                <div className='md:container mx-auto px-5'>
                    <div className='grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-10'>
                        <div className='flex justify-center items-center'>
                            <Link href="/" className='block relative z-10'>
                                <Image src={logo} alt="logo" className="lg:w-[4.375rem] lg:h-[3.125rem] h-[2.188rem] object-contain" />
                            </Link>
                        </div>
                        <div className='flex flex-col gap-y-4  lg:text-start text-center lg:no-wrap flex-wrap'>
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

                        </div>
                        <div className='flex flex-col gap-y-4 lg:text-start text-center lg:no-wrap flex-wrap'>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Sesli Betimleme</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Yatırımcı İlişkileri</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Yasal Hükümler</Link>
                            </li>

                        </div>
                        <div className='flex flex-col gap-y-4 lg:text-start text-center lg:no-wrap flex-wrap'>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Yardım Merkezi</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>İş İmkanları</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Çerez Tercihleri</Link>
                            </li>
                        </div>
                        <div className='flex flex-col gap-y-4 lg:text-start text-center lg:no-wrap flex-wrap'>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Hediye Kartları</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Kullanım Koşulları</Link>
                            </li>
                            <li className='list-none'>
                                <Link href="/" className='text-sm font-normal text-[#808080]'>Kurumsal Bilgiler</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer