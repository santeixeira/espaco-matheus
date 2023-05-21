"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import CertificateData from "@/data/CertificateData";
import Image from "next/image";
import SliderData from "../Slider/SliderData";

const RangeSlider = () => {
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
      {SliderData.map((img, index) => {
        return (
          <div className="relative" key={index}>
            <Image
              src={img.image}
              width={300}
              height={300}
              alt={"Test"}
              style={{ objectFit: "cover", borderRadius: 4 }}
              className="keen-slider__slide h-[300px] w-[100px]"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RangeSlider;
