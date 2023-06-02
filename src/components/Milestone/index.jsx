import React from "react";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

const Milestone = ({ icon, description, institute, date }) => {
  return (
    <Link href={"/#"} className="hover:scale-110 ease-in duration-100">
      <div
        className="lg:flex lg:my-0 my-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-neutral-100 via-stone-400 to-[#DEC8A6] flex justify-evenly items-center w-full text-white pr-2 drop-shadow-xl"
        style={{ borderRadius: 6 }}
      >
        <div className="flex text-black w-[30%] items-center justify-center">
          {icon}
        </div>
        <div className="inline-block m-4 w-[70%]">
          <h3 className="text-thin text-justify my-2 text-black ">
            {description}
          </h3>
          <h4 className="text-thin text-justify my-2 text-black ">
            {institute}
          </h4>

          <div className="flex gap-1 items-center text-gray-600 my-2">
            <BiCalendar />
            {date}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Milestone;
