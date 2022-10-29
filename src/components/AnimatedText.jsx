import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText(props) {
  const letters = Array.from(props.text);
  const color = props.color;
  const className = props.style;

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: props.delay,
      },
    },
  };

  const childVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex overflow-hidden py-1"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, i) => {
          return (
            <motion.span variants={childVariant} key={i} className={className}>
              {letter == " " ? "\u00A0" : letter}
            </motion.span>
          );
        })}
      </motion.div>
    </>
  );
}
