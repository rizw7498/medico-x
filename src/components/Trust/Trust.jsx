import React from "react";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../../Utilty/animation";

const Trust = () => {
  return (
    <section className="bg-brandWhite mt-20 py-10">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.2)}
          whileInView="animate"
          initial="initial"
          className=" py-6 font-bold text-darkBlue text-center text-4xl"
        >
          Why you can trust on this tool ??
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
          variants={SlideUp(0.4)}
          whileInView="animate"
          initial="initial"
          className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
            <img src={Icon1} alt="" className="mx-auto md:mx-0" />
            <p className="text-2xl font-semibold">Based on reliable sources</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odit.{" "}
            </p>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odit.{" "}
            </p>
          </motion.div>
          <motion.div
          variants={SlideUp(0.6)}
          whileInView="animate"
          initial="initial"
          className="space-y-6 text-center md:text-left md:px-16 xl:px-32">
            <img src={Icon2} className="mx-auto md:mx-0" alt="" />
            <p className="text-2xl font-semibold">Based on reliable sources</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odit.{" "}
            </p>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, odit.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
