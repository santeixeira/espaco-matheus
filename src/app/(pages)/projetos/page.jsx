import React from "react";
import DefaultPage from "@/pages/Default";
import Link from "next/link";

const page = () => {
  return (
    <>
      <DefaultPage
        heading={"Projetos de Matheus Carneiro"}
        message={"Projetos atuais e anteriores."}
      >
        <Link href={"/projetos/espaco-icosaedrico"}>
          <div
            className="bg-white/80 mt-10 px-8 pb-10 lg:h-[200px] text-black hover:scale-105 duration-200 ease-in"
            style={{ borderRadius: 6 }}
          >
            <h1 className="text-xl">Espaço Icosaédrico</h1>
            <h2 className="w-full">
              O artista, a partir do centro do seu corpo, passa pelas 27
              direções espaciais de Rudolf Leban. Numa nuance entre os espaços,
              por meio de poses dançadas, Matheus doa-se para quem assite de
              modo que você possa publicar nas redes sociais e manifestar o seu
              olhar sobre a performace.
            </h2>
          </div>
        </Link>
      </DefaultPage>
    </>
  );
};

export default page;
