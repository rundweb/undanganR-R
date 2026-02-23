import React from 'react'

// images
import bg from '../assets/Images/bg.png'
import wd from '../assets/Images/pw7.jpg'

// icons
import { FaEnvelopeOpenText } from "react-icons/fa";

const FirstComponents = () => {
  return (
    <div className='max-w-xl relative flex items-center justify-center min-h-screen m-auto bg-cover bg-center' style={{backgroundImage:`url(${bg})`}}>
      <div className='z-10 relative flex flex-col gap-5 items-center justify-center text-center'>
        <div data-aos="zoom-in" data-aos-duration="1000">
            <img src={wd} alt="wd-raka-risma" className='w-56 h-80 rounded-full shadow-lg object-cover'/>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" className='font-Sub font-semibold tracking-wide text-sm text-emerald-950 mb-4'>WEDDING INVITATION</p>
            <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" className='font-Heading text-5xl tracking-wide text-amber-900 mb-2'>Risma & Raka</h1>
            <h2 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600" className='font-Body text-sm tracking-wider text-emerald-950 mb-5'>Rabu, 25 Maret 2026 </h2>
            <a data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800" data-aos-offset="1" href="SecondLook.jsx" className='flex items-center font-Body bg-amber-950/80 w-max py-2.5 px-6 rounded-full text-sm tracking-wide text-white gap-2'><FaEnvelopeOpenText />Buka Undangan</a>
        </div>
      </div>
    </div>
  )
}

export default FirstComponents
