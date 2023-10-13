"use client"

import { motion } from "framer-motion";
import { textProcessVariants } from "../function/animation";
import { useInView } from "react-intersection-observer";

function Transi_Process() {

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  return (
    <>
      <section className="mt-64 mb-64 md:flex hidden">
        <motion.div className="flex flex-col justify-evenly w-full sm:justify-around md:justify-between h-[100rem]">
          <motion.div ref={ref1} variants={textProcessVariants} initial="initial"
            animate={inView1 ? 'animate' : 'initial'} className="flex justify-center text-center relative max-w-8/12 font-kallisto font-medium text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] gap-2">
            <p className="text-text-color">Pour ma part un projet est <span className="text-primary-color font-bold ">une aventure</span></p>
            <span className="absolute md:w-[35rem] md:h-96 w-72 h-72 -bottom-36 md:right-[15rem] rounded-full opacity-30 bg-primary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>

          <motion.div ref={ref2} variants={textProcessVariants} initial="initial"
            animate={inView2 ? 'animate' : 'initial'} className="md:ml-20 ml-5 flex flex-col relative font-kallisto font-medium text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] gap-2">
            <p className="text-text-color">Chaque projet est une <span className="font-bold text-secondary-color">source d'apprentissage</span></p>
            <p className="text-text-color">mais aussi <span className="font-bold text-secondary-color">de découverte</span></p>
            <span className="absolute md:w-[35rem] md:h-96 w-72 h-72 top-0 -left-56 rounded-full opacity-30 bg-secondary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>

          <motion.div ref={ref3} variants={textProcessVariants} initial="initial"
            animate={inView3 ? 'animate' : 'initial'} className="md:mr-20 mr-5 flex flex-col text-right items-end relative font-kallisto font-medium text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] gap-2">
            <p className="text-text-color ">Seulement, pour <span className="font-bold text-primary-color">prendre du plaisir</span> sur un</p>
            <p className="text-text-color">projet tout en créant <span className="font-bold text-primary-color">de la qualité,</span> il faut </p>
            <p className="text-text-color">concevoir <span className="font-bold text-primary-color">un processus solide</span></p>
            <span className="absolute md:w-[44rem] md:h-[34rem] w-72 h-72 top-0 lg:-right-56 rounded-full opacity-30 bg-primary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Transi_Process;
