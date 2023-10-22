"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { containerVariants, textProcessVariants } from "../function/animation";
import Form from "../dynamic_components/Dynamic_Form";
import Image from "next/image";

function Contact() {

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <section className="mt-64 mb-64 flex flex-col gap-[25rem] h-screen">
      <motion.div
        ref={ref1}
        variants={textProcessVariants}
        initial="initial"
        animate={inView1 ? 'animate' : 'initial'}
        className="flex justify-center items-center flex-col text-center relative font-kallisto font-medium text-2xl sm:text-[2rem] lg:text-[2.5rem] gap-2">

        <p className="text-text-color w-5/6 md:w-4/6 xl:w-3/6 leading-[3.5rem]">{"C'est ici que votre "}<span className="text-secondary-color font-bold ">périple</span>{" dans mon"}
          <span className="text-secondary-color font-bold ">{" univers"}</span>{" s'achève..."}</p>
        <p className="text-secondary-color font-bold ">{"A moins que ?"}</p>
        <span className="absolute md:w-[20rem] md:h-36 w-72 h-72 rounded-full opacity-50  bg-secondary-color mix-blend-screen blur-[125px]"></span>
        {/* <Image src="/social/elipseContact.png" alt="circle shape" width={450} height={450} className="absolute right-2/3 top-full 2xl:flex hidden" /> */}
      </motion.div>

      <motion.div
        ref={ref2}
        variants={containerVariants}
        initial="initial"
        animate={inView2 ? 'animate' : 'initial'}
        className="relative" id="contact">
        {/* <Image src="/social/elipse2Contact.png" alt="circle shape" width={450} height={450} className="absolute hidden lg:flex left-1/4 xl:left-1/3 bottom-3/4" /> */}
        {/* <Image src="/social/circleGroup.svg" alt="Planet circle" width={350} height={350} className="absolute hidden md:flex -translate-x-32 xl:-translate-x-20 2xl:-translate-x-0 left-0 bottom-1/4" /> */}

        <p className="text-text-color lg:m-36 md:m-14 m-5  font-kallisto mb-24 text-lg sm:text-xl md:text-2xl lg:text-[1.875rem] md:whitespace-nowrap">Un projet ? Une collaboration ? Une question ?</p>
        <span className="absolute md:w-[23rem] md:h-[23rem] w-72 h-72 -top-10 -translate-x-1/2 rounded-full opacity-20 bg-primary-color mix-blend-screen blur-[115px]"></span>


        <Form />
        <div className="relative flex flex-col justify-center items-center mt-36 gap-36">
          <h3 className="text-text-color font-kallisto font-bold text-5xl md:text-6xl">Me Retrouver</h3>
          <span className="flex flex-row flex-wrap gap-14 justify-center sm:gap-28">
            <motion.a
              target="_blank"
              href="https://www.linkedin.com/in/matteorossiroy/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border-8 rounded-full border-linkedin shadow-imgcard"><Image src="/social/linkedin.png" alt="linkedin logo" width={80} height={80} /></motion.a>
            <motion.a
              target="_blank"
              href="https://www.malt.fr/profile/matteorossi?overview"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border-8 rounded-full border-malt"><Image src="/social/malt.png" alt="malt logo" width={80} height={80} /></motion.a>
            <motion.a
              target="_blank"
              href=" https://github.com/TheVisitor-coding"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border-8 rounded-full border-github"><Image src="/social/github.png" alt="github logo" width={80} height={80} /></motion.a>
            <motion.a
              target="_blank"
              href="mailto:matteorossiroy.pro@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} className="border-8 rounded-full border-mail"><Image src="/social/mail.png" alt="mail logo" width={80} height={80} /></motion.a>
          </span>
        </div>

        {/* <Image src="/social/meteor.svg" alt="meteor" width={800} height={800} className="absolute right-0 top-3/4 2xl:flex hidden -z-10" /> */}
      </motion.div>


    </section>
  );
}

export default Contact;