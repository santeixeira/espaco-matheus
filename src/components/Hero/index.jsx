import React, { useEffect } from "react";
import { Button } from "../Button";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-image">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]"></div>
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="text-xl py-5">{message}</p>
        <Button message={"Descubra mais sobre mim"}/>
      </div>
    </div>
  );
};

export default Hero;
