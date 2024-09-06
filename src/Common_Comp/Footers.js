import Link from "next/link";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import {
  Facebook,
  InstaGram,
  Twitter,
  Youtube,
} from "../../public/icons/icons";

const Footers = () => {
  return (
    <div>
      <footer className="bg-black text-white 2xl:py-20 xl:py-16 md:py-14 py-10">
        <div className="md:container mx-auto px-5">
          <div className="flex lg:flex-nowrap flex-wrap">
            <div
              className="lg:w-4/12 w-full lg:mb-0 md:mb-12 mb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <Link href="/" className="lg:mx-0 mx-auto">
                <Image
                  src={logo}
                  alt="logo"
                  width={160}
                  height={72}
                  className="lg:mx-0 mx-auto w-[160px] h-[72px] object-contain"
                />
              </Link>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap gap-5 w-full">
              <div
                className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <ul className="flex flex-col gap-y-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Seslendirme ve Alt jazz
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Medya Merket
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Gizlilik
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Bize Ulaşın
                    </Link>
                  </li>
                  <li className="list-none mt-4 ">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] ring-1 ring-[#808080] py-3 px-4 rounded-sm hover:opacity-50 ease-in-out duration-500 "
                    >
                      Hizmet Kodu
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <ul className="flex flex-col gap-y-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Sesli Betimleme
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Yatırımcı İlişkileri
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Yasal Hükümler
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                <ul className="flex flex-col gap-y-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Yardım Merkezi
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] vhover:text-blue-500 hover:text-blue-500 duration-500"
                    >
                      İş İmkanları
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Çerez Tercihleri
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="sm:w-4/12 w-full md:mt-0 mt-8 sm:text-start text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <ul className="flex flex-col gap-y-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Hediye Kartları
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Kullanım Koşulları
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-sm font-normal font-Helvetica text-[#808080] hover:text-blue-500 duration-500"
                    >
                      Kurumsal Bilgiler
                    </Link>
                  </li>
                  <div className="flex gap-4 md:pt-14 pt-3 items-center sm:justify-start justify-center">
                    <li>
                      <Link href="/" className="">
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
  );
};

export default Footers;
