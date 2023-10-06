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
      <section className="lg:mt-64 lg:mb-64 mb-16 mt-16">
        <motion.div className="flex flex-col justify-between h-[100rem]">
          <motion.div ref={ref1} variants={textProcessVariants} initial="initial"
            animate={inView1 ? 'animate' : 'initial'} className="flex justify-center relative max-w-screen font-kallisto font-medium text-[2.5rem] gap-2">
            <p className="text-text-color">Pour ma part un projet est <span className="text-primary-color font-bold ">une aventure</span></p>
            <span className="absolute md:w-[35rem] md:h-96 w-72 h-72 -bottom-36 right-[15rem] rounded-full opacity-30 bg-primary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>

          <motion.div ref={ref2} variants={textProcessVariants} initial="initial"
            animate={inView2 ? 'animate' : 'initial'} className="ml-20 flex flex-col relative max-w-screen font-kallisto font-medium text-[2.5rem] gap-2">
            <p className="text-text-color">Chaque projet est une <span className="font-bold text-secondary-color">source d'apprentissage</span></p>
            <p className="text-text-color">mais aussi <span className="font-bold text-secondary-color">de découverte</span></p>
            <span className="absolute md:w-[35rem] md:h-96 w-72 h-72 top-0 -left-56 rounded-full opacity-30 bg-secondary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>

          <motion.div ref={ref3} variants={textProcessVariants} initial="initial"
            animate={inView3 ? 'animate' : 'initial'} className="mr-20 flex flex-col items-end relative max-w-screen font-kallisto font-medium text-[2.5rem] gap-2">
            <p className="text-text-color ">Seulement, pour <span className="font-bold text-primary-color">prendre du plaisir</span> sur un</p>
            <p className="text-text-color">projet tout en créant <span className="font-bold text-primary-color">de la qualité,</span> il faut </p>
            <p className="text-text-color">concevoir <span className="font-bold text-primary-color">un processus solide</span></p>
            <span className="absolute md:w-[44rem] md:h-[34rem] w-72 h-72 top-0 -right-56 rounded-full opacity-30 bg-primary-color mix-blend-screen blur-[115px]"></span>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default Transi_Process;
