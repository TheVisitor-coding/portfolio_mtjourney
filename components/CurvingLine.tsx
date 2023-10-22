"use client"

import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

function CurvingLine() {

  const [ref, inView] = useInView();
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current) {
      // Utilisez inView pour déterminer si la classe 'hidden' doit être ajoutée ou supprimée
      svgRef.current.classList.toggle('hidden', !inView);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref}>
        <svg ref={svgRef} width="257" height="20" viewBox="0 0 257 20" fill="none">
          <mask id="mask0_286_45" maskUnits="userSpaceOnUse" x="-1" y="0" width="259" height="20">
            <path d="M1 2.42358C1 2.42358 33.8399 10.1001 55.0964 10.4608C78.0731 10.8507 88.742 3.4891 111.697 2.42358C136.516 1.27158 143.5 19.4 168.3 17.9C192.8 16.5 211.9 3.5 236.4 2.4C257.9 1.5 255.9 2.4 255.9 2.4" stroke="url(#paint0_linear_286_45)" strokeWidth="3" strokeLinecap="round" />
          </mask>
          <g mask="url(#mask0_286_45)">
            <motion.rect
              initial={{ width: 0 }}
              animate={{ width: [0, 257, 0] }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              y="-9"
              width="0"
              height="33"
              fill="url(#paint1_linear_286_45)"
            />
          </g>
          <defs>
            <linearGradient id="paint0_linear_286_45" x1="1" y1="5.4" x2="262.5" y2="5.4" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6A5AF6" stopOpacity="0" />
              <stop offset="1" stopColor="#6A5AF6" />
            </linearGradient>
            <linearGradient id="paint1_linear_286_45" x1="0" y1="-9" x2="257" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9D399" />
              <stop offset="1" stopColor="#6A5AF6" />
            </linearGradient>
          </defs>
        </svg>

      </div>
    </>
  );
}

export default CurvingLine;