"use client";
import { fetchNewsByTitle } from "@/data/mutations";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Page = ({ params }) => {
  const [data, setData] = useState({});
  const slug = decodeURIComponent(params.slug);
  useEffect(() => {
    fetchNewsByTitle(setData, slug);
  }, [data.id, slug]);
  return (
    <div className="max-w-[1080px] mx-auto pt-[15em] bg-black p-4">
      <section className="mb-[10em]">
        <h1 className="flex text-left text-5xl m-0 p-0">{data.title}</h1>
        <p className="text-sm py-4">{data?.date.substring(0, 10)}</p>
        <Image
          src={data.image}
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
            href={"https://www.linkedin.com/shareArticle?mini=true&url=" + "x"}
          >
            <FaLinkedin className="hover:text-sky-700 ease-in duration-100" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
