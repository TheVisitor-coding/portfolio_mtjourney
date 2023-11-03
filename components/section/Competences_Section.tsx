"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "../function/data/dataCompetence";
import { containerVariants, textShadowVariants } from "../function/animation";
import { useInView } from "react-intersection-observer";

function Competences() {

  const [ref, inView] = useInView();


  return (
    <>
      <motion.section ref={ref}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        variants={containerVariants} id="competences" className="sm:mt-64 mt-36 sm:mb-64">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:h-screen h-96 min-w-64 max-w-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: 'url(/Stars.webp)' }}>
          {/* Color Blur Bg */}
          <span className="absolute w-96 h-96 bottom-1/4 -left-56 rounded-full bg-secondary-color mix-blend-screen blur-[118px] opacity-30"></span>
          {/* <span className="absolute w-96 h-96 -top-20 -right-56 rounded-full opacity-40 bg-primary-color mix-blend-screen blur-[118px]"></span> */}

          <motion.h3 variants={textShadowVariants} className="absolute -translate-x-[23rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 lg:text-8xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            COMPETENCES
          </motion.h3>

          {/* Screen < lg */}
          <h4 className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-kallisto font-bold text-4xl sm:text-6xl lg:hidden flex">Mes Skills</h4>
          <div className="mt-20 lg:hidden sm:-gap-0 gap-5 flex flex-wrap flex-row w-full justify-evenly items-top text-text-color font-kallisto text-md font-light">
            <div>
              <p className="font-bold text-2xl mb-5">Frontend</p>
              <p className="">VueJS</p>
              <p className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-bold">ReactJS</p>
              <p>Typescript</p>
            </div>
            <div>
              <p className="font-bold text-2xl mb-5">Backend</p>
              <p className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-bold">PHP</p>
              <p>Python</p>
              <p>MySQL</p>
            </div>

            <div>
              <p className="font-bold text-2xl mb-5">Design</p>
              <p className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-bold">Tailwind CSS</p>
              <p className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-bold">Figma</p>
              <p>Photoshop</p>
              <p>Spline</p>
            </div>

            <div>
              <p className="font-bold text-2xl mb-5">Autre</p>
              <p>Git</p>
              <p className="bg-gradient-to-r bg-clip-text text-transparent to-secondary-color from-primary-color font-bold">Wordpress</p>
              <p>Strapi</p>
            </div>
          </div>



          {/* Screen > lg */}
          <div className="relative lg:flex hidden">
            {
              logo.map((item, index) => (
                <div key={index} className={`w-auto h-auto ${item.className}`}>
                  <Image key={index} src={item.img} alt={item.alt} width={item.width} height={item.height} className="object-contain img-unset" />
                </div>
              ))
            }
            <Image src='/system_solar.webp' alt="system_solar" width={900} height={900} className="w-full lg:w-auto h-auto" />
          </div>
          <motion.img
            initial={{ x: -20, y: 0 }}
            animate={{ x: 10, y: 10, rotate: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={'./logo langage/javascript.png'}
            alt="js_logo"
            className="absolute lg:flex hidden xl:top-28 top-2 xl:left-36 left-12 w-50 h-40"
          />
          <motion.img
            initial={{ y: 50 }}
            animate={{ y: 0, rotate: -20 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={'./logo langage/github.webp'}
            alt="github_logo"
            className="absolute lg:flex hidden lg:top-2/3 top-full xl:right-56 right-24 lg:w-28 w-20 h-20 lg:h-28"
          />
        </div>
      </motion.section>
    </>
  );
}

export default Competences;