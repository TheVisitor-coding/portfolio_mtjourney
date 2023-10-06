"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TitleProps } from '../types';
import { useInView } from 'react-intersection-observer';

function TitleSection({ title, yBegin, yEnd }: TitleProps) {

  const [positions, setPositions] = useState<number[]>([0, 0, 0, 0]);

  const texts = [
    { text: { title }, scrollFactor: 0.2 },
    { text: { title }, scrollFactor: -0.1 },
    { text: { title }, scrollFactor: 0.1 },
    { text: { title }, scrollFactor: -0.2 },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Activer la détection uniquement une fois
    threshold: 0.1, // Définir le seuil de visibilité
  });

  // useEffect(() => {
  //   if (inView) {
  //     const newPositions = texts.map((item, _) => {
  //       return (yBegin - yEnd) * item.scrollFactor;
  //     });

  //     // Utilisez une fonction de rappel pour mettre à jour positions
  //     setPositions(newPositions);
  //   } else {
  //     // Réinitialisez les positions avec l'effet inverse lorsque le composant n'est plus visible
  //     const newPositions = texts.map((_, index) => {
  //       return positions[index] * -1;
  //     });

  //     // Utilisez une fonction de rappel pour mettre à jour positions
  //     setPositions(newPositions);
  //   }
  // }, [inView, yBegin, yEnd, texts]);


  const textsRef = useRef<typeof texts>(texts);

  useEffect(() => {
    if (inView) {
      const newPositions = textsRef.current.map((item: { text: { title: string }; scrollFactor: number }, index: number) => {
        return (yBegin - yEnd) * item.scrollFactor;
      });

      // Utilisez une fonction de rappel pour mettre à jour positions
      setPositions(newPositions);
    } else {
      // Réinitialisez les positions avec l'effet inverse lorsque le composant n'est plus visible
      const newPositions = textsRef.current.map((item: any, index: number) => {
        return positions[index] * -1;
      });
      // Utilisez une fonction de rappel pour mettre à jour positions
      setPositions(newPositions);
    }
  }, [inView, yBegin, yEnd, textsRef]);


  return (
    <section className="">
      <div className="relative title flex justify-center">
        <h2 ref={ref} className="xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl  font-moby text-text-color">{title}</h2>
        {texts.map((item, index) => (
          <motion.h2
            key={index}
            initial={{ y: 0 }}
            animate={{ y: positions[index] }}
            transition={{ duration: 0.5 }}
            className={`xl:text-10xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl  font-moby text-transparent font-outline-2 absolute top-0 left-1/6`}
          >
            <span>{item.text.title}</span>
          </motion.h2>
        ))}

      </div>

    </section>
  );
}

export default TitleSection;