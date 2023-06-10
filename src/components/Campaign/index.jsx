"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAllNews, getDate } from "@/data/mutations";
const Campaign = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllNews(setData);
  }, []);
  return (
    <div className="lg:grid grid-cols-2 gap-10 grid-flow-row">
      {data.map((value, index) => {
        return (
          <div className="lg:m-2 m-4" key={index}>
            <Link
              href={
                "/noticias/" + value?.title.replace(/\s+/g, "-").toLowerCase()
              }
              onClick={() => sessionStorage.setItem("_news", value?.id)}
            >
              <Image
                src={value?.image}
                width={1000}
                height={1000}
                alt=""
                className="w-full lg:h-[480px] h-[360px] hover:scale-[1.015] ease-in duration-200"
                style={{ objectFit: "cover", borderRadius: 4 }}
              />
              <p className="text-sm lg:pt-4 py-2">{getDate(value?.date)}</p>
              <h2 className="text-2xl lg:py-2 pb-2">{value?.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Campaign;
