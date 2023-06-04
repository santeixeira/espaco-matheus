"use client";
import Button from "@/components/Button";
import Link from "next/link";
import Slider from "@/components/Slider";
import { useEffect, useState } from "react";
import { fetchSlideData } from "@/data/mutations";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const [image, setImages] = useState([]);
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 200 },
  };

  useEffect(() => {
    fetchSlideData(setImages);
    inView ? control.start("visible") : control.start("hidden");
  }, [image, control, inView]);

  return (
    <div id="gallery" className="max-w-[960px] mx-auto mb-10">
      <motion.div
        ref={ref}
        variants={boxVariant}
        animate={control}
        initial="hidden"
        className="box"
      >
        <h1>Galeria</h1>
        <p className="text-xl font-thin my-10 text-justify  m-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
          itaque. Inventore eum at nostrum maiores perferendis, asperiores
          aliquid optio quo totam accusamus nemo ducimus repellat enim ratione
          molestiae deserunt!
        </p>
        <Slider slides={image} />
        <div className="text-center my-10">
          <Link href={"/projetos/espaco-icosaedrico"}>
            <Button message={"Projeto Atual"} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
