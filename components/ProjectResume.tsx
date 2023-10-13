"use client"

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";


export interface Project {
  nom: string;
  desc: string;
  descFull?: string;
  attr1: string;
  attr2: string;
  img: string;
  img2?: string;
  link?: string;
}

// Définissez votre composant de détail de projet.
interface ProjectDetailProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectResume({ project, isOpen, onClose }: ProjectDetailProps) {
  const detailVariants = {
    open: {
      x: 0,
      opacity: 1,
      display: "block",
    },
    closed: {
      x: "100%",
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={detailVariants}
        className={`project-detail ${isOpen ? 'open' : 'closed'} fixed top-2 sm:top-10 left-5 sm:left-10 w-11/12 max-h-min rounded-3xl shadow-card bg-bg-color z-50`}
      >
        {/* Contenu du détail du projet */}
        <img src={project.img} alt={project.nom} className="w-full max-h-[150px] sm:max-h-[300px] object-cover object-top rounded-3xl shadow-imgcard" />
        <div className="flex flex-row gap-2 text-text-color font-light justify-center sm:justify-end text-[0.8rem] sm:mb-0 mb-5 mt-5 mr-5">
          <div className="border-1 border-yellow-500 rounded-full px-2">{project.attr1}</div>
          <div className="border-1 border-primary-color rounded-full px-2">{project.attr2}</div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-10">
          <div className="flex justify-center items-center flex-col text-text-color font-kallisto gap-2 sm:gap-5">
            <h5 className="font-bold text-3xl">{project.nom}</h5>
            <p className="font-light text-[1rem] min-[290px]:text-lg">{project.desc}</p>
          </div>
          <div className="font-light text-text-color text-[0.8rem] sm:text-[1rem] flex flex-row items-center justify-center mx-10 ">
            <p className="w-full md:w-10/12">{project.descFull}</p>
          </div>
        </div>
        {/* Autres informations sur le projet */}
        <div className="flex justify-between items-center mx-10 my-5">
          <motion.button
            whileHover={{ translateY: -2 }}
            className="text-text-color italic border-1 border-text-color px-2 rounded-full"
            onClick={() => {
              onClose();
              window.location.href = '#project';
            }}>
            Fermer
          </motion.button>
          {
            project.link &&
            <motion.a
              target="_blank"
              href={project.link}
              whileHover={{ translateY: -2 }}
              className="font-kallisto cursor-pointer font-light underline text-sm text-text-color flex flex-row">Voir Projet <FiArrowUpRight />
            </motion.a>
          }
        </div>
      </motion.div>
      <div className="fixed w-full h-full top-0 left-0 bg-opacity-50 z-30 backdrop-blur-md"></div>
    </>
  );
}

export default ProjectResume;