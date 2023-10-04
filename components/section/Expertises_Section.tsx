"use client";

import ButtonGradient from "../ButtonGradient";
import ButtonPlanet from "../ButtonPlanet";
import Image from "next/image";
import { expertise } from "../function/data";

function Expertises() {
  return (
    <>
      <section className="mt-64 mb-[65rem]">
        <div className="flex lg:flex-row flex-col justify-around relative">

          <Image src="/circle_form1.svg" alt="circle shape" width={450} height={450} className="absolute bottom-2/4 -left-10" />
          <h3 className="absolute -translate-x-[18rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 bottom-3/4 lg:text-8xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            EXPERTISES</h3>

          <div className="relative">
            <span className="absolute w-96 h-96 bottom-3/4 -left-1/4 rounded-full bg-secondary-color mix-blend-overlay blur-[120px]"></span>
            <div className="sticky top-0 max-w-[35rem] font-kallisto h-min flex flex-col gap-8"> {/* Définissez une hauteur appropriée ici, par exemple, h-screen */}
              <h3 className="text-text-color text-[3.75rem] font-bold ">Mes Expertises</h3>
              <p className="text-text-color text-[1.25rem] font-light leading-6">Un Projet ? L'envie de débuter une nouvelle aventure en ma compagnie ?</p>
              <p className="text-text-color text-[1.25rem] font-light leading-6">De par mes diverses compétences, je vous propose plusieurs expertises afin de vous accompagner au mieux dans vos projets</p>
              <div className="flex flex-row justify-between relative">
                <ButtonGradient title="Commencer l'aventure" className="py-4 px-10 text-[1rem]" />
                <ButtonPlanet title="Voir mon processus >>" className="py-4 px-5 text-[1rem] rounded-3xl" velocite={2000} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-16">
            {
              expertise.map((item, index) => (
                <div className="max-w-[34rem] flex flex-col gap-5">
                  <Image src={item.img} alt="expertises" width={150} height={150} />
                  <h4 className="font-moby text-[3.1rem] text-text-color whitespace-nowrap">{item.title}</h4>
                  <p className="text-text-color font-kallisto text-[1.2rem] font-light">{item.desc}
                  </p>
                  <div className="bg-gradient-to-r from-transparent via-text-color to-transparent h-[0.06rem] w-full mt-5"></div>
                </div>
              ))
            }
          </div>
          {/* <div className="max-w-[34rem] flex flex-col gap-5">
            <Image src="/expertise/website.svg" alt="expertises" width={150} height={150} />
            <h4 className="font-moby text-[3.1rem] text-text-color">SITE WEB</h4>
            <p className="text-text-color font-kallisto text-[1.2rem] font-light">Je vous accompagne dans tout le processus de création de votre site internet, du désign au déploiement.
              <br /> Je choisis pour votre projet la technologie la plus adaptée (Wordpress / React / ...)
            </p>
            <div className="bg-gradient-to-r from-transparent via-text-color to-transparent h-[0.06rem] w-full mt-5"></div>

          </div> */}


        </div>
      </section>
    </>
  );
}

export default Expertises;