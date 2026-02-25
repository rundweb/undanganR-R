import React, { useState } from "react";

// images
import bgGallery from "../assets/Images/bggallery.png";
import mppw1 from "../assets/Images/pw1.jpg";
import mppw2 from "../assets/Images/pw2.jpg";
import mppw3 from "../assets/Images/pw3.jpg";
import mppw4 from "../assets/Images/pw4.jpg";
import mppw5 from "../assets/Images/pw5.jpg";
import mppw6 from "../assets/Images/pw6.jpg";

// icons
import { IoClose } from "react-icons/io5";

const Gallery = () => {
  const [openImages, setOpenImages] = useState(false);
  const [idImages, setIdImages] = useState();

  const handleOpen = (id) => {
    setOpenImages(!openImages);
    setIdImages(id);
  };

  const prewed = [
    {
      id: 1,
      name: "prewed1",
      source: mppw1,
      delay: "100",
    },
    {
      id: 2,
      name: "prewed2",
      source: mppw2,
      delay: "150",
    },
    {
      id: 3,
      name: "prewed3",
      source: mppw3,
      delay: "200",
    },
    {
      id: 4,
      name: "prewed4",
      source: mppw4,
      delay: "250",
    },
    {
      id: 5,
      name: "prewed5",
      source: mppw5,
      delay: "300",
    },
    {
      id: 6,
      name: "prewed6",
      source: mppw6,
      delay: "350",
    },
  ];

  return (
    <div
      className="max-w-xl overflow-y-hidden m-auto w-full bg-fixed bg-center bg-cover flex flex-col gap-12 items-center justify-center p-6 py-12"
      style={{
        backgroundImage: `url(${bgGallery})`,
      }}
    >
      <div className="flex flex-col gap-6 text-center">
        <h1
          className="font-Sub font-semibold text-2xl text-amber-900"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          OUR GALLERY
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {prewed.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.delay}
              onClick={() => handleOpen(item.source)}
            >
              <img
                src={item.source}
                alt={item.name}
                className="rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
      {openImages && (
        <div className="fixed max-w-xl w-full m-auto h-screen top-0 left-2/4 -translate-x-2/4 bg-black/50 flex items-center justify-center">
          <div>
            <img
              src={idImages}
              alt="image preview"
              className="w-72 rounded-xl"
            />
          </div>
          <div
            className="fixed text-white/70 text-4xl top-5 right-5"
            onClick={() => handleOpen("")}
          >
            <IoClose />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
