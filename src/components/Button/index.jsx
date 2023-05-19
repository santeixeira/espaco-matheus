import React from "react";

export const Button = ({ icon, message, alignment, borderColor }) => {
  return (
    <button
      style={{ alignContent: alignment, borderColor: borderColor }}
      className="inline-block my-5 px-8 py-2 border"
    >
      <div className="flex justify-center items-center gap-1">
        {icon}
        {message}
      </div>
    </button>
  );
};
