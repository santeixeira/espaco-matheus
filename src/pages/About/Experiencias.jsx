import Link from "next/link";
import React from "react";

const Experiencias = ({ date, empresa, cargo, descricao, link }) => {
  return (
    <div className=" lg:flex justify-between items-start gap-12">
      <div className="lg:w-1/6">
        <h3 className="text-xl py-2">{date}</h3>
      </div>
      <div className="w-5/6 lg:text-left mx-auto">
        <Link href={`${link}`}>
          <h3 className="text-2xl hover:scale-105 ease-in duration-100">{empresa}</h3>
        </Link>
        <p className="text-neutral-700 py-2">{cargo}</p>
        <h4 className="text-neutral-700 mt-2 mb-6 text-justify">{descricao}</h4>
      </div>
    </div>
  );
};

export default Experiencias;
