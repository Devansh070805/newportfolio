import React from "react";

export const SpriteFox = () => {
  return (
    <>
      {/* 1. Define the Animation Keyframes locally */}
      <style>
        {`
          @keyframes play-wag {
            from { background-position: 0px; }
            to { background-position: -26560px; } 
          }
        `}
      </style>

      {/* 2. The Fox Div with Direct Styles */}
      <div 
        style={{
          // FORCE DIMENSIONS
          display: "block",
          width: "1660px",
          height: "2380px",

          // IMAGE SOURCE
          backgroundImage: "url('/fox-sprite.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "26560px 2380px",

          // ANIMATION
          animation: "play-wag 1.5s steps(16) infinite",

          // DEBUG: BRIGHT COLORS (To verify it exists)
          backgroundColor: "hotpink", 
          border: "20px solid lime" 
        }}
      />
    </>
  );
};