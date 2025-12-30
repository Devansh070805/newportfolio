import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);

  // Fake progress counter to keep the user engaged while assets load
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increment to simulate real loading behavior
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(old + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      // 1. Exit Animation: The Curtain Lift
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#0b0b15", // Midnight Purple
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      
      {/* 2. Central Visual: Glowing Text */}
      <div style={{ position: "relative", marginBottom: "40px", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ 
            fontSize: "clamp(3rem, 5vw, 5rem)", 
            fontWeight: "800", 
            letterSpacing: "-2px",
            margin: 0,
            background: "linear-gradient(to right, #fff, #aaa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          DEVANSH
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ 
            color: "#ff7a00", // Fox Orange
            fontSize: "1.2rem", 
            letterSpacing: "4px", 
            textTransform: "uppercase",
            fontWeight: "600",
            marginTop: "10px"
          }}
        >
          Portfolio
        </motion.p>
      </div>

      {/* 3. The Loading Bar Container */}
      <div style={{ 
        width: "300px", 
        height: "4px", 
        background: "rgba(255,255,255,0.1)", 
        borderRadius: "2px",
        overflow: "hidden",
        position: "relative"
      }}>
        {/* The Orange Fill */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
          style={{ 
            height: "100%", 
            background: "#ff7a00", 
            boxShadow: "0 0 10px #ff7a00" // Glowing effect
          }} 
        />
      </div>

      {/* 4. Percentage Counter */}
      <div style={{ 
        marginTop: "15px", 
        fontSize: "0.9rem", 
        color: "#666", 
        fontVariantNumeric: "tabular-nums" // Keeps numbers from jumping width
      }}>
        {progress}%
      </div>

    </motion.div>
  );
};