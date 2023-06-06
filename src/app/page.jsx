import Hero from "@/components/Hero";
import News from "@/pages/News";
import Gallery from "@/pages/Gallery";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        heading={"Espaço Matheus Carneiro"}
        message={
          "A dança é uma poesia em movimento, onde a tensão se torna sublime, e o palco cantarola os passos em ondas."
        }
      />
      <div className="mb-[2.5em]">
        <Gallery />
      </div>
      <div className="bg-fixed">
        <News />
      </div>
    </div>
  );
}
