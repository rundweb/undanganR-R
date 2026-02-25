import React, { useRef, useState } from "react";

// images
import bg from "../assets/Images/bg.png";
import wd from "../assets/Images/pw7.jpg";
import bgwd from "../assets/Images/bgwd.png";

// icons
import { FaEnvelopeOpenText } from "react-icons/fa";
import PengantinComponents from "./PengantinComponents";

// music
import musicFile from "../assets/music/akad.mp3";
import DateComponents from "./DateComponents";
import AkadNikah from "./AkadNikah";

const FirstComponents = () => {
  const [isi, setIsi] = useState(false);

  const audioRef = useRef(null);

  const handleClick = () => {
    setIsi(true);
    audioRef.current.play();
  };
  return (
    <div>
      <div
        className="max-w-xl relative flex items-center justify-center min-h-screen m-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className={`z-10 relative flex flex-col gap-6 items-center justify-center text-center ${isi ? "opacity-0" : "opacity-100"} duration-700 transition-all ease-linear`}
        >
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="font-Sub font-semibold tracking-wide text-lg text-amber-950"
          >
            WEDDING INVITATION
          </p>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="relative"
          >
            <div className="absolute z-10 -bottom-20">
              <img src={bgwd} alt="" className="w-full" />
            </div>
            <img
              src={wd}
              alt="wd-raka-risma"
              className="w-56 h-80 rounded-full shadow-lg object-cover relative z-20"
            />
          </div>
          <div className="flex items-center justify-center flex-col mt-4">
            <h1
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="font-Heading text-5xl tracking-wide text-amber-900 mb-2.5"
            >
              Iis & Raka
            </h1>
            <h2
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
              className="font-Body font-medium text-sm tracking-wider text-amber-950 mb-6"
            >
              Rabu, 25 Maret 2026{" "}
            </h2>
            <button
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
              data-aos-offset="1"
              onClick={handleClick}
              className="flex items-center font-Body bg-amber-950/80 w-max py-2.5 px-6 rounded-full text-sm tracking-wide text-white gap-2"
            >
              <FaEnvelopeOpenText />
              Buka Undangan
            </button>
          </div>
        </div>

        <div
          className={`absolute top-2/4 -translate-y-2/4 px-8 flex items-center justify-center flex-col text-center ${isi ? "opacity-100" : "opacity-0"} transition-all duration-1000 ease-in-out delay-1000`}
        >
          <h1 className="font-Sub text-amber-900 font-medium tracking-wide text-sm leading-6">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”
          </h1>
          <div className="relative">
            <p className="font-Sub text-amber-900 font-semibold tracking-wide text-sm mt-4">
              Ar-Rum:21
            </p>
            <div className="absolute -bottom-24">
              <img src={bgwd} alt="bg-wd iis dan raka" className="w-24" />
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
      </audio>

      {isi && (
        <div>
          <PengantinComponents /> <DateComponents /> <AkadNikah />
        </div>
      )}
    </div>
  );
};

export default FirstComponents;
