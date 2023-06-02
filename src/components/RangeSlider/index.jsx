"use client";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState, useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const endpoint = process.env.API_URL_DEV + "/galeria";

const RangeSlider = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(`${endpoint}/${images[0].id}`);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(endpoint + "/" + images[newIdx].id);
      setSelectedImageIndex(newIdx);
      if (carouselItemsRef?.current[newIdx]) {
        carouselItemsRef?.current[newIdx]?.scrollIntoView({
          block: "nearest",
          inline: "center",
          behavior: "smooth",
        });
      }
    }
  };

  const handleRightClick = () => {
    if (images && images.length >= 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx == images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className="py-8">
      <div
        className="selected-image lg:h-[720px] h-72"
        style={{ backgroundImage: `url(${selectedImage})` }}
      />
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{
                  backgroundImage: `url(${endpoint}/${images[idx].id})`,
                }}
                key={image.id}
                className={`hover:mt-4 hover:scale-110 ease-in duration-200 carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
        </div>
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          <AiOutlineLeft size={20} />
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          <AiOutlineRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RangeSlider;
