"use client";

const Modal = ({ title, children }) => {
  return (
    <div
      className="mx-auto fixed bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-white via-[#C2B6A9] to-[#DEC8A6] max-w-[1280px] max-h-[1280px] text-black z-10"
      style={{ borderRadius: 4 }}
    >
      <div className="p-12">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
