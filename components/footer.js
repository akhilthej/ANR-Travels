import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaRegClock,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneSquareAlt,
  FaVoicemail,
  FaCalendarWeek,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Logo from "../public/logo.png";
import csd_logo from '../public/csdv2Logofooter.svg'
import Link from "next/link";

const footer = () => {
  return (
    <section>
    <div>
      <div className="bg-gray-100 py-16 px-16">
        <div className="container mx-auto flex flex-col space-y-24 ">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="col-span-1 flex flex-row space-x-3">
              <FaMapMarkedAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">ADDRESS</p>
                <p className="text-gray-600 font-medium">
                SBI Bank Anand nagar colony ,Banjara Hills Care hospital back side
                      <br /> Hyderabad, Telangana.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaPhoneAlt className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">PHONES</p>
                <p className="text-gray-600 font-medium">
                  BOOK A RIDE: (+91) 970 489 9400 
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-row space-x-3">
              <FaRegClock className="w-12 h-12 text-amber-600  p-1" />
              <div className="space-y-2">
                <p className="text-gray-500">WORKING HOURS</p>
                <p className="text-gray-600 font-medium">
                24/7 Available
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="col-span-1 space-y-8">
              <Image src={Logo} alt="Logo" />

              <p className="text-gray-500">
                ANR Travels has provided car services in  SBI Bank Anand nagar colony Banjara Hills, area since 2005.
                What started as a small company has grown into a premier
                limousine and private transportation company.
              </p>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">OUR SERVICES</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Experiential Tours</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Wedding Limousine</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Corporate Travel</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Airport Transportation</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FaAngleRight className="w-8 h-8 text-gray-500  p-1" />
                  <p className="text-gray-500">Nationwide Transportation</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">DriverUP</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row items-center space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-gray-500  font-light" />
                  <p className="text-gray-500">
                  SBI Bank Anand nagar colony ,Banjara Hills Care hospital back side
                      <br /> Hyderabad, Telangana.
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaPhone className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">(+91) 970 489 9400 </p>
                </div>
               
                <div className="flex flex-row items-center space-x-4">
                  <FaVoicemail className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500"> contact@anrtravels.com</p>
                </div>
                <div className="flex flex-row items-center space-x-4">
                  <FaCalendarWeek className="w-6 h-6 text-gray-500 " />
                  <p className="text-gray-500">Mon-Sn: 08:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
            <div className="col-span-1 space-y-8">
              <div className="flex flex-col space-y-2">
                <p className="text-gray-600 font-medium">SUBSCRIBE</p>
                <p className="border-solid border border-amber-500  w-1/4 "></p>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900   focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
                <button
                  type="submit"
                  className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-blue-300 font-medium   w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="py-8 container mx-auto flex flex-row justify-between px-2">
  <p className="text-black text-sm ">2024 © Cyber Space Digital</p>
  <Link href="https://cyberspacedigital.in/">
  <div>
  <p className="cursor-pointer flex text-xs pb-2">Designed & Developed by</p>
  <Image src={csd_logo} 
      height={35}
      width={150}
    /></div></Link>
  <div className="flex flex-row space-x-3 ">
    <FaFacebook className="w-5 h-5 text-gray-500" />
    <FaInstagram className="w-5 h-5 text-gray-500" />
    <FaWhatsapp className="w-5 h-5 text-gray-500" />
  </div>
</div>


 {/* icons sticky */}
 <div className=" fade-in-left flex items-end justify-start fixed bottom-0 left-0 ml-4 z-10">
    <div> 
      <ul className='flex items-center  -mb-5'>
      <Link href="https://wa.me/919704899400">
        <div className='px-2'>
        <FaWhatsapp className="cursor-pointer w-10 h-10 text-green-500 mb-5 " />
          </div></Link>
        </ul>
        <null className='fade-in-left delay-100 cursor-default text-black italic text-xs pb-2'>Designed & Developed by <Link href="https://cyberspacedigital.in/"> Cyber Space Digital</Link></null>
    </div>
  </div>
</section>
  );
};
export default footer;
