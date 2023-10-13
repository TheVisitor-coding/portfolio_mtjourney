"use client";

import ButtonGradient from "../ButtonGradient";
import ButtonPlanet from "../ButtonPlanet";
import Image from "next/image";
import { expertise } from "../function/data/dataExpertise";

function Expertises() {
  return (
    <>
      <section id="expertises" className="mt-64 mb-64">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-36 justify-around align-middle relative">

          <Image src="/circle_form1.svg" alt="circle shape" width={450} height={450} className="absolute xl:bottom-2/4 sm:bottom-2/3 bottom-2/4 xl:-left-10 sm:-left-16 -left-2/4" />
          <h3 className="absolute -translate-x-[18rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 bottom-3/4 lg:text-8xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            EXPERTISES</h3>

          <div className="relative flex justify-center mx-10 sm:mx-0">
            <span className="absolute md:w-96 md:h-96 w-72 h-72 xl:bottom-3/4 xl:-left-1/4 -left-[0.5rem] bottom-2/4 rounded-full bg-secondary-color mix-blend-overlay blur-[120px]"></span>
            <div className="sticky top-0 max-w-[35rem] font-kallisto h-min flex flex-col gap-8"> {/* Définissez une hauteur appropriée ici, par exemple, h-screen */}
              <h3 className="text-text-color text-[2rem] sm:text-[3.75rem] font-bold ">Mes Expertises</h3>
              <p className="text-text-color text-[0.95rem] sm:text-[1.25rem] font-light leading-6">Un Projet ? L'envie de débuter une nouvelle aventure en ma compagnie ?</p>
              <p className="text-text-color text-[0.95rem] sm:text-[1.25rem] font-light leading-6">De par mes diverses compétences, je vous propose plusieurs expertises afin de vous accompagner au mieux dans vos projets</p>
              <div className="flex flex-row flex-wrap justify-center sm:justify-between gap-5 sm:gap-0">
                <ButtonGradient title="Commencer l'aventure" className="sm:py-4 sm:px-10 py-4 px-8 text-[12px] sm:text-[1rem]" handleClick={() => { window.location.href = '#contact' }} />
                <ButtonPlanet title="Voir mon processus >>" className="sm:py-4 sm:px-5 py-4 px-5 text-[12px] sm:text-[1rem] rounded-3xl" velocite={2000} handleClick={() => { window.location.href = '#process' }} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-16">
            {
              expertise.map((item, index) => (
                <div key={index} className="max-w-[34rem] flex justify-center max-[1280px]:items-center flex-col gap-5 sm:mx-0 mx-10">
                  <Image src={item.img} alt="expertises" width={250} height={200} />
                  <h4 className="font-moby text-[1.8rem] sm:text-[3.1rem] text-text-color xl:text-left text-center whitespace-nowrap">{item.title}</h4>
                  <p className="text-text-color xl:text-left text-justify font-kallisto text-[0.95rem] sm:text-[1.2rem] font-light">{item.desc}
                  </p>
                  <div className="bg-gradient-to-r from-transparent via-text-color to-transparent h-[0.06rem] w-full mt-5"></div>
                </div>
              ))
            }
          </div>

        </div>
      </section>
    </>
  );
}

export default Expertises;