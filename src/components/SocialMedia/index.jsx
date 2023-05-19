import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";

const InstagramImg = ({ socialImg }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        width={1440}
        height={600}
        style={{ maxHeight: 296, maxWidth: 296, objectFit: "cover" }}
      />
      {/* Overlay */}
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaHeart size={20} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
