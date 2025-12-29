import { useEffect, useState } from "react";
import { HeroSmart } from "./components/sections/HeroSmart"; // Import the Smart Hero
import { FoxPortal } from "./components/ui/FoxPortal";
import { Header } from "./components/ui/Header";
import { AboutSmart } from "./components/sections/AboutSmart"; // Import the new component
// IMPORT THE NEW SECTIONS
import { About, Skills, Contact } from "./components/sections/AllSections";
import { Projects } from "./components/sections/Projects";


function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isBurrowed, setIsBurrowed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // --- THE MAGIC TRIGGER ---
      // If we scroll past 360px (gateCover), the screen is fully Orange.
      // That is the perfect time to swap the fox state hiddenly.
      if (currentScroll > 360) {
        setIsBurrowed(true);
      } else {
        setIsBurrowed(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- SCROLL GATES (KEPT YOUR VALUES) ---
  const gateCover = 360; // Screen fully covered (Orange)
  const gateExit = 500;  // Curtain leaves (Reveal)

  // --- WIPER ANIMATION LOGIC (KEPT YOUR LOGIC) ---
  let offset = -100;
  if (scrollY <= gateCover) {
    // Phase 1: Cover the screen
    const p = Math.max(0, Math.min(1, scrollY / gateCover));
    offset = -100 + p * 100;
  } else if (scrollY > gateCover && scrollY <= gateExit) {
    // Phase 2: Reveal the screen (with new Fox state!)
    const p = Math.max(0, Math.min(1, (scrollY - gateCover) / (gateExit - gateCover)));
    offset = p * 100;
  } else {
    // Phase 3: Animation Done
    offset = 100;
  }
  
  const svgTransform = `translate3d(-50%, -50%, 0) rotate(45deg) translateX(${offset}%)`;

  return (
    <>
      <Header />
      
      {/* =========================
          1. HERO (Sticky)
         ========================= */}
      <section
        style={{
          position: "fixed",
          inset: 0,
          // YOUR MIDNIGHT PURPLE BACKGROUND
          background: "#0b0b15",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1
        }}
      >
        {/* Pass the state to the hero */}
        <HeroSmart isBurrowed={isBurrowed} />
      </section>

      {/* =========================
          2. THE CURTAIN (KEPT YOUR SVG EXACTLY)
         ========================= */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed", top: "50%", left: "50%",
          width: "400vmax", height: "400vmax",
          transform: svgTransform,
          zIndex: 9999, pointerEvents: "none", willChange: "transform"
        }}
      >
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
          <defs>
            <filter id="softEdge" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="1" seed="9" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
            <mask id="tailMask" maskUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1000" height="1000" fill="black" />
              <path
                d="M 640 0 C 600 60 570 110 540 150 C 520 180 500 210 470 240 C 440 270 420 290 390 320 C 360 350 330 370 300 400 C 280 420 260 440 240 470 C 220 500 210 520 200 540 C 190 560 185 580 180 600 C 175 620 174 640 176 660 C 178 680 188 700 200 720 C 215 745 230 760 250 770 C 280 785 320 785 360 770 C 400 755 430 730 470 700 C 500 675 530 650 560 620 C 600 580 620 540 640 500 C 660 460 690 420 720 400 C 750 380 780 380 820 380 C 860 380 880 380 1000 380 L 1000 1000 L 0 1000 L 0 0 Z"
                fill="#ffffff"
              />
            </mask>
          </defs>
          <rect x="0" y="0" width="1000" height="1000" fill="#ff7a00" />
          <g filter="url(#softEdge)">
            <rect x="0" y="0" width="1000" height="1000" fill="#fff4ec" mask="url(#tailMask)" />
          </g>
          <path
            d="M 640 0 C 600 60 570 110 540 150 C 520 180 500 210 470 240 C 440 270 420 290 390 320 C 360 350 330 370 300 400 C 280 420 260 440 240 470 C 220 500 210 520 200 540 C 190 560 185 580 180 600 C 175 620 174 640 176 660 C 178 680 188 700 200 720 C 215 745 230 760 250 770 C 280 785 320 785 360 770 C 400 755 430 730 470 700 C 500 675 530 650 560 620 C 600 580 620 540 640 500 C 660 460 690 420 720 400 C 750 380 780 380 820 380 C 860 380 880 380 1000 380"
            fill="none" stroke="#fff4ec" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" opacity="0.95"
          />
        </svg>
      </div>

      {/* =========================
          3. SPACER FOR CONTENT
         ========================= */}
      <div style={{ position: "relative", zIndex: 10 }}>
        
        {/* Spacer (KEPT YOUR 1500px) to allow the transition to finish */}
        <div style={{ height: "1500px", pointerEvents: "none" }} />

        {/* REAL CONTENT STARTS HERE (Replaced placeholder with real sections) */}
        <div style={{ background: "#0b0b15", position: "relative", zIndex: 20 }}>
          <AboutSmart />
          <Projects />
          <Skills />
          <Contact />
        </div>

      </div>
    </>
  );
}

export default App;