"use client"

import Image from "next/image";
import ButtonPlanet from "../ButtonPlanet";
import { motion } from "framer-motion";
import { containerVariants, textVariants, buttonVariants, blurVariants } from "../function/animation";


function Navbar() {
  return (
    <>
      <motion.nav initial="initial" animate="animate" variants={containerVariants} className="flex flex-row justify-between items-center mt-5 lg:mx-16 mx-5">
        <Image src="/logo_mtjourney.png" alt="MT_Journey Logo" width={63} height={33} className="" />
        <motion.div variants={textVariants} className="flex flex-row xl:gap-24 lg:gap-14 gap-5 text-text-color font-moby xl:text-xs text-[10px]">
          <a href="#"><p>//Competences</p></a>
          <a href="#">//Expertises</a>
          <a href="#">//Process</a>
          <a href="#">//Portfolio</a>
          <a href="#">//Contact</a>
        </motion.div>
        <motion.div variants={buttonVariants} className="relative">
          <ButtonPlanet title="Un Projet ?" className="lg:px-8 lg:py-5 px-6 py-4 text-xs rounded-2xl" velocite={1000} />
          <motion.span variants={blurVariants} className="absolute w-96 h-96 -top-56 left-0 rounded-full bg-secondary-color mix-blend-overlay blur-3xl"></motion.span>
        </motion.div>
      </motion.nav>
    </>
  );
}

export default Navbar;