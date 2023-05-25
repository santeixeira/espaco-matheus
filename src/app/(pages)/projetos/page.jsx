"use client";
import { Button } from "@/components/Button";
import Slider from "@/components/Slider";
import SliderData from "@/components/Slider/SliderData";
import RangeSlider from "@/components/RangeSlider";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "@/components/Modal";
import UploadButton from "@/components/Upload";

const ProjetoUpload = () => {
  const [modal, setModal] = useState(false);
  return (
    <div id="projetos" className="max-w-[1080px] mx-auto h-screen m-[15em]">
      <div className={"justify-center items-center"}>
        <Modal title={"Modal"}>
          <div className="flex items-center justify-start">
            <div className="mx-auto w-full max-w-lg">
              <form action="https://api.web3forms.com/submit" className="mt-10">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="relative z-0 col-span-2">
                    <textarea
                      name="message"
                      rows="5"
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                      placeholder=" "
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                      Descreva o sentimento da fotografia!
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <UploadButton />
        </Modal>
      </div>
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
            icon={<FaPlus />}
            message={"Adicionar"}
            alignment={"center"}
          />
        </div>
        <div>
          <Slider slides={SliderData} />
        </div>

        <div className="py-4">
          <RangeSlider />
        </div>
      </div>
    </div>
  );
};

export default ProjetoUpload;
