import React from "react";

// images
import pwd1 from "../assets/Images/pw2.jpg";

import Countdown from "../ui/Countdown";

const DateComponents = () => {
  return (
    <div
      className="h-80 max-w-xl m-auto w-full bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${pwd1})`
      }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-center text-center">
        <div className="flex flex-col gap-6">
            <h1 data-aos="fade-up"
        data-aos-duration="1000" className="text-white font-Sub font-semibold text-2xl uppercase tracking-wider">Save The Date</h1>
            <div data-aos="fade-up"
        data-aos-duration="1000">
                <Countdown targetDate="2026-03-25T00:00:00" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default DateComponents;
