import React from "react";
import { motion } from "framer-motion";

export const HeroType = () => {
  return (
    <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
      <h1 style={{ 
        fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: "8rem", 
        color: "white", margin: 0, lineHeight: 1, letterSpacing: "-2px",
        display: "flex", alignItems: "baseline", justifyContent: "center"
      }}>
        Hey, It's Dev
        
        {/* THE WIGGLING DOT */}
        <span style={{ position: "relative", display: "inline-block", width: "40px", marginLeft: "10px" }}>
          {/* Black Hole */}
          <span style={{ display: "block", width: "30px", height: "30px", backgroundColor: "#2c3e50", borderRadius: "50%", transform: "translateY(-15px)" }} />
          {/* Wiggling Tail */}
          <motion.img 
            src="/tail.png" 
            animate={{ rotate: [0, 15, 0, -15, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: "-25px", left: "5px", width: "40px",
              transformOrigin: "bottom center", zIndex: -1
            }}
          />
        </span>
      </h1>
      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.5rem", color: "rgba(255,255,255,0.8)", marginTop: "30px" }}>
        Digital Craftsman.
      </p>
    </div>
  );
};