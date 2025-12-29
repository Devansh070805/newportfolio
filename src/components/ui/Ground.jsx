import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Ground = () => {
  const { scrollYProgress } = useScroll();

  // Color Mapping: Dark Green (Night) -> Bright Green (Day)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0b1e15", "#2ecc71"] 
  );

  return (
    <motion.div
      style={{
        backgroundColor,
        position: "fixed",
        bottom: -50, // Hide the bottom square edges
        left: -100,  // Overhang to ensure full coverage
        right: -100,
        height: "180px", // Height of the hill
        borderRadius: "50% 50% 0 0", // Makes it curved like a hill
        zIndex: 40, // Behind the Fox (50), but above the Sky (0)
        boxShadow: "0px -10px 50px rgba(0,0,0,0.3)" // Depth shadow
      }}
    />
  );
};