"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TitleProps } from '../types';

function TitleSection({ title }: TitleProps) {

  const [scrollY, setScrollY] = useState<number>(0);
  const [positions, setPositions] = useState<number[]>([0, 0, 0, 0]);

  const texts = [
    { text: { title }, scrollFactor: 0.2 },
    { text: { title }, scrollFactor: -0.1 },
    { text: { title }, scrollFactor: 0.1 },
    { text: { title }, scrollFactor: -0.2 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const titlePosition = document.getElementsByClassName('title');
    const rect = titlePosition[0].getBoundingClientRect();
    const newPositions = texts.map((item, index) => {
      if (rect.y < 766 && rect.y > -100) {
        return scrollY * item.scrollFactor;
      } else if (rect.y < -100) {
        return positions[index] * -item.scrollFactor;
      } else {
        return 0; // Initialize positions to 0
      }
    });
    setPositions(newPositions);
  }, [scrollY]);


  return (
    <section className="">
      <div className="relative title flex justify-center">
        <h2 className="xl:text-10xl lg:text-8xl md:text-6xl text-4xl  font-moby text-text-color">{title}</h2>
        {texts.map((item, index) => (

          <motion.h2
            key={index}
            initial={{ y: 0 }}
            animate={{ y: positions[index] }}
            transition={{ duration: 0.5 }}
            className={`xl:text-10xl lg:text-8xl md:text-6xl text-4xl font-moby text-transparent font-outline-2 absolute top-0 left-1/6`}
          >
            <span>{item.text.title}</span>
          </motion.h2>
        ))}

      </div>

    </section>
  );
}

export default TitleSection;