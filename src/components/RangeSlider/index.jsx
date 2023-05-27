"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CertificateData from "@/data/CertificateData";
import Image from "next/image";
import SliderData from "../Slider/SliderData";
import { useEffect, useState } from "react";
import axios from "axios";

const endpoint = process.env.API_URL_DEV + "/galeria";

const RangeSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(endpoint);
      setImages(response.data);
    };
    fetchData();
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3.5, spacing: 12.5 },
    range: {
      min: -5,
      max: 5,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider px-10">
      {images.map((e, n) => {
        return (
          <div className="relative" key={e}>
            <Image
              src={endpoint + `/${images[n].id}`}
              width={300}
              height={300}
              alt={"Test"}
              style={{
                objectFit: "cover",
                borderRadius: 4,
              }}
              className="keen-slider__slide h-[300px] w-[100px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RangeSlider;
