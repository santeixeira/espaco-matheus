"use client";
import React, { useEffect } from "react";
import Milestone from "@/components/Milestone";
import { FaGraduationCap } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Honors() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const variant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200 },
  };

  useEffect(() => {
    inView ? control.start("visible") : control.start("hidden");
  }, [control, inView]);
  return (
    <div
      className="mx-auto items-center drop-shadow-2xl"
      style={{ borderRadius: 6 }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        variants={variant}
        animate={control}
      >
        <h1 className="lg:my-10">Formações</h1>
        <div className=" lg:grid lg:grid-cols-2 gap-8 justify-center items-center mx-4">
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
      </motion.div>
    </div>
  );
}

export default Honors;
