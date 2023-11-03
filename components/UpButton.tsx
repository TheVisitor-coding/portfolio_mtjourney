
import { useAnimation, motion } from "framer-motion";
import { BsRocketFill } from "react-icons/bs";

function UpButton() {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ translateX: 10, translateY: -9, transition: { duration: 0.3 } });
  };

  const handleHoverEnd = () => {
    // Réinitialisez l'animation lorsque la souris quitte le composant
    controls.start({ translateX: 0, translateY: 0 });
  };

  return (
    <>
      <motion.div
        onHoverStart={handleHover}
        onHoverEnd={handleHoverEnd}
        whileHover={{ translateY: -5, transition: { duration: 0.5 } }}
        className="bg-transparent cursor-pointer flex items-center z-20 justify-center p-2 md:p-3 border-1 rounded-full bottom-10 md:right-10 right-5  fixed"
      >
        <motion.span
          initial={{ x: 0, y: 0 }} // Définissez la position initiale
          animate={controls}
          className="absolute md:flex hidden z-20 top-2 left-1 w-1 h-1 md:w-2 md:h-2 bg-text-color rounded-full"
        ></motion.span>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ translateY: -2, transition: { duration: 0.5 } }}
          className="bg-white rounded-full p-2 md:p-3">
          <BsRocketFill size={20} color={"#1E1E1E"} />
        </motion.button>
      </motion.div>
    </>
  );
}

export default UpButton;
