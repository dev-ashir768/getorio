"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedLineProps {
  className: string;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ className }) => {
  const pathVariants = {
    animate: {
      strokeDashoffset: [0, 16],
      transition: {
        duration: 0.5,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <div className={cn(`lg:flex hidden absolute`, className)}>
      <svg
        width="331"
        height="253"
        viewBox="0 0 331 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M329 0V214C329 225 329 251 291 251H3.05176e-05"
          stroke="#0074FC"
          strokeWidth="3"
          strokeDasharray="8 8"
          variants={pathVariants}
          animate="animate"
        />
      </svg>
    </div>
  );
};

export default AnimatedLine;
