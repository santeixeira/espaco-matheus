import React, { useState } from "react";

const UploadButton = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="flex w-full items-center justify-center bg-grey-lighter">
      <label className="w-64 flex bg-black text-white flex-col items-center mt-8 px-2 py-4 text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-transparent hover:text-black hover:bg-white">
        <svg
          className="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span className="mt-2">Selecione uma foto</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          value={props.value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default UploadButton;
