"use client";
import { fetchSlideData } from "@/data/mutations";
import { useState, useEffect } from "react";
import { Image } from "next/image";

const endpoint = process.env.API_URL_DEV + "/galeria/";

const AlbumProject = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchSlideData(setImages);
  }, []);

  return (
    <div>
      {images.map((e, index) => {
        return (
          <div key={index}>
            <Image
              src={endpoint + `${images[index].id}`}
              width={200}
              height={200}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default AlbumProject;
