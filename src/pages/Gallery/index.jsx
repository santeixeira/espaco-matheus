import SliderData from "@/data/SliderData.js";
import Button from "@/components/Button";
import Link from "next/link";
import Slider from "@/components/Slider";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[960px] mx-auto lg:h-screen">
      <h1>Galeria</h1>
      <p className="text-xl font-thin my-10 text-justify  m-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, quos
        itaque. Inventore eum at nostrum maiores perferendis, asperiores aliquid
        optio quo totam accusamus nemo ducimus repellat enim ratione molestiae
        deserunt!
      </p>
      <Slider slides={SliderData} />
      <div className="text-center mt-10">
        <Link href={"/projetos"}>
          <Button message={"Projeto Atual"} />
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
