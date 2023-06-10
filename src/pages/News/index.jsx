"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { AiOutlineClockCircle } from "react-icons/ai";
import Card from "@/components/Card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fetchAllNews, getDate } from "@/data/mutations";

const News = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchAllNews(setNews);
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView, news]);

  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -200 },
  };

  return (
    <div id="test" className="max-w-[960px] mx-auto  py-8">
      <motion.div
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
        className="box"
      >
        <h1 className="">Últimas Notícias</h1>
        <p className="text-xl font-thin my-10 text-justify m-4 ">
          No meu portfólio de dança, você encontrará uma variedade de trabalhos
          recentes que abrangem diferentes estilos e abordagens artísticas. Cada
          peça é única e oferece uma experiência visual e emocionalmente
          cativante para os espectadores.
        </p>
        <div className="lg:flex justify-between gap-6 mx-4">
          <Link
            href={
              "/noticias/" + news[0]?.title.replace(/\s+/g, "-").toLowerCase()
            }
            onClick={() => sessionStorage.setItem("_news", news[0]?.id)}
          >
            <div className="items-center hover:scale-105 ease-in duration-200 pb-4">
              <Image
                src={news[0]?.image}
                width={1000}
                height={1000}
                loading="lazy"
                alt=""
                style={{
                  objectFit: "cover",
                  borderRadius: 4,
                  height: 400,
                  alignItems: "center",
                }}
              />
              <p className="text-thin text-justify my-4 hover:font-medium ease-in duration-150 border-b-[1px] border-gray-500">
                {news[0]?.title}
              </p>

              <div className="flex gap-1 items-center text-gray-500">
                <AiOutlineClockCircle />
                {getDate(news[0]?.date)}
              </div>
            </div>
          </Link>

          <div className="items-center mx-auto">
            {news
              .map((card, index) => {
                return (
                  <div key={index}>
                    <Link
                      href={
                        "/noticias/" +
                        card.title.replace(/\s+/g, "-").toLowerCase()
                      }
                      onClick={() => sessionStorage.setItem("_news", card?.id)}
                    >
                      <Card
                        image={card?.image}
                        title={card?.title}
                        date={card?.date.substring(0, 10)}
                      />
                    </Link>
                  </div>
                );
              })
              .filter((n) => n.key > 0 && n.key < 4)}
          </div>
        </div>
        <div className="flex mx-auto item-center justify-center pt-8">
          <Link href={"/noticias"}>
            <Button message={"Leia mais"} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default News;
