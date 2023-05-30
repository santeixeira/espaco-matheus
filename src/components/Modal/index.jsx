"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ title, children, open, close }) => {
  return (
    <div
      className={
        open
          ? "z-90 justify-center items-center opacity-[1] ease-in duration-200"
          : "absolute z-[-10] justify-center items-center opacity-0 ease-in duration-200"
      }
    >
      <div className="top-0 left-0 right-0 bottom-0 bg-black/75 z-50 fixed">
        <div
          className="top-[60px] fixed backdrop-opacity-95 backdrop-blur bg-gray-700/80 max-w-[540px] max-h-[980px] mx-auto inset-x-0 text-black z-10 overflow-y-auto"
          style={{ borderRadius: 4 }}
        >
          <div className="pt-6 pr-6">
            <header className="flex justify-end">
              <AiOutlineClose
                size={20}
                className="text-white cursor-pointer hover:text-emerald-400"
                onClick={close}
              />
            </header>
          </div>

          <div className="px-12">
            <h1 className="text-white">{title}</h1>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
