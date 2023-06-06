"use client";
import { useState, useEffect } from "react";
import { fetchSlideData } from "@/data/mutations";
import Image from "next/image";

const endpoint = process.env.API_URL_DEV + "/galeria/";

const Page = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchSlideData(setImages);
  }, []);

  return (
    <main className="max-w-[1080px] pt-[10em] mx-auto">
      <div className="lg:grid grid-cols-2 gap-10 grid-flow-row">
        {images.map((e, index) => {
          return (
            <div className="lg:m-2 m-4" key={index}>
              <Image
                src={endpoint + `${images[index].id}`}
                width={1200}
                height={1200}
                className="w-full lg:h-[480px] h-[360px] object-cover"
                alt={images[index].description}
              />
              <h2 className="text-2xl lg:py-2 pb-2">{images[index].description}</h2>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Page;
