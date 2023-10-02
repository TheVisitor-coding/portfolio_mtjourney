"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "../function/data";

function Competences() {
  return (
    <>
      <section className="lg:mt-64 mt-16">
        <div className="mt-64 flex flex-col lg:flex-row items-center justify-center lg:h-screen h-96 min-w-64 max-w-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: 'url(/Stars.png)' }}>
          {/* Color Blur Bg */}
          <span className="absolute w-96 h-96 bottom-1/4 -left-56 rounded-full bg-secondary-color mix-blend-screen blur-[118px] opacity-30"></span>
          <span className="absolute w-96 h-96 -top-20 -right-56 rounded-full opacity-40 bg-primary-color mix-blend-screen blur-[118px]"></span>

          <h3 className="absolute -translate-x-[23rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 lg:text-8xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            COMPETENCES
          </h3>

          <div className="relative">
            {
              logo.map((item, index) => (
                <div key={index} className={`w-auto h-auto ${item.className}`}>
                  <Image key={index} src={item.img} alt={item.alt} width={item.width} height={item.height} />
                </div>
              ))
            }
            <Image src='/system_solar.png' alt="system_solar" width={900} height={900} className="w-full lg:w-auto h-auto" />
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
            className="absolute xl:top-28 top-2 xl:left-36 left-12 lg:w-50 lg:h-40"
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
            className="absolute lg:top-2/3 top-full xl:right-56 right-24 lg:w-28 w-20 h-20 lg:h-28"
          />
        </div>
      </section>
    </>
  );
}

export default Competences;