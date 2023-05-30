"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchSlideData } from "@/data/mutations";

const endpoint = process.env.API_URL_DEV + "/galeria";

const RangeSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchSlideData(setImages);
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 4, spacing: 15 },
    range: {
      min: -5,
      max: 5,
    },
  });

  return (
    <div className="flex space-x-4 overflow-x-auto">
      {images.map((e, n) => {
        return (
          <div className="relative" key={e.id}>
            <Image
              src={endpoint + `/${images[n].id}`}
              width={300}
              height={300}
              alt={"Test"}
              style={{
                objectFit: "cover",
                borderRadius: 4,
              }}
              className=" h-72 w-24"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RangeSlider;
