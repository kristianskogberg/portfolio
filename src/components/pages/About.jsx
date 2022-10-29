import React, { useEffect } from "react";
import ProfilePic from "../../assets/profile_pic_bw.png";
import { motion } from "framer-motion";

import PageTitle from "../../components/PageTitle";

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

export default function About() {
  /* const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);*/

  return (
    <div
      name="about"
      className="w-full h-full xs:h-screen pt-[80px] bg-[black] text-gray-300 "
    >
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-start h-full">
        <PageTitle title={"01.About"} />

        <motion.div
          className="max-w-[700px]"
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
          <motion.h1
            variants={childVariant}
            className="text-4xl sm:text-5xl font-bold text-primary py-6"
          >
            Hi, I'm Krisu. Nice to meet you!
          </motion.h1>

          <div className="mr-5 flex pb-6 ">
            <motion.img
              variants={childVariant}
              src={ProfilePic}
              alt="profile"
              className="flex rounded-full max-h-[200px] max-w-[200px]"
            ></motion.img>
          </div>

          <motion.p variants={childVariant}>
            I'm passionate about building software and applications that both
            look good and function well. I consider creativity one of my
            strengths and it has been a very useful trait to combine with
            programming to develop user-friendly interfaces and experiences.
          </motion.p>

          <motion.p className="py-6" variants={childVariant}>
            I like to spend my free time working on my personal projects, going
            to the gym, cycling and playing Pokémon GO. I also enjoy video
            editing and creating 3D renders and animations. I'm very interested
            in blockchain, Web3 and NFTs.
          </motion.p>

          <motion.p variants={childVariant}>
            I have a Bachelor's Degree in Information Technology. I specialized
            in Software Engineering.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
