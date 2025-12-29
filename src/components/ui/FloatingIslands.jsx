import React from "react";

// Simple "Island" visual component
const Island = ({ top, left, right, width = "300px" }) => (
  <div style={{
    position: "absolute",
    top: top,
    left: left,
    right: right,
    width: width,
    height: "60px",
    background: "#2ecc71", // Grass Green
    borderRadius: "50%",    // Oval shape
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)", // Depth
    zIndex: 10, // Behind the fox
    borderBottom: "15px solid #1e8449" // Darker "dirt" bottom
  }}>
    {/* Optional: Add a rock or flower detail */}
    <div style={{ position: "absolute", top: -20, left: 40, fontSize: "2rem" }}>🌿</div>
  </div>
);

export const FloatingIslands = () => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }}>
      
      {/* Island 1: Hero Section (Right) */}
      <Island top="85vh" right="10%" />

      {/* Island 2: Projects Section (Left) */}
      <Island top="185vh" left="10%" />

      {/* Island 3: Skills Section (Center/Right) */}
      <Island top="285vh" right="20%" />

      {/* Island 4: Contact Section (Center) */}
      <Island top="385vh" left="50%" width="400px" style={{ transform: "translateX(-50%)" }} />

    </div>
  );
};