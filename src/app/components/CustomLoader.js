"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./CustomLoader.scss";

export default function CustomLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="custom-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="custom-loader__content">
        {/* Logo/Letras grandes */}
        <motion.div
          className="custom-loader__logo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            SOTO
          </motion.span>
          <motion.span
            className="custom-loader__separator"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            SSI
          </motion.span>
        </motion.div>

        {/* Barra de progreso minimalista */}
        <motion.div
          className="custom-loader__progress-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="custom-loader__progress-bar">
            <motion.div
              className="custom-loader__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <motion.span className="custom-loader__progress-number">
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
