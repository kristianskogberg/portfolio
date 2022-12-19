import React from "react";
import ProjectTitle from "./ProjectTitle";
import { FaEye, FaCode } from "react-icons/fa";
import Button from "./Button";
import { motion } from "framer-motion";

const parentVariant = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 1 },
  },
  hidden: { opacity: 0 },
};

const fadeVariant = {
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 1 },
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

export default function FeaturedProject(props) {
  return (
    <>
      {props.imageOnRight ? (
        <div className="flex flex-col lg:flex-row gap-6 pb-[10rem]">
          {/*<div className="w-full md:w-3/5 my-auto ">*/}

          <div className="w-full lg:w-3/5">
            <motion.img
              className="mx-auto"
              variants={fadeVariant}
              initial="hidden"
              //animate={control}
              //ref={ref}
              whileInView={"visible"}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              src={props.image}
              alt="project"
            ></motion.img>
          </div>
          <div className="w-full lg:w-2/5 h-full">
            <div className="h-1/">
              <ProjectTitle title={props.name} />
            </div>
            <motion.div
              className="py-6 flex flex-row justify-left items-center flex-wrap gap-x-6 h-1/6"
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
              {props.skills.map(function (skill) {
                return (
                  <motion.p
                    className="font-fira text-gray-400"
                    variants={childVariant}
                  >
                    {skill}
                  </motion.p>
                );
              })}
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
              className="h-3/6 "
            >
              <motion.p variants={childVariant} className=" py-4 max-w-[700px]">
                {props.description}
              </motion.p>
            </motion.div>
            <div className="pt-6 h-1/6">
              <motion.div
                className="flex flex-row flex-wrap gap-6"
                variants={fadeVariant}
                initial="hidden"
                //animate={control}
                //ref={ref}
                whileInView={"visible"}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
              >
                <Button
                  text="Demo Video"
                  icon={<FaEye />}
                  url={props.demoUrl}
                />
                {props.codeUrl == null ? (
                  <Button text="Private" icon={<FaCode />} disable={true} />
                ) : (
                  <Button text="Code" icon={<FaCode />} url={props.codeUrl} />
                )}
              </motion.div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6 ">
          {/*<div className="w-full md:w-3/5 my-auto ">*/}

          <div className="w-full lg:w-3/5 ">
            <img
              className="object-cover h-full mx-auto"
              src={props.image}
              alt="project"
            ></img>
          </div>
          <div className="w-full lg:w-2/5 h-full">
            <div className="h-1/">
              <ProjectTitle title={props.name} />
            </div>
            <div className="py-6 flex flex-row justify-left items-center flex-wrap gap-x-6 h-1/6">
              {props.skills.map(function (skill) {
                return <p className="font-fira text-gray-500">{skill}</p>;
              })}
            </div>
            <div className="overflow-auto h-3/6 ">
              <p>{props.description}</p>
            </div>
            <div className="pt-6 h-1/6">
              <div className="flex flex-row gap-6">
                <Button text="Demo" icon={<FaEye />} url={props.demoUrl} />
                {props.private ? (
                  <Button text="Private" icon={<FaCode />} disable={true} />
                ) : (
                  <Button text="Code" icon={<FaCode />} url={props.codeUrl} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
