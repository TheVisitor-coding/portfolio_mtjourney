"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logo = [
  { img: '/logo langage/react_logo.png', alt: 'react_logo', width: 130, height: 130, className: 'absolute bottom-[23rem] left-[26rem]' },
  { img: '/logo langage/figma.png', alt: 'figma_logo', width: 110, height: 110, className: 'absolute top-1/2 left-1/4' },
  { img: '/logo langage/git.png', alt: 'git_logo', width: 60, height: 60, className: 'absolute top-1/4 right-1/4' },
  { img: '/logo langage/nodejs.png', alt: 'node_logo', width: 65, height: 65, className: 'absolute top-10 right-1/4' },
  { img: '/logo langage/php.png', alt: 'php_logo', width: 250, height: 250, className: 'absolute bottom-56 left-2/4' },
  { img: '/logo langage/python.png', alt: 'python_logo', width: 50, height: 50, className: 'absolute bottom-1/4 left-16' },
  { img: '/logo langage/mysql.png', alt: 'sql_logo', width: 70, height: 70, className: 'absolute bottom-44 left-1/3' },
  { img: '/logo langage/strapi.png', alt: 'strapi_logo', width: 50, height: 50, className: 'absolute bottom-32 right-1/4 rounded-full' },
  { img: '/logo langage/tailwind.png', alt: 'tailwind_logo', width: 80, height: 80, className: 'absolute top-16 left-1/3' },
  { img: '/logo langage/typescript.png', alt: 'ts_logo', width: 40, height: 40, className: 'absolute top-1/2 right-5' },
  { img: '/logo langage/vuejs.webp', alt: 'vuejs_logo', width: 50, height: 50, className: 'absolute bottom-3/4 left-24' },
  { img: '/logo langage/Wordpress.webp', alt: 'wordpress_logo', width: 100, height: 100, className: 'absolute bottom-2/3 right-96' }
]

function Competences() {
  return (
    <>
      <section className="lg:mt-64 mt-16">
        <div className="mt-64 flex flex-col lg:flex-row items-center justify-center lg:h-screen h-96 min-w-64 max-w-screen bg-cover bg-no-repeat bg-center relative" style={{ backgroundImage: 'url(/Stars.png)' }}>
          {/* Color Blur Bg */}
          <span className="absolute w-96 h-96 bottom-1/4 -left-56 rounded-full bg-secondary-color mix-blend-screen blur-[118px] opacity-30"></span>
          <span className="absolute w-96 h-96 -top-20 -right-56 rounded-full opacity-40 bg-primary-color mix-blend-screen blur-[118px]"></span>

          <h3 className="absolute -translate-x-[23rem] opacity-0 lg:opacity-30 mix-blend-overlay font-kallisto left-0 lg:text-8xl md:text-6xl text-4xl text-text-color font-bold rotate-90">
            COMPETENCES
          </h3>

          <div className="relative">
            {
              logo.map((item, index) => (
                <div key={index} className={`w-auto h-auto ${item.className}`}>
                  <Image key={index} src={item.img} alt={item.alt} width={item.width} height={item.height} />
                </div>
              ))
            }
            <Image src='/system_solar.png' alt="system_solar" width={900} height={900} className="w-full lg:w-auto h-auto" />
          </div>
          <motion.img
            initial={{ x: -20, y: 0 }}
            animate={{ x: 10, y: 10, rotate: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={'./logo langage/javascript.png'}
            alt="js_logo"
            className="absolute top-28 left-36 w-50 h-40"
          />
          <motion.img
            initial={{ y: 50 }}
            animate={{ y: 0, rotate: -20 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={'./logo langage/github.webp'}
            alt="github_logo"
            className="absolute lg:top-2/3 top-3/4 xl:right-56 right-24 w-28 h-28"
          />
        </div>
      </section>
    </>
  );
}

export default Competences;