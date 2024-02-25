import React from 'react'
import csd_logo from '../../public/csdv2Logofooter.svg'
import Image from "next/image";
import Link from 'next/link';

const UnderConstruction = () => {
  return (
   <section className="fixed min-h-screen z-10 bg-white min-w-full p-20 ">
     <div className='justify-center text-center '>

  <Link href="https://cyberspacedigital.in/">
  <div>
  <p className="cursor-pointer">Designed & Developed by</p>
  <h1>Site Expired Please contact Admin</h1>
  <Image src={csd_logo} 
    /></div></Link>
  
</div></section>
  )
}

export default UnderConstruction