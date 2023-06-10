import { getDate } from "@/data/mutations";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";

const Card = ({ image, title, date }) => {
  return (
    <div
      className="hover:scale-105 ease-in duration-200 bg-gradient-to-r from-neutral-600 to-neutral-800 flex justify-start gap-4 lg:w-[500px] text-white pr-2 mb-4 drop-shadow"
      style={{ borderRadius: 6 }}
    >
      <Image
        src={image}
        width={400}
        height={400}
        alt=""
        style={{
          objectFit: "cover",
          width: 150,
          height: 150,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      />
      <div className="inline-block pt-4 mx-4 w-full">
        <h3 className="text-thin text-justify mb-4 border-b-[1px] border-gray-500">
          {title}
        </h3>
        <div className="flex gap-2 items-center text-gray-300">
          <AiOutlineClockCircle />
          {getDate(date)}
        </div>
      </div>
    </div>
  );
};

export default Card;
