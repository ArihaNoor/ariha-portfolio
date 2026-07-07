"use client";
import { motion } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -42 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 42 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
};

const Reveal = ({
  children,
  dir = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  as = "div",
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25 }}
      variants={variants[dir]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export const Stagger = ({ children, className = "", delay = 0 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", dir = "up" }) => (
  <motion.div className={className} variants={variants[dir]}>
    {children}
  </motion.div>
);

export default Reveal;
