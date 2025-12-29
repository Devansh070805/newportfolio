import React from "react";

export const AboutSmart = () => {
  // A longer path with a "Loop-de-loop" in the center
// Best match for the red curve in your screenshot (viewBox: 0 0 500 400)
const pathDefinition =
  "M 120,360 C 40,150 300,520 320,260 S 420,80 520,120";




    return (
    <section style={{ 
      position: "relative", background: "#0b0b15", color: "white", overflow: "hidden", 
      padding: "100px 20px", minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 20 
    }}>
      
      <style>{`
        /* === 1. STYLISH NAMASTE (Updated) === */
        .namaste-text {
          font-family: sans-serif;
          font-weight: 900; /* Extra Bold */
          font-size: clamp(4rem, 8vw, 7rem); /* Big Size */
          line-height: 1;
          margin-bottom: 25px;
          
          /* Purple-Orange Gradient */
          background: linear-gradient(135deg, #a56be8 20%, #ff7a00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
          /* Subtle Glow */
          filter: drop-shadow(0 0 25px rgba(165, 107, 232, 0.2));
        }

        .bio-text {
          font-family: sans-serif;
          font-size: clamp(1rem, 1.1vw, 1.25rem);
          line-height: 1.7;
          color: #ccc;
          max-width: 500px;
          margin-bottom: 25px;
        }

        .highlight { color: #ff7a00; font-weight: 700; }
        .hindi-text { font-weight: 400; opacity: 0.8; font-size: 0.9em; margin-left: 5px; }

        /* === 2. MAP & CURVED TEXT === */
        .map-blob {
           width: 300px; /* Bigger Size */
           height: 300px;
           
           /* Map Styling */
           background: linear-gradient(135deg, #2a1b3d, #44315f);
           background-size: cover;
           background-position: center;
           
           /* Organic Shape */
           border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
           
           /* Borders */
           border: 3px solid rgba(255, 255, 255, 0.15);
           box-shadow: 0 20px 50px rgba(0,0,0,0.5);
           
           animation: morph-blob 8s ease-in-out infinite, float-organic 6s ease-in-out infinite;
           position: relative;
        }
        
        /* Static Curved Label (No Rotation) */
        .curved-label {
          position: absolute;
          top: -10%; left: -10%;
          width: 120%; height: 120%;
          pointer-events: none;
          z-index: 5;
          /* Removed animation: spin-slow ... */
        }
        
        /* Make text readable */
        .label-text {
          fill: #ff7a00;
          font-family: sans-serif;
          font-weight: 700;
          font-size: 19px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        @keyframes morph-blob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        @keyframes float-organic { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes move-plane { 0% { offset-distance: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { offset-distance: 100%; opacity: 0; } }

      `}</style>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", width: "100%", maxWidth: "1200px", gap: "40px" }}>
        
        {/* === LEFT SIDE: TEXT === */}
        <div style={{ flex: "1 1 500px" }}>
          <h2 className="namaste-text">नमस्ते</h2>
          
          <p className="bio-text">
            I am Devansh, a fresher at <span className="highlight">Thapar Institute of Engineering and Technology (TIET)</span> in <span className="highlight">Patiala, Punjab</span> <span className="hindi-text">(पटियाला, पंजाब)</span>, pursuing a degree in Bachelor of Engineering (BE/BTech) in Computer Science and Engineering.
          </p>
          <p className="bio-text">
            I completed my schooling from St. Mary’s Convent Inter College in my hometown of <span className="highlight">Lucknow, Uttar Pradesh</span> <span className="hindi-text">(लखनऊ, उत्तर प्रदेश)</span>.
          </p>
        </div>

        {/* === RIGHT SIDE: VISUAL JOURNEY === */}
        <div style={{ flex: "1 1 500px", height: "500px", position: "relative" }}>
            
            {/* 1. FLIGHT PATH SVG */}
            <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ position: "absolute", top: 0, left: 0, zIndex: 1, overflow: "visible" }}>
                <path d={pathDefinition} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="8, 8" strokeLinecap="round" />
                
                {/* Plane Group - Kept exactly as your working code */}
                <g style={{ offsetPath: `path('${pathDefinition}')`, animation: "move-plane 7s linear infinite" }}>
                    <path transform="rotate(90) scale(1.4) translate(-12, -12)" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#ff7a00" />
                </g>
            </svg>

            {/* 2. LUCKNOW MAP (Bottom Left) */}
            <div style={{ position: "absolute", bottom: "-10px", left: "10px", zIndex: 2 }}>
                <div className="map-blob" style={{ animationDelay: "0s" , backgroundImage: "url('/lucknow.png')"  }}>
                    {/* CURVED TEXT SVG - Fixed for readability on TOP */}
                    <svg className="curved-label" viewBox="0 0 300 300">
                      {/* Sweep flag changed to 1 for top arc */}
                      <path id="curve1" d="M -10,130 A 100,100 0 0,0 310,150" fill="transparent" />
                      <text width="300" className="label-text">
                        <textPath xlinkHref="#curve1" startOffset="40%" textAnchor="middle">
                          • Originally From •
                        </textPath>
                      </text>
                    </svg>
                </div>
            </div>

            {/* 3. PATIALA MAP (Top Right) */}
            <div style={{ position: "absolute", top: "-50px", right: "-150px", zIndex: 2 }}>
                <div className="map-blob" style={{ animationDelay: "-4s" , backgroundImage: "url('/patiala.png')"  }}>
                   {/* CURVED TEXT SVG - Fixed for readability on TOP */}
                    <svg className="curved-label" viewBox="0 0 300 300">
                      <path id="curve2" d="M -20,170 A 100,100 0 0,1 320,200" fill="transparent" />
                      <text width="300" className="label-text">
                        <textPath xlinkHref="#curve2" startOffset="55%" textAnchor="middle">
                          • Currently In •
                        </textPath>
                      </text>
                    </svg>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};