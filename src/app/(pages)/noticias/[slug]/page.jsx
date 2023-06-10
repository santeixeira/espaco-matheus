"use client";
import { fetchNewsById, fetchNewsByTitle, getDate } from "@/data/mutations";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Page = () => {
  const [data, setData] = useState({});
  const id = sessionStorage.getItem("_news");
  useEffect(() => {
    fetchNewsById(setData, id);
  }, [data.id, id]);
  return (
    <div className="max-w-[1080px] mx-auto pt-[15em] p-4">
      <Suspense fallback={<p>Carregando...</p>}>
        <section className="mb-[10em]">
          <h1 className="flex text-left text-5xl m-0 p-0">{data?.title}</h1>
          <p className="text-sm py-4">{getDate(data?.date)}</p>
          <Image
            src={data?.image}
            width={1200}
            height={1200}
            alt=""
            className="w-full h-screen "
            style={{ objectFit: "cover", borderRadius: 4 }}
          />
          <h2 className="text-thin py-4 pb-2 text-justify">
            {data?.description}
          </h2>
        </section>
        <section className=" border-t-[1px] border-gray-500">
          <div className="mt-4 flex justify-start items-center gap-4">
            <h4>Compartilhar</h4>
            <Link href={"https://www.facebook.com/sharer/sharer.php?u=" + "x"}>
              <FaFacebook className="hover:text-blue-500 ease-in duration-100" />
            </Link>
            <Link href={"https://twitter.com/intent/tweet?text=" + "x"}>
              <FaTwitter className="hover:text-cyan-500 ease-in duration-100" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/shareArticle?mini=true&url=" + "x"
              }
            >
              <FaLinkedin className="hover:text-sky-700 ease-in duration-100" />
            </Link>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

export default Page;
