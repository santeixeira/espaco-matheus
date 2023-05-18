import React from "react";

export const Button = ({ message, alignment }) => {
  return (
    <button
      style={{ alignContent: alignment }}
      className="inline-block my-5 px-8 py-2 border"
    >
      {message}
    </button>
  );
};
