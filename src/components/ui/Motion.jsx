"use client";

import { motion } from "framer-motion";

const Motion = ({
  children,
  className,
  initial,
  animate,
  exit,
  transition,
  whileHover,
  whileTap,
  whileInView,
  viewport,
  drag,
  dragConstraints,
  dragElastic,
  dragTransition,
  onClick,
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileHover={whileHover}
      whileTap={whileTap}
      whileInView={whileInView}
      viewport={viewport}
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={dragElastic}
      dragTransition={dragTransition}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
