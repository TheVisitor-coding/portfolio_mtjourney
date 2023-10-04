"use client"

import { ButtonProps } from "./types";
import { motion, useAnimation } from "framer-motion";


function ButtonPlanet({ title, handleClick, className, velocite }: ButtonProps) {

  const controlsTopRight = useAnimation();
  const controlsBottomLeft = useAnimation();

  const hoverHandler = async () => {
    await Promise.all([
      controlsTopRight.start({
        x: ['0%', `${velocite}%`], // Déplace le cercle en haut à droite horizontalement
        transition: { duration: 0.2 }, // Réduisez la durée de la transition
      }),

      controlsBottomLeft.start({
        x: ['0%', `-${velocite}%`], // Déplace le cercle en bas à gauche horizontalement
        transition: { duration: 0.2 }, // Réduisez la durée de la transition
      }),
    ]);
  };

  const unhoverHandler = async () => {
    await Promise.all([
      controlsTopRight.start({
        x: [`${velocite}%`, '0%'], // Revenir à la position initiale en haut à droite
        transition: { duration: 0.2 }, // Réduisez la durée de la transition
      }),

      controlsBottomLeft.start({
        x: [`-${velocite}%`, '0%'], // Revenir à la position initiale en bas à gauche
        transition: { duration: 0.2 }, // Réduisez la durée de la transition
      }),
    ]);
  };

  return (
    // <div>
    //   {/* <span className="absolute z-10 transition-all -top-1 right-8 w-2 h-2 bg-text-color rounded-full hover:left-8"></span>
    //   <span className="absolute z-20 transition-all -bottom-1 left-8 w-2 h-2 bg-text-color rounded-full hover:right-8"></span> */}
    //   <button
    //     className={`relative z-0 ${className}  border-1 border-text-color text-text-color font-kallisto tracking-widest`}
    //   >
    //     {title}
    //   </button>
    // </div>


    <motion.button
      className={`relative z-10 ${className} border-1 border-text-color text-text-color font-kallisto tracking-widest cursor-pointer`}
      onMouseEnter={hoverHandler}
      onMouseLeave={unhoverHandler}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="absolute z-20 transition-all -bottom-1 left-8 w-2 h-2 bg-text-color rounded-full"
        initial={{ x: '0%' }}
        animate={controlsTopRight}
      ></motion.span>
      <motion.span
        className="absolute z-20 transition-all -top-1 right-8 w-2 h-2 bg-text-color rounded-full"
        initial={{ x: '0%' }}
        animate={controlsBottomLeft}
      ></motion.span>
      {title}
    </motion.button>
  );
};

export default ButtonPlanet;

