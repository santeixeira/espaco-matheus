"use client";
import Image from "next/image";
import React, { useState } from "react";
import SliderData from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Button } from "../Button";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[960px] mx-auto h-screen">
      <h1>Galeria</h1>
      <p className="text-xl font-thin my-10 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos itaque. Inventore eum at nostrum maiores perferendis, asperiores aliquid optio quo totam accusamus nemo ducimus repellat enim ratione molestiae deserunt!
      </p>
      <div className="relative flex justify-center">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/30 cursor-pointer select-none z-[2]"
                size={20}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt=""
                  width={1440}
                  height={800}
                  style={{ objectFit: "cover" }}
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/30 cursor-pointer select-none z-[2]"
                size={20}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
