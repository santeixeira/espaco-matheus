import React from "react";

const DefaultPage = ({ heading, message, children }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 lg:bg-fixed bg-center bg-cover custom-image-2">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2] h-screen" />
      <div className="p-5 text-white z-[2] lg:mt-[-2.5rem] mt-[2.5em]">
        <h2 className="text-5xl font-bold mt-12">{heading}</h2>
        <p className="text-xl py-5">{message}</p>
        <div className="mx-auto max-w-[54em]">{children}</div>
      </div>
    </div>
  );
};

export default DefaultPage;
