import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/icons/ks_logo.png";
import { Link } from "react-scroll";

const KS = "<ks>";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleClick() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="fixed font-fira w-full h-[60px] flex justify-between items-center px-6 bg-black text-gray-300">
      <div className="z-10">
        <Link to="home" smooth={true} duration={500}>
          {/*
          <img src={Logo} alt="logo" className="w-10 cursor-pointer"></img>
  */}
          <h1 className="text-2xl font-bold cursor-pointer text-primary">
            {KS}
          </h1>
        </Link>
      </div>
      {/*
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black bg-opacity-100 -z-10"></div>
*/}

      {/* menu */}

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!toggleMenu ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !toggleMenu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* socials */}
      <div className="hidden"></div>
    </div>
  );
}
