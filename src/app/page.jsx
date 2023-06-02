import Hero from "@/components/Hero";
import News from "@/pages/Work";
import Gallery from "@/pages/Gallery";
import Instagram from "@/pages/Instagram";

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
