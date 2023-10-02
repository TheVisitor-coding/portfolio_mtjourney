"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function TitleSection() {

  const [scrollY, setScrollY] = useState<number>(0);

  // const texts = [
  //   { text: 'COMPETENCES', scrollFactor: 0.3, position: 0, reverseFactor: -0.3 },
  //   { text: 'COMPETENCES', scrollFactor: -0.2, position: 0, reverseFactor: 0.2 },
  //   { text: 'COMPETENCES', scrollFactor: 0.2, position: 0, reverseFactor: -0.2 },
  //   { text: 'COMPETENCES', scrollFactor: -0.3, position: 0, reverseFactor: 0.3 },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   const titlePosition = document.getElementsByClassName('title');
  //   const rect = titlePosition[0].getBoundingClientRect();
  //   if (rect.y < 766 && rect.y > 366) {
  //     setPositionY(scrollY * 0.3)
  //   }
  //   else if (rect.y < 100) {
  //     setPositionY(positionY * -0.3)
  //   }

  //   console.log(texts);

  //   window.addEventListener('scroll', handleScroll);



  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };

  // }, [scrollY]);

  const [positions, setPositions] = useState<number[]>([0, 0, 0, 0]);

  const texts = [
    { text: 'COMPETENCES', scrollFactor: 0.2 },
    { text: 'COMPETENCES', scrollFactor: -0.1 },
    { text: 'COMPETENCES', scrollFactor: 0.1 },
    { text: 'COMPETENCES', scrollFactor: -0.2 },
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
        <h2 className="xl:text-10xl lg:text-8xl md:text-6xl text-4xl  font-moby text-text-color">COMPETENCES</h2>
        {texts.map((item, index) => (

          <motion.h2
            key={index}
            initial={{ y: 0 }}
            animate={{ y: positions[index] }}
            transition={{ duration: 0.5 }}
            className={`xl:text-10xl lg:text-8xl md:text-6xl text-4xl font-moby text-transparent font-outline-2 absolute top-0 left-1/6`}
          >
            {item.text}
          </motion.h2>
        ))}

      </div>

    </section>
  );
}

export default TitleSection;