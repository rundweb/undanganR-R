import React from "react";

// images
import bg2 from "../assets/Images/bg2.png";

const PengantinComponents = () => {
  return (
    <div
      className="max-w-xl w-full relative flex items-center justify-center min-h-screen m-auto bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex flex-col gap-5 text-center items-center justify-center bg-white/10 backdrop-blur-xs py-8 p-6 rounded-2xl border-4 border-white"
      >
        <div className="flex flex-col gap-2.5">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Sub font-semibold text-xl text-amber-900"
          >
            BRIDE & GROOM
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Sub text-xs tracking-wide font-medium text-amber-950"
          >
            Assalamualaikm Wr. Wb. <br /> Dengan menohon Rahmat & Rudho Allah
            SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri
            acara pernikahan putra-putri kami:
          </p>
        </div>
        <div className="flex flex-col mt-3.5">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Heading text-5xl text-amber-900"
          >
            Iis
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Sub tracking-wide text-2xl font-semibold text-amber-900"
          >
            Iis Rismawati
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-xs font-Sub font-medium text-amber-950 mt-2.5 tracking-wide"
          >
            Putri dari Padangan Bapak Sarkim abdul hakim <br /> & Ibu Ika
            jartika
          </p>
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Sub text-amber-900 font-semibold text-5xl mt-6 mb-8"
          >
            &
          </h3>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Heading text-5xl text-amber-900"
          >
            Raka
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="font-Sub tracking-wide text-2xl font-semibold text-amber-900 -mt-2"
          >
            Raka Gumelar
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="1"
            className="text-xs font-Sub font-medium text-amber-950 mt-2.5 tracking-wide"
          >
            Putri dari Padangan Bapak Dedi Lesmana (alm) <br /> & Ibu Yulis
          </p>
        </div>
      </div>
    </div>
  );
};

export default PengantinComponents;
