"use client";
import { Button } from "@/components/Button";
import Slider from "@/components/Slider";
import SliderData from "@/components/Slider/SliderData";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const ProjetoUpload = () => {
  const [] = useState();
  return (
    <div id="contatos" className="max-w-[1080px] mx-auto h-screen m-[15em]">
      <div className="p-5">
        <h1 className="text-left text-5xl py-4 px-4">Peformance.</h1>
        <p className="text-xl font-thin text-justify px-4 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sequi enim necessitatibus quia quis veniam nisi voluptate reiciendis
          illum sunt nostrum ea earum similique, harum aperiam praesentium
          eveniet beatae assumenda?
        </p>
        <div className="flex items-center justify-center">
          <Button
            icon={<FaPlus/>}
            message={"Adicionar"}
            alignment={"center"}
          />
        </div>
        <Slider slides={SliderData} />
      </div>
    </div>
  );
};

export default ProjetoUpload;
