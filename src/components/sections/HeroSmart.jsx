import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export const HeroSmart = ({ isBurrowed }) => {
  const containerRef = useRef(null);

  // --- MOUSE TRACKING FOR FLASHLIGHT GRID ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      containerRef.current.style.setProperty("--x", `${x}px`);
      containerRef.current.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ position: "relative", zIndex: 10, width: "100%", height: "100%" }}
    >
      
      <style>
        {`
          /* 1. ANIMATIONS */
          @keyframes slide-strip-responsive { from { transform: translateX(0%); } to { transform: translateX(-100%); } }
          @keyframes play-dev-slide { from { transform: translateX(0%); } to { transform: translateX(-100%); } }
          @keyframes shooting-star { 0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; } 100% { transform: translateX(600px) translateY(600px) rotate(45deg); opacity: 0; } }
          @keyframes float-land { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }

          /* NEW: FLAG SPRITE ANIMATION (10 Frames) */
          @keyframes play-flag-slide {
            from { transform: translateX(0%); }
            to { transform: translateX(-100%); } 
          }

          /* 2. TEXT STYLES */
          .hero-text {
             font-family: 'MoonHeading', sans-serif;
             font-weight: 5;
             color: white;
             margin: 0;
             line-height: 1.1;
             letter-spacing: -2px;
             text-align: center;
             font-size: clamp(4rem, 9vw, 8rem); 
             display: flex;
             align-items: center; 
             justify-content: center;
             white-space: nowrap;
             text-shadow: 0 10px 30px rgba(0,0,0,0.5);
             position: relative;
             z-index: 40; 
          }
          
          .dev-static {
            color: #a56be8;
            margin-left: 35px;
          }

          /* 3. FLASHLIGHT GRID STYLE */
          .flashlight-grid {
            position: absolute;
            inset: 0;
            z-index: 1; 
            pointer-events: none;
            background-size: 50px 50px;
            background-image:
              linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px);
            mask-image: radial-gradient(
              circle 350px at var(--x, 50%) var(--y, 50%), 
              black 0%, 
              transparent 100%
            );
            -webkit-mask-image: radial-gradient(
              circle 350px at var(--x, 50%) var(--y, 50%), 
              black 0%, 
              transparent 100%
            );
          }
        `}
      </style>

      {/* FLASHLIGHT GRID */}
      <div className="flashlight-grid" />

      {/* BACKGROUND (Moon & Stars) */}
      <div style={{ position: "absolute", top: "160%", left: "50%", transform: "translate(-50%, -50%)", width: "clamp(1200px, 120vw, 2600px)", aspectRatio: "1/1", background: "#fdfdfd", borderRadius: "50%", boxShadow: "0 0 150px rgba(255,255,255, 0)", zIndex: 5, overflow: "hidden" }}>
         <div style={{ position: "absolute", top: "20%", left: "20%", width: "15%", height: "15%", background: "rgba(200,200,200,0.3)", borderRadius: "50%" }} />
         <div style={{ position: "absolute", top: "60%", left: "40%", width: "25%", height: "25%", background: "rgba(200,200,200,0.2)", borderRadius: "50%" }} />
         <div style={{ position: "absolute", top: "30%", left: "60%", width: "10%", height: "10%", background: "rgba(200,200,200,0.3)", borderRadius: "50%" }} />
         <div style={{ position: "absolute", top: "10%", left: "60%", width: "10%", height: "10%", background: "rgba(200,200,200,0.3)", borderRadius: "50%" }} />
         <div style={{ position: "absolute", top: "-5%", left: "30%", width: "10%", height: "10%", background: "rgba(200,200,200,0.3)", borderRadius: "50%" }} />
      </div>

      {/* STARS */}
      <div style={{ position: "absolute", top: "5%", right: "95%", width: "3px", height: "3px", background: "white", boxShadow: "0 0 15px white", borderRadius: "50%", animation: "shooting-star 6s ease-out infinite", animationDelay: "2s", zIndex: 4 }} />
      <div style={{ position: "absolute", top: "10%", left: "10%", width: "4px", height: "4px", background: "white", boxShadow: "0 0 15px white", borderRadius: "50%", animation: "shooting-star 4s ease-out infinite", animationDelay: "0s", zIndex: 4 }} />
      <div style={{ position: "absolute", top: "15%", right: "15%", width: "3px", height: "3px", background: "white", boxShadow: "0 0 15px white", borderRadius: "50%", animation: "shooting-star 6s ease-out infinite", animationDelay: "2s", zIndex: 4 }} />
      <div style={{ position: "absolute", top: "25%", right: "25%", width: "2px", height: "2px", background: "white", boxShadow: "0 0 15px white", borderRadius: "50%", animation: "shooting-star 6s ease-out infinite", animationDelay: "2s", zIndex: 4 }} />

      {/* TEXT SECTION */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", paddingBottom: "45vh", pointerEvents: "none", zIndex: 30 }}>
        <h1 className="hero-text">
          Hey, it&apos;s 
          {!isBurrowed && <span className="dev-static">Dev</span>}
          {isBurrowed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "inline-block",
                position: "relative",
                marginLeft: "-40px",
                marginBottom: "20px",
                height: "1.2em",
                width: "2.9em",
                overflow: "hidden"
              }}
            >
              <img 
                src="/dev-fox-sprite.png"
                alt="Dev Animation"
                style={{
                  display: "block",
                  height: "100%",
                  width: "800%",
                  maxWidth: "none",
                  imageRendering: "pixelated",
                  animation: "play-dev-slide 1.5s steps(8) infinite"
                }}
              />
            </motion.div>
          )}
        </h1>
      </div>

      {/* LAND SECTION */}
      <motion.div
        style={{
          position: "absolute",
          left: "11%",
          bottom: "-120vh",
          width: "clamp(600px, 80vw, 1600px)",
          aspectRatio: "5/4",
          zIndex: 20,
          animation: "float-land 6s ease-in-out infinite"
        }}
      >
        <img src="/land.png" alt="Floating Land" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "auto", filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.6))", zIndex: 5 }} />
        
        {/* === THE FLAG (Only when Burrowed) === */}
        {isBurrowed && (
          <div style={{
             position: "absolute",
             bottom: "110%", 
             left: "43%", 
             zIndex: 6,
             width: "120px", 
             height: "200px", 
             overflow: "hidden"
          }}>
             <img 
               src="/flag-sprite.png" 
               alt="Flag"
               style={{
                 display: "block",
                 height: "100%", 
                 width: "1000%", 
                 maxWidth: "none",
                 imageRendering: "pixelated",
                 animation: "play-flag-slide 1s steps(10) infinite"
               }}
             />
          </div>
        )}

        {/* === THE FOX (Only when NOT Burrowed) === */}
        {!isBurrowed && (
          <div style={{ position: "absolute", bottom: "85%", right: "34%", width: "35%", aspectRatio: "175/250", overflow: "hidden", zIndex: 7 }}>
             <img src="/fox-sprite.png" alt="Fox" style={{ display: "block", height: "100%", width: "1600%", maxWidth: "none", animation: "slide-strip-responsive 3s steps(16) infinite" }} />
          </div>
        )}

      </motion.div>

    </div>
  );
};