"use client";
import Button from "@/components/Button";
import Link from "next/link";
import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import { fetchSlideData } from "@/data/mutations";

const Gallery = () => {
  const [image, setImages] = useState([]);

  useEffect(() => {
    fetchSlideData(setImages)
  }, [image]);

  return (
    <div id="gallery" className="max-w-[960px] mx-auto mb-10">
      <h1>Galeria</h1>
      <p className="text-xl font-thin my-10 text-justify  m-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
        itaque. Inventore eum at nostrum maiores perferendis, asperiores aliquid
        optio quo totam accusamus nemo ducimus repellat enim ratione molestiae
        deserunt!
      </p>
      <Slider slides={image} />
      <div className="text-center my-10">
        <Link href={"/projetos"}>
          <Button message={"Projeto Atual"} />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
