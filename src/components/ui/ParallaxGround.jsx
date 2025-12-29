import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxGround = () => {
  const { scrollYProgress } = useScroll();

  // 1. Color Transformation (Dark -> Green)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["#0b1e15", "#145a32", "#2ecc71"]
  );

  // 2. The Movement (Vertical Scroll -> Horizontal Slide)
  // As you scroll down 100%, the ground moves left by 50%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div style={{ 
      position: "fixed", 
      bottom: 0, 
      left: 0, 
      width: "100%", 
      height: "150px", 
      zIndex: 40,
      overflow: "hidden" 
    }}>
      <motion.div
        style={{
          x, // Apply the sliding movement
          backgroundColor,
          width: "200vw", // Double width so we can slide it
          height: "100%",
          borderRadius: "50% 50% 0 0", // Hill shape
          boxShadow: "0 -10px 40px rgba(0,0,0,0.5)",
          position: "absolute",
          bottom: -50 // Hide the flat bottom
        }}
      >
        {/* Optional: Add "Trees" or "Rocks" inside the ground to see movement */}
        <div style={{ position: "absolute", left: "20%", top: "20px", fontSize: "40px", opacity: 0.3 }}>🌲</div>
        <div style={{ position: "absolute", left: "60%", top: "40px", fontSize: "30px", opacity: 0.3 }}>🪨</div>
        <div style={{ position: "absolute", left: "90%", top: "10px", fontSize: "50px", opacity: 0.3 }}>🌲</div>
      </motion.div>
    </div>
  );
};