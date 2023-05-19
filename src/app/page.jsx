"use client";
import Hero from "@/components/Hero";
import Gallery from "@/pages/Galeria";
import Instagram from "@/pages/Instagram";

export default function Home() {
  return (
    <div>
      <Hero
        heading={"Espaço Matheus Carneiro"}
        message={
          "A dança é uma poesia em movimento, onde a tensão se torna sublime, e o palco cantarola os passos em ondas."
        }
      />
      <Gallery />
      <Instagram />
    </div>
  );
}
