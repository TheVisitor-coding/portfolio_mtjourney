"use client"

import { motion } from "framer-motion";
import { CurvingLine } from "..";
import ButtonGradient from "../ButtonGradient";
import { containerVariants, textVariants, buttonVariants, textShadowVariants } from "../function/animation";

function AccueilSection() {
  
  return (
    <motion.div
      className="relative flex flex-col items-center gap-5 lg:gap-7 2xl:mt-52 sm:mt-40 mt-20 mb-64"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="text-text-color flex flex-col sm:flex-row md:gap-5 font-kallisto font-bold justify-center"
        variants={textVariants}
      >
        <span className="w-64 lg:text-7xl text-6xl h-24 md:h-20 anim-text md:rotate-6 md:-translate-y-6">ROSSI</span>
        <div>
          <span className="lg:text-7xl text-6xl">Matteo</span>
          <CurvingLine />
        </div>
      </motion.div>
      <motion.div
        className="flex sm:flex-row flex-col text-center text-text-color justify-center gap-2 font-kallisto text-[1.8rem] sm:text-3xl lg:text-4xl mb-10"
        variants={textVariants}
      >
        <h3 className="font-light">Développeur</h3>
        <h3 className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color">Full-Stack / Webdesign</h3>
      </motion.div>
      <motion.div
        className="relative flex flex-col items-center"
        variants={buttonVariants}
      >
        <ButtonGradient title="Montrez-moi votre univers >>" />
        <motion.div
          className="text-transparent font-regular mix-blend-overlay z-0 -rotate-[10deg] xl:text-10xl lg:text-9xl sm:text-7xl text-6xl lg:-translate-y-16 md:-translate-y-12 -translate-y-5  font-moby font-outline-2"
          variants={textShadowVariants}
        >
          MY UNIVERSE
        </motion.div>
      </motion.div>
      <span className="absolute lg:w-96 lg:h-96 md:w-72 md:h-72 w-64 h-64 bottom-0 -left-56 rounded-full opacity-70 bg-primary-color mix-blend-screen blur-[118px]"></span>
    </motion.div>
  );
}

export default AccueilSection;
