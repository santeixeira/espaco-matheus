"use client";
import { useEffect } from "react";
import ExperiencesData from "@/data/ExperiencesData";
import ExperienciasComponents from "@/components/Experiences";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experiencias = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView]);

  const variant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 200 },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        variants={variant}
        animate={control}
      >
        <h1 className="pb-10">Experiências</h1>
        {ExperiencesData.map((exp, index) => {
          return (
            <ExperienciasComponents
              date={exp.dates}
              empresa={exp.empresa}
              cargo={exp.cargo}
              descricao={exp.descricao}
              link={exp.link}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Experiencias;
