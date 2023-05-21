"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import SliderData from "@/data/SliderData.js";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTimeout(() => {nextSlide()}, 3000);
  }, []);

  return (
    <div className="relative flex justify-center m-4">
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
                style={{ objectFit: "cover", maxHeight: 500 }}
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
  );
};

export default Slider;
