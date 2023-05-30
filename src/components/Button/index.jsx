import React from "react";

const Button = ({
  icon,
  message,
  alignment,
  borderColor,
  color,
  bg,
  props,
}) => {
  return (
    <button
      type="submit"
      onClick={props}
      style={{
        alignContent: alignment,
        borderColor: borderColor,
        color: color,
        backgroundColor: bg,
        borderRadius: 4,
      }}
      className="inline-block my-4 px-8 py-2 border hover:border-green-300 hover:outline-4 ease-in duration-100 hover:scale-95"
    >
      <div className="flex justify-center items-center gap-2">
        {icon}
        {message}
      </div>
    </button>
  );
};

export default Button;
