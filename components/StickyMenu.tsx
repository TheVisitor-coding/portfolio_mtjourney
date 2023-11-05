import { useState } from "react";
import Lottie from "lottie-react";
import system_solar from '../public/system_solar.json'
import { motion } from "framer-motion";
import { FaShare } from 'react-icons/fa'
import { link } from './function/data/dataMenu'

function StickyMenu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkVariants = {
    whileHover: {
      translateX: 50,
      color: "#F9D399",
      transition: {
        type: "spring",
        duration: 1,
        stiffness: 100,
        ease: "easeInOut",
      },
    }
  }

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
      }
    },
    closed: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <>
      <div
        className="px-[0.15rem] py-[0.15rem] rounded-3xl -rotate-90 gradient-menu z-20 fixed right-0 top-1/4 translate-x-12">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="px-6 py-2 h-full w-full rounded-3xl bg-bg-color text-text-color font-moby">
          MENU
        </button>
      </div>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className={`w-screen h-screen pb-14 bg-bg-color top-0 fixed z-50 ${isMenuOpen ? 'flex flex-row justify-around items-center' : 'hidden'}`}>
        <div className="flex flex-col gap-8 font-moby text-[3.125rem] text-text-color">

          {
            link.map((item, index) => (
              <motion.a
                key={index}
                variants={linkVariants}
                whileHover="whileHover"
                className="cursor-pointer"
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                href={item.href}
              >{item.text}</motion.a>
            ))
          }
        </div>
        <div className="">
          <Lottie animationData={system_solar} loop={true} className="mix-blend-screen max-w-xl" />
          <div className="flex justify-end items-end mt-14">
            <motion.button
              whileHover={{ translateX: 5 }}
              className="flex gap-4 items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <p className="text-2xl text-text-color font-moby">Retour</p>
              <FaShare size={40} color={"#FFFAFA"} />
            </motion.button>
          </div>
        </div>
        <motion.span className="absolute w-96 h-96 bottom-3/4 -right-16 -z-0 rounded-full bg-secondary-color opacity-50 mix-blend-overlay blur-3xl"></motion.span>
      </motion.div>
    </>
  );
}

export default StickyMenu;