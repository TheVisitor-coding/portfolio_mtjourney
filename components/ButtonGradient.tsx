"use client";

import { ButtonProps } from "./types";
import { motion } from "framer-motion";

function ButtonGradient({ title, className }: ButtonProps) {
  return (
    <motion.button
      className={`${className} gradient-btn z-10 font-kallisto text-text-color font-medium rounded-[30px]`}
    >
      {title}
    </motion.button>
  );
}

export default ButtonGradient;