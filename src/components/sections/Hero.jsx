import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section style={{ 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      zIndex: 10 // Content sits above background hills but below Fox
    }}>
      
      {/* 1. The Main Headline */}
      <motion.h1 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ 
          fontFamily: "'Outfit', sans-serif", 
          fontWeight: 800, 
          fontSize: "6rem", // Big and bold
          color: "white",
          textShadow: "0px 10px 30px rgba(0,0,0,0.1)", // Soft shadow for depth
          marginBottom: "0.5rem"
        }}
      >
        Hey, It's <span style={{ color: "#FFD700" }}>Dev.</span>
      </motion.h1>

      {/* 2. The Subtitle */}
      <motion.p 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "1.5rem",
          color: "rgba(255, 255, 255, 0.9)",
          maxWidth: "600px",
          lineHeight: "1.6"
        }}
      >
        Building digital experiences with code and nature.
      </motion.p>

      {/* 3. The "Scroll" Hint */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }}
        style={{ 
          position: "absolute", 
          bottom: "10%",
          opacity: 0.7 
        }}
      >
        <p style={{ color: "white", fontFamily: "'Outfit', sans-serif" }}>Scroll to Explore</p>
      </motion.div>

    </section>
  );
};