import React from "react";
import PageTitle from "../PageTitle";
import { motion } from "framer-motion";
import Footer from "./Footer";

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

export default function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[black] text-gray-300 pt-[80px]"
    >
      <div className="max-w-[1000px] mx-auto px-6 flex flex-col justify-start items-center w-full h-full">
        <form
          method="POST"
          action="https://getform.io/f/2015e10b-7fc6-4fc3-8571-5b846f4ff0e1"
          className="flex flex-col max-w-[1000px] w-full"
        >
          <div className="pb-8">
            <PageTitle title={"Contact"} />
            <p className="text-gray-300 py-4">
              Submit the form below or send me an email: k.skogberg98@gmail.com
            </p>
          </div>
          <input
            className="p-2 bg-[#ccd] placeholder-gray-500 text-[black]"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd] placeholder-gray-500 text-[black]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 bg-[#ccd] placeholder-gray-500 text-[black]"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-primary hover:border-primary px-4 py-3 my-8 mx-auto flex items-center duration-[200ms]">
            Let's Connect
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
}
