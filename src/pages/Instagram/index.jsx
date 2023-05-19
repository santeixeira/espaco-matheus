import React from "react";
import InstagramImg from "@/components/SocialMedia";
import InstagramData from "./InstagramData";
import { FaInstagram } from "react-icons/fa";
import { Button } from "@/components/Button";
import Link from "next/link";

const Instagram = () => {
  return (
    <div className="mx-auto bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-white via-[#C2B6A9] to-[#DEC8A6] text-black h-screen">
      <div className="max-w-[1240px] mx-auto text-center py-4">
        <h1>Instagram</h1>
        <p className="pb-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          voluptate excepturi in illo enim possimus fugiat ab, cum distinctio
          veritatis eligendi blanditiis saepe nulla praesentium harum voluptas
          sunt omnis tenetur!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4">
          {InstagramData.map((img, index) => {
            return <InstagramImg socialImg={img.image} key={index} />;
          })}
        </div>
        <div className="my-4">
          <Link href={"https://www.instagram.com/matheuscarneirobeh/"}>
            <Button
              icon={<FaInstagram />}
              message={"@matheuscarneirobeh"}
              borderColor={"black"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
