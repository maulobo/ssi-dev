'use client'
import { useEffect } from 'react'
import './letters.scss'
import { motion, useAnimationFrame, useScroll, useTransform} from 'framer-motion'

const Letters = () => {
  const { scrollYProgress } = useScroll()
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 200])
  const x2 = useTransform(scrollYProgress, [0,1], [0,600])




  return (
    <div className="letters-container">
      <motion.h2 initial={{x:-400}} animate={{x: 400 }} transition={{repeat: Infinity, duration: 8, repeatType: 'reverse'}}>DESCUBRA NUESTRA DEDICACION EXPERIENCIA INNOVACION</motion.h2>
      <motion.h2  initial={{x:400}} animate={{x: -400 }} transition={{repeat: Infinity, duration: 8, repeatType: 'reverse', damping: 0.5}}>Y PROFESIONALISMO EN NUESTRO SERVICIO</motion.h2>
    </div>
  )
}

export default Letters