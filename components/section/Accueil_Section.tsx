"use client"

import { motion } from "framer-motion";
import ButtonGradient from "../ButtonGradient";
import { containerVariants, textVariants, buttonVariants, textShadowVariants } from "../function/animation";
import UpButton from "../UpButton";
import React, { Suspense } from 'react';
import StickyMenu from "../StickyMenu";

function AccueilSection() {

  const CurvingLineAsync = React.lazy(() => import('../dynamic_components/Dynamic_CurvingLine'));

  return (
    <>
      <motion.div
        className="relative flex flex-col items-center gap-5 lg:gap-7 2xl:mt-52 sm:mt-40 mt-20 sm:mb-64"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="text-text-color flex flex-col sm:flex-row md:gap-5 font-kallisto font-bold justify-center"
          variants={textVariants}
        >
          <span className="w-64 lg:text-7xl text-6xl h-24 md:h-20 anim-text max-[640px]:text-center md:rotate-6 md:-translate-y-6">ROSSI</span>
          <div className="max-[640px]:text-center">
            <span className="lg:text-7xl text-6xl max-[640px]:text-center">Matteo</span>
            <Suspense fallback={<div></div>}>
              <CurvingLineAsync />
            </Suspense>
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
          <ButtonGradient title="Discutons de votre Projet >>" className="text-lg py-3 px-8" handleClick={() => { window.location.href = '#contact' }} />
          <motion.div
            className="text-transparent font-regular mix-blend-overlay z-0 sm:flex hidden -rotate-[10deg] xl:text-10xl lg:text-9xl sm:text-7xl text-4xl lg:-translate-y-16 md:-translate-y-12 sm:-translate-y-5 font-moby font-outline-2"
            variants={textShadowVariants}
          >
            MY UNIVERSE
          </motion.div>
        </motion.div>
        <span className="absolute lg:w-96 lg:h-96 md:w-72 md:h-72 w-64 h-64 bottom-0 -left-56 rounded-full opacity-50 bg-primary-color mix-blend-screen blur-[118px]"></span>
      </motion.div>
      <UpButton />
      <StickyMenu />
    </>
  );
}

export default AccueilSection;
