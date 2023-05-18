"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero heading={"Espaço Matheus Carneiro"} 
      message={"A dança é uma poesia em movimento, onde a tensão se torna sublime, e o palco cantarola os passos em ondas."} />
    </div>
  );
}
