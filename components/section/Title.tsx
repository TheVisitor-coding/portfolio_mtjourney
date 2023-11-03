"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TitleProps } from '../types';
import { useInView } from 'react-intersection-observer';
import { titleVariants } from '../function/animation';

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

  const [ref2, inView2] = useInView({
    triggerOnce: false, // Activer la détection uniquement une fois
    threshold: 0.1, // Définir le seuil de visibilité
  });




  const textsRef = useRef<typeof texts>(texts);

  useEffect(() => {
    if (inView) {
      const newPositions = textsRef.current.map((item, index) => {
        return (yBegin - yEnd) * item.scrollFactor;
      });
      // Utilisez une fonction de rappel pour mettre à jour positions
      setPositions(newPositions);
    }
    else {
      setPositions([0, 0, 0, 0]);
    }
  }, [inView, yBegin, yEnd, textsRef]);



  return (
    <>
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? 'animate' : 'initial'}
        variants={titleVariants}
        className=' max-w-[640px]:hidden'>
        {/* Basic Format */}
        <div className="relative hidden title sm:flex justify-center">
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
      </motion.section>

      {/* Mobile Format */}
      <motion.section
        ref={ref2}>
        <div className='title flex-col items-center sm:hidden flex text-[2.6rem] font-moby overflow-x-hidden w-full '>
          <motion.h2
            initial={{ x: 0 }}
            animate={inView2 ? { x: 15 } : { x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-text-color -translate-x-14'>{title}</motion.h2>
          <motion.h2
            initial={{ x: 0 }}
            animate={inView2 ? { x: -15 } : { x: 0 }}
            transition={{ duration: 0.5 }}
            className='text-transparent font-outline-1 translate-x-36'>{title}</motion.h2>
        </div>
      </motion.section>
    </>

  );
}

export default TitleSection;