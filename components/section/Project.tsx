"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { project } from '../function/data';

function Project() {

  return (
    <>
      <section className="lg:mt-64 lg:mb-64 mb-16 mt-16">
        <div className="relative flex flex-col h-screen gap-24">
          <h3 className="absolute -translate-x-[20rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 top-1/3 lg:text-10xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            PROJETS</h3>
          <Image src="/circle_form1.svg" alt="circle shape" width={450} height={450} className="absolute right-0 rotate-180" />
          <div className="relative flex flex-row sm:gap-5 gap-2 xl:ml-64 lg:ml-44 sm:ml-12 ml-5">
            <span className="absolute w-[35rem] h-[24rem] -top-10 right-2/4 -z-0 rounded-full bg-primary-color mix-blend-screen blur-[115px] opacity-20"></span>
            <h4 className="md:text-[3.125rem] sm:text-[2.5rem] text-[1.5rem] font-kallisto text-text-color">Mes Projets</h4>
            <h4 className="md:text-[3.125rem] sm:text-[2.5rem] text-[1.5rem] font-kallisto text-transparent font-outline-1">Mes Projets</h4>
          </div>

          <motion.div
            className="flex justify-center lg:justify-start gap-14 flex-row  flex-wrap xl:ml-64 lg:ml-44" >

            {
              project.map((project) => (
                <div className='flex flex-col cursor-pointer bg-cardbg sm:max-w-sm max-w-xs max-h-fit rounded-3xl rotate-2 duration-500 transition-all hover:scale-105 hover:rotate-0 shadow-card'>
                  <Image src={project.img} alt={project.alt} width={400} height={400} className='rounded-t-3xl shadow-imgcard max-w-full max-h-[13rem]' />
                  <div className='flex flex-col ml-5 mt-3'>
                    <h5 className="text-[1.25rem] font-bold font-kallisto text-text-color whitespace-nowrap">
                      {project.nom}
                    </h5>
                    <p className='font-kallisto text-text-color font-light text-[0.8rem]'>{project.desc}</p>
                    <div className="flex flex-row gap-2 text-text-color font-light justify-end text-[0.8rem] pt-10 mr-5 mb-3">
                      <div className="border-1 border-yellow-500 rounded-full px-2">{project.attr1}</div>
                      <div className="border-1 border-primary-color rounded-full px-2">{project.attr2}</div>
                    </div>
                  </div>
                </div>

              ))
            }
          </motion.div>
        </div>

      </section>
    </>
  );
}

export default Project;