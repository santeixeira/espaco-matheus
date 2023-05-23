import React from "react";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

const Milestone = ({ icon, description, institute, date }) => {
  return (
    <div
      className="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-100 via-stone-400 to-[#DEC8A6] flex justify-evenly items-center w-full text-white pr-2 drop-shadow-xl"
      style={{ borderRadius: 6 }}
    >
      <div className="flex text-black w-[30%] items-center justify-center">
        {icon}
      </div>
      <div className="inline-block m-4 w-[70%]">
        <Link href={"/#"}>
          <h3 className="text-thin text-justify my-2 text-black hover:font-medium ease-in duration-100">
            {description}
          </h3>
          <h4 className="text-thin text-justify my-2 text-black hover:font-medium ease-in duration-100">
            {institute}
          </h4>
        </Link>
        <div className="flex gap-1 items-center text-gray-600 my-2">
          <BiCalendar />
          {date}
        </div>
      </div>
    </div>
  );
};

export default Milestone;
