import React from "react";

export const Button = ({ icon, message, alignment, borderColor }) => {
  return (
    <button
      style={{
        alignContent: alignment,
        borderColor: borderColor,
        borderRadius: 4,
      }}
      className="inline-block my-4 px-8 py-2 border hover:border-green-300  ease-in duration-100"
    >
      <div className="flex justify-center items-center gap-2">
        {icon}
        {message}
      </div>
    </button>
  );
};
