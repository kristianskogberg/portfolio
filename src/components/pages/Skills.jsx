import React, { useEffect } from "react";

import JavaScriptIcon from "../../assets/icons/javascript.png";
import ReactIcon from "../../assets/icons/react.png";
import CPlusPlusIcon from "../../assets/icons/cplusplus.png";
import PythonIcon from "../../assets/icons/python.png";
import GitHubIcon from "../../assets/icons/github.png";
import CSSIcon from "../../assets/icons/css.png";

import PageTitle from "../PageTitle";
import Skill from "../Skill";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const parentVariant = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const childVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  hidden: {
    opacity: 0,
    y: 10,
  },
};

export default function Skills() {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[black] text-gray-300 pt-[80px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col justify-start w-full h-full">
        <PageTitle title={"Skills"} />
        <div>
          <motion.div
            variants={parentVariant}
            initial="hidden"
            //animate={control}
            //ref={ref}
            whileInView={"visible"}
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <motion.p variants={childVariant} className="py-6">
              I'm most experienced with the following technologies:
            </motion.p>
          </motion.div>

          <motion.div
            variants={parentVariant}
            initial="hidden"
            //animate={control}
            //ref={ref}
            whileInView={"visible"}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
          >
            <motion.div variants={childVariant}>
              <Skill variant={childVariant} image={ReactIcon} name={"React"} />
            </motion.div>

            <motion.div variants={childVariant}>
              <Skill image={JavaScriptIcon} name={"Javascript"} />
            </motion.div>

            <motion.div variants={childVariant}>
              <Skill image={CSSIcon} name={"CSS"} />
            </motion.div>

            <motion.div variants={childVariant}>
              <Skill image={CPlusPlusIcon} name={"C++"} />
            </motion.div>

            <motion.div variants={childVariant}>
              <Skill image={PythonIcon} name={"Python"} />
            </motion.div>

            <motion.div variants={childVariant}>
              <Skill image={GitHubIcon} name={"GitHub"} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
