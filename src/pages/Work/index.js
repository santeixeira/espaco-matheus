"use client";
import React, { useState } from "react";
import Image from "next/image";
import WorkData from "@/data/WorkData";
import Link from "next/link";
import { BiAlarm, BiCalendar } from "react-icons/bi";

const News = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div id="test" className="max-w-[960px] mx-auto h-screen py-8">
      <h1 className="">Ultimos Trabalhos</h1>
      <p className="text-xl font-thin my-10 text-justify m-4 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
        itaque. Inventore eum at nostrum maiores perferendis, asperiores aliquid
        optio quo totam accusamus nemo ducimus repellat enim ratione molestiae
        deserunt!
      </p>
      <div className="flex justify-between gap-6 mx-4">
        <div className="items-center">
          <Image
            src={WorkData[0].image}
            width={500}
            height={400}
            alt=""
            style={{
              objectFit: "cover",
              height: 400,
              paddingBottom: 12,
              alignItems: "center",
            }}
          />
          <Link href={"/#"}>
            <p className="text-thin text-justify my-4 hover:font-medium ease-in duration-150">{WorkData[0].description}</p>
          </Link>
          <div className="flex gap-1 items-center text-gray-500">
            <BiCalendar />
            {WorkData[0].date}
          </div>
        </div>
        <div className="items-center mx-auto ">
          {WorkData.map((card, index) => {
            return (
              <Card
                image={card.image}
                description={card.description}
                date={card.date}
                key={index}
              />
            );
          }).filter((n) => n.key > 0 && n.key < 4)}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, description, date }) => {
  return (
    <div
      className="bg-gradient-to-r from-neutral-300 to-stone-400 flex justify-between items-center gap-4 w-[500px] text-white pr-2 mb-4 drop-shadow"
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
          <h3 className="text-thin text-justify mb-4 text-black hover:font-medium  ease-in duration-100">
            {description}
          </h3>
        </Link>
        <div className="flex gap-1 items-center text-gray-600">
          <BiCalendar />
          {date}
        </div>
      </div>
    </div>
  );
};

export default News;
