"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { fetchSlideData } from "@/data/mutations";

const endpoint = process.env.API_URL_DEV + "/galeria"

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
  useEffect(() => {
    fetchSlideData(setImages);
    setTimeout(() => {
      nextSlide();
    }, 5000);
  });

  return (
    <div className="relative flex justify-center m-4">
      {images.map((e, index) => {
        console.log(endpoint + `/${images[index].id}`)
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowLeft
              onClick={prevSlide}
              className="absolute top-[50%] left-[30px] text-white/30 cursor-pointer select-none z-[2]"
              size={20}
            />
            {index === current && (
              <Image
                src={ endpoint + `/${images[index].id}`}
                alt=""
                width={1440}
                height={800}
                style={{ borderRadius: 4 }}
                className="object-cover max-h-[800px] h-[600px] "
              />
            )}
            <FaArrowRight
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
