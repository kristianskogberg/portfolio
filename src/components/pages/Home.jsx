import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import AnimatedText from "../AnimatedText";
import { motion } from "framer-motion";
import BackgroundImage from "../../assets/bg.png";

const fadeVariant = {
  visible: {
    opacity: 1,
    transition: { delay: 5, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const parentVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 3, duration: 1 },
  },
  hidden: { opacity: 0, y: 10 },
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

export default function Home() {
  return (
    <div name="home" className="w-full h-screen relative ">
      <img
        className="w-full h-full object-cover absolute opacity-100 top-0"
        src={BackgroundImage}
        alt="background"
      />
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col justify-center h-full">
        <div className="flex flex-col md:flex-row">
          <div className="z-10">
            <AnimatedText
              text={"Hi, my name is"}
              delay={0}
              color={"#889"}
              style={"font-fira text-[#889]"}
            />

            <AnimatedText
              text={"Kristian Skogberg"}
              delay={0.75}
              style={"text-4xl sm:text-5xl font-bold text-primary"}
            />
            <AnimatedText
              text={"I'm a Developer."}
              delay={2}
              style={"text-4xl sm:text-5xl font-bold text-[#889]"}
            />

            <motion.p
              variants={parentVariant}
              initial="hidden"
              animate="visible"
              className="text-[#889] py-4 max-w-[700px]"
            >
              I'm studying for a Master's Degree specializing in Software
              Development at Tampere University. I'm currently building an NFT
              analytics web application with React in my free time.
            </motion.p>

            <motion.div
              variants={fadeVariant}
              initial="hidden"
              animate="visible"
              className="flex"
            >
              <Link to="projects" smooth={true} duration={500}>
                <button className="text-white font-fira border-2 px-6 py-3 my-2 flex items-center hover:bg-dark hover:border-dark duration-200">
                  My Projects <HiArrowNarrowDown className="ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
