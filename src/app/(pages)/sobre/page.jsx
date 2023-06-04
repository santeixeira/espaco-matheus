import Video from "@/components/Video";
import About from "@/pages/About";
import Honors from "@/pages/About/Honors";
import React from "react";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      <Video />
      <div className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-white via-[#C2B6A9] to-[#DEC8A6]">
        <About />
      </div>
    </div>
  );
};

export default page;
