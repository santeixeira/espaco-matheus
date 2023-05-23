import React from "react";
import Milestone from "@/components/Milestone";
import { FaBriefcase, FaGraduationCap, FaMedal } from "react-icons/fa";
import { Button } from "@/components/Button";
import Link from "next/link";
import Experiencias from "./Experiencias";
import ExperiencesData from "@/data/ExperiencesData";

function Honors() {
  return (
    <div
      className="mx-auto items-center h-screen  drop-shadow-2xl pt-4"
      style={{ borderRadius: 6 }}
    >
      <h1 className="lg:my-10">Formações</h1>
      <div className="lg:grid lg:grid-cols-2 gap-8 justify-center items-center">
        <Milestone
          icon={<FaGraduationCap size={40} />}
          description={"Graduação Licenciatura em Dança"}
          institute={"Universidade Federal do Ceará"}
          date={"Dezembro 2021"}
        />
        <Milestone
          icon={<FaGraduationCap size={40} />}
          description={"Mestrado em Danças Urbanas"}
          institute={"Universidade Federal do Ceará"}
          date={"Dezembro 2023"}
        />
      </div>
      <div className="mx-auto">
        <h1 className="my-10 mt-20">Experiências</h1>
        {ExperiencesData.map((exp, index) => {
          return (
            <Experiencias
              date={exp.dates}
              empresa={exp.empresa}
              cargo={exp.cargo}
              descricao={exp.descricao}
              link={exp.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Honors;