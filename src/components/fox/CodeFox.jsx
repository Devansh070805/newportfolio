import React from "react";

// The name here MUST match the import in App.jsx
export const CodeFox = () => {
  // --- Colors matched from the image ---
  const colors = {
    foxOrange: "#E66E26",     // Main body color
    earInner: "#C85215",      // Darker orange for inner ear
    white: "#FFFFFF",         // Tail tip
    black: "#000000",         // Nose and Eye
    outline: "#1A1A1A"        // Thin outline for cartoon definition
  };

  return (
    <svg 
      width="300" 
      height="350" 
      viewBox="0 0 300 350" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      
      {/* 1. LEFT EAR (Behind the head) */}
      <path 
        d="M105 80 L90 30 Q85 15 110 35 L125 80 Z" 
        fill={colors.foxOrange} 
        stroke={colors.outline} 
        strokeWidth="2"
      />
      <path 
        d="M100 70 L95 40 Q93 30 105 45 Z" 
        fill={colors.earInner} 
      />

      {/* 2. BODY (Sitting posture) */}
      <path 
        d="M110 130 
           Q 70 200 60 250 
           L 200 250 
           Q 180 150 160 130 
           Z" 
        fill={colors.foxOrange} 
        stroke={colors.outline} 
        strokeWidth="2"
      />

      {/* 3. TAIL (Base - Orange part) */}
      <path 
        d="M 50 240 
           Q 20 280 80 310 
           Q 150 330 200 300 
           L 180 270 L 205 260 L 185 240 L 210 230 
           Q 230 210 235 190
           Q 150 240 50 240 Z" 
        fill={colors.foxOrange} 
        stroke={colors.outline} 
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* 4. TAIL (Tip - White part) */}
      <path 
        d="M 210 230 
           L 185 240 L 205 260 L 180 270 
           Q 200 300 240 280 
           Q 280 240 275 190 
           Q 260 180 235 190
           L 210 230 Z" 
        fill={colors.white} 
        stroke={colors.outline} 
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* 5. HEAD (Side profile with snout) */}
      <path 
        d="M 110 140 
           Q 90 140 85 100 
           Q 85 60 130 60 
           Q 160 65 190 105 
           Q 200 115 190 120 
           L 150 140 
           Q 130 145 110 140 Z" 
        fill={colors.foxOrange} 
        stroke={colors.outline} 
        strokeWidth="2"
      />

      {/* 6. RIGHT EAR (Front ear) */}
      <path 
        d="M135 70 L145 20 Q150 10 165 35 L160 75 Z" 
        fill={colors.foxOrange} 
        stroke={colors.outline} 
        strokeWidth="2"
      />
      <path 
        d="M142 60 L148 30 Q150 25 158 40 Z" 
        fill={colors.earInner} 
      />

      {/* 7. FACE DETAILS */}
      
      {/* Eye */}
      <circle cx="145" cy="95" r="8" fill={colors.black} />
      <circle cx="148" cy="93" r="3" fill="white" /> {/* Eye highlight */}

      {/* Nose */}
      <path 
        d="M 190 105 
           Q 202 112 205 116 
           Q 205 120 196 120 
           Q 193 115 190 105 Z" 
        fill={colors.black} 
      />

    </svg>
  );
};