"use client"
import Image from "next/image";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { useState } from "react";
import ButtonGradient from "../ButtonGradient";
import { contenuSection, buttons } from "../function/data/dataProcess";
import { buttonVariants, containerVariants, divVariants, textVariants } from "../function/animation";
import { useInView } from "react-intersection-observer";

function Process() {

  const [ref, inView] = useInView();

  const [idBtn, setIdBtn] = useState(1);
  const [btnStatut, setBtnStatut] = useState(buttons);

  const handleButtonClick = (id: number) => {
    // Mettez à jour l'état des boutons en fonction de l'id du bouton cliqué
    const updatedButtons = btnStatut.map((button) => {
      if (button.id === id) {
        return { ...button, isOpen: true };
      } else {
        return { ...button, isOpen: false };
      }
    });
    setBtnStatut(updatedButtons);
    setIdBtn(id);
  };


  return (
    <>
      <section id="process" className="sm:mt-64 mt-36 sm:mb-64">

        {/* Button Tiny Screen */}
        <div className="flex flex-row justify-center md:gap-16 gap-2 lg:hidden">
          {
            btnStatut.map((button) => (
              <div key={button.id} className="flex flex-col-reverse relative">
                <motion.div initial="closed" // État initial
                  animate={button.isOpen ? "open" : "closed"} // Utilisation des variants
                  variants={divVariants}
                  className={`rounded-2xl flex items-center justify-center bg-primary-color absolute ${button.classDiv} `}><p className="overflow-x-hidden font-moby text-sm text-text-color">{button.name}</p></motion.div>
                <motion.button

                  onClick={() => handleButtonClick(button.id)}
                  className={`${button.isOpen ? "border-[2px] border-darkpurple bg-primary-color" : "border-1"} ${button.classBtn}`}>
                  <Image className="" src={button.icon} alt="website" width={30} height={30} />
                </motion.button>
              </div>
            ))
          }
        </div>

        <motion.div
          ref={ref}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={containerVariants}
          className="relative flex-wrap flex flex-row justify-center lg:justify-end 2xl:gap-36 xl:gap-20 lg:gap-10 gap-0 items-center 2xl:mr-36 xl:mr-10 mr-4">
          <h3 className="absolute -translate-x-[21rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 bottom-1/3 lg:text-10xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            PROCESS</h3>
          <Image className="absolute -bottom-36 -z-10 2xl:right-1/4 xl:right-44 right-30 max-[1024px]:hidden" src="/arc_circle.svg" alt="arc de cercle" width={1000} height={1000} />

          {/* Button Big Screen */}
          <div className="lg:flex flex-col relative h-[30rem] justify-between hidden">

            {
              btnStatut.map((button) => (
                <div key={button.id} className="flex flex-row relative">
                  <motion.div initial="closed" // État initial
                    animate={button.isOpen ? "open" : "closed"} // Utilisation des variants
                    variants={divVariants}
                    className={`rounded-2xl flex items-center justify-center bg-primary-color absolute ${button.classDiv} `}><p className={`font-moby text-sm text-text-color`}>{button.name}</p></motion.div>
                  <motion.button

                    onClick={() => handleButtonClick(button.id)}
                    className={`${button.isOpen ? "border-[2px] border-darkpurple bg-primary-color" : "border-1"} ${button.classBtn}`}>
                    <Image className="" src={button.icon} alt="website" width={30} height={30} />
                  </motion.button>
                </div>
              ))
            }
          </div>

          {/* 3D Model */}
          <motion.div variants={textVariants} className="md:flex flex-col relative hidden">

            <span className="absolute md:w-[14rem] md:h-[14rem] w-72 h-72 top-1/4 right-1/3 z-20 rounded-full bg-text-color mix-blend-screen blur-[250px]"></span>
            <Spline
              scene={contenuSection[idBtn - 1].char3D}
              style={{ width: "400px", height: "800px" }}
              className="cursor-move"
            />
          </motion.div>

          {/* Text */}
          <div className="flex flex-col flex-wrap md:w-1/3 w-3/4 md:mt-0 mt-16 align-top gap-2 font-bold font-kallisto text-justify">
            <p className="2xl:text-[1.125rem] xl:text-[1rem] text-[0.8rem] text-secondary-color"><span className="text-secondary-color text-[3rem] lg:text-[5rem] 2xl:text-[5.6rem] mr-2">{contenuSection[idBtn - 1].id}.</span>{contenuSection[idBtn - 1].titre}</p>
            <p className="text-text-color 2xl:text-[1.125rem] xl:text-[1rem] text-[0.8rem]">{contenuSection[idBtn - 1].description}</p>
            <span className="w-full h-[2px] bg-text-color opacity-50"></span>
            <div className="flex flex-col">
              <p className="2xl:text-[1.125rem] xl:text-[1rem] text-[0.8rem] text-text-color">{contenuSection[idBtn - 1].txtpercent}</p>
              <p className="text-secondary-color text-[3rem] lg:text-[5rem] 2xl:text-[5.6rem] font-bold ">{contenuSection[idBtn - 1].pourcentage}</p>
            </div>
            <span className="w-full h-[2px] bg-text-color opacity-50"></span>
            <div className="flex flex-col gap-2 2xl:gap-5">
              <p className="2xl:text-[1.125rem] xl:text-[1rem] text-[0.8rem] text-text-color">{contenuSection[idBtn - 1].subtxt}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={buttonVariants}
          className="flex justify-center lg:mr-64">
          <ButtonGradient title="Discutons de votre Projet" className="sm:py-4 sm:px-16 py-4 px-8 md:mt-0 mt-5 text-[14px] sm:text-[1rem]" handleClick={() => { window.location.href = '#contact' }} />
        </motion.div>

      </section>
    </>
  );
}

export default Process;