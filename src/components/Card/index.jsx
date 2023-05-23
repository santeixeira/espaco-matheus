import Image from "next/image";
import Link from "next/link";
import { BiCalendar } from "react-icons/bi";

const Card = ({ image, description, date }) => {
  return (
    <div
      className="bg-gradient-to-r from-neutral-600 to-neutral-800 flex justify-between items-center gap-4 w-[500px] text-white pr-2 mb-4 drop-shadow"
      style={{ borderRadius: 6 }}
    >
      <Image
        src={image}
        width={400}
        height={400}
        alt=""
        style={{
          objectFit: "",
          width: 150,
          height: 150,
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        }}
      />
      <div className="inline-block mx-4">
        <Link href={"/#"}>
          <h3 className="text-thin text-justify mb-4 hover:font-medium  ease-in duration-100">
            {description}
          </h3>
        </Link>
        <div className="flex gap-1 items-center text-gray-300">
          <BiCalendar />
          {date}
        </div>
      </div>
    </div>
  );
};

export default Card;
