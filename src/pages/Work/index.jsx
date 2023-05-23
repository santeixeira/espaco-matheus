"use client";
import React, { useState } from "react";
import Image from "next/image";
import WorkData from "@/data/WorkData";
import Link from "next/link";
import { BiAlarm, BiCalendar } from "react-icons/bi";
import Card from "@/components/Card";

const News = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div id="test" className="max-w-[960px] mx-auto lg:h-screen py-8">
      <h1 className="">Últimos Trabalhos</h1>
      <p className="text-xl font-thin my-10 text-justify m-4 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
        itaque. Inventore eum at nostrum maiores perferendis, asperiores aliquid
        optio quo totam accusamus nemo ducimus repellat enim ratione molestiae
        deserunt!
      </p>
      <div className="lg:flex justify-between gap-6 mx-4">
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
            <p className="text-thin text-justify my-4 hover:font-medium ease-in duration-150">
              {WorkData[0].description}
            </p>
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
export default News;
