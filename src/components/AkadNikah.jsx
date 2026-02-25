import React from "react";

import bgAkad from "../assets/Images/bg.png";
import bgAkad2 from "../assets/Images/bg2.png";

// icons
import { FaHouseChimney } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const AkadNikah = () => {
  return (
    <div
      className="h-screen max-w-xl m-auto w-full bg-fixed bg-center bg-cover flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${bgAkad})`,
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-cover bg-bottom rounded-full border-4 border-white shadow-2xl p-12 w-full flex items-center justify-center px-8 py-20"
        style={{ backgroundImage: `url(${bgAkad2})` }}
      >
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="flex flex-col gap-2.5">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-amber-900 font-Sub text-2xl font-semibold tracking-wide"
            >
              AKAD NIKAH
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-amber-900 font-Body text-lg font-medium tracking-wide"
            >
              RABU
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-amber-900 font-Body text-4xl font-semibold tracking-wide my-2"
            >
              25
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-amber-900 font-Body text-sm font-medium tracking-wide"
            >
              MARET 2025
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-amber-900 font-Body text-sm font-medium tracking-wide"
            >
              10:00 WIB -Selesai
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" className="my-2">
            <FaHouseChimney className="text-amber-900 text-xl" />
          </div>
          <div className="flex flex-col gap-1 justify-center items-center">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-Sub text-sm font-medium text-amber-900"
            >
              Rumah Mempelai Wanita
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="font-Sub text-sm font-medium text-amber-900"
            >
              Gang getrak, Dusun manis, rt/rw 004/001, desa Cihideunggirang, kec
              cidahu, kab kuningan
            </p>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              href="https://maps.app.goo.gl/ehBvpMwyYtFwwc4TA"
              target="blank"
              className="flex items-center font-Body bg-amber-950/90 mt-6 w-max py-2.5 px-6 rounded-full text-xs tracking-wide text-white gap-2"
            >
              <FaLocationDot /> LIHAT LOKASI
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkadNikah;
