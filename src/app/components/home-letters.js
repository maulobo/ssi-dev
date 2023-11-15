import "./home-letters.scss";
import { motion } from "framer-motion";

const Letters = () => {
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
