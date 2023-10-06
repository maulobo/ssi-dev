import "./home-letters.scss";
import {
  motion,
  useAnimationFrame,
  useScroll,
  useTransform,
} from "framer-motion";

const Letters = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <div className="letters-container">
      <motion.h2
        initial={{ x: -200 }}
        animate={{ x: 200 }}
        transition={{ repeat: Infinity, duration: 12, repeatType: "reverse" }}
      >
        DESCUBRA NUESTRA DEDICACION EXPERIENCIA INNOVACION
      </motion.h2>
      <motion.h2
        initial={{ x: 200 }}
        animate={{ x: -200 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          repeatType: "reverse",
          damping: 10,
        }}
      >
        Y PROFESIONALISMO EN NUESTRO SERVICIO
      </motion.h2>
    </div>
  );
};

export default Letters;
