import React from "react";
import InstagramImg from "@/components/SocialMedia";
import InstagramData from "./InstagramData";

const Instagram = () => {
  return (
    <div className=" bg-white text-black h-screen">
      <div className="max-w-[1240px] mx-auto text-center py-24">
        <h1>Follow me on Instagram</h1>
        <p className="pb-4">@matheuscarneirobeh</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
          {InstagramData.map((img, index) => {
            return <InstagramImg socialImg={img.image} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
