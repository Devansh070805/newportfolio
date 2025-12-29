import React from "react";
import { motion } from "framer-motion";

export const TailTransition = () => {
  return (
    <div id="tail-trigger" style={{ position: "relative", width: "100%", height: "120vh", zIndex: 20, pointerEvents: "none" }}>
      
      {/* 1. THE TIP (White Curve) - Overlaps the section above */}
      <div style={{ 
        position: "absolute", 
        top: "-100px", // Pull it up so it covers the bottom of Hero
        left: 0, 
        width: "100%", 
        height: "150px", 
        backgroundColor: "#fff", // White tip
        borderRadius: "50% 50% 0 0", // Curve shape
        zIndex: 2 
      }} />

      {/* 2. THE BODY (Orange Block) - The "Loading" Screen */}
      <div style={{ 
        position: "absolute",
        top: "50px", // Starts right after the tip
        width: "100%", 
        height: "100%", 
        backgroundColor: "#E67E22", // Fox Orange
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
      }}>
        
        {/* 3. THE "LOADING" CONTENT */}
        <motion.div 
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontSize: "3rem", 
            color: "white",
            margin: 0
          }}>
            Loading...
          </h2>
          {/* Optional: A little paw print or icon here */}
          <span style={{ fontSize: "3rem" }}>🐾</span>
        </motion.div>

      </div>

    </div>
  );
};