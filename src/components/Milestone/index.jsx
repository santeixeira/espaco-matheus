import React from "react";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

const Milestone = ({ icon, description, institute, date }) => {
  return (
    <div
      className=" my-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-100 via-stone-200 to-[#DEC8A6] flex justify-evenly items-center w-[500px] text-white pr-2 drop-shadow-xl"
      style={{ borderRadius: 6 }}
    >
      <div className="flex text-black w-[30%] items-center justify-center">{icon}</div>
      <div className="inline-block m-4 w-[70%]">
        <Link href={"/#"}>
          <h3 className="text-thin text-justify my-2 text-black hover:font-medium  ease-in duration-100">
            {description}
          </h3>
          <span className="text-thin text-justify my-2 text-black hover:font-medium  ease-in duration-100">
            {institute}
          </span>
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
