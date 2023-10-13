"use client"

import React, { useState } from "react";
import Image from "next/image";
import ButtonPlanet from "../ButtonPlanet";
import { motion, useAnimation } from "framer-motion";
import { containerVariants, textVariants, buttonVariants, blurVariants } from "../function/animation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      display: "block",
    },
    closed: {
      x: "100%",
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <motion.nav initial="initial" animate="animate" variants={containerVariants} className="flex flex-row justify-between items-center mt-5 lg:mx-16 mx-5">
        <Image src="/logo_mtjourney.png" alt="MT_Journey Logo" width={63} height={33} className="" />
        <motion.div variants={textVariants} className="lg:flex hidden flex-row xl:gap-24 lg:gap-14 gap-5 text-text-color font-moby xl:text-xs text-[10px] scroll-smooth">
          <a href="#competences"><p>//Competences</p></a>
          <a href="#expertises">//Expertises</a>
          <a href="#process">//Process</a>
          <a href="#project">//Portfolio</a>
          <a href="#contact">//Contact</a>
        </motion.div>
        <motion.div variants={buttonVariants} className="relative lg:flex hidden">
          <ButtonPlanet title="Un Projet ?" className="lg:px-8 lg:py-5 px-6 py-4 text-xs rounded-2xl" velocite={1000} handleClick={() => { window.location.href = '#contact' }} />
          <motion.span variants={blurVariants} className="absolute w-96 h-96 -top-56 left-0 rounded-full bg-secondary-color mix-blend-overlay blur-3xl"></motion.span>
        </motion.div>


        {/* Menu Burger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex border-1 border-text-color shadow-2xl rounded-full p-2">
          <Image src="/menu.jpg" alt="burger_menu" width={20} height={20} />
        </button>
        <motion.div
          className="lg:hidden fixed -top-10 right-0 rounded-l-xl h-min bg-bg-color shadow-imgcard md:w-1/5 sm:w-3/12 w-2/6 z-10"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={menuVariants}
          transition={{ type: "tween", duration: 0.3 }}>
          <div className="pt-16 pl-4 text-text-color font-moby text-[10px] flex flex-col gap-6">
            <motion.a whileHover={{ translateX: 5 }} href="#competences"><p>//Competences</p></motion.a>
            <motion.a whileHover={{ translateX: 5 }} href="#expertises">//Expertises</motion.a>
            <motion.a whileHover={{ translateX: 5 }} href="#process">//Process</motion.a>
            <motion.a whileHover={{ translateX: 5 }} href="#project">//Portfolio</motion.a>
            <motion.a whileHover={{ translateX: 5 }} href="#contact">//Contact</motion.a>
            <button className="rounded-full p-2 bg-primary-color mb-2" onClick={closeMenu}>X</button>
          </div>
        </motion.div>
      </motion.nav >
    </>
  );
}

export default Navbar;
