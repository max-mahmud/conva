import React, { useState } from "react";
import Image from "./Image";
import image1 from "/download.jpg";
import image2 from "/download (4).jpg";
import image3 from "../../public/download (5).jpg";
import image4 from "../../public/download (6).jpg";
import image5 from "../../public/download (7).jpg";
import image6 from "../../public/download (8).jpg";
import image7 from "../../public/download (9).jpg";

const BackgroundImages = ({ setImage, type }) => {
  const data = [
    {
      name: "image1",
      image_url: image1,
    },
    {
      name: "image2",
      image_url: image2,
    },
    {
      name: "image3",
      image_url: image3,
    },
    {
      name: "image4",
      image_url: image4,
    },
    {
      name: "image5",
      image_url: image5,
    },
    {
      name: "image6",
      image_url: image6,
    },
    {
      name: "image7",
      image_url: image7,
    },
  ];
  const [images, setImages] = useState(data);

  return <Image setImage={setImage} type={type} images={images} />;
};

export default BackgroundImages;
